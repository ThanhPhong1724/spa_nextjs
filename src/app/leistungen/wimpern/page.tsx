"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const services = [
    {
        title: "Wimpernverlängerung",
        description: "Typgerechte Wimpernverlängerung für mehr Volumen und einen frischen, eleganten Blick.",
        image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=400&fit=crop"
    },
    // {
    //     title: "Quick-Lash Look – 7 Tage Effekt",
    //     description: "Perfekt zum Ausprobieren: Unser 1-Wochen-Wimpernlook bietet einen schönen, dezenten Effekt zu einem kleinen Preis – ideal für Events, Reisen oder als Test-Set.",
    //     image: "https://images.unsplash.com/photo-1516914589923-f105f1535f88?w=600&h=400&fit=crop"
    // },
    {
        title: "Wimpernwelle (Wimpernlifting)",
        description: "Ideal bei langen Naturwimpern: Ein Lifting, das ohne Wimpernzange auskommt und eure natürliche Schönheit betont.",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop"
    }
];

const faqs = [
    {
        question: "Warum sollten Sie unser Studio wählen?",
        answer: "Über 10 Jahre Erfahrung, eine große Auswahl an ultrafeinen bis modischen Wimpernarten, sorgfältige Beratung zur passenden Augenform und Technik, die Ihre Naturwimpern schützt. Bei uns gilt: schön, leicht und haltbar – aber niemals schädlich für Ihre echten Wimpern."
    },
    {
        question: "Was macht eine gute Wimpernverlängerung aus?",
        answer: "Eine hochwertige Verlängerung ist: schön geformt, leicht und reizfrei, sieht auch nach 3–4 Wochen noch ordentlich aus – nicht chaotisch, ca. 50% bleiben erhalten, und das Wichtigste: Ihre Naturwimpern bleiben gesund und unbeschädigt."
    },
    {
        question: "Wie entferne ich Wimpernverlängerungen richtig?",
        answer: "Nicht selbst ziehen! Wir nutzen einen professionellen Remover, der den Kleber sanft auflöst – schnell, ohne Reizung und ohne Verlust der Naturwimpern."
    },
    {
        question: "Brauche ich Mascara bei Extensions?",
        answer: "Nein. Mascara verklebt die Extensions und beim Abschminken wird die Klebequalität beeinträchtigt, wodurch sowohl die Haltbarkeit als auch die Form der Wimpern beeinflusst werden."
    },
    {
        question: "Wie lange hält eine Wimpernwelle (Wimpernlifting)?",
        answer: "Eine Wimpernwelle hält im Durchschnitt ca. 4 Wochen, je nach Haarstruktur und Pflege."
    }
];

export default function WimpernPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [menuImage, setMenuImage] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api/page-content?page=wimpern")
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
                    <h1 className="text-[#ff8b69] text-4xl md:text-5xl font-bold uppercase tracking-wide">WIMPERN</h1>
                </div>
            </section>

            {/* Services */}
            <section className="pt-13 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {services.map((service) => (
                            <div key={service.title} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-[#ff8b69] mb-2">{service.title}</h3>
                                    <p className="text-[#6b5344] text-sm">{service.description}</p>
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
                                alt="Wimpern Preisliste"
                                className="w-full h-auto"
                            />
                        ) : (
                            <div className="aspect-[16/9] bg-gradient-to-br from-[#f5ebe0] to-[#efe5d8] flex items-center justify-center">
                                <div className="text-center text-[#8b7355]">
                                    <span className="material-symbols-outlined text-6xl mb-4">visibility</span>
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
