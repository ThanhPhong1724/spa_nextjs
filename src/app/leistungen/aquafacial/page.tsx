"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
    {
        question: "Was ist eine Hautanalyse?",
        answer: "Bei der Hautanalyse wird Ihre Haut gemessen und analysiert – z. B. hinsichtlich Fettgehalt, Glanz, Pigmentierung und Hautunreinheiten. Die Ergebnisse helfen, Pflege, Produkte und Behandlungen gezielt auszuwählen und deren Wirkung messbar zu machen. 👉 Die Hautanalyse kann auch separat gebucht werden."
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
                                    <span className="text-3xl">✨</span>
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
                                    <span className="text-3xl">📊</span>
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
                                <span className="text-3xl">💧</span>
                            </div>
                            <h3 className="font-bold text-[#5c4033] mb-2">Tiefenreinigung</h3>
                            <p className="text-[#6b5344] text-sm">Porentiefe Reinigung entfernt Schmutz, Talg und abgestorbene Hautzellen.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-[#ff8b69]/10 rounded-full flex items-center justify-center mb-4">
                                <span className="text-3xl">💎</span>
                            </div>
                            <h3 className="font-bold text-[#5c4033] mb-2">Hydration</h3>
                            <p className="text-[#6b5344] text-sm">Intensive Feuchtigkeitsversorgung für pralle, strahlende Haut.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-[#ff8b69]/10 rounded-full flex items-center justify-center mb-4">
                                <span className="text-3xl">🔬</span>
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
                        <span className="text-2xl">📸</span>
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

            {/* CTA Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-[#5c4033] mb-6">Bereit für strahlende Haut?</h2>
                    <p className="text-[#6b5344] mb-8">
                        Buchen Sie jetzt Ihren AquaFacial-Termin und erleben Sie den Unterschied.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#ff8b69] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#e87a5a] transition-colors shadow-lg hover:shadow-xl"
                    >
                        Termin vereinbaren
                    </Link>
                </div>
            </section>

        </div>
    );
}
