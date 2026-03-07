import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// GET /api/posts - Get all posts
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get("status");
        const search = searchParams.get("search");

        const where: any = status ? { status } : {};
        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { titleEn: { contains: search, mode: 'insensitive' } },
                { content: { contains: search, mode: 'insensitive' } },
                { contentEn: { contains: search, mode: 'insensitive' } }
            ];
        }

        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "100"); // Default high limit for backward compatibility if not specified
        const skip = (page - 1) * limit;

        const posts = await prisma.post.findMany({
            where,
            orderBy: { createdAt: "desc" },
            take: limit,
            skip: skip,
        });
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch posts" },
            { status: 500 }
        );
    }
}

// POST /api/posts - Create a new post
export async function POST(request: Request) {
    const session = await getServerSession(authOptions);

    // Basic auth check
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { title, titleEn, slug, content, contentEn, image, category, author, status } = body;

        const post = await prisma.post.create({
            data: {
                title,
                titleEn,
                slug,
                content,
                contentEn,
                image,
                category,
                author,
                status: status || "published",
            },
        });

        return NextResponse.json(post);
    } catch (error) {
        console.error("Error creating post:", error);
        return NextResponse.json(
            { error: "Failed to create post" },
            { status: 500 }
        );
    }
}
