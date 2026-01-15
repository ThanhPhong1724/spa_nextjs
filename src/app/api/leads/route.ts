import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, name, email, phone, details } = body;

        // Basic validation
        if (!type || !name || !email) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const lead = await prisma.lead.create({
            data: {
                type,
                name,
                email,
                phone,
                details: details ? JSON.stringify(details) : undefined,
            },
        });

        return NextResponse.json({ success: true, lead });
    } catch (error) {
        console.error("Error creating lead:", error);
        return NextResponse.json(
            { error: "Failed to submit request" },
            { status: 500 }
        );
    }
}

export async function GET() {
    // TODO: Add authentication check here later
    try {
        const leads = await prisma.lead.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(leads);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch leads" },
            { status: 500 }
        );
    }
}
