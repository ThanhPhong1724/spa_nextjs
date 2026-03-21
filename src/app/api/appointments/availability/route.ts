// GET /api/appointments/availability?date=2025-03-20&totalMins=60&categories=Nails,Headspa
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { BUSINESS_HOURS, HIGH_CAPACITY_CATEGORIES, generateTimeSlots } from "@/lib/services";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date"); // "2025-03-20"
    const totalMinsParam = searchParams.get("totalMins") || "60";
    const categoriesParam = searchParams.get("categories") || "";

    if (!date) {
        return NextResponse.json({ error: "date required" }, { status: 400 });
    }

    const dateObj = new Date(date);
    const dayOfWeek = dateObj.getDay(); // 0=Sun, 6=Sat
    const hours = BUSINESS_HOURS[dayOfWeek];

    if (!hours) {
        return NextResponse.json({ slots: [] }); // closed
    }

    const allSlots = generateTimeSlots(hours.open, hours.close);
    const totalMins = parseInt(totalMinsParam, 10);
    const selectedCategories = categoriesParam ? categoriesParam.split(",") : [];

    // Determine if booking is high-capacity (all selected cats are high-capacity)
    const isHighCapacity = selectedCategories.length > 0 &&
        selectedCategories.every((cat) => HIGH_CAPACITY_CATEGORIES.includes(cat));
    const maxCapacity = isHighCapacity ? 2 : 1;

    // Fetch existing confirmed appointments for this date
    const appointments = await prisma.appointment.findMany({
        where: { date, status: { not: "cancelled" } },
        select: { timeSlot: true, totalMins: true, services: true },
    });

    // Fetch blocked slots for this date
    const blocked = await prisma.blockedSlot.findMany({
        where: { date },
        select: { timeSlot: true },
    });
    const blockedSet = new Set(blocked.map((b) => b.timeSlot));

    // Build a map: slot -> bookings count that overlap with it
    const slotBookingCount: Record<string, number> = {};
    for (const apt of appointments) {
        const [h, m] = apt.timeSlot.split(":").map(Number);
        const startMin = h * 60 + m;
        const endMin = startMin + apt.totalMins;
        // Mark all 15-min blocks this appointment occupies
        for (let t = startMin; t < endMin; t += 15) {
            const key = `${Math.floor(t / 60).toString().padStart(2, "0")}:${(t % 60).toString().padStart(2, "0")}`;
            slotBookingCount[key] = (slotBookingCount[key] || 0) + 1;
        }
    }

    // Filter valid slots: must fit within business hours AND have available capacity
    const availableSlots = allSlots.filter((slot) => {
        if (blockedSet.has(slot)) return false;

        const [h, m] = slot.split(":").map(Number);
        const startMin = h * 60 + m;
        const endMin = startMin + totalMins;

        // Ensure appointment ends before closing
        const [closeH, closeM] = hours.close.split(":").map(Number);
        const closeMins = closeH * 60 + closeM;
        if (endMin > closeMins) return false;

        // Check capacity for all blocks this appointment would occupy
        for (let t = startMin; t < endMin; t += 15) {
            const key = `${Math.floor(t / 60).toString().padStart(2, "0")}:${(t % 60).toString().padStart(2, "0")}`;
            if ((slotBookingCount[key] || 0) >= maxCapacity) return false;
        }

        return true;
    });

    return NextResponse.json({ slots: availableSlots, date, dayOfWeek });
}
