"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { BOOKABLE_SERVICES, BUSINESS_HOURS, generateTimeSlots } from "@/lib/services";
import Link from "next/link";

interface Appointment {
    id: number;
    name: string;
    phone: string;
    email: string;
    services: string;
    totalMins: number;
    date: string;
    timeSlot: string;
    remarkNote?: string;
    status: string;
    isManual: boolean;
    createdAt: string;
}

interface BlockedSlot {
    id: number;
    date: string;
    timeSlot: string;
    reason?: string;
}

const STATUS_COLORS: Record<string, string> = {
    confirmed: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
    rescheduled: "bg-yellow-100 text-yellow-700",
};

export default function AdminAppointmentsPage() {
    const router = useRouter();
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [blocked, setBlocked] = useState<BlockedSlot[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<"list" | "block" | "new">("list");
    const [filterStatus, setFilterStatus] = useState("all");
    const [filterDate, setFilterDate] = useState("");

    // New appointment form
    const [newApt, setNewApt] = useState({
        name: "", phone: "", email: "",
        services: [] as string[], date: "", timeSlot: "", remarkNote: "",
    });

    // Block form
    const [blockForm, setBlockForm] = useState({ date: "", timeSlot: "", reason: "" });
    const [blockSlots, setBlockSlots] = useState<string[]>([]);

    // Reschedule modal
    const [rescheduleId, setRescheduleId] = useState<number | null>(null);
    const [rescheduleData, setRescheduleData] = useState({ date: "", timeSlot: "" });

    const fetchData = async () => {
        setLoading(true);
        const [aptRes, blockRes] = await Promise.all([
            fetch("/api/appointments"),
            fetch("/api/appointments/block"),
        ]);
        if (aptRes.ok) setAppointments(await aptRes.json());
        if (blockRes.ok) setBlocked(await blockRes.json());
        setLoading(false);
    };

    useEffect(() => { fetchData(); }, []);

    // Update available slots when block date changes
    useEffect(() => {
        if (!blockForm.date) { setBlockSlots([]); return; }
        const d = new Date(blockForm.date);
        const hours = BUSINESS_HOURS[d.getDay()];
        setBlockSlots(hours ? generateTimeSlots(hours.open, hours.close) : []);
    }, [blockForm.date]);

    const filteredApts = useMemo(() => {
        return appointments.filter((a) => {
            if (filterStatus !== "all" && a.status !== filterStatus) return false;
            if (filterDate && a.date !== filterDate) return false;
            return true;
        });
    }, [appointments, filterStatus, filterDate]);

    const cancelAppointment = async (id: number) => {
        if (!confirm("Termin wirklich absagen?")) return;
        await fetch(`/api/appointments/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: "cancelled" }),
        });
        fetchData();
    };

    const saveReschedule = async () => {
        if (!rescheduleId) return;
        await fetch(`/api/appointments/${rescheduleId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...rescheduleData, status: "rescheduled" }),
        });
        setRescheduleId(null);
        fetchData();
    };

    const blockSlot = async () => {
        if (!blockForm.date || !blockForm.timeSlot) return;
        await fetch("/api/appointments/block", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blockForm),
        });
        setBlockForm({ date: "", timeSlot: "", reason: "" });
        fetchData();
    };

    const unblockSlot = async (id: number) => {
        await fetch(`/api/appointments/block?id=${id}`, { method: "DELETE" });
        fetchData();
    };

    const createManualApt = async () => {
        if (!newApt.name || !newApt.date || !newApt.timeSlot) {
            alert("Name, Datum und Uhrzeit sind erforderlich.");
            return;
        }
        const serviceObjs = BOOKABLE_SERVICES.filter((s) => newApt.services.includes(s.name));
        const totalMins = serviceObjs.reduce((sum, s) => sum + s.duration, 0);
        await fetch("/api/appointments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...newApt,
                services: JSON.stringify(serviceObjs),
                totalMins: totalMins || 60,
                remarkNote: newApt.remarkNote,
            }),
        });
        setNewApt({ name: "", phone: "", email: "", services: [], date: "", timeSlot: "", remarkNote: "" });
        setActiveTab("list");
        fetchData();
    };

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-[#181611]">Terminverwaltung</h1>
                    <p className="text-[#897d61] text-sm">Online-Buchungen verwalten, Termine sperren, manuell anlegen</p>
                </div>
                <Link href="/admin" className="text-sm text-[#897d61] hover:text-[#181611]">← Dashboard</Link>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b border-[#e6e2db]">
                {[
                    { key: "list", label: `Termine (${appointments.length})` },
                    { key: "block", label: `Gesperrt (${blocked.length})` },
                    { key: "new", label: "Manuell anlegen" },
                ].map((t) => (
                    <button
                        key={t.key}
                        onClick={() => setActiveTab(t.key as any)}
                        className={`px-4 py-2 text-sm font-semibold border-b-2 transition-colors ${
                            activeTab === t.key ? "border-[#eeb32b] text-[#181611]" : "border-transparent text-[#897d61] hover:text-[#181611]"
                        }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            {/* TAB: LIST */}
            {activeTab === "list" && (
                <div>
                    {/* Filters */}
                    <div className="flex gap-3 mb-4 flex-wrap">
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="px-3 py-2 rounded-lg border border-[#e6e2db] text-sm"
                        >
                            <option value="all">Alle Status</option>
                            <option value="confirmed">Bestätigt</option>
                            <option value="cancelled">Abgesagt</option>
                            <option value="rescheduled">Verschoben</option>
                        </select>
                        <input
                            type="date"
                            value={filterDate}
                            onChange={(e) => setFilterDate(e.target.value)}
                            className="px-3 py-2 rounded-lg border border-[#e6e2db] text-sm"
                        />
                        <button onClick={() => { setFilterStatus("all"); setFilterDate(""); }} className="text-sm text-[#897d61] hover:text-[#181611]">Zurücksetzen</button>
                    </div>

                    {loading ? (
                        <p className="text-[#aaa] text-center py-10">Lade Termine...</p>
                    ) : filteredApts.length === 0 ? (
                        <p className="text-[#aaa] text-center py-10">Keine Termine gefunden.</p>
                    ) : (
                        <div className="space-y-3">
                            {filteredApts.map((apt) => {
                                const svcs = JSON.parse(apt.services) as { name: string; duration: number; price: number }[];
                                return (
                                    <div key={apt.id} className="bg-white rounded-xl border border-[#e6e2db] p-4">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${STATUS_COLORS[apt.status] || "bg-gray-100 text-gray-600"}`}>
                                                        {apt.status}
                                                    </span>
                                                    {apt.isManual && <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">Manuell</span>}
                                                    <span className="text-xs text-[#aaa]">#{apt.id}</span>
                                                </div>
                                                <p className="font-bold text-[#181611]">{apt.name} · {apt.date} {apt.timeSlot} Uhr</p>
                                                <p className="text-sm text-[#897d61]">{apt.phone} · {apt.email}</p>
                                                <p className="text-xs text-[#bbb] mt-1">
                                                    {svcs.map((s) => s.name).join(", ")} · {apt.totalMins} Min.
                                                </p>
                                                {apt.remarkNote && <p className="text-xs text-[#aaa] mt-1 italic">"{apt.remarkNote}"</p>}
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                {apt.status !== "cancelled" && (
                                                    <>
                                                        <button
                                                            onClick={() => { setRescheduleId(apt.id); setRescheduleData({ date: apt.date, timeSlot: apt.timeSlot }); }}
                                                            className="text-xs bg-[#f4f3f0] text-[#555] px-3 py-1.5 rounded-lg hover:bg-[#eee] transition-colors"
                                                        >
                                                            🔄 Verschieben
                                                        </button>
                                                        <button
                                                            onClick={() => cancelAppointment(apt.id)}
                                                            className="text-xs bg-red-50 text-red-500 px-3 py-1.5 rounded-lg hover:bg-red-100 transition-colors"
                                                        >
                                                            ✕ Absagen
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}

            {/* TAB: BLOCK */}
            {activeTab === "block" && (
                <div className="space-y-6">
                    <div className="bg-[#f8f7f6] rounded-xl p-5 border border-[#e6e2db]">
                        <h3 className="font-bold text-[#181611] mb-4">Termin sperren</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div>
                                <label className="block text-xs font-semibold text-[#555] mb-1">Datum</label>
                                <input
                                    type="date"
                                    value={blockForm.date}
                                    onChange={(e) => setBlockForm((p) => ({ ...p, date: e.target.value }))}
                                    className="w-full px-3 py-2 rounded-lg border border-[#e6e2db] text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-[#555] mb-1">Uhrzeit</label>
                                <select
                                    value={blockForm.timeSlot}
                                    onChange={(e) => setBlockForm((p) => ({ ...p, timeSlot: e.target.value }))}
                                    className="w-full px-3 py-2 rounded-lg border border-[#e6e2db] text-sm"
                                >
                                    <option value="">Wählen...</option>
                                    {blockSlots.map((s) => <option key={s}>{s}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-[#555] mb-1">Grund (optional)</label>
                                <input
                                    value={blockForm.reason}
                                    onChange={(e) => setBlockForm((p) => ({ ...p, reason: e.target.value }))}
                                    placeholder="z.B. Betriebsurlaub"
                                    className="w-full px-3 py-2 rounded-lg border border-[#e6e2db] text-sm"
                                />
                            </div>
                        </div>
                        <button
                            onClick={blockSlot}
                            className="mt-3 px-5 py-2 bg-[#181611] text-white rounded-lg text-sm font-semibold hover:bg-[#333] transition-colors"
                        >
                            Termin sperren
                        </button>
                    </div>

                    <div>
                        <h3 className="font-bold text-[#181611] mb-3">Gesperrte Termine ({blocked.length})</h3>
                        {blocked.length === 0 ? (
                            <p className="text-[#aaa] text-sm">Keine gesperrten Termine.</p>
                        ) : (
                            <div className="space-y-2">
                                {blocked.map((b) => (
                                    <div key={b.id} className="flex items-center justify-between bg-white rounded-xl border border-[#e6e2db] px-4 py-3">
                                        <p className="text-sm font-semibold text-[#181611]">{b.date} · {b.timeSlot} Uhr {b.reason && <span className="text-[#aaa] font-normal">– {b.reason}</span>}</p>
                                        <button onClick={() => unblockSlot(b.id)} className="text-xs text-red-500 hover:text-red-700">Entsperren</button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* TAB: MANUAL NEW */}
            {activeTab === "new" && (
                <div className="bg-white rounded-xl border border-[#e6e2db] p-6 space-y-4 max-w-2xl">
                    <h3 className="font-bold text-[#181611]">Termin manuell anlegen</h3>
                    {[
                        { key: "name", label: "Name", type: "text" },
                        { key: "phone", label: "Telefon", type: "tel" },
                        { key: "email", label: "E-Mail", type: "email" },
                        { key: "date", label: "Datum", type: "date" },
                        { key: "timeSlot", label: "Uhrzeit (z.B. 10:00)", type: "text", placeholder: "10:00" },
                    ].map(({ key, label, type, placeholder }) => (
                        <div key={key}>
                            <label className="block text-xs font-semibold text-[#555] mb-1">{label}</label>
                            <input
                                type={type}
                                value={(newApt as any)[key]}
                                onChange={(e) => setNewApt((p) => ({ ...p, [key]: e.target.value }))}
                                placeholder={placeholder}
                                className="w-full px-3 py-2 rounded-lg border border-[#e6e2db] text-sm"
                            />
                        </div>
                    ))}
                    <div>
                        <label className="block text-xs font-semibold text-[#555] mb-2">Leistungen</label>
                        <div className="grid grid-cols-2 gap-1 max-h-48 overflow-y-auto">
                            {BOOKABLE_SERVICES.map((s) => (
                                <label key={s.name} className="flex items-center gap-2 text-xs cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={newApt.services.includes(s.name)}
                                        onChange={(e) => setNewApt((p) => ({
                                            ...p,
                                            services: e.target.checked
                                                ? [...p.services, s.name]
                                                : p.services.filter((x) => x !== s.name)
                                        }))}
                                    />
                                    {s.name} ({s.duration}min)
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-[#555] mb-1">Bemerkung</label>
                        <textarea rows={2} value={newApt.remarkNote} onChange={(e) => setNewApt((p) => ({ ...p, remarkNote: e.target.value }))}
                            className="w-full px-3 py-2 rounded-lg border border-[#e6e2db] text-sm resize-none" />
                    </div>
                    <button
                        onClick={createManualApt}
                        className="w-full py-2.5 bg-[#181611] text-white rounded-lg font-semibold text-sm hover:bg-[#333] transition-colors"
                    >
                        Termin anlegen
                    </button>
                </div>
            )}

            {/* Reschedule Modal */}
            {rescheduleId && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-sm space-y-4">
                        <h3 className="font-bold text-[#181611]">Termin verschieben #{rescheduleId}</h3>
                        <div>
                            <label className="block text-xs font-semibold text-[#555] mb-1">Neues Datum</label>
                            <input
                                type="date"
                                value={rescheduleData.date}
                                onChange={(e) => setRescheduleData((p) => ({ ...p, date: e.target.value }))}
                                className="w-full px-3 py-2 rounded-lg border border-[#e6e2db] text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-[#555] mb-1">Neue Uhrzeit</label>
                            <input
                                type="text"
                                value={rescheduleData.timeSlot}
                                onChange={(e) => setRescheduleData((p) => ({ ...p, timeSlot: e.target.value }))}
                                placeholder="10:00"
                                className="w-full px-3 py-2 rounded-lg border border-[#e6e2db] text-sm"
                            />
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => setRescheduleId(null)} className="flex-1 py-2 rounded-lg border border-[#e6e2db] text-sm text-[#888]">Abbrechen</button>
                            <button onClick={saveReschedule} className="flex-1 py-2 rounded-lg bg-[#181611] text-white text-sm font-semibold">Speichern</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
