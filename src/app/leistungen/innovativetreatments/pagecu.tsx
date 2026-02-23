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

// ===== FAQ =====
const faqs: { question: string, answer: React.ReactNode }[] = [
    {
        question: "Für wen ist Oxygen Scalp Detox geeignet?",
        answer: "Diese Anwendung eignet sich ideal bei trockener, empfindlicher oder unausgeglichener Kopfhaut sowie bei Spannungsgefühl, Juckreiz oder Produktablagerungen."
    },
    {
        question: "Woher weiß ich, ob meine Haut für die Behandlung geeignet ist?",
        answer: "Kontaktieren Sie uns gerne für eine kostenlose Beratung. Sie können uns vorab Bilder per WhatsApp senden, damit wir den aktuellen Hautzustand einschätzen und Sie individuell beraten können. Bei entzündeter Haut oder offenen Wunden empfehlen wir grundsätzlich, vorab einen Arzt aufzusuchen."
    },
    {
        question: "Ich finde keinen Preis für Body Glow – warum?",
        answer: "Jede Haut ist unterschiedlich. Nach Zusendung von Fotos werden die Dauer der Behandlung sowie der genaue Preis individuell berechnet und richten sich nach der Größe und dem Zustand des betroffenen Hautareals."
    },
    {
        question: "Wie viele Body-Glow-Behandlungen sind notwendig?",
        answer: "Der Erfolg hängt von verschiedenen Faktoren ab – wie Ernährung, Schlaf, Stress, Hautpflege-Routine sowie dem individuellen Hautzustand und der Hautstruktur. Unsere Expertin beraten Sie umfassend und erstellen einen individuellen Plan, der genau auf Ihre Haut abgestimmt ist. Bereits nach der ersten Sitzung sind sichtbare Verbesserungen erkennbar – dokumentiert durch eine professionelle Vorher-/Nachher-Hautanalyse."
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
        question: "Tut Scalp Microneedling weh?",
        answer: (
            <>
                Die Behandlung ist in der Regel gut verträglich.<br />
                Sie spüren ein leichtes Kribbeln oder feines Piksen auf der Kopfhaut, das jedoch nur kurzzeitig auftritt.<br />
                Dank moderner Technik und kontrollierter Anwendung bleibt die Behandlung angenehm und sicher.
            </>
        )
    },
    {
        question: "Ist Scalp Microneedling gefährlich oder verursacht es starke Verletzungen?",
        answer: (
            <>
                Nein, die Methode ist wissenschaftlich untersucht und wird auch in milden Varianten für die Heimanwendung angeboten – sie gilt daher nicht als übermäßig riskant.<br />
                Es entstehen keine tiefen oder starken Verletzungen, sondern feine, oberflächliche Mikroimpulse, die die natürlichen Hautprozesse aktivieren.<br />
                Im Studio arbeiten wir mit professioneller Geschwindigkeit und präzise eingestellter Eindringtiefe – in Kombination mit hochwertigen Wirkstoff-Seren. Strenge Hygienestandards und eine sterile Arbeitsweise minimieren das Risiko deutlich und ermöglichen eine sichere, kontrollierte sowie effektivere Anwendung als bei der Selbstanwendung zu Hause.
            </>
        )
    }
];

export default function KopfhautPflegePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [heroTitle] = useState("INNOVATIVES TREATMENTS");
    const [videoUrl] = useState("https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4");
    const [typewriterText] = useState("Entspannung für Körper und Geist");

    return (
        <div className="min-h-screen bg-[#f5ebe0]">
            {/* Hero */}
            <section className="pt-44 pb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-[#ff8b69] text-xl sm:text-2xl md:text-4xl font-bold uppercase tracking-wide">
                        <span className="block sm:inline">INNOVATIVES</span>{" "}
                        <span className="block sm:inline">TREATMENTS</span>
                    </h1>
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

            {/* ===== Treatment Section ===== */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-[#5c4033] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            Erlebe eine einzigartige Kombination aus kraftvoller Oxygen-Power, hochwirksamen EMS-Nano-Crystals und Laser, die deine Pflege auf ein neues Level hebt – für unreine Haut, vitale Kopfhaut und unterstütztes Haarwachstum.
                        </p>
                        <p className="text-[#6b5344] max-w-3xl mx-auto mt-4 leading-relaxed">
                            Jede Behandlung wird sorgfältig analysiert – mit Vorher-/Nachher-Vergleich für sichtbar nachvollziehbare Ergebnisse.
                        </p>
                    </div>

                    {/* Premium Treatment - Oxygen Scalp Detox */}
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
                                    {/* <div className="inline-block mb-3 px-4 py-1 rounded-full border border-[#ff8b69]/40 bg-[#ff8b69]/10 backdrop-blur-md text-[#ffcaa6] text-xs font-serif tracking-[0.2em] uppercase">
                                        Exklusive Signature Behandlung
                                    </div> */}
                                    {/* Added pb-2 and leading-normal to prevent clipping of 'g' */}
                                    <h3 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white via-[#ffe4d6] to-[#ffcaa6] drop-shadow-sm pb-2 leading-tight">
                                        Oxygen Scalp Detox
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
                                                Spürbar befreite, revitalisierte Kopfhaut – <br className="hidden md:block" />
                                                <span className="text-[#ffcaa6] font-serif italic font-medium">für sichtbar kräftigeres und gesünder wirkendes Haar.</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scalp Microneedling Service Section */}
                    <div className="mb-12 mt-12">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-[#f5ebe0] to-[#e8d5c4] border border-[#d4a373]/30">
                            <div className="relative p-8 md:p-12">
                                {/* Header */}
                                <div className="flex flex-col items-center text-center mb-12">
                                    <div className="inline-block mb-3 px-4 py-1 rounded-full border border-[#ff8b69]/40 bg-[#ff8b69]/10 text-[#ff8b69] text-xs font-serif tracking-[0.2em] uppercase">
                                        Advanced Treatment
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-[#5c4033]">
                                        Scalp Microneedling
                                    </h3>
                                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ff8b69] to-transparent mb-6 opacity-80" />
                                </div>

                                {/* Features */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                    {[
                                        { title: "Kopfhaut-Regeneration", icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" },
                                        { title: "Haarwachstum-Impuls", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                                        { title: "Haarstruktur-Stärkung", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
                                        { title: "Wissenschaftlich fundiert", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517l-2.387-.477a2 2 0 01-1.594-1.955v-8.164a2 2 0 012.5-1.95l2.387.478a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517l2.387.477a2 2 0 011.594 1.955v8.164a2 2 0 01-.948 1.7" }
                                    ].map((item, i) => (
                                        <div key={i} className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#e8d5c4] text-center flex flex-col items-center justify-center">
                                            <div className="w-12 h-12 bg-gradient-to-br from-[#ff8b69] to-[#d4a373] text-white rounded-full flex items-center justify-center mb-4 shadow-md">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                                </svg>
                                            </div>
                                            <h4 className="font-serif font-bold text-lg text-[#5c4033]">{item.title}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GlowMe Service Section */}
                    <div className="mb-12 mt-12">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-[#f5ebe0] to-[#e8d5c4] border border-[#d4a373]/30">
                            <div className="relative p-8 md:p-12">
                                {/* Header */}
                                <div className="flex flex-col items-center text-center mb-12">
                                    <div className="inline-block mb-3 px-4 py-1 rounded-full border border-[#ff8b69]/40 bg-[#ff8b69]/10 text-[#ff8b69] text-xs font-serif tracking-[0.2em] uppercase">
                                        Hautpflege Service
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-[#5c4033]">
                                        GlowMe
                                    </h3>
                                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ff8b69] to-transparent mb-6 opacity-80" />
                                    <p className="text-[#6b5344] text-lg md:text-xl max-w-2xl leading-relaxed">
                                        Pflege auf einem neuen Level. Schluss mit rauer Haut. Willkommen sanfte Seidigkeit.
                                    </p>
                                </div>

                                {/* Treatment Steps */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                    {[
                                        {
                                            step: "1",
                                            title: "Sanftes Peeling",
                                            desc: "Vorbereitung der Haut durch das sanfte Abtragen abgestorbener Hautschüppchen und mở đường für die Nährstoffe.",
                                            descVi: "Chuẩn bị làn da bằng cách loại bỏ nhẹ nhàng tế bào chết và mở đường cho các dưỡng chất."
                                        },
                                        {
                                            step: "2",
                                            title: "Bubble Cleaning",
                                            desc: "Tiefenreinigung mit Sauerstoff-Bläschen.",
                                            descVi: "Làm sạch sâu tận gốc với bọt khí Oxy hoạt tính, giải phóng lỗ chân lông khỏi bã nhờn và tạp chất."
                                        },
                                        {
                                            step: "3",
                                            title: "Oxygen-Power",
                                            desc: "Konzentrierter Sauerstoff zur Vitalisierung und Regeneration der Haut.",
                                            descVi: "Tiếp sức cho làn da bằng Oxy tập trung, kích thích tái tạo tế bào và thúc đẩy quá trình hồi phục tự nhiên."
                                        },
                                        {
                                            step: "4",
                                            title: "EMS Nano-Crystals",
                                            desc: "Nano-Kristalle & EMS-Impulse für die tiefe Wirkstoffaufnahme.",
                                            descVi: "Công nghệ tối tân giúp đưa các hoạt chất nồng độ cao vào sâu trong da thông qua tinh thể Nano và xung điện EMS."
                                        },
                                        {
                                            step: "5",
                                            title: "Glow Light Treatment",
                                            desc: "Unterstützt die Hautregeneration und stimuliert die Collagenproduktion.",
                                            descVi: ""
                                        },
                                        {
                                            step: "6",
                                            title: "Purifying Finishing Care",
                                            desc: "Abschlusspflege zur Beruhigung, Mattierung und zum Schutz vor neuen Unreinheiten.",
                                            descVi: "Bước chăm sóc cuối cùng với các hoạt chất làm sạch, giúp làm dịu da, kiềm dầu và bảo vệ da khỏi các tạp chất mới."
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#e8d5c4]">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 bg-[#ff8b69] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                                    {item.step}
                                                </div>
                                                <h4 className="font-serif font-bold text-lg text-[#5c4033]">{item.title}</h4>
                                            </div>
                                            <p className="text-[#6b5344] text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Laser Hair Boost - CENTERED */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
                        {/* Expert Videos - Embedded */}
                        <div className="mb-6">
                            <div className="font-bold text-[#5c4033] mb-4 flex items-center gap-2 justify-center">
                                {/* <svg className="w-5 h-5 text-[#ff8b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg> */}
                                <h3 className="text-2xl md:text-4xl font-serif font-bold text-[#5c4033] mb-0">
                                    Expertenmeinungen und Studien
                                </h3>
                            </div>
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
