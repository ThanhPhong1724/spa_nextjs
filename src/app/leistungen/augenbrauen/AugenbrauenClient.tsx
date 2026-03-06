"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AugenbrauenClient({ content }: { content?: any }) {
    const { t } = useLanguage();

    const heroTitle = content?.hero?.title_de || "AUGENBRAUEN";
    const zupfenImage = content?.service_images?.zupfen_image || "";
    const laminierenImage = content?.service_images?.laminieren_image || "";

    const services = [
        { title: t("augenbrauen.s1_title"), description: t("augenbrauen.s1_desc"), image: zupfenImage || "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop" },
        { title: t("augenbrauen.s2_title"), description: t("augenbrauen.s2_desc"), image: laminierenImage || "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop" },
    ];

    return (
        <div className="min-h-screen bg-[#f5ebe0]">
            <section className="pt-44 pb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-[#ff8b69] text-4xl md:text-5xl font-bold uppercase tracking-wide">{heroTitle}</h1>
                </div>
            </section>

            <section className="pt-13 pb-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {services.map((service) => (
                            <div key={service.title} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                                <div className="h-64 overflow-hidden">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-[#ff8b69] mb-4">{service.title}</h3>
                                    <p className="text-[#6b5344]">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
