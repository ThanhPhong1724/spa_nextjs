"use client";

import { useState } from "react";

export default function OnlineVoucherPage() {
    const [amount, setAmount] = useState("50");
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.target as HTMLFormElement;
        const senderName = (form.elements.namedItem("senderName") as HTMLInputElement).value;
        const senderPhone = (form.elements.namedItem("senderPhone") as HTMLInputElement).value;
        const senderEmail = (form.elements.namedItem("senderEmail") as HTMLInputElement).value;
        const recipientName = (form.elements.namedItem("recipientName") as HTMLInputElement).value;
        const recipientEmail = (form.elements.namedItem("recipientEmail") as HTMLInputElement).value;
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "voucher",
                    name: senderName,
                    email: senderEmail,
                    phone: senderPhone,
                    details: {
                        amount,
                        recipientName,
                        recipientEmail,
                        message
                    }
                }),
            });

            if (!res.ok) throw new Error("Failed to submit");

            alert("Order received! Proceeding to payment gateway... (Demo Mode: Success)");
            setStatus("success");
            form.reset();
        } catch (error) {
            alert("Failed to process order. Please try again.");
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen bg-[#f8f7f6]">
            {/* Hero */}
            <section className="bg-[#181611] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-[#eeb32b] font-bold tracking-widest uppercase text-xs">Gift of Wellness</span>
                    <h1 className="text-white text-4xl md:text-5xl font-bold mt-3">Buy Online Voucher</h1>
                    <p className="text-white/80 text-2xl font-light mt-2">Mua Voucher Online</p>
                </div>
            </section>

            {/* Purchase Form */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8 border-b border-[#f4f3f0]">
                        <h2 className="text-2xl font-bold text-[#181611] mb-6">Select Amount</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {["50", "100", "200", "Custom"].map((val) => (
                                <button
                                    key={val}
                                    onClick={() => setAmount(val)}
                                    className={`h-14 rounded-xl border-2 font-bold text-lg transition-all ${amount === val
                                        ? "border-[#eeb32b] bg-[#eeb32b]/10 text-[#eeb32b]"
                                        : "border-[#e6e2db] text-[#181611] hover:border-[#eeb32b]"
                                        }`}
                                >
                                    {val === "Custom" ? "Custom" : `$${val}`}
                                </button>
                            ))}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-10">
                        {/* Sender Info */}
                        <div className="grid md:grid-cols-12 gap-8">
                            <div className="md:col-span-4">
                                <h3 className="text-lg font-bold text-[#181611] flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined text-[#eeb32b]">person</span>
                                    Sender Details
                                </h3>
                                <p className="text-sm text-[#897d61]">Your info for the receipt.</p>
                            </div>
                            <div className="md:col-span-8 space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input name="senderName" type="text" placeholder="Your Name" required className="w-full px-4 py-3 rounded-lg border border-[#e6e2db] focus:border-[#eeb32b] outline-none" />
                                    <input name="senderPhone" type="tel" placeholder="Your Phone" required className="w-full px-4 py-3 rounded-lg border border-[#e6e2db] focus:border-[#eeb32b] outline-none" />
                                </div>
                                <input name="senderEmail" type="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded-lg border border-[#e6e2db] focus:border-[#eeb32b] outline-none" />
                            </div>
                        </div>

                        <hr className="border-[#f4f3f0]" />

                        {/* Recipient Info */}
                        <div className="grid md:grid-cols-12 gap-8">
                            <div className="md:col-span-4">
                                <h3 className="text-lg font-bold text-[#181611] flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined text-[#eeb32b]">card_giftcard</span>
                                    Recipient Details
                                </h3>
                                <p className="text-sm text-[#897d61]">Who are you treating?</p>
                            </div>
                            <div className="md:col-span-8 space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input name="recipientName" type="text" placeholder="Recipient Name" required className="w-full px-4 py-3 rounded-lg border border-[#e6e2db] focus:border-[#eeb32b] outline-none" />
                                    <input name="recipientEmail" type="email" placeholder="Recipient Email" required className="w-full px-4 py-3 rounded-lg border border-[#e6e2db] focus:border-[#eeb32b] outline-none" />
                                </div>
                                <textarea name="message" rows={3} placeholder="Personal Message (Optional)" className="w-full px-4 py-3 rounded-lg border border-[#e6e2db] focus:border-[#eeb32b] outline-none resize-none" />
                            </div>
                        </div>

                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full bg-[#181611] hover:bg-[#2a2418] text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {status === "submitting" ? "Processing..." : "Proceed to Payment"}
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                            <p className="text-center text-xs text-[#897d61] mt-4 flex items-center justify-center gap-1">
                                <span className="material-symbols-outlined text-sm">lock</span>
                                Secure 256-bit SSL encrypted payment
                            </p>
                        </div>
                    </form>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center opacity-70 max-w-4xl mx-auto">
                    {[
                        { icon: "verified", text: "Instant Delivery" },
                        { icon: "calendar_month", text: "Valid for 12 Months" },
                        { icon: "workspace_premium", text: "Premium Packaging" },
                        { icon: "support_agent", text: "24/7 Support" },
                    ].map((item) => (
                        <div key={item.text} className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-3xl text-[#eeb32b]">{item.icon}</span>
                            <span className="text-xs font-bold uppercase tracking-wide text-[#181611]">{item.text}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
