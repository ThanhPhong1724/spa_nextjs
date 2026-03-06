"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { handleDownloadImage } from "@/lib/utils";

export default function WimpernPage({ content: pageContent }: { content?: any }) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { language, t } = useLanguage();

    const infoSheetImageDe = pageContent?.info_sheet?.image || "/images/wimpern-info.jpg";
    const infoSheetImageEn = pageContent?.info_sheet?.image_en || infoSheetImageDe;
    const infoSheetImage = language === 'en' ? infoSheetImageEn : infoSheetImageDe;

    const heroTitle = pageContent?.hero?.title_de || "WIMPERN";
    const verlangerungImage = pageContent?.service_images?.verlangerung_image || "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=400&fit=crop";
    const welleImage = pageContent?.service_images?.welle_image || "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop";

    const services = [
        { title: t("wimpern.s1_title"), description: t("wimpern.s1_desc"), image: verlangerungImage || "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=400&fit=crop" },
        { title: t("wimpern.s2_title"), description: t("wimpern.s2_desc"), image: welleImage || "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop" },
    ];

    const faqs = Array.from({ length: 5 }, (_, i) => ({
        question: t(`wimpern.faq_q${i + 1}`),
        answer: t(`wimpern.faq_a${i + 1}`),
    }));

    return (
        <div className="min-h-screen bg-[#f5ebe0]">
            <section className="pt-44 pb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-[#ff8b69] text-4xl md:text-5xl font-bold uppercase tracking-wide">{heroTitle}</h1>
                </div>
            </section>

            <section className="pt-13 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {services.map((service) => (
                            <div key={service.title} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                                <div className="h-48 overflow-hidden">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-[#ff8b69] mb-2">{service.title}</h3>
                                    <p className="text-[#6b5344] text-base">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-[#ff8b69] text-center mb-8">{t("common.faq_title")}</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#ff8b69]/20 transition-all hover:shadow-md">
                                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors duration-300 ${openFaq === index ? "bg-[#e8d5c4]" : "bg-white hover:bg-[#faf4ef]"}`}>
                                    <span className="font-bold text-[#5c4033]">{faq.question}</span>
                                    <span className={`material-symbols-outlined transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180 text-[#5c4033]" : "text-[#ff8b69]"}`}>expand_more</span>
                                </button>
                                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <div className="px-6 py-4 border-t border-[#ff8b69]/10">
                                        <p className="text-[#6b5344] leading-relaxed">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#f5ebe0]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#d4a373]/20 p-4">
                        <div className="relative w-full" style={{ aspectRatio: '210 / 297' }}>
                            <img src={infoSheetImage} alt="Wimpern – Informationsblatt" className="w-full h-full object-contain rounded-xl" onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/630x891/f5ebe0/5c4033?text=Wimpern%0AInformationsblatt%0A(A4)'; }} />
                        </div>
                    </div>
                    <button onClick={() => handleDownloadImage(infoSheetImage, "Wimpern-Informationsblatt.jpg")} className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-[#ff8b69] to-[#d4a373] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <span className="material-symbols-outlined">download</span>
                        {t("common.download")}
                    </button>
                </div>
            </section>
        </div>
    );
}
