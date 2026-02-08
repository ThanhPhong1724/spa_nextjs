"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const getServices = (zupfenImage: string, laminierenImage: string) => [
    {
        title: "Zupfen & Färben",
        description: "Sanftes Formen und präzises Färben der Augenbrauen für einen gepflegten, ausdrucksstarken Look – abgestimmt auf Ihre Gesichtsform und Haarfarbe.",
        image: zupfenImage || "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop"
    },
    {
        title: "Laminieren",
        description: "Für vollere, perfekt geformte Brauen mit natürlichem Glanz und langanhaltendem Ergebnis.",
        image: laminierenImage || "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop"
    }
];

export default function AugenbrauenPage() {
    const [heroTitle, setHeroTitle] = useState("AUGENBRAUEN");
    const [zupfenImage, setZupfenImage] = useState("");
    const [laminierenImage, setLaminierenImage] = useState("");

    useEffect(() => {
        fetch("/api/page-content?pageKey=augenbrauen_page")
            .then(res => res.json())
            .then(data => {
                if (data.hero?.title_de) setHeroTitle(data.hero.title_de);
                if (data.service_images?.zupfen_image) setZupfenImage(data.service_images.zupfen_image);
                if (data.service_images?.laminieren_image) setLaminierenImage(data.service_images.laminieren_image);
            })
            .catch(() => { });
    }, []);

    const services = getServices(zupfenImage, laminierenImage);

    return (
        <div className="min-h-screen bg-[#f5ebe0]">
            {/* Hero - Coral Theme */}
            <section className="pt-44 pb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-[#ff8b69] text-4xl md:text-5xl font-bold uppercase tracking-wide">{heroTitle}</h1>
                </div>
            </section>

            {/* Services */}
            <section className="pt-13 pb-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {services.map((service) => (
                            <div key={service.title} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-[#ff8b69] mb-4">{service.title}</h3>
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
