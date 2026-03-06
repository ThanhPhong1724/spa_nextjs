"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { handleDownloadImage } from "@/lib/utils";

export default function PermanentMakeupPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [infoSheetImageDe, setInfoSheetImageDe] = useState("/images/permanent-makeup-info.jpg");
    const [infoSheetImageEn, setInfoSheetImageEn] = useState("/images/permanent-makeup-info.jpg");
    const [heroTitle, setHeroTitle] = useState("PERMANENT MAKE UP");
    const [videoUrl, setVideoUrl] = useState("https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4");
    const [browsImage, setBrowsImage] = useState("https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop");
    const [lipsImage, setLipsImage] = useState("https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&h=400&fit=crop");
    const [eyesImage, setEyesImage] = useState("https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=400&fit=crop");
    const { language, t } = useLanguage();

    const infoSheetImage = language === 'en' ? infoSheetImageEn : infoSheetImageDe;

    useEffect(() => {
        fetch("/api/page-content?pageKey=permanent_makeup_page", { cache: 'no-store' })
            .then(res => res.json())
            .then(data => {
                if (data.hero?.title_de) setHeroTitle(data.hero.title_de);
                if (data.hero?.video_url) setVideoUrl(data.hero.video_url);
                if (data.info_sheet?.image) setInfoSheetImageDe(data.info_sheet.image);
                if (data.info_sheet?.image_en) setInfoSheetImageEn(data.info_sheet.image_en);
                if (data.service_images?.brows_image) setBrowsImage(data.service_images.brows_image);
                if (data.service_images?.lips_image) setLipsImage(data.service_images.lips_image);
                if (data.service_images?.eyes_image) setEyesImage(data.service_images.eyes_image);
            })
            .catch(() => { });
    }, []);

    const faqs = Array.from({ length: 6 }, (_, i) => ({
        question: t(`pmu.faq_q${i + 1}`),
        answer: t(`pmu.faq_a${i + 1}`),
    }));

    return (
        <div className="min-h-screen bg-[#f5ebe0]">
            {/* Hero - Coral Theme */}
            <section className="pt-44 pb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-[#ff8b69] text-4xl md:text-5xl font-bold uppercase tracking-wide">{heroTitle}</h1>
                </div>
            </section>

            {/* Introduction */}
            <section className="pt-13 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-[#5c4033] mb-6">{t("pmu.intro_title")}</h2>
                            <p className="text-[#6b5344] leading-relaxed mb-6">
                                {t("pmu.intro_desc")}
                            </p>
                            <ul className="text-[#6b5344] leading-relaxed space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#ff8b69]">•</span>
                                    <span><strong className="text-[#5c4033]">Brows:</strong> {t("pmu.brows")}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#ff8b69]">•</span>
                                    <span><strong className="text-[#5c4033]">Lips:</strong> {t("pmu.lips")}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#ff8b69]">•</span>
                                    <span><strong className="text-[#5c4033]">Eyes:</strong> {t("pmu.eyes")}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <video
                                key={videoUrl}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto object-cover"
                            >
                                <source src={videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    {/* Free Consultation Highlight */}
                    <div className="mt-12 bg-gradient-to-br from-white to-[#faf4ef] rounded-2xl p-8 shadow-lg border border-[#d4a373]/20 text-center max-w-3xl mx-auto">
                        <p className="text-[#5c4033] text-lg leading-relaxed mb-4">
                            {t("pmu.consult_desc")}
                        </p>
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff8b69] to-[#d4a373] text-white px-6 py-3 rounded-full font-bold shadow-md">
                            <span>✨</span>
                            <span>{t("pmu.consult_cta")}</span>
                        </div>
                    </div>

                    {/* 3 Service Images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                            <img src={browsImage} alt="Brows - Permanent Make Up" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                            <img src={lipsImage} alt="Lips - Permanent Make Up" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                            <img src={eyesImage} alt="Eyes - Permanent Make Up" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
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

            {/* A4 Info Image + Download */}
            <section className="py-16 bg-[#f5ebe0]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#d4a373]/20 p-4">
                        <div className="relative w-full" style={{ aspectRatio: '210 / 297' }}>
                            <img src={infoSheetImage} alt="Permanent Make Up – Informationsblatt" className="w-full h-full object-contain rounded-xl" onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/630x891/f5ebe0/5c4033?text=Permanent+Make+Up%0AInformationsblatt%0A(A4)'; }} />
                        </div>
                    </div>
                    <button onClick={() => handleDownloadImage(infoSheetImage, "Permanent-MakeUp-Informationsblatt.jpg")} className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-[#ff8b69] to-[#d4a373] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <span className="material-symbols-outlined">download</span>
                        {t("common.download")}
                    </button>
                </div>
            </section>
        </div>
    );
}
