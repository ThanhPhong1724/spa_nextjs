import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// Force dynamic rendering - no caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// GET /api/page-content?pageKey=home
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const pageKey = searchParams.get("pageKey");

        const where = pageKey ? { pageKey } : {};

        const contents = await prisma.pageContent.findMany({
            where,
        });

        // Convert array to a keyed object for easier frontend consumption
        // Result: { "hero": { videoUrl: "...", titleDe: "..." }, "contact_info": { ... } }
        const contentMap: Record<string, any> = {};

        contents.forEach((item) => {
            try {
                contentMap[item.sectionKey] = JSON.parse(item.content);
            } catch (e) {
                console.error(`Failed to parse content for ${item.pageKey}.${item.sectionKey}`, e);
                contentMap[item.sectionKey] = {};
            }
        });

        const response = NextResponse.json(contentMap);
        // Add cache control headers to prevent caching
        response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
        return response;
    } catch (error) {
        console.error("Error fetching page content:", error);
        return NextResponse.json(
            { error: "Failed to fetch page content" },
            { status: 500 }
        );
    }
}

// POST /api/page-content
// Body: { pageKey, sectionKey, content: { ... } }
export async function POST(request: Request) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { pageKey, sectionKey, content } = body;

        if (!pageKey || !sectionKey || !content) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const updatedContent = await prisma.pageContent.upsert({
            where: {
                pageKey_sectionKey: {
                    pageKey,
                    sectionKey,
                },
            },
            update: {
                content: JSON.stringify(content),
            },
            create: {
                pageKey,
                sectionKey,
                content: JSON.stringify(content),
            },
        });

        return NextResponse.json(updatedContent);
    } catch (error) {
        console.error("Error updating page content:", error);
        return NextResponse.json(
            { error: "Failed to update page content" },
            { status: 500 }
        );
    }
}
