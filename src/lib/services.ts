// src/lib/services.ts — All bookable services with durations

export const BOOKABLE_SERVICES = [
    // NAILS
    { category: "Nails", name: "Neumodellage", price: 45, duration: 60 },
    { category: "Nails", name: "Auffüllen", price: 35, duration: 60 },
    { category: "Nails", name: "Naturverstärkung", price: 30, duration: 60 },
    { category: "Nails", name: "Schellack", price: 30, duration: 30 },
    { category: "Nails", name: "Design", price: 1, duration: 15 },
    { category: "Nails", name: "Entfernen", price: 12, duration: 20 },
    { category: "Nails", name: "Maniküre", price: 15, duration: 20 },
    { category: "Nails", name: "Maniküre m. Lack", price: 18, duration: 20 },
    // PEDIKÜRE
    { category: "Pediküre", name: "Pediküre", price: 30, duration: 45 },
    { category: "Pediküre", name: "Pediküre m. Gelfüsse", price: 45, duration: 60 },
    { category: "Pediküre", name: "Gel-Füsse", price: 30, duration: 45 },
    // HEADSPA
    { category: "Headspa", name: "Headspa Essential (60 Min.)", price: 65, duration: 60 },
    { category: "Headspa", name: "Headspa Deluxe (90 Min.)", price: 89, duration: 90 },
    { category: "Headspa", name: "Signature Asia Head Calm (30 Min.)", price: 25, duration: 30 },
    // WIMPERN
    { category: "Wimpern", name: "Neuset Verlängerung", price: 79, duration: 120 },
    { category: "Wimpern", name: "Auffüllen Verlängerung", price: 45, duration: 60 },
    { category: "Wimpern", name: "Wellen", price: 30, duration: 60 },
    // AUGENBRAUEN
    { category: "Augenbrauen", name: "Zupfen", price: 10, duration: 20 },
    { category: "Augenbrauen", name: "Färben", price: 15, duration: 20 },
    { category: "Augenbrauen", name: "Laminieren", price: 30, duration: 45 },
    // PERMANENT MAKE UP
    { category: "Permanent Make Up", name: "PMU – Augenbrauen", price: 220, duration: 180 },
    { category: "Permanent Make Up", name: "PMU – Lippen", price: 270, duration: 180 },
    { category: "Permanent Make Up", name: "PMU – Eyeliner", price: 150, duration: 120 },
    // INNOVATIVE TREATMENTS & SKINCARE
    { category: "Treatments & Skincare", name: "Oxygen Scalp Detox", price: 75, duration: 60 },
    { category: "Treatments & Skincare", name: "Aquafacial Balance", price: 79, duration: 60 },
    { category: "Treatments & Skincare", name: "Botox Maske", price: 55, duration: 30 },
    { category: "Treatments & Skincare", name: "Haut-/Kopfhautanalyse", price: 30, duration: 30 },
];

// Categories that allow 2 concurrent bookings per slot
export const HIGH_CAPACITY_CATEGORIES = ["Nails", "Pediküre", "Headspa"];

// Business hours
export const BUSINESS_HOURS: Record<number, { open: string; close: string } | null> = {
    0: null,                              // Sunday: closed
    1: { open: "09:00", close: "19:00" }, // Monday
    2: { open: "09:00", close: "19:00" }, // Tuesday
    3: { open: "09:00", close: "19:00" }, // Wednesday
    4: { open: "09:00", close: "19:00" }, // Thursday
    5: { open: "09:00", close: "19:00" }, // Friday
    6: { open: "10:00", close: "16:00" }, // Saturday
};

export function generateTimeSlots(open: string, close: string): string[] {
    const slots: string[] = [];
    const [openH, openM] = open.split(":").map(Number);
    const [closeH, closeM] = close.split(":").map(Number);
    let totalMins = openH * 60 + openM;
    const endMins = closeH * 60 + closeM;
    while (totalMins < endMins) {
        const h = Math.floor(totalMins / 60).toString().padStart(2, "0");
        const m = (totalMins % 60).toString().padStart(2, "0");
        slots.push(`${h}:${m}`);
        totalMins += 15;
    }
    return slots;
}
