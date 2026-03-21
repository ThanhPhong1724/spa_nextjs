// POST /api/appointments — Create new appointment
// GET  /api/appointments — List all (admin)
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { sendStudioEmail, buildBookingEmail } from "@/lib/sendEmail";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, email, services, totalMins, date, timeSlot, remarkNote } = body;

        if (!name || !phone || !email || !services || !date || !timeSlot) {
            return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
        }

        const appointment = await prisma.appointment.create({
            data: {
                name,
                phone,
                email,
                services: typeof services === "string" ? services : JSON.stringify(services),
                totalMins: parseInt(totalMins, 10),
                date,
                timeSlot,
                remarkNote: remarkNote || null,
                status: "confirmed",
                isManual: false,
            },
        });

        // Send email notification to studio + customer
        const html = buildBookingEmail(appointment, "Neue Buchung");
        await sendStudioEmail({
            subject: `📅 Neue Buchung: ${name} – ${date} ${timeSlot}`,
            html,
            toEmail: email,
            toName: name,
        });

        return NextResponse.json({ success: true, appointment }, { status: 201 });
    } catch (error) {
        console.error("Appointment create error:", error);
        return NextResponse.json({ error: "Fehler beim Speichern" }, { status: 500 });
    }
}

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const appointments = await prisma.appointment.findMany({
        orderBy: [{ date: "asc" }, { timeSlot: "asc" }],
    });

    return NextResponse.json(appointments);
}
