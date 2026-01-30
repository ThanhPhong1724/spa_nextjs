"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const faqs = [
    {
        question: "Warum sollte ich euch wählen?",
        answer: "Langjährige Erfahrung, fundierte Hautkenntnisse und regelmäßige Schulungen in Asien & Europa ermöglichen uns, Risiken zu minimieren und natürlich wirkende Ergebnisse bei verschiedenen Hauttypen zu erzielen."
    },
    {
        question: "Wie lange hält Permanent Make-up?",
        answer: "In der Regel 3–5 Jahre, abhängig von Hauttyp, Hautfarbe und äußeren Einflüssen wie Sonne, Pflege und Lebensstil."
    },
    {
        question: "Wie viele Behandlungen sind notwendig?",
        answer: "Meist 1–2 Behandlungen im Abstand von ca. 4 Wochen, je nach Hautstruktur und individueller Farbaufnahme."
    },
    {
        question: "Wie wird sichergestellt, dass Form und Farbe zu mir passen?",
        answer: "Form und Farbe werden vor der Behandlung individuell vorgezeichnet. Die Pigmentierung beginnt erst nach deiner vollständigen Zustimmung."
    },
    {
        question: "Was erwartet mich bei der Beratung?",
        answer: "Bei der Beratung informieren wir nicht nur über mögliche Risiken, sondern analysieren auch ehrlich, ob deine Wünsche und Erwartungen realistisch und umsetzbar sind. Wir beraten offen und transparent, damit du keine falschen Erwartungen hast und kein Geld unnötig ausgibst."
    },
    {
        question: "Tut Permanent Make-up weh?",
        answer: "Dank moderner, oberflächlicher Technik ist die Behandlung kaum schmerzhaft und in der Regel gut verträglich."
    }
];

export default function PermanentMakeupPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [menuImage, setMenuImage] = useState<string | null>(null);
    const [heroTitle, setHeroTitle] = useState("PERMANENT MAKE UP");
    const [videoUrl, setVideoUrl] = useState("https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4");
    const [browsImage, setBrowsImage] = useState("https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop");
    const [lipsImage, setLipsImage] = useState("https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&h=400&fit=crop");
    const [eyesImage, setEyesImage] = useState("https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=400&fit=crop");

    useEffect(() => {
        fetch("/api/page-content?pageKey=permanent_makeup_page", { cache: 'no-store' })
            .then(res => res.json())
            .then(data => {
                if (data.hero?.title_de) setHeroTitle(data.hero.title_de);
                if (data.hero?.video_url) setVideoUrl(data.hero.video_url);
                if (data.menu_image?.image) setMenuImage(data.menu_image.image);
                if (data.service_images?.brows_image) setBrowsImage(data.service_images.brows_image);
                if (data.service_images?.lips_image) setLipsImage(data.service_images.lips_image);
                if (data.service_images?.eyes_image) setEyesImage(data.service_images.eyes_image);
            })
            .catch(() => { });
    }, []);

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
                            <h2 className="text-2xl font-bold text-[#5c4033] mb-6">Zeitlose Schönheit, jeden Tag.</h2>
                            <p className="text-[#6b5344] leading-relaxed mb-6">
                                Wach auf und sei fertig! Dank 10-jähriger Expertise und kontinuierlicher Fortbildung bieten wir Ihnen die besten und sichersten Verfahren der Branche. Wir minimieren jedes Risiko und setzen auf innovative Methoden für ein täuschend echtes Finish. Qualität, die man sieht – präzise, langanhaltend und typgerecht.
                            </p>
                            <ul className="text-[#6b5344] leading-relaxed space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#ff8b69]">•</span>
                                    <span><strong className="text-[#5c4033]">Brows:</strong> Perfekte Form & Fülle.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#ff8b69]">•</span>
                                    <span><strong className="text-[#5c4033]">Lips:</strong> Sanfte Farbe & klare Konturen.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#ff8b69]">•</span>
                                    <span><strong className="text-[#5c4033]">Eyes:</strong> Ausdrucksstarker Blick ohne Schminken.</span>
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

                    {/* 3 Service Images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {/* Brows */}
                        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                            <img
                                src={browsImage}
                                alt="Brows - Permanent Make Up"
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Lips */}
                        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                            <img
                                src={lipsImage}
                                alt="Lips - Permanent Make Up"
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Eyes */}
                        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                            <img
                                src={eyesImage}
                                alt="Eyes - Permanent Make Up"
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
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

            {/* Price List Image */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-[#ff8b69] text-center mb-8">Preisliste</h2>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#ff8b69]/20">
                        {menuImage ? (
                            <img
                                src={menuImage}
                                alt="Permanent Make Up Preisliste"
                                className="w-full h-auto"
                            />
                        ) : (
                            <div className="aspect-[16/9] bg-gradient-to-br from-[#f5ebe0] to-[#efe5d8] flex items-center justify-center">
                                <div className="text-center text-[#8b7355]">
                                    <span className="material-symbols-outlined text-6xl mb-4">face_retouching_natural</span>
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
