"use client";

import { useState } from "react";

export default function ConsultationPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [status, setStatus] = useState("idle"); // idle, submitting, success, error

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "consultation",
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    details: { message: formData.message }
                }),
            });

            if (!res.ok) throw new Error("Failed to submit");

            setStatus("success");
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="min-h-screen pb-16">
            {/* Hero */}
            <section className="bg-[#181611] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-[#eeb32b] font-bold tracking-widest uppercase text-xs">Expert Advice</span>
                    <h1 className="text-white text-4xl md:text-5xl font-bold mt-3">Free Consultation</h1>
                    <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
                        Not sure which treatment is right for you? Let our experts guide you to the perfect wellness plan.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-[#e6e2db] flex flex-col md:flex-row">
                    {/* Left Side: Info */}
                    <div className="md:w-1/3 bg-[#f8f7f6] p-8 border-r border-[#e6e2db] flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-[#181611] mb-4">Why Consult Us?</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#eeb32b]">check_circle</span>
                                <span className="text-sm text-[#555]">Personalized skin & hair analysis</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#eeb32b]">check_circle</span>
                                <span className="text-sm text-[#555]">Customized treatment plans</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#eeb32b]">check_circle</span>
                                <span className="text-sm text-[#555]">No obligation to book</span>
                            </li>
                        </ul>
                        <div className="mt-8 pt-8 border-t border-[#e6e2db]">
                            <p className="font-bold text-[#181611] mb-1">Direct Contact</p>
                            <p className="text-[#897d61] text-sm">+1 (123) 456-7890</p>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="md:w-2/3 p-8 md:p-12">
                        {status === "success" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-green-600 text-3xl">check</span>
                                </div>
                                <h3 className="text-2xl font-bold text-[#181611] mb-2">Request Sent!</h3>
                                <p className="text-[#555]">We have received your details. One of our specialists will contact you shortly.</p>
                                <button onClick={() => setStatus("idle")} className="mt-6 text-[#eeb32b] font-bold hover:underline">
                                    Send another request
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="text-2xl font-bold text-[#181611] mb-2">Your Details</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-[#897d61] mb-2">Full Name</label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            type="text"
                                            placeholder="e.g. Jane Doe"
                                            className="w-full h-12 px-4 rounded-xl border border-[#e6e2db] focus:border-[#eeb32b] outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-[#897d61] mb-2">Email</label>
                                            <input
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                type="email"
                                                placeholder="jane@example.com"
                                                className="w-full h-12 px-4 rounded-xl border border-[#e6e2db] focus:border-[#eeb32b] outline-none transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-[#897d61] mb-2">Phone</label>
                                            <input
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                type="tel"
                                                placeholder="+1 (555) 000-0000"
                                                className="w-full h-12 px-4 rounded-xl border border-[#e6e2db] focus:border-[#eeb32b] outline-none transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-[#897d61] mb-2">Message (Optional)</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={3}
                                            placeholder="Tell us about your concerns..."
                                            className="w-full p-4 rounded-xl border border-[#e6e2db] focus:border-[#eeb32b] outline-none transition-colors resize-none"
                                        />
                                    </div>
                                </div>
                                <button
                                    disabled={status === "submitting"}
                                    className="w-full bg-[#181611] text-white h-14 rounded-xl font-bold text-lg hover:bg-[#333] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                                >
                                    {status === "submitting" ? (
                                        <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                    ) : (
                                        <>
                                            Request Consultation
                                            <span className="material-symbols-outlined">arrow_forward</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
