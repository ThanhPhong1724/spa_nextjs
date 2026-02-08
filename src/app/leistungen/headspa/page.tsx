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

// SVG Icons
const SpaIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.092 12.316a9 9 0 1 1 -8.963 -12.316z" />
    </svg>
);

const LabIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 0 0 -1.022 -.547l-2.387 -.477a6 6 0 0 0 -3.86 .517l-.318 .158a6 6 0 0 1 -3.86 .517l-2.387 -.477a2 2 0 0 1 -1.594 -1.955v-8.164a2 2 0 0 1 2.5 -1.95l2.387 .478a6 6 0 0 0 3.86 -.517l.318 -.158a6 6 0 0 1 3.86 -.517l2.387 .477a2 2 0 0 1 1.594 1.955v8.164a2 2 0 0 1 -.948 1.7" />
    </svg>
);

// ===== RELAX & GLOW PACKAGES (with images) =====
const getRelaxGlowPackages = (packageImages: string[]) => [
    {
        name: "Signature Asian Head Calm",
        description: "Durch die gezielte Stimulation traditioneller Druckpunkte lösen wir tief sitzende Blockaden und Verspannungen. Ideal für Stressabbau, mentale Klarheit und ganzheitliches Wohlbefinden.",
        image: packageImages[0] || "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop"
    },
    {
        name: "Headspa Essential",
        description: "Basispaket mit Kopfhautpflege, Kopfmassage, Haarsauna und Dekolleté-Massage – für ganzheitliche Entspannung und Pflege.",
        image: packageImages[1] || "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop"
    },
    {
        name: "Headspa Deluxe",
        description: "Ein exklusives Premium-Treatment, das intensive Kopfhautpflege mit einer tiefenentspannenden Nacken- und Schultermassage mit warmen Hot Stones verbindet.",
        image: packageImages[2] || "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop"
    },
    {
        name: "Headspa Signature",
        description: "Das höchste Headspa-Erlebnis, das körperliche Entspannung mit einer meditativen Klangreise verbindet, für maximale mentale Erholung und tiefe innere Balance.",
        image: packageImages[3] || "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&h=400&fit=crop"
    },
    {
        name: "Headspa Together",
        description: "Gemeinsam entspannen und genießen – das Headspa-Erlebnis für zwei, ob Freundinnen, Mutter & Tochter oder als Paar.",
        image: packageImages[4] || "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop"
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
    const [packageImages, setPackageImages] = useState<string[]>([]);

    // Fetch CMS content
    useEffect(() => {
        fetch("/api/page-content?pageKey=headspa_page", { cache: 'no-store' })
            .then(res => res.json())
            .then(data => {
                if (data.hero?.title_de) setHeroTitle(data.hero.title_de);
                if (data.hero?.video_url) setVideoUrl(data.hero.video_url);
                if (data.hero?.typewriter_text_de) setTypewriterText(data.hero.typewriter_text_de);
                if (data.package_images) {
                    const images = [
                        data.package_images.package1_image,
                        data.package_images.package2_image,
                        data.package_images.package3_image,
                        data.package_images.package4_image,
                        data.package_images.package5_image,
                    ].filter(Boolean);
                    setPackageImages(images);
                }
            })
            .catch((err) => console.error('Fetch error:', err));
    }, []);

    const relaxGlowPackages = getRelaxGlowPackages(packageImages);

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
                            className={`px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 ${activeTab === 'relax'
                                ? 'bg-[#ff8b69] text-white shadow-lg'
                                : 'bg-white text-[#5c4033] hover:bg-[#ff8b69]/10'
                                }`}
                        >
                            <SpaIcon />
                            Relax & Glow
                        </button>
                        <button
                            onClick={() => setActiveTab('detox')}
                            className={`px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 ${activeTab === 'detox'
                                ? 'bg-[#ff8b69] text-white shadow-lg'
                                : 'bg-white text-[#5c4033] hover:bg-[#ff8b69]/10'
                                }`}
                        >
                            <LabIcon />
                            Detox & Growth
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
                                Entspannung, Massage und Haarpflege.<br />
                                Für alle, die Stress abbauen und eine ruhige Atmosphäre genießen möchten.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relaxGlowPackages.map((pkg) => (
                                <div key={pkg.name} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={pkg.image}
                                            alt={pkg.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-[#ff8b69] mb-3">{pkg.name}</h3>
                                        <p className="text-[#6b5344] text-sm">{pkg.description}</p>
                                    </div>
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
                                Tiefenreinigung, Behandlung von Schuppen und fettiger Kopfhaut, Förderung des Haarwachstums.<br />
                                Für alle, die mit Kopfhautproblemen oder Haarausfall zu kämpfen haben.
                            </p>
                        </div>

                        {/* Premium Treatment - Hydro-Oxygen Scalp Glow */}
                        <div className="mb-12">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#2a1d18] group perspective-1000 border border-[#ff8b69]/20">
                                {/* Dynamic Background System */}
                                <div className="absolute inset-0 opacity-50">
                                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff8b69] rounded-full blur-[120px] mix-blend-screen opacity-20 animate-pulse" style={{ animationDuration: '6s' }} />
                                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4a373] rounded-full blur-[100px] mix-blend-screen opacity-20 animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />
                                </div>

                                {/* Subtle Texture Pattern */}
                                <div className="absolute inset-0 opacity-[0.05]"
                                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '30px 30px' }}>
                                </div>

                                {/* Ribbon Badge - Top Right Corner */}
                                <div className="absolute top-0 right-0 w-40 h-40 overflow-hidden z-20">
                                    <div className="absolute top-[30px] right-[-50px] w-[200px] bg-gradient-to-r from-[#d4a373] via-[#ff8b69] to-[#d4a373] text-white font-bold text-xs uppercase tracking-widest py-2 text-center transform rotate-45 shadow-[0_5px_15px_rgba(0,0,0,0.3)] border-y border-white/20">
                                        Premium
                                        <br />
                                        Treatment
                                    </div>
                                </div>

                                <div className="relative p-8 md:p-12 text-white">
                                    {/* Header Section - CENTERED */}
                                    <div className="flex flex-col items-center text-center mb-12 relative z-10">
                                        <div className="inline-block mb-3 px-4 py-1 rounded-full border border-[#ff8b69]/40 bg-[#ff8b69]/10 backdrop-blur-md text-[#ffcaa6] text-xs font-serif tracking-[0.2em] uppercase">
                                            Exklusive Signature Behandlung
                                        </div>
                                        <h3 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white via-[#ffe4d6] to-[#ffcaa6] drop-shadow-sm">
                                            Hydro-Oxygen Scalp Glow
                                        </h3>
                                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ff8b69] to-transparent mb-6 opacity-80" />
                                        <p className="text-[#e8d5c4] text-xl md:text-2xl font-light tracking-wide max-w-2xl">
                                            The Ultimate Hair & Scalp Detox
                                        </p>
                                    </div>

                                    {/* Features Grid */}
                                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                                        {[
                                            {
                                                title: "Bubble Cleaning",
                                                desc: "Sanftes Vakuum mit Bubble-Technologie entfernt Talg & Rückstände.",
                                                icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                                            },
                                            {
                                                title: "Oxygen Infusion",
                                                desc: "Reiner Sauerstoff vitalisiert die Kopfhaut und fördert die Durchblutung.",
                                                icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                            },
                                            {
                                                title: "Nutrient Serum",
                                                desc: "Einschleusung exklusiver Nährstoffe direkt bis zur Haarwurzel.",
                                                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517l-2.387-.477a2 2 0 01-1.594-1.955v-8.164a2 2 0 012.5-1.95l2.387.478a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517l2.387.477a2 2 0 011.594 1.955v8.164a2 2 0 01-.948 1.7"
                                            }
                                        ].map((item, i) => (
                                            <div key={i} className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:bg-white/10 hover:border-[#ff8b69]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#ff8b69]/0 to-[#ff8b69]/0 group-hover:from-[#ff8b69]/10 group-hover:to-transparent rounded-2xl transition-all duration-500" />

                                                <div className="w-16 h-16 bg-gradient-to-br from-[#2a1d18] to-[#3d2a22] border border-[#ff8b69]/20 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:border-[#ff8b69]/60 transition-all duration-300 relative z-10">
                                                    <svg className="w-8 h-8 text-[#ff8b69] group-hover:text-[#ffcaa6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                                    </svg>
                                                </div>
                                                <h4 className="font-serif font-bold text-xl text-[#ffcaa6] mb-3 group-hover:text-white transition-colors">{item.title}</h4>
                                                <p className="text-white/70 text-sm leading-relaxed relative z-10 group-hover:text-white/90 transition-colors">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Result Section */}
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#ff8b69] via-[#d4a373] to-[#ff8b69] rounded-2xl opacity-20 blur-xl animate-pulse" />
                                        <div className="relative bg-gradient-to-r from-[#1a120f]/90 to-[#2a1d18]/90 backdrop-blur-xl rounded-2xl p-8 border border-[#ff8b69]/30 flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-2xl">
                                            <div className="w-16 h-16 flex-shrink-0 bg-[#ff8b69] rounded-full flex items-center justify-center border-4 border-[#2a1d18] shadow-[0_0_20px_rgba(255,139,105,0.4)]">
                                                <svg className="w-8 h-8 text-[#2a1d18]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <div className="text-center md:text-left">
                                                <h4 className="text-[#ff8b69] font-bold uppercase tracking-widest text-sm mb-2">Das Ergebnis</h4>
                                                <p className="text-white/95 text-lg md:text-2xl font-light leading-relaxed">
                                                    Tiefengereinigte, hydratisierte Kopfhaut und sichtbar glänzendes Haar. <br className="hidden md:block" />
                                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b69] to-[#ffd7b5] font-serif italic font-medium">Spürbar befreit und revitalisiert.</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Laser Hair Boost - CENTERED */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
                            <h3 className="text-2xl md:text-4xl font-serif font-bold text-[#5c4033] mb-4">
                                Laser Hair Boost – Growth Support & Density
                            </h3>
                            <p className="text-[#ff8b69] font-semibold text-lg md:text-xl mb-6 uppercase tracking-wide">
                                Eine weltweit anerkannte Lösung gegen Haarausfall
                            </p>
                            <p className="text-[#6b5344] mb-8 max-w-3xl mx-auto leading-relaxed text-lg">
                                Dünnes Haar und Haarausfall sind heute keine ästhetische Belastung mehr – weder für Männer noch für Frauen.
                                Diese moderne Technologie wird weltweit erfolgreich eingesetzt und geschätzt.
                            </p>

                            <div className="bg-[#f5ebe0]/50 rounded-2xl p-8 mb-8 border border-[#e8d5c4]">
                                <p className="text-[#5c4033] text-lg leading-relaxed max-w-4xl mx-auto">
                                    Eine exklusive Anwendung mit spezialisierter Gerätetechnologie, die reinen Sauerstoff mit fokussierter Laser-Energie kombiniert.
                                    Die aktivierende Behandlung wirkt Haarverlust entgegen, stärkt die Haarwurzelbasis und unterstützt sichtbar mehr Dichte und Vitalität.
                                </p>
                            </div>

                            {/* Expert Videos - Embedded */}
                            <div className="mb-6">
                                <h4 className="font-bold text-[#5c4033] mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#ff8b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    Expertenmeinungen und Studien:
                                </h4>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="rounded-xl overflow-hidden shadow-lg">
                                        <iframe
                                            width="100%"
                                            height="200"
                                            src="https://www.youtube.com/embed/QRus_P-EewA"
                                            title="Wirksamkeit bestätigt"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full"
                                        ></iframe>
                                        <p className="text-center text-sm text-[#5c4033] py-2 bg-[#f5ebe0]">Wirksamkeit bestätigt</p>
                                    </div>
                                    <div className="rounded-xl overflow-hidden shadow-lg">
                                        <iframe
                                            width="100%"
                                            height="200"
                                            src="https://www.youtube.com/embed/f3cwKKKhHi4"
                                            title="Technologie erklärt"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full"
                                        ></iframe>
                                        <p className="text-center text-sm text-[#5c4033] py-2 bg-[#f5ebe0]">Technologie erklärt</p>
                                    </div>
                                    <div className="rounded-xl overflow-hidden shadow-lg">
                                        <iframe
                                            width="100%"
                                            height="200"
                                            src="https://www.youtube.com/embed/693XjyHcxOE"
                                            title="Arzt-Bestätigung"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full"
                                        ></iframe>
                                        <p className="text-center text-sm text-[#5c4033] py-2 bg-[#f5ebe0]">Arzt-Bestätigung</p>
                                    </div>
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
