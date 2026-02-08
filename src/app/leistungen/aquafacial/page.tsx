"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
    {
        question: "Was ist eine Hautanalyse?",
        answer: "Bei der Hautanalyse wird Ihre Haut gemessen und analysiert – z. B. hinsichtlich Fettgehalt, Glanz, Pigmentierung und Hautunreinheiten. Die Ergebnisse helfen, Pflege, Produkte und Behandlungen gezielt auszuwählen und deren Wirkung messbar zu machen. Die Hautanalyse kann auch separat gebucht werden."
    },
    {
        question: "Was ist AquaFacial?",
        answer: "AquaFacial ist eine moderne Gesichtsbehandlung zur Tiefenreinigung, Hydration und Wirkstoffversorgung der Haut – sanft, effektiv und nicht invasiv."
    },
    {
        question: "Warum ist diese Behandlung sinnvoll?",
        answer: "Die AquaFacial-Behandlung reinigt die Haut porentief, entfernt abgestorbene Hornschichten und unterstützt die Hauterneuerung für ein frischeres, jugendlicheres Hautbild. Durch moderne Technologie werden Pflegewirkstoffe tief in die Haut eingeschleust und kollagenunterstützende Prozesse gefördert."
    },
    {
        question: "Sind Ergebnisse sofort sichtbar?",
        answer: "Ja. Ein sichtbarer Vorher–Nachher-Effekt ist direkt nach der Behandlung erkennbar."
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
    }
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

            {/* Introduction */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                        <p className="text-xl md:text-2xl text-[#5c4033] leading-relaxed mb-8 text-center">
                            Jede schöne Haut, jede Ausstrahlung und selbst die hochwertigste Pflege wirken nur auf <strong className="text-[#ff8b69]">gründlich gereinigter Haut</strong>.
                        </p>
                        <p className="text-[#6b5344] text-lg text-center mb-10">
                            Mit modernster Technologie und präziser Analyse schenken wir dir ein sofort verfeinertes, strahlendes Hautbild.
                        </p>

                        {/* Key Features */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-[#ff8b69]/10 to-[#ff8b69]/5 rounded-2xl p-6 border border-[#ff8b69]/20">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#ff8b69]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-[#ff8b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#5c4033] mb-2">Bis zu 15 präzise Pflegeschritte</h3>
                                        <p className="text-[#6b5344] text-sm">
                                            Intensive, porentiefe Reinigung und die mehrfache Einschleusung hochwertiger Wirkstoffe.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-[#ff8b69]/10 to-[#ff8b69]/5 rounded-2xl p-6 border border-[#ff8b69]/20">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#ff8b69]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-[#ff8b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#5c4033] mb-2">Professionelle Hautanalyse</h3>
                                        <p className="text-[#6b5344] text-sm">
                                            Individuelle Anpassung jeder Behandlung und sofort sichtbare Vorher–Nachher-Ergebnisse nach der Sitzung.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[#5c4033] text-center mb-10">Was macht AquaFacial so besonders?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-[#ff8b69]/10 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-[#ff8b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-[#5c4033] mb-2">Tiefenreinigung</h3>
                            <p className="text-[#6b5344] text-sm">Porentiefe Reinigung entfernt Schmutz, Talg und abgestorbene Hautzellen.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-[#ff8b69]/10 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-[#ff8b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-[#5c4033] mb-2">Hydration</h3>
                            <p className="text-[#6b5344] text-sm">Intensive Feuchtigkeitsversorgung für pralle, strahlende Haut.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-[#ff8b69]/10 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-[#ff8b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517l-2.387-.477a2 2 0 01-1.594-1.955v-8.164a2 2 0 012.5-1.95l2.387.478a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517l2.387.477a2 2 0 011.594 1.955v8.164a2 2 0 01-.948 1.7" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-[#5c4033] mb-2">Wirkstoffversorgung</h3>
                            <p className="text-[#6b5344] text-sm">Hochwertige Seren werden tief in die Haut eingeschleust.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-12 bg-gradient-to-br from-[#5c4033] to-[#3d2a22]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Sofort sichtbare Ergebnisse</h2>
                    <p className="text-white/80 text-lg mb-8">
                        Erleben Sie den Unterschied direkt nach der ersten Behandlung.
                        Ihre Haut fühlt sich erfrischt, gereinigt und strahlend an.
                    </p>
                    <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-6 py-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-white font-medium">Vorher–Nachher Dokumentation inklusive</span>
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
        </div>
    );
}
