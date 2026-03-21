// PUT /api/appointments/[id] — reschedule or cancel
// DELETE /api/appointments/[id] — delete
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { sendStudioEmail, buildBookingEmail } from "@/lib/sendEmail";

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    const body = await request.json();
    const { status, date, timeSlot } = body;

    const existing = await prisma.appointment.findUnique({ where: { id: parseInt(id) } });
    if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

    const updated = await prisma.appointment.update({
        where: { id: parseInt(id) },
        data: {
            ...(status && { status }),
            ...(date && { date }),
            ...(timeSlot && { timeSlot }),
        },
    });

    // Send email
    if (status === "cancelled") {
        const html = buildBookingEmail(updated, "Termin abgesagt");
        await sendStudioEmail({ subject: `❌ Termin abgesagt: ${updated.name} – ${updated.date} ${updated.timeSlot}`, html });
    } else if (date || timeSlot) {
        const html = buildBookingEmail(updated, "Termin geändert");
        await sendStudioEmail({ subject: `🔄 Termin geändert: ${updated.name} – ${updated.date} ${updated.timeSlot}`, html });
    }

    return NextResponse.json(updated);
}

export async function DELETE(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    await prisma.appointment.delete({ where: { id: parseInt(id) } });
    return NextResponse.json({ success: true });
}
