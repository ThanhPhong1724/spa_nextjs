"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NailsPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [heroTitle, setHeroTitle] = useState("NAILS");
    const [nagelImage, setNagelImage] = useState("");
    const [fusspflegeImage, setFusspflegeImage] = useState("");
    const { t } = useLanguage();

    useEffect(() => {
        fetch("/api/page-content?pageKey=nails_page")
            .then(res => res.json())
            .then(data => {
                if (data.hero?.title_de) setHeroTitle(data.hero.title_de);
                if (data.service_images?.nagelmodellage_image) setNagelImage(data.service_images.nagelmodellage_image);
                if (data.service_images?.fusspflege_image) setFusspflegeImage(data.service_images.fusspflege_image);
            })
            .catch(() => { });
    }, []);

    const services = [
        { title: t("nails.s1_title"), description: t("nails.s1_desc"), image: nagelImage || "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop" },
        { title: t("nails.s2_title"), description: t("nails.s2_desc"), image: fusspflegeImage || "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&h=400&fit=crop" },
    ];

    const faqs = Array.from({ length: 3 }, (_, i) => ({
        question: t(`nails.faq_q${i + 1}`),
        answer: t(`nails.faq_a${i + 1}`),
    }));

    return (
        <div className="bg-[#f5ebe0]">
            <section className="pt-44 pb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-[#ff8b69] text-4xl md:text-5xl font-bold uppercase tracking-wide">{heroTitle}</h1>
                </div>
            </section>

            <section className="pt-13 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {services.map((service) => (
                            <div key={service.title} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                                <div className="h-[400px] overflow-hidden">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-[#ff8b69] uppercase tracking-wide mb-4">{service.title}</h3>
                                    <p className="text-[#5c4033] font-medium">{service.description}</p>
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
        </div>
    );
}
