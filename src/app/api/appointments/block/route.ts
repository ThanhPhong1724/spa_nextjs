// POST /api/appointments/block — Admin: block a time slot
// GET  /api/appointments/block — list all blocked slots
// DELETE /api/appointments/block?id=X — unblock
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const blocks = await prisma.blockedSlot.findMany({ orderBy: [{ date: "asc" }, { timeSlot: "asc" }] });
    return NextResponse.json(blocks);
}

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { date, timeSlot, reason } = await request.json();
    if (!date || !timeSlot) return NextResponse.json({ error: "date and timeSlot required" }, { status: 400 });

    const block = await prisma.blockedSlot.create({ data: { date, timeSlot, reason: reason || null } });
    return NextResponse.json(block, { status: 201 });
}

export async function DELETE(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

    await prisma.blockedSlot.delete({ where: { id: parseInt(id) } });
    return NextResponse.json({ success: true });
}
