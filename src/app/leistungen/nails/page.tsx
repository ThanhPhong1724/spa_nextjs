"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const services = [
    {
        title: "NAGELMODELLAGE",
        description: "Mehr als 900 Farben und Designs ohne Grenzen – von klassisch bis extravagant. Wir gestalten Ihre Nägel mit höchster Sorgfalt für jeden individuellen Look.",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop"
    },
    {
        title: "FUSSPFLEGE",
        description: "Exklusive Fußpflege mit modernem Dampfgerät: Sanfte Tiefenentspannung, geöffnete Poren und maximale Pflegeaufnahme – für ein spürbar gepflegtes und entspanntes Hautgefühl.",
        image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&h=400&fit=crop"
    }
];

const faqs = [
    {
        question: "Warum sollten Sie uns wählen?",
        answer: "Über 10 Jahre Erfahrung, mehr als 900 Farben & Designs, Garantie auf unsere Arbeiten – und wir nehmen uns Zeit für eine sorgfältige, nicht überhastete Behandlung."
    },
    {
        question: "Gibt es kostenlose Reparaturen?",
        answer: "Ja – immer kostenlos, sogar nach 3 oder 4 Wochen. Egal aus welchem Grund."
    },
    {
        question: "Was ist das Besondere an unserer Fußpflege?",
        answer: "Wir arbeiten mit Dampfgerät und Silikon-Socken, damit die Haut sich entspannt, die Poren sich öffnen und die Pflege tiefer einzieht – für besonders weiche, gepflegte Füße."
    }
];

export default function NailsPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [menuImage, setMenuImage] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api/page-content?page=nails")
            .then(res => res.json())
            .then(data => {
                if (data.menu_image?.image) {
                    setMenuImage(data.menu_image.image);
                }
            })
            .catch(() => { });
    }, []);

    return (
        <div className="min-h-screen bg-[#f5ebe0]">
            {/* Hero - Coral Theme */}
            <section className="pt-44 pb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-[#ff8b69] text-4xl md:text-5xl font-bold uppercase tracking-wide">NAILS</h1>
                </div>
            </section>

            {/* Services */}
            <section className="pt-13 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                                    <h3 className="text-2xl font-bold text-[#ff8b69] uppercase tracking-wide mb-4">{service.title}</h3>
                                    <p className="text-[#5c4033] font-medium">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-[#ff8b69] text-center mb-8">
                        Häufig gestellte Fragen
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
                                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}>
                                    <div className="px-6 py-4 border-t border-[#ff8b69]/10">
                                        <p className="text-[#6b5344] leading-relaxed">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Price List */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-[#ff8b69] text-center mb-8">Preisliste</h2>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#ff8b69]/20">
                        {menuImage ? (
                            <img
                                src={menuImage}
                                alt="Nails Preisliste"
                                className="w-full h-auto"
                            />
                        ) : (
                            <div className="aspect-[16/9] bg-gradient-to-br from-[#f5ebe0] to-[#efe5d8] flex items-center justify-center">
                                <div className="text-center text-[#8b7355]">
                                    <span className="material-symbols-outlined text-6xl mb-4">spa</span>
                                    <p className="font-medium">Preisliste wird geladen...</p>
                                    <p className="text-sm mt-2">Bitte im Admin-Bereich hochladen</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>


        </div>
    );
}
