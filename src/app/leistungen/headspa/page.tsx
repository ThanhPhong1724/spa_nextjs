"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

// Typewriter Effect Component - uses ref to avoid hydration/browser-extension conflicts
function TypeWriter({ text, className = "" }: { text: string; className?: string }) {
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let displayText = "";
        let isDeleting = false;
        let timeoutId: ReturnType<typeof setTimeout>;

        function tick() {
            const typeSpeed = isDeleting ? 50 : 100;
            const pauseTime = isDeleting ? 500 : 2000;

            if (!isDeleting && displayText === text) {
                timeoutId = setTimeout(() => { isDeleting = true; tick(); }, pauseTime);
                return;
            } else if (isDeleting && displayText === "") {
                timeoutId = setTimeout(() => { isDeleting = false; tick(); }, pauseTime);
                return;
            }

            if (isDeleting) {
                displayText = text.substring(0, displayText.length - 1);
            } else {
                displayText = text.substring(0, displayText.length + 1);
            }

            if (textRef.current) {
                textRef.current.textContent = displayText;
            }

            timeoutId = setTimeout(tick, typeSpeed);
        }

        tick();
        return () => clearTimeout(timeoutId);
    }, [text]);

    return (
        <span className={className} suppressHydrationWarning>
            <span ref={textRef} suppressHydrationWarning></span>
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

export default function HeadspaPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [heroTitle, setHeroTitle] = useState("HEADSPA");
    const [videoUrl, setVideoUrl] = useState("https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4");
    const [packageImages, setPackageImages] = useState<string[]>([]);
    const { t } = useLanguage();

    // Fetch CMS content
    useEffect(() => {
        fetch("/api/page-content?pageKey=headspa_page", { cache: 'no-store' })
            .then(res => res.json())
            .then(data => {
                if (data.hero?.title_de) setHeroTitle(data.hero.title_de);
                if (data.hero?.video_url) setVideoUrl(data.hero.video_url);
                if (data.package_images) {
                    const images = [
                        data.package_images.package1_image,
                        data.package_images.package2_image,
                        data.package_images.package3_image,
                        data.package_images.package4_image,
                    ].filter(Boolean);
                    setPackageImages(images);
                }
            })
            .catch((err) => console.error('Fetch error:', err));
    }, []);

    const relaxGlowPackages = [
        {
            name: t("headspa.pkg1_name"),
            description: t("headspa.pkg1_desc"),
            image: packageImages[0] || "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop"
        },
        {
            name: t("headspa.pkg2_name"),
            description: t("headspa.pkg2_desc"),
            image: packageImages[1] || "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop"
        },
        {
            name: t("headspa.pkg3_name"),
            description: t("headspa.pkg3_desc"),
            image: packageImages[2] || "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop"
        },
        {
            name: t("headspa.pkg4_name"),
            description: t("headspa.pkg4_desc"),
            image: packageImages[3] || "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop"
        }
    ];

    const faqs = Array.from({ length: 2 }, (_, i) => ({
        question: t(`headspa.faq_q${i + 1}`),
        answer: t(`headspa.faq_a${i + 1}`),
    }));

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
                                <TypeWriter text={t("headspa.typewriter")} />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== RELAX & GLOW Section ===== */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                                    <h3 className="text-2xl font-bold text-[#ff8b69] mb-3">{pkg.name}</h3>
                                    <p className="text-[#6b5344] text-base">{pkg.description}</p>
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
                        {t("common.faq_title")}
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
