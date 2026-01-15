"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
    });

    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "contact",
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    details: {
                        service: formData.service,
                        date: formData.date,
                        time: formData.time,
                        message: formData.message
                    }
                }),
            });

            if (!res.ok) throw new Error("Failed to submit");

            alert("Thank you! Your booking request has been sent. We will confirm with you shortly.");
            setStatus("success");
            setFormData({
                name: "", email: "", phone: "", service: "", date: "", time: "", message: "",
            });
        } catch (error) {
            alert("Something went wrong. Please try again or call us directly.");
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="bg-[#181611] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-[#eeb32b] font-bold tracking-widest uppercase text-xs">Get in Touch</span>
                    <h1 className="text-white text-4xl md:text-5xl font-bold mt-3">Contact & Booking</h1>
                    <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
                        Book your appointment or reach out for a free consultation
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-[#181611] mb-6">Book an Appointment</h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#181611] mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-[#e6e2db] focus:outline-none focus:border-[#eeb32b] transition-colors"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#181611] mb-2">
                                        Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-[#e6e2db] focus:outline-none focus:border-[#eeb32b] transition-colors"
                                        placeholder="+84 90 123 4567"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#181611] mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg border border-[#e6e2db] focus:outline-none focus:border-[#eeb32b] transition-colors"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#181611] mb-2">
                                    Service *
                                </label>
                                <select
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-[#e6e2db] focus:outline-none focus:border-[#eeb32b] transition-colors"
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                >
                                    <option value="">Select a service</option>
                                    <optgroup label="Head Spa">
                                        <option value="royal-herbal">Royal Herbal Wash - $85</option>
                                        <option value="ginseng">Ginseng Root Vitality - $95</option>
                                        <option value="detox">Deep Scalp Detox - $75</option>
                                    </optgroup>
                                    <optgroup label="PMU & Tattoo">
                                        <option value="microblading">Eyebrow Microblading - $350</option>
                                        <option value="lip-blush">Lip Blush - $400</option>
                                        <option value="eyeliner">Eyeliner Tattoo - $300</option>
                                    </optgroup>
                                    <optgroup label="Eyelashes">
                                        <option value="classic-lash">Classic Extensions - $80+</option>
                                        <option value="volume-lash">Volume Extensions - $150+</option>
                                        <option value="lash-lift">Lash Lift & Tint - $90</option>
                                    </optgroup>
                                    <optgroup label="Nails">
                                        <option value="manicure">Manicure - $35+</option>
                                        <option value="pedicure">Pedicure - $45+</option>
                                    </optgroup>
                                    <optgroup label="Facials">
                                        <option value="hydrating">Hydrating Facial - $85</option>
                                        <option value="anti-aging">Anti-Aging - $120</option>
                                    </optgroup>
                                    <option value="consultation">Free Consultation</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#181611] mb-2">
                                        Preferred Date
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full px-4 py-3 rounded-lg border border-[#e6e2db] focus:outline-none focus:border-[#eeb32b] transition-colors"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#181611] mb-2">
                                        Preferred Time
                                    </label>
                                    <select
                                        className="w-full px-4 py-3 rounded-lg border border-[#e6e2db] focus:outline-none focus:border-[#eeb32b] transition-colors"
                                        value={formData.time}
                                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                    >
                                        <option value="">Select time</option>
                                        <option value="09:00">09:00</option>
                                        <option value="10:00">10:00</option>
                                        <option value="11:00">11:00</option>
                                        <option value="13:00">13:00</option>
                                        <option value="14:00">14:00</option>
                                        <option value="15:00">15:00</option>
                                        <option value="16:00">16:00</option>
                                        <option value="17:00">17:00</option>
                                        <option value="18:00">18:00</option>
                                        <option value="19:00">19:00</option>
                                        <option value="20:00">20:00</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#181611] mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={3}
                                    className="w-full px-4 py-3 rounded-lg border border-[#e6e2db] focus:outline-none focus:border-[#eeb32b] transition-colors resize-none"
                                    placeholder="Any special requests or notes..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#eeb32b] hover:bg-[#d9a020] text-[#181611] py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined">send</span>
                                Submit Booking
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h3 className="text-xl font-bold text-[#181611] mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-[#eeb32b] text-2xl">location_on</span>
                                    <div>
                                        <p className="font-medium text-[#181611]">Address</p>
                                        <p className="text-[#897d61]">123 Harmony Lane, District 1, HCMC</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-[#eeb32b] text-2xl">schedule</span>
                                    <div>
                                        <p className="font-medium text-[#181611]">Opening Hours</p>
                                        <p className="text-[#897d61]">Mon - Sun: 09:00 - 21:00</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-[#eeb32b] text-2xl">call</span>
                                    <div>
                                        <p className="font-medium text-[#181611]">Phone</p>
                                        <p className="text-[#897d61]">+84 90 123 4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-[#eeb32b] text-2xl">mail</span>
                                    <div>
                                        <p className="font-medium text-[#181611]">Email</p>
                                        <p className="text-[#897d61]">hello@lotusspa.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Placeholder */}
                        <div className="bg-[#e6e2db] rounded-2xl h-64 flex items-center justify-center overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197955!2d106.70232011533419!3d10.777631662112988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4670640000%3A0xa4f9a1c6d4b4d411!2sDistrict%201%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1609459200000!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* Social Links */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h3 className="text-lg font-bold text-[#181611] mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 rounded-lg bg-[#f8f7f6] flex items-center justify-center text-[#181611] hover:bg-[#eeb32b] hover:text-[#181611] transition-all">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-12 h-12 rounded-lg bg-[#f8f7f6] flex items-center justify-center text-[#181611] hover:bg-[#eeb32b] hover:text-[#181611] transition-all">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-12 h-12 rounded-lg bg-[#f8f7f6] flex items-center justify-center text-[#181611] hover:bg-[#eeb32b] hover:text-[#181611] transition-all">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
