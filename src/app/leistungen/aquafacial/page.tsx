"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageContent } from "@/hooks/usePageContent";
import { handleDownloadImage } from "@/lib/utils";

export default function AquafacialPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { language, t } = useLanguage();
    const { content: pageContent } = usePageContent("aquafacial_page");
    const heroImage = pageContent?.hero?.image || "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=500&fit=crop";
    const infoSheetImageDe = pageContent?.info_sheet?.image || "/images/aquafacial-info.jpg";
    const infoSheetImageEn = pageContent?.info_sheet?.image_en || infoSheetImageDe;
    const infoSheetImage = language === 'en' ? infoSheetImageEn : infoSheetImageDe;

    const features = [
        t("aquafacial.f1"), t("aquafacial.f2"), t("aquafacial.f3"), t("aquafacial.f4"),
        t("aquafacial.f5"), t("aquafacial.f6"), t("aquafacial.f7"), t("aquafacial.f8"),
        t("aquafacial.f9"), t("aquafacial.f10"),
    ];

    const faqs = Array.from({ length: 8 }, (_, i) => ({
        question: t(`aquafacial.faq_q${i + 1}`),
        answer: t(`aquafacial.faq_a${i + 1}`),
    }));

    return (
        <div className="min-h-screen bg-[#f5ebe0]">
            {/* Section 1: Highlight - Hautanalyse & Glow-Technologie (Two-Column) */}
            <section className="pt-44 pb-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-white to-[#faf4ef] rounded-3xl shadow-xl border border-[#d4a373]/20 overflow-hidden">
                        <div className="grid md:grid-cols-2 items-center">
                            {/* Left: Text */}
                            <div className="p-8 md:p-12">
                                <div className="inline-flex items-center gap-2 bg-[#ff8b69]/10 text-[#ff8b69] px-5 py-2 rounded-full font-semibold text-sm mb-6 border border-[#ff8b69]/20">
                                    <span>✨</span>
                                    <span>{t("aquafacial.badge")}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5c4033] mb-6 leading-tight whitespace-pre-line">
                                    {t("aquafacial.highlight_title")}
                                </h2>
                                <p className="text-[#6b5344] text-lg leading-relaxed">
                                    {t("aquafacial.highlight_desc")}
                                </p>
                            </div>
                            {/* Right: Image */}
                            <div className="h-64 md:h-full min-h-[320px]">
                                <img
                                    src={heroImage}
                                    alt="Hautanalyse & Glow-Technologie"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: AQUAFACIAL Main Content */}
            <section className="pb-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h1 className="text-[#ff8b69] text-4xl md:text-6xl font-bold uppercase tracking-wide mb-4">AQUAFACIAL</h1>
                        <p className="text-[#5c4033] text-2xl md:text-3xl font-serif font-bold">
                            {t("aquafacial.slogan")}
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#d4a373]/20">
                        <p className="text-[#5c4033] text-lg md:text-xl leading-relaxed text-center mb-10">
                            {t("aquafacial.intro")}<br />
                            {t("aquafacial.intro2").split("{0}")[0]}
                            <strong className="text-[#ff8b69]">{t("aquafacial.intro2").split("{0}")[1]?.split("{1}")[0]}</strong>
                            {t("aquafacial.intro2").split("{1}")[1]}
                        </p>

                        {/* 10 Feature Items – Elegant Two-Column List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 max-w-3xl mx-auto">
                            {features.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 py-3 border-b border-[#e8d5c4]/60 group hover:border-[#ff8b69]/40 transition-colors">
                                    <div className="w-7 h-7 bg-gradient-to-br from-[#ff8b69] to-[#d4a373] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-[#5c4033] font-semibold text-base">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-[#ff8b69] text-center mb-8">
                        {t("common.faq_title")}
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#ff8b69]/20 transition-all hover:shadow-md"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors duration-300 ${openFaq === index ? "bg-[#e8d5c4]" : "bg-white hover:bg-[#faf4ef]"
                                        }`}
                                >
                                    <span className="font-bold text-[#5c4033]">{faq.question}</span>
                                    <span className={`material-symbols-outlined transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180 text-[#5c4033]" : "text-[#ff8b69]"
                                        }`}>
                                        expand_more
                                    </span>
                                </button>
                                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                                    }`}>
                                    <div className="px-6 py-4 border-t border-[#ff8b69]/10">
                                        <p className="text-[#6b5344] leading-relaxed whitespace-pre-line">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* A4 Info Image + Download */}
            <section className="py-16 bg-[#f5ebe0]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#d4a373]/20 p-4">
                        <div className="relative w-full" style={{ aspectRatio: '210 / 297' }}>
                            <img
                                src={infoSheetImage}
                                alt="Aquafacial – Informationsblatt"
                                className="w-full h-full object-contain rounded-xl"
                                onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/630x891/f5ebe0/5c4033?text=Aquafacial%0AInformationsblatt%0A(A4)'; }}
                            />
                        </div>
                    </div>
                    <button
                        onClick={() => handleDownloadImage(infoSheetImage, "Aquafacial-Informationsblatt.jpg")}
                        className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-[#ff8b69] to-[#d4a373] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        <span className="material-symbols-outlined">download</span>
                        {t("common.download")}
                    </button>
                </div>
            </section>
        </div>
    );
}
