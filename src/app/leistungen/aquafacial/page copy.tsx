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

export default function AquafacialPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#f5ebe0]">
            {/* Section 1: Highlight - Hautanalyse & Glow-Technologie */}
            <section className="pt-44 pb-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-white to-[#faf4ef] rounded-3xl p-8 md:p-12 shadow-xl border border-[#d4a373]/20 text-center">
                        <div className="inline-flex items-center gap-2 bg-[#ff8b69]/10 text-[#ff8b69] px-5 py-2 rounded-full font-semibold text-sm mb-6 border border-[#ff8b69]/20">
                            <span>✨</span>
                            <span>Exklusives Highlight</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5c4033] mb-6">
                            Hautanalyse & Glow-Technologie
                        </h2>
                        <p className="text-[#6b5344] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            Starten Sie mit einer professionellen Hautanalyse – für Klarheit über Ihren Hautzustand und für gezielte & wirksame Pflege.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 2: AQUAFACIAL Main Content */}
            <section className="pb-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h1 className="text-[#ff8b69] text-4xl md:text-6xl font-bold uppercase tracking-wide mb-4">AQUAFACIAL</h1>
                        <p className="text-[#5c4033] text-2xl md:text-3xl font-serif font-bold">
                            Maximale Wirkung – kein Verzicht.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#d4a373]/20">
                        <p className="text-[#5c4033] text-lg md:text-xl leading-relaxed text-center mb-10">
                            Verstopfte Poren blockieren Ihre Pflegeerfolge.<br />
                            Erleben Sie die <strong className="text-[#ff8b69]">10 Funktionen</strong> modernster Technologie für Ihren perfekten Glow:
                        </p>

                        {/* 5 Feature Items */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
                            {[
                                { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", label: "Analyse & sanfte Exfoliation" },
                                { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", label: "Tiefenreinigung & Porenverfeinerung" },
                                { icon: "M5 10l7-7m0 0l7 7m-7-7v18", label: "Lifting & Straffung" },
                                { icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z", label: "Sauerstoff- & Feuchtigkeits-Boost" },
                                { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Milderung feiner Linien & optimierte Wirkstoffaufnahme" },
                            ].map((item, i) => (
                                <div key={i} className="bg-gradient-to-br from-[#ff8b69]/10 to-[#ff8b69]/5 rounded-2xl p-5 border border-[#ff8b69]/20 flex items-center gap-4 hover:shadow-md transition-shadow group">
                                    <div className="w-11 h-11 bg-gradient-to-br from-[#ff8b69] to-[#d4a373] rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-[#5c4033] text-sm md:text-[15px] leading-snug">{item.label}</span>
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

            {/* A4 Info Image + Download */}
            <section className="py-16 bg-[#f5ebe0]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-[#5c4033] mb-8 font-serif">Informationsblatt</h2>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#d4a373]/20 p-4">
                        <div className="relative w-full" style={{ aspectRatio: '210 / 297' }}>
                            <img
                                src="/images/aquafacial-info.jpg"
                                alt="Aquafacial – Informationsblatt"
                                className="w-full h-full object-contain rounded-xl"
                                onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/630x891/f5ebe0/5c4033?text=Aquafacial%0AInformationsblatt%0A(A4)'; }}
                            />
                        </div>
                    </div>
                    <a
                        href="/images/aquafacial-info.jpg"
                        download="Aquafacial-Informationsblatt.jpg"
                        className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-[#ff8b69] to-[#d4a373] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                    </a>
                </div>
            </section>
        </div>
    );
}
