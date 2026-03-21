"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { BOOKABLE_SERVICES, HIGH_CAPACITY_CATEGORIES } from "@/lib/services";

// Group services by category
const SERVICE_CATEGORIES = Array.from(new Set(BOOKABLE_SERVICES.map((s) => s.category)));

interface SelectedService {
    name: string;
    duration: number;
    price: number | string;
    category: string;
}

interface PersonalInfo {
    name: string;
    phone: string;
    email: string;
}

// German weekday names
const WEEKDAYS = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

function formatDate(d: Date) {
    return d.toISOString().split("T")[0];
}

function getNext30Days(): Date[] {
    const days: Date[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    for (let i = 0; i < 30; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        if (d.getDay() !== 0) days.push(d); // exclude Sunday
    }
    return days;
}

export default function BuchungClient() {
    const [step, setStep] = useState(1);
    const [personal, setPersonal] = useState<PersonalInfo>({ name: "", phone: "", email: "" });
    const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
    const [remark, setRemark] = useState("");
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [selectedSlot, setSelectedSlot] = useState<string>("");
    const [availableSlots, setAvailableSlots] = useState<string[]>([]);
    const [loadingSlots, setLoadingSlots] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [bookingDone, setBookingDone] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const totalMins = selectedServices.reduce((sum, s) => sum + s.duration, 0);
    const totalPrice = selectedServices.reduce((sum, s) => sum + (typeof s.price === "number" ? s.price : 0), 0);
    const selectedCategories = [...new Set(selectedServices.map((s) => s.category))];

    // Toggle service selection
    const toggleService = (svc: typeof BOOKABLE_SERVICES[0]) => {
        setSelectedServices((prev) => {
            const exists = prev.find((s) => s.name === svc.name);
            if (exists) return prev.filter((s) => s.name !== svc.name);
            return [...prev, { name: svc.name, duration: svc.duration, price: svc.price, category: svc.category }];
        });
        setSelectedDate("");
        setSelectedSlot("");
        setAvailableSlots([]);
    };

    // Fetch available slots when date selected
    const fetchSlots = async (date: string) => {
        setSelectedDate(date);
        setSelectedSlot("");
        setLoadingSlots(true);
        try {
            const cats = selectedCategories.join(",");
            const res = await fetch(`/api/appointments/availability?date=${date}&totalMins=${totalMins}&categories=${cats}`);
            const data = await res.json();
            setAvailableSlots(data.slots || []);
        } catch {
            setAvailableSlots([]);
        } finally {
            setLoadingSlots(false);
        }
    };

    // Validate step 1
    const validateStep1 = () => {
        const errs: Record<string, string> = {};
        if (!personal.name.trim()) errs.name = "Name ist erforderlich";
        if (!personal.phone.trim()) errs.phone = "Telefonnummer ist erforderlich";
        if (!personal.email.trim() || !personal.email.includes("@")) errs.email = "Gültige E-Mail erforderlich";
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = async () => {
        if (!accepted) { setErrors({ accepted: "Bitte akzeptieren Sie die Bedingungen" }); return; }
        setSubmitting(true);
        try {
            const res = await fetch("/api/appointments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: personal.name,
                    phone: personal.phone,
                    email: personal.email,
                    services: JSON.stringify(selectedServices),
                    totalMins,
                    date: selectedDate,
                    timeSlot: selectedSlot,
                    remarkNote: remark,
                }),
            });
            if (res.ok) setBookingDone(true);
            else setErrors({ submit: "Fehler beim Buchen. Bitte versuchen Sie es erneut." });
        } catch {
            setErrors({ submit: "Netzwerkfehler. Bitte versuchen Sie es erneut." });
        } finally {
            setSubmitting(false);
        }
    };

    const days30 = useMemo(() => getNext30Days(), []);

    if (bookingDone) {
        return (
            <div className="min-h-screen bg-[#f5ebe0] flex items-center justify-center px-4 py-20">
                <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-10 text-center">
                    <div className="text-6xl mb-4">🎉</div>
                    <h1 className="text-2xl font-bold text-[#5c4033] mb-3">Vielen Dank für Ihre Buchung!</h1>
                    <p className="text-[#888] mb-6">
                        Wir haben Ihre Buchung erhalten und freuen uns auf Ihren Besuch.<br />
                        Sollten Sie den Termin verschieben oder absagen müssen, kontaktieren Sie uns bitte so früh wie möglich.
                    </p>
                    <p className="font-semibold text-[#5c4033] mb-2">📅 {selectedDate} um {selectedSlot} Uhr</p>
                    <p className="text-[#888] mb-8">Wir freuen uns auf Sie!</p>

                    <a
                        href="https://wa.me/491638562022"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-green-600 transition-colors mb-4"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp kontaktieren
                    </a>

                    <div className="mt-4">
                        <Link href="/" className="text-sm text-[#ff8b69] hover:underline">Zurück zur Startseite</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f5ebe0]">
            {/* Hero */}
            <div className="bg-gradient-to-br from-[#5c4033] to-[#8b6355] pt-32 pb-14 text-center px-4">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Buchen Sie Ihren Wohlfühlmoment</h1>
                <p className="text-white/70 text-sm md:text-base">Schnell, einfach und jederzeit verfügbar. Wir freuen uns auf Ihren Besuch!</p>
            </div>

            {/* Step Indicator */}
            <div className="bg-white shadow-sm sticky top-20 z-30">
                <div className="max-w-3xl mx-auto px-4 py-3">
                    <div className="flex items-center gap-1 justify-center">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <div key={s} className="flex items-center gap-1">
                                <button
                                    onClick={() => step > s && setStep(s)}
                                    className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${
                                        step === s ? "bg-[#ff8b69] text-white scale-110" :
                                        step > s ? "bg-[#d4a373] text-white cursor-pointer hover:bg-[#c49060]" :
                                        "bg-[#f0e6da] text-[#bbb]"
                                    }`}
                                >
                                    {s}
                                </button>
                                {s < 5 && <div className={`w-6 md:w-10 h-0.5 ${step > s ? "bg-[#d4a373]" : "bg-[#e8d5c4]"}`} />}
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xs text-[#aaa] mt-1">
                        {["Angaben", "Leistungen", "Bemerkung", "Termin", "Bestätigung"][step - 1]}
                    </p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 py-10">

                {/* STEP 1: Personal Info */}
                {step === 1 && (
                    <div className="bg-white rounded-3xl shadow-sm p-8 space-y-5">
                        <h2 className="text-xl font-bold text-[#5c4033] flex items-center gap-2">
                            <span className="w-7 h-7 rounded-full bg-[#ff8b69] text-white text-sm flex items-center justify-center">1</span>
                            Persönliche Informationen
                        </h2>
                        <p className="text-sm text-[#888]">Bitte füllen Sie die folgenden Felder aus:</p>

                        {[
                            { key: "name", label: "Name", type: "text", placeholder: "Ihr vollständiger Name" },
                            { key: "phone", label: "Telefonnummer", type: "tel", placeholder: "+49 ..." },
                            { key: "email", label: "E-Mail-Adresse", type: "email", placeholder: "ihre@email.de" },
                        ].map(({ key, label, type, placeholder }) => (
                            <div key={key}>
                                <label className="block text-sm font-semibold text-[#5c4033] mb-1">{label} <span className="text-[#ff8b69]">*</span></label>
                                <input
                                    type={type}
                                    value={personal[key as keyof PersonalInfo]}
                                    onChange={(e) => setPersonal((p) => ({ ...p, [key]: e.target.value }))}
                                    placeholder={placeholder}
                                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-colors ${
                                        errors[key] ? "border-red-400 bg-red-50" : "border-[#e8d5c4] focus:border-[#ff8b69]"
                                    }`}
                                />
                                {errors[key] && <p className="text-red-500 text-xs mt-1">{errors[key]}</p>}
                            </div>
                        ))}

                        <button
                            onClick={() => { if (validateStep1()) setStep(2); }}
                            className="w-full bg-[#ff8b69] text-white py-3.5 rounded-xl font-bold text-base hover:bg-[#e07050] transition-colors mt-2"
                        >
                            Weiter →
                        </button>
                    </div>
                )}

                {/* STEP 2: Services */}
                {step === 2 && (
                    <div className="space-y-4">
                        <div className="bg-white rounded-3xl shadow-sm p-8">
                            <h2 className="text-xl font-bold text-[#5c4033] flex items-center gap-2 mb-1">
                                <span className="w-7 h-7 rounded-full bg-[#ff8b69] text-white text-sm flex items-center justify-center">2</span>
                                Dienstleistungen auswählen
                            </h2>
                            <p className="text-sm text-[#888] mb-6">Bitte wählen Sie eine oder mehrere Behandlungen aus. (Mehrere Optionen können ausgewählt werden)</p>

                            {SERVICE_CATEGORIES.map((cat) => (
                                <div key={cat} className="mb-6">
                                    <h3 className="text-xs font-bold text-[#d4a373] uppercase tracking-widest mb-3 border-b border-[#f0e6da] pb-1">{cat}</h3>
                                    <div className="grid gap-2">
                                        {BOOKABLE_SERVICES.filter((s) => s.category === cat).map((svc) => {
                                            const isSelected = selectedServices.some((s) => s.name === svc.name);
                                            return (
                                                <button
                                                    key={svc.name}
                                                    type="button"
                                                    onClick={() => toggleService(svc)}
                                                    className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left ${
                                                        isSelected
                                                            ? "border-[#ff8b69] bg-[#fff5f0]"
                                                            : "border-[#e8d5c4] hover:border-[#d4a373] bg-white"
                                                    }`}
                                                >
                                                    <div className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border-2 transition-colors ${
                                                        isSelected ? "bg-[#ff8b69] border-[#ff8b69]" : "border-[#ccc]"
                                                    }`}>
                                                        {isSelected && <span className="material-symbols-outlined text-white text-xs">check</span>}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <span className="font-semibold text-sm text-[#5c4033]">{svc.name}</span>
                                                        <span className="text-xs text-[#aaa] ml-2">{svc.duration} Min.</span>
                                                    </div>
                                                    <span className="font-bold text-[#d4a373] text-sm flex-shrink-0">
                                                        {typeof svc.price === "number" ? `${svc.price} €` : svc.price}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary bar */}
                        {selectedServices.length > 0 && (
                            <div className="bg-[#5c4033] text-white rounded-2xl p-4 flex items-center justify-between">
                                <div>
                                    <p className="font-bold">{selectedServices.length} Leistung(en) gewählt</p>
                                    <p className="text-white/70 text-sm">Gesamtdauer: {totalMins} Min. · {totalPrice} €</p>
                                </div>
                                <button
                                    onClick={() => setStep(3)}
                                    className="bg-[#ff8b69] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#e07050] transition-colors"
                                >
                                    Weiter →
                                </button>
                            </div>
                        )}

                        <button onClick={() => setStep(1)} className="text-sm text-[#aaa] hover:text-[#5c4033]">← Zurück</button>
                    </div>
                )}

                {/* STEP 3: Remark */}
                {step === 3 && (
                    <div className="bg-white rounded-3xl shadow-sm p-8 space-y-5">
                        <h2 className="text-xl font-bold text-[#5c4033] flex items-center gap-2">
                            <span className="w-7 h-7 rounded-full bg-[#ff8b69] text-white text-sm flex items-center justify-center">3</span>
                            Bemerkung (optional)
                        </h2>
                        <p className="text-sm text-[#888]">Bevorzugte Mitarbeiterin / Mitarbeiter oder besondere Wünsche.</p>
                        <textarea
                            rows={4}
                            value={remark}
                            onChange={(e) => setRemark(e.target.value)}
                            placeholder="z.B. Ich möchte lieber mit Frau Van Hoang arbeiten..."
                            className="w-full px-4 py-3 rounded-xl border border-[#e8d5c4] focus:border-[#ff8b69] outline-none resize-none"
                        />
                        <div className="flex gap-3 mt-4">
                            <button onClick={() => setStep(2)} className="flex-1 py-3 rounded-xl border border-[#e8d5c4] text-[#888] font-semibold hover:bg-[#faf4ef] transition-colors">← Zurück</button>
                            <button onClick={() => setStep(4)} className="flex-1 bg-[#ff8b69] text-white py-3 rounded-xl font-bold hover:bg-[#e07050] transition-colors">Weiter →</button>
                        </div>
                    </div>
                )}

                {/* STEP 4: Date & Time */}
                {step === 4 && (
                    <div className="bg-white rounded-3xl shadow-sm p-8 space-y-6">
                        <h2 className="text-xl font-bold text-[#5c4033] flex items-center gap-2">
                            <span className="w-7 h-7 rounded-full bg-[#ff8b69] text-white text-sm flex items-center justify-center">4</span>
                            Termin auswählen
                        </h2>

                        {/* Date picker */}
                        <div>
                            <p className="text-sm font-semibold text-[#5c4033] mb-3">Datum wählen:</p>
                            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-2">
                                {days30.map((d) => {
                                    const ds = formatDate(d);
                                    const wd = d.getDay();
                                    const isSat = wd === 6;
                                    return (
                                        <button
                                            key={ds}
                                            onClick={() => fetchSlots(ds)}
                                            className={`flex flex-col items-center py-2 px-1 rounded-xl border-2 text-xs transition-all ${
                                                selectedDate === ds
                                                    ? "border-[#ff8b69] bg-[#fff5f0] text-[#ff8b69] font-bold"
                                                    : "border-[#e8d5c4] hover:border-[#d4a373] text-[#5c4033]"
                                            }`}
                                        >
                                            <span className="text-[10px] text-[#aaa]">{WEEKDAYS[wd]}</span>
                                            <span className="font-bold text-sm">{d.getDate()}</span>
                                            <span className="text-[10px] text-[#aaa]">{(d.getMonth() + 1).toString().padStart(2, "0")}</span>
                                            {isSat && <span className="text-[9px] text-orange-400 mt-0.5">Sa.</span>}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Slots */}
                        {selectedDate && (
                            <div>
                                <p className="text-sm font-semibold text-[#5c4033] mb-3">
                                    Verfügbare Uhrzeiten für {selectedDate}:
                                </p>
                                {loadingSlots ? (
                                    <div className="text-center py-8 text-[#aaa]">
                                        <div className="w-6 h-6 border-2 border-[#ff8b69] border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                                        Lade verfügbare Termine...
                                    </div>
                                ) : availableSlots.length === 0 ? (
                                    <p className="text-center py-6 text-[#aaa]">Keine freien Termine an diesem Tag. Bitte wählen Sie einen anderen Tag.</p>
                                ) : (
                                    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
                                        {availableSlots.map((slot) => (
                                            <button
                                                key={slot}
                                                onClick={() => setSelectedSlot(slot)}
                                                className={`py-2 px-1 rounded-xl border-2 text-sm font-semibold transition-all ${
                                                    selectedSlot === slot
                                                        ? "border-[#ff8b69] bg-[#ff8b69] text-white"
                                                        : "border-[#e8d5c4] hover:border-[#d4a373] text-[#5c4033]"
                                                }`}
                                            >
                                                {slot}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="flex gap-3 pt-2">
                            <button onClick={() => setStep(3)} className="flex-1 py-3 rounded-xl border border-[#e8d5c4] text-[#888] font-semibold hover:bg-[#faf4ef] transition-colors">← Zurück</button>
                            <button
                                onClick={() => { if (selectedDate && selectedSlot) setStep(5); }}
                                disabled={!selectedDate || !selectedSlot}
                                className={`flex-1 py-3 rounded-xl font-bold transition-colors ${
                                    selectedDate && selectedSlot
                                        ? "bg-[#ff8b69] text-white hover:bg-[#e07050]"
                                        : "bg-[#f0e6da] text-[#bbb] cursor-not-allowed"
                                }`}
                            >
                                Weiter →
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 5: Summary & Confirm */}
                {step === 5 && (
                    <div className="space-y-4">
                        <div className="bg-white rounded-3xl shadow-sm p-8 space-y-4">
                            <h2 className="text-xl font-bold text-[#5c4033] flex items-center gap-2">
                                <span className="w-7 h-7 rounded-full bg-[#ff8b69] text-white text-sm flex items-center justify-center">5</span>
                                Zusammenfassung &amp; Bestätigung
                            </h2>
                            <p className="text-sm text-[#888]">Bitte überprüfen Sie Ihre Angaben:</p>

                            {/* Personal info */}
                            <div className="bg-[#faf4ef] rounded-2xl p-4 space-y-1 text-sm">
                                <p><span className="font-semibold text-[#5c4033]">Name:</span> {personal.name}</p>
                                <p><span className="font-semibold text-[#5c4033]">Telefon:</span> {personal.phone}</p>
                                <p><span className="font-semibold text-[#5c4033]">E-Mail:</span> {personal.email}</p>
                            </div>

                            {/* Services */}
                            <div>
                                <p className="font-semibold text-[#5c4033] mb-2 text-sm">Gewählte Dienstleistungen:</p>
                                <div className="space-y-1">
                                    {selectedServices.map((s) => (
                                        <div key={s.name} className="flex justify-between text-sm bg-[#f5ebe0] px-3 py-2 rounded-lg">
                                            <span className="text-[#5c4033]">{s.name} – {s.duration} Min.</span>
                                            <span className="font-bold text-[#d4a373]">{typeof s.price === "number" ? `${s.price} €` : s.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Duration & slot */}
                            <div className="bg-[#5c4033] text-white rounded-2xl p-4 space-y-1 text-sm">
                                <p><span className="text-white/70">Gesamtdauer:</span> <strong>{totalMins} Minuten</strong></p>
                                <p><span className="text-white/70">Termin:</span> <strong>{selectedDate} – {selectedSlot} Uhr</strong></p>
                                {remark && <p><span className="text-white/70">Bemerkung:</span> {remark}</p>}
                            </div>

                            {/* Privacy checkbox */}
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={accepted}
                                    onChange={(e) => setAccepted(e.target.checked)}
                                    className="mt-0.5 w-4 h-4 accent-[#ff8b69]"
                                />
                                <span className="text-sm text-[#666]">
                                    Ich akzeptiere die <Link href="/datenschutz" className="text-[#ff8b69] underline">Datenschutzbestimmungen</Link> und die Stornierungsbedingungen.
                                </span>
                            </label>
                            {errors.accepted && <p className="text-red-500 text-xs">{errors.accepted}</p>}
                        </div>

                        {/* Sticker */}
                        <div className="flex justify-center">
                            <Link
                                href="/angebote"
                                className="inline-flex flex-col items-center gap-1 bg-gradient-to-r from-[#ff8b69] to-[#d4a373] text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg animate-bounce hover:animate-none hover:scale-105 transition-transform"
                            >
                                <span className="text-xs font-bold tracking-widest">🔥 AKTION</span>
                                <span>nicht verpassen!</span>
                            </Link>
                        </div>

                        {errors.submit && <p className="text-red-500 text-sm text-center">{errors.submit}</p>}

                        <div className="flex gap-3">
                            <button onClick={() => setStep(4)} className="flex-1 py-3.5 rounded-xl border border-[#e8d5c4] text-[#888] font-semibold hover:bg-[#faf4ef] transition-colors">← Zurück</button>
                            <button
                                onClick={handleSubmit}
                                disabled={submitting}
                                className="flex-1 bg-[#5c4033] text-white py-3.5 rounded-xl font-bold text-base hover:bg-[#4a3028] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {submitting ? (
                                    <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Wird gebucht...</>
                                ) : (
                                    <>🗓️ JETZT BUCHEN</>
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
