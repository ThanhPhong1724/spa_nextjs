"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Typewriter Effect Component
function TypeWriter({ text, className = "" }: { text: string; className?: string }) {
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 2000;

        if (!isDeleting && displayText === text) {
            const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
            return () => clearTimeout(timeout);
        } else if (isDeleting && displayText === "") {
            const timeout = setTimeout(() => setIsDeleting(false), pauseTime);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            if (isDeleting) {
                setDisplayText(text.substring(0, displayText.length - 1));
            } else {
                setDisplayText(text.substring(0, displayText.length + 1));
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, text]);

    return (
        <span className={className}>
            {displayText}
            <span className="animate-pulse">|</span>
        </span>
    );
}

// ===== RELAX & GLOW PACKAGES (Existing HeadSpa) =====
const relaxGlowPackages = [
    {
        name: "Signature Asian Head Calm",
        description: "Durch die gezielte Stimulation traditioneller Druckpunkte lösen wir tief sitzende Blockaden und Verspannungen. Ideal für Stressabbau, mentale Klarheit und ganzheitliches Wohlbefinden.",
    },
    {
        name: "Headspa Essential",
        description: "Basispaket mit Kopfhautpflege, Kopfmassage, Haarsauna und Dekolleté-Massage – für ganzheitliche Entspannung und Pflege.",
    },
    {
        name: "Headspa Deluxe",
        description: "Ein exklusives Premium-Treatment, das intensive Kopfhautpflege mit einer tiefenentspannenden Nacken- und Schultermassage mit warmen Hot Stones verbindet.",
    },
    {
        name: "Headspa Signature",
        description: "Das höchste Headspa-Erlebnis, das körperliche Entspannung mit einer meditativen Klangreise verbindet, für maximale mentale Erholung und tiefe innere Balance.",
    },
    {
        name: "Headspa Together",
        description: "Gemeinsam entspannen und genießen – das Headspa-Erlebnis für zwei, ob Freundinnen, Mutter & Tochter oder als Paar.",
    }
];

// ===== FAQ =====
const faqs = [
    {
        question: "Warum ist die Kombination aus Oxygen-Technik und Laser besonders effektiv?",
        answer: "Oxygen und Laser wirken synergetisch: Oxygen bereitet die Kopfhaut vor, verbessert Durchblutung und Zellmilieu. Laser liefert gezielte Energie direkt an die Haarwurzel. Diese Kombination sorgt dafür, dass Haarfollikel reaktiviert statt nur gepflegt werden und Behandlungen nachhaltiger und messbarer wirken."
    },
    {
        question: "Für wen ist Hydro-Oxygen Scalp Glow geeignet?",
        answer: "Diese Anwendung eignet sich ideal bei trockener, empfindlicher oder unausgeglichener Kopfhaut sowie bei Spannungsgefühl, Juckreiz oder Produktablagerungen."
    },
    {
        question: "Für wen ist Laser Hair Boost geeignet?",
        answer: "Laser Hair Boost ist besonders geeignet bei feinem, kraftlosem oder dünner werdendem Haar sowie bei dem Wunsch nach mehr Haardichte und Vitalität."
    },
    {
        question: "Helfen die Anwendungen bei Haarausfall?",
        answer: "Beide Anwendungen dienen der kosmetischen Pflege der Kopfhaut. Sie können Haarverlust entgegenwirken, indem sie die Kopfhaut aktivieren und die Haarwurzelbasis stärken."
    },
    {
        question: "Sind die Behandlungen schmerzhaft oder invasiv?",
        answer: "Nein. Beide Anwendungen sind sanft, angenehm und nicht invasiv. Es ist keine Ausfallzeit erforderlich."
    },
    {
        question: "Wie oft sollten die Behandlungen durchgeführt werden?",
        answer: "Für optimale Ergebnisse empfehlen wir eine regelmäßige Anwendung, abgestimmt auf die individuellen Bedürfnisse der Kopfhaut. Die Häufigkeit hängt vollständig von der individuellen Reaktion der Haare sowie vom Zustand der Kopfhaut ab."
    },
    {
        question: "Hilft das Treatment wirklich dabei, die Haardichte sichtbar zu steigern?",
        answer: "Absolut. Die Wirksamkeit dieser Technologien ist weltweit anerkannt und wurde sogar bereits im US-Fernsehen als wegweisende Methode für die Haarpflege vorgestellt."
    },
    {
        question: "Was unterscheidet unser LED-/Laser-Gerät von Standard-Produkten auf Amazon?",
        answer: "Nur professionelle Lasergeräte mit exakt definierter Wellenlänge und Frequenz ermöglichen eine gezielte, wirksame und risikoarme Anwendung. Standardgeräte für den Heimgebrauch erreichen diese Präzision nicht, wodurch Wirkung ausbleiben und unnötige Kosten entstehen können."
    },
    {
        question: "Warum unser Headspa?",
        answer: "Ein exklusives, ganzheitliches Headspa-Konzept – von professioneller Kopfhautpflege bis zu tiefgehender Entspannung in stilvollem Ambiente, auch als Erlebnis für zwei."
    },
    {
        question: "Was macht unsere Kopfmassage besonders?",
        answer: "Unsere Kopfmassage folgt den Prinzipien der asiatischen Naturheilkunde und verbindet achtsame Berührungen mit gezielten Druckpunkten – für spürbare Entspannung und neues inneres Gleichgewicht."
    }
];

export default function HeadspaPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [heroTitle, setHeroTitle] = useState("PROFESSIONELLE KOPFHAUTPFLEGE");
    const [videoUrl, setVideoUrl] = useState("https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4");
    const [typewriterText, setTypewriterText] = useState("Entspannung für Körper und Geist");
    const [activeTab, setActiveTab] = useState<'relax' | 'detox'>('relax');

    // Fetch CMS content
    useEffect(() => {
        fetch("/api/page-content?pageKey=headspa_page", { cache: 'no-store' })
            .then(res => res.json())
            .then(data => {
                if (data.hero?.title_de) setHeroTitle(data.hero.title_de);
                if (data.hero?.video_url) setVideoUrl(data.hero.video_url);
                if (data.hero?.typewriter_text_de) setTypewriterText(data.hero.typewriter_text_de);
            })
            .catch((err) => console.error('Fetch error:', err));
    }, []);

    return (
        <div className="min-h-screen bg-[#f5ebe0]">
            {/* Hero */}
            <section className="pt-44 pb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-[#ff8b69] text-3xl md:text-4xl font-bold uppercase tracking-wide">{heroTitle}</h1>
                </div>
            </section>

            {/* Video Section with Typewriter */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                        <video
                            key={videoUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-64 md:h-96 object-cover"
                        >
                            <source src={videoUrl} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#5c4033]/80 to-transparent flex items-end justify-center pb-8">
                            <p className="text-white text-xl md:text-4xl font-medium text-center px-4">
                                <TypeWriter text={typewriterText} />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Category Tabs */}
            <section className="py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => setActiveTab('relax')}
                            className={`px-8 py-4 rounded-full font-bold text-lg transition-all ${activeTab === 'relax'
                                    ? 'bg-[#ff8b69] text-white shadow-lg'
                                    : 'bg-white text-[#5c4033] hover:bg-[#ff8b69]/10'
                                }`}
                        >
                            🧘 Relax & Glow
                        </button>
                        <button
                            onClick={() => setActiveTab('detox')}
                            className={`px-8 py-4 rounded-full font-bold text-lg transition-all ${activeTab === 'detox'
                                    ? 'bg-[#ff8b69] text-white shadow-lg'
                                    : 'bg-white text-[#5c4033] hover:bg-[#ff8b69]/10'
                                }`}
                        >
                            🔬 Detox & Growth
                        </button>
                    </div>
                </div>
            </section>

            {/* ===== RELAX & GLOW Section ===== */}
            {activeTab === 'relax' && (
                <section className="py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#5c4033] mb-4">Relax & Glow</h2>
                            <p className="text-[#6b5344] max-w-2xl mx-auto">
                                Trọng tâm: Thư giãn, massage, làm đẹp tóc.<br />
                                Dành cho: Người muốn xả stress, tận hưởng không gian spa thư thái.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relaxGlowPackages.map((pkg) => (
                                <div key={pkg.name} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group p-6">
                                    <h3 className="text-lg font-bold text-[#ff8b69] mb-3">{pkg.name}</h3>
                                    <p className="text-[#6b5344] text-sm">{pkg.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ===== DETOX & GROWTH Section ===== */}
            {activeTab === 'detox' && (
                <section className="py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#5c4033] mb-4">Detox & Growth</h2>
                            <p className="text-[#6b5344] max-w-2xl mx-auto">
                                Trọng tâm: Làm sạch sâu, trị gàu/dầu, kích thích mọc tóc.<br />
                                Dành cho: Người gặp vấn đề về da đầu và rụng tóc.
                            </p>
                        </div>

                        {/* Premium Treatment - Hydro-Oxygen Scalp Glow */}
                        <div className="mb-12">
                            <div className="bg-gradient-to-br from-[#5c4033] to-[#3d2a22] rounded-3xl p-8 text-white relative overflow-hidden">
                                <div className="absolute top-4 right-4 bg-[#ff8b69] text-white px-4 py-1 rounded-full text-sm font-bold">
                                    ⭐ PREMIUM TREATMENT
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    Hydro-Oxygen Scalp Glow
                                </h3>
                                <p className="text-white/80 text-lg mb-6">The Ultimate Hair & Scalp Detox</p>

                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-white/10 rounded-xl p-5">
                                        <h4 className="font-bold text-[#ff8b69] mb-2">💧 Bubble Cleaning</h4>
                                        <p className="text-white/80 text-sm">
                                            Sanftes Vakuum mit der Bubble-Technologie entfernt Talg, Schuppen und hartnäckige Rückstände, die eine normale Haarwäsche nicht erreicht.
                                        </p>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-5">
                                        <h4 className="font-bold text-[#ff8b69] mb-2">🌬️ Oxygen Infusion</h4>
                                        <p className="text-white/80 text-sm">
                                            Reiner Sauerstoff belebt und revitalisiert die Kopfhaut.
                                        </p>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-5">
                                        <h4 className="font-bold text-[#ff8b69] mb-2">✨ Nutrient Serum</h4>
                                        <p className="text-white/80 text-sm">
                                            Aquafacial-Technik schleust exklusive Nährstoffe direkt bis zur Haarwurzel ein.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white/10 rounded-xl p-5">
                                    <h4 className="font-bold text-[#ff8b69] mb-2">✅ Das Ergebnis</h4>
                                    <p className="text-white/90">
                                        Eine tiefengereinigte, hydratisierte Kopfhaut und sichtbar glänzendes Haar – spürbar befreit von Altlasten.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Laser Hair Boost */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#5c4033] mb-4">
                                Laser Hair Boost – Growth Support & Density
                            </h3>
                            <p className="text-[#ff8b69] font-semibold text-lg mb-4">
                                Eine weltweit anerkannte Lösung gegen Haarausfall
                            </p>
                            <p className="text-[#6b5344] mb-6">
                                Dünnes Haar und Haarausfall sind heute keine ästhetische Belastung mehr – weder für Männer noch für Frauen.
                                Diese moderne Technologie wird weltweit erfolgreich eingesetzt und geschätzt.
                            </p>

                            <div className="bg-[#f5ebe0] rounded-xl p-6 mb-6">
                                <p className="text-[#5c4033] mb-4">
                                    Eine exklusive Anwendung mit spezialisierter Gerätetechnologie, die reinen Sauerstoff mit fokussierter Laser-Energie kombiniert.
                                    Die aktivierende Behandlung wirkt Haarverlust entgegen, stärkt die Haarwurzelbasis und unterstützt sichtbar mehr Dichte und Vitalität.
                                </p>
                            </div>

                            {/* Expert Videos */}
                            <div className="mb-6">
                                <h4 className="font-bold text-[#5c4033] mb-4">
                                    👉 Expertenmeinungen und Studien:
                                </h4>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <a
                                        href="https://www.youtube.com/watch?v=QRus_P-EewA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-red-50 border border-red-200 rounded-xl p-4 hover:bg-red-100 transition-colors flex items-center gap-3"
                                    >
                                        <span className="text-2xl">▶️</span>
                                        <span className="text-[#5c4033] text-sm font-medium">Video 1: Wirksamkeit bestätigt</span>
                                    </a>
                                    <a
                                        href="https://www.youtube.com/watch?v=f3cwKKKhHi4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-red-50 border border-red-200 rounded-xl p-4 hover:bg-red-100 transition-colors flex items-center gap-3"
                                    >
                                        <span className="text-2xl">▶️</span>
                                        <span className="text-[#5c4033] text-sm font-medium">Video 2: Technologie erklärt</span>
                                    </a>
                                    <a
                                        href="https://www.youtube.com/watch?v=693XjyHcxOE"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-red-50 border border-red-200 rounded-xl p-4 hover:bg-red-100 transition-colors flex items-center gap-3"
                                    >
                                        <span className="text-2xl">▶️</span>
                                        <span className="text-[#5c4033] text-sm font-medium">Video 3: Arzt-Bestätigung</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

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
                                    <span className={`material-symbols-outlined transition-transform duration-300 ${openFaq === index ? "rotate-180 text-[#5c4033]" : "text-[#ff8b69]"
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
