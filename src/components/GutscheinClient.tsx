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
            title: t("gutschein.step1_title"),
            description: t("gutschein.step1_desc"),
            highlight: "hoang_real@yahoo.de",
            suffix: t("gutschein.step1_suffix")
        },
        {
            icon: "edit_note",
            title: t("gutschein.step2_title"),
            description: t("gutschein.step2_desc"),
            list: [
                t("gutschein.step2_l1"),
                t("gutschein.step2_l2"),
                t("gutschein.step2_l3")
            ],
            example: {
                title: t("gutschein.step2_example"),
                lines: [
                    t("gutschein.step2_ex1"),
                    t("gutschein.step2_ex2"),
                    t("gutschein.step2_ex3")
                ]
            },
            warning: t("gutschein.step2_warning")
        },
        {
            icon: "mail",
            title: t("gutschein.step3_title"),
            description: t("gutschein.step3_desc")
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f5ebe0] via-[#faf6f1] to-[#f5ebe0]">
            {/* Hero Section */}
            <section className="pt-40 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-[#ff8b69] mb-4">
                        {t("gutschein.title")}
                    </h1>

                    {/* Description */}
                    <p className="text-[#5c4033]/70 text-lg max-w-xl mx-auto">
                        {t("gutschein.subtitle")} <br />
                        {t("gutschein.subtitle2")}
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
                                    {t("gutschein.paypal_badge")}
                                </div>

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

                                {/* Notice Box */}
                                <div className="bg-gradient-to-r from-[#ff8b69] to-[#e87a5a] rounded-xl p-4 text-left">
                                    <p className="text-white text-sm">
                                        <strong>{t("gutschein.notice")}</strong> {t("gutschein.notice_text")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Barzahlung Section */}
            <section className="pb-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#d4a373]/20 text-center">
                        <div className="inline-flex items-center gap-2 bg-[#5c4033]/10 text-[#5c4033] px-4 py-2 rounded-full text-sm font-bold mb-6">
                            <span className="material-symbols-outlined text-lg">payments</span>
                            {t("gutschein.cash_badge")}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#5c4033] mb-4">
                            {t("gutschein.cash_title")}
                        </h2>
                        <p className="text-[#5c4033]/70 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
                            {t("gutschein.cash_desc")}
                        </p>
                        <a
                            href="https://wa.me/491638562022"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1da851] transition-colors"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            {t("gutschein.cash_cta")}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
