"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
    {
        question: "Was ist eine Hautanalyse?",
        answer: "Bei der Hautanalyse wird Ihre Haut gemessen und analysiert – z. B. hinsichtlich Fettgehalt, Glanz, Pigmentierung und Hautunreinheiten. Die Ergebnisse helfen, Pflege, Produkte und Behandlungen gezielt auszuwählen und deren Wirkung messbar zu machen. Die Hautanalyse kann auch separat gebucht werden."
    },
    {
        question: "Warum ist diese Behandlung sinnvoll?",
        answer: "Die tägliche Reinigung entfernt oberflächliche Verschmutzungen, erreicht jedoch nicht die verhornte Hautschicht, die wie eine Barriere wirkt und die Aufnahme von Pflegeprodukten mindert.\n\nMit High-Tech-Elementen wie Bubble Cleaning, EMS Nano-Crystal, Oxygen und Thermo-Rollern wird die Haut intensiv gepflegt. Durch eine präzise Hautanalyse erhalten Sie individuelle Empfehlungen für Pflege, Produkte und Ernährung – für nachhaltige Ergebnisse.\n\nEin besonderes Erlebnis für Frauen und Männer, die ihre Haut, ihre Ausstrahlung wertschätzen und sich bewusst etwas Gutes tun möchten. ✨"
    },
    {
        question: "Sind Ergebnisse sichtbar?",
        answer: "JA! Direkt nach der Behandlung folgt der Scan. Erlebe den Vorher-Nachher-Beweis live auf dem Monitor. Ein sichtbares Resultat – Maximale Transparenz für eine Investition – Einfach preiswert."
    },
    {
        question: "Ist die Behandlung schmerzhaft?",
        answer: "Nein. AquaFacial ist angenehm und entspannend."
    },
    {
        question: "Wie oft sollte AquaFacial durchgeführt werden?",
        answer: "Je nach Hautzustand alle 3–4 Wochen oder nach individueller Empfehlung."
    },
    {
        question: "Für welche Hauttypen ist AquaFacial geeignet?",
        answer: "Für alle Hauttypen, auch für empfindliche Haut. Die Behandlung sowie die verwendeten Produkte werden individuell auf den Hauttyp abgestimmt – basierend auf einer Hautanalyse vor der Behandlung."
    },
    {
        question: "Warum gibt es zwei Pakete BALANCE & ADVANCED?",
        answer: "Ganz einfach: Deine Haut ist individuell. Nach unserer präzisen Hautanalyse empfehlen wir dir genau die intensiven Schritte, die du wirklich brauchst – sei es ein intensives Peeling oder eine Lichttherapie. Da nicht jede Haut sofort für intensive Treatments bereit ist, starten wir immer mit dem Essential-Paket. So garantieren wir maximale Sicherheit und beste Ergebnisse."
    },
    {
        question: "Was unterscheidet die Bubble-Cleaning-Funktion von herkömmlichen Porenreinigern?",
        answer: "Die professionelle Bubble-Cleaning-Technologie arbeitet mit präzise regulierter Saugstärke und Geschwindigkeit, individuell angepasst an jeden Hauttyp. Gleichzeitig werden während der Reinigung pflegende Wirkstoffe zugeführt. So wird die Haut gründlich gereinigt, ohne sie auszutrocknen oder das Feuchtigkeitsgleichgewicht zu stören – im Gegensatz zu vielen handelsüblichen Geräten."
    }
];

const keywords = [
    { label: "Premium-Selfcare-Moment", icon: "spa" },
    { label: "Modernstes 15-in-1-System", icon: "precision_manufacturing" },
    { label: "Präzise Hautanalyse", icon: "monitor_heart" },
    { label: "Profi-Tiefenreinigung", icon: "water_drop" },
    { label: "Intensive Wirkstoffversorgung", icon: "science" },
    { label: "Sofort sichtbarer Glow", icon: "auto_awesome" },
];

export default function AquafacialPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#f5ebe0]">
            {/* Hero */}
            <section className="pt-44 pb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-[#ff8b69] text-4xl md:text-5xl font-bold uppercase tracking-wide">AQUAFACIAL</h1>
                </div>
            </section>

            {/* Image Area */}
            <section className="py-8">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl overflow-hidden shadow-xl bg-[#e8d5c4] h-64 md:h-96 flex items-center justify-center">
                        <div className="text-center text-[#5c4033]/40">
                            <span className="material-symbols-outlined text-6xl mb-2">image</span>
                            <p className="text-lg font-medium">Bild wird hier hinzugefügt</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
                        <p className="text-xl md:text-2xl text-[#5c4033] leading-relaxed mb-8">
                            Jede schöne Haut, jede Ausstrahlung und selbst die hochwertigste Pflege wirken nur auf <strong className="text-[#ff8b69]">gründlich gereinigter Haut</strong>.
                        </p>
                        <p className="text-[#6b5344] text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
                            Wir vereinen High-Tech und individuelle Analyse für ein sofort frisches, verfeinertes Hautbild. Gönn dir diesen Moment – denn Selbstliebe beginnt mit bewusster Pflege.
                        </p>

                        {/* Tagline */}
                        <p className="text-[#ff8b69] font-semibold text-base italic mb-10">
                            Für Frauen, die wissen: Selbstpflege ist Selbstliebe – mit klar sichtbarem Ergebnis.
                        </p>

                        {/* 6 Keywords Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {keywords.map((kw, i) => (
                                <div key={i} className="bg-gradient-to-br from-[#ff8b69]/10 to-[#ff8b69]/5 rounded-2xl p-5 border border-[#ff8b69]/20 flex items-center gap-3 hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-[#ff8b69]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-[#ff8b69] text-xl">{kw.icon}</span>
                                    </div>
                                    <span className="font-bold text-[#5c4033] text-sm">{kw.label}</span>
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
        </div>
    );
}
