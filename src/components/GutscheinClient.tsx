"use client";

import { useLanguage } from "@/contexts/LanguageContext";

type GutscheinClientProps = {
    content?: any;
};

export default function GutscheinClient({ content }: GutscheinClientProps) {
    const { t } = useLanguage();

    const qrImage = content?.payment_qr?.qr_image || "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://paypal.me/hoangrealt";

    const steps = [
        {
            icon: "payments",
            title: "Betrag via PayPal senden",
            description: "Überweisen Sie den gewünschten Betrag an",
            highlight: "hoang_real@yahoo.de",
            suffix: "(oder QR-Code auf dem Bildschirm scannen)."
        },
        {
            icon: "edit_note",
            title: "Angaben hinzufügen",
            description: "Bitte geben Sie im Notizfeld folgende Infos an:",
            list: [
                "Name des Gutscheinempfängers",
                "E-Mail-Adresse (für den Gutscheinversand) oder Selbstabholung",
                "Handynummer (für Rückfragen)"
            ],
            example: {
                title: "Beispiel:",
                lines: [
                    "Max Mustermann | max@example.de | 0176 12345678",
                    "oder",
                    "Max Mustermann | Selbstabholung | 0176 12345678"
                ]
            },
            warning: "Ohne diese Angaben kann sich die Bearbeitung Ihres Gutscheins verzögern"
        },
        {
            icon: "mail",
            title: "Erhalt",
            description: "Nach Zahlungseingang senden wir Ihnen den Gutschein umgehend zu oder bereiten ihn zur Abholung vor."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f5ebe0] via-[#faf6f1] to-[#f5ebe0]">
            {/* Hero Section */}
            <section className="pt-40 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Gift Icon */}
                    {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#ff8b69] to-[#e87a5a] shadow-xl mb-8">
                        <span className="material-symbols-outlined text-white text-4xl">redeem</span>
                    </div> */}

                    {/* Subtitle */}
                    {/* <p className="text-[#ff8b69] text-sm font-bold tracking-widest uppercase mb-4">
                        Verschenken Sie Entspannung
                    </p> */}

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-[#ff8b69] mb-4">
                        ONLINE GUTSCHEIN
                    </h1>

                    {/* Description */}
                    <p className="text-[#5c4033]/70 text-lg max-w-xl mx-auto">
                        Die perfeckte Lösung für jeden Anlass <br />  
                        schnell, persönlich & flexibel.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-start">

                        {/* Left: Steps */}
                        <div className="space-y-6">

                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-[#ff8b69]/10 hover:shadow-xl hover:border-[#ff8b69]/30 transition-all duration-300 group"
                                >
                                    <div className="flex gap-4">
                                        {/* Step Number & Icon */}
                                        <div className="flex-shrink-0">
                                            <div className="relative">
                                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff8b69] to-[#e87a5a] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                    <span className="material-symbols-outlined text-white text-2xl">{step.icon}</span>
                                                </div>
                                                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#5c4033] text-white text-xs font-bold flex items-center justify-center shadow">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="font-bold text-[#5c4033] text-lg mb-2">{step.title}</h3>
                                            <p className="text-[#5c4033]/70 text-sm leading-relaxed">
                                                {step.description}
                                                {step.highlight && (
                                                    <>
                                                        {" "}
                                                        <strong className="text-[#ff8b69] font-bold">{step.highlight}</strong>
                                                        {" "}{step.suffix}
                                                    </>
                                                )}
                                            </p>
                                            {step.list && (
                                                <ul className="mt-3 space-y-1.5">
                                                    {step.list.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-[#5c4033]/70">
                                                            <span className="material-symbols-outlined text-[#ff8b69] text-sm mt-0.5">check_circle</span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {/* Example Box */}
                                            {step.example && (
                                                <div className="mt-4 bg-[#f5ebe0] rounded-xl p-4 border-l-4 border-[#ff8b69]">
                                                    <p className="text-[#5c4033] font-bold text-sm flex items-center gap-2 mb-2">
                                                        <span className="text-[#ff8b69]">✓</span>
                                                        {step.example.title}
                                                    </p>
                                                    {step.example.lines.map((line, i) => (
                                                        <p key={i} className={`text-[#5c4033]/70 text-sm ${i === 1 ? 'italic my-1' : ''}`}>
                                                            {line}
                                                        </p>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Warning Box */}
                                            {step.warning && (
                                                <div className="mt-4 bg-[#fff8e1] rounded-xl p-4 border border-[#ffc107]/30">
                                                    <p className="text-[#f57c00] text-sm flex items-start gap-2">
                                                        <span className="text-lg">⚠</span>
                                                        <span>{step.warning}</span>
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right: QR Code Card */}
                        <div className="md:sticky md:top-32">
                            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#ff8b69]/20 text-center">
                                {/* PayPal Badge */}
                                <div className="inline-flex items-center gap-2 bg-[#0070ba]/10 text-[#0070ba] px-4 py-2 rounded-full text-sm font-bold mb-6">
                                    <span className="material-symbols-outlined text-lg">verified</span>
                                    Sichere Zahlung via PayPal
                                </div>

                                {/* QR Code Title */}
                                {/* <p className="text-[#5c4033] font-bold mb-4">PayPal QR-Code</p> */}

                                {/* QR Code */}
                                <div className="relative inline-block mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff8b69]/20 to-[#e87a5a]/20 rounded-2xl blur-xl"></div>
                                    <div className="relative bg-white p-4 rounded-2xl border-2 border-[#ff8b69]/30 shadow-lg">
                                        <img
                                            src={qrImage}
                                            alt="PayPal QR Code"
                                            className="w-48 h-48 rounded-xl"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                {/* <div className="mb-6">
                                    <p className="text-[#ff8b69] font-bold text-xl">hoang_real@yahoo.de</p>
                                </div> */}

                                {/* Notice Box */}
                                <div className="bg-gradient-to-r from-[#ff8b69] to-[#e87a5a] rounded-xl p-4 text-left">
                                    <p className="text-white text-sm">
                                        <strong>Bitte beachten:</strong> Die Zustellung des Online-Gutscheins erfolgt per E-Mail – Montag bis Samstag zwischen 10:00 Uhr und 18:00 Uhr.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
