"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";

// Simple Reveal On Scroll Component
function RevealOnScroll({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Toggle visibility based on intersection - repeats every time
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

// Typewriter Effect Component
function TypeWriter({ text, className = "" }: { text: string; className?: string }) {
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 2000;

        if (!isDeleting && displayText === text) {
            // Finished typing, wait then start deleting
            const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
            return () => clearTimeout(timeout);
        } else if (isDeleting && displayText === "") {
            // Finished deleting, start typing again
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

const studioImages = [
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
];

const servicesData = {
    de: [
        { title: "PROFESSIONELLE KOPFHAUT/HAUTPFLEGE", description: "Professionelle Lösungen für Kopfhautprobleme, Haarausfall und Hautgesundheit.", image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=600&h=400&fit=crop", href: "/leistungen/kopfhaut-und-hautpflege" },
        { title: "AQUAFACIAL", description: "Tiefenreinigung, Hydration und Wirkstoffversorgung für sofort sichtbar strahlende Haut.", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop", href: "/leistungen/aquafacial" },
        { title: "HEADSPA", description: "Ganzheitliche Kopfhautpflege und Entspannung für Körper und Geist.", image: "https://media.canva.com/v2/image-resize/format:JPG/height:800/quality:92/uri:ifs%3A%2F%2FM%2Fe9513e54-1c6e-47f0-ac94-bcdb746b35c8/watermark:F/width:706?csig=AAAAAAAAAAAAAAAAAAAAAIdrbMbBBNgoWD10-arFC-Ns2CydzrM1FPsMi17UF4Qp&exp=1769806112&osig=AAAAAAAAAAAAAAAAAAAAAAY6d1Fr1Ez2MAKUnwM0HTk4tBVumsEE7DwsVP-oTH4K&signer=media-rpc&x-canva-quality=screen", href: "/leistungen/headspa" },
        { title: "PERMANENT MAKE UP", description: "Natürliche Schönheit mit modernsten Techniken und höchster Präzision.", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop", href: "/leistungen/permanent-makeup" },
        { title: "NAILS", description: "Kreative Nageldesigns und professionelle Fußpflege für gepflegte Hände und Füße.", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop", href: "/leistungen/nails" },
        { title: "WIMPERN", description: "Voluminöse Wimpern für einen ausdrucksstarken Blick.", image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=400&fit=crop", href: "/leistungen/wimpern" }
    ],
    en: [
        { title: "SCALP & SKIN CARE", description: "Professional solutions for scalp problems, hair loss and skin health.", image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=600&h=400&fit=crop", href: "/leistungen/kopfhaut-und-hautpflege" },
        { title: "AQUAFACIAL", description: "Deep cleansing, hydration and active ingredient delivery for instantly radiant skin.", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop", href: "/leistungen/aquafacial" },
        { title: "HEADSPA", description: "Holistic scalp care and relaxation for body and mind.", image: "https://media.canva.com/v2/image-resize/format:JPG/height:800/quality:92/uri:ifs%3A%2F%2FM%2Fe9513e54-1c6e-47f0-ac94-bcdb746b35c8/watermark:F/width:706?csig=AAAAAAAAAAAAAAAAAAAAAIdrbMbBBNgoWD10-arFC-Ns2CydzrM1FPsMi17UF4Qp&exp=1769806112&osig=AAAAAAAAAAAAAAAAAAAAAAY6d1Fr1Ez2MAKUnwM0HTk4tBVumsEE7DwsVP-oTH4K&signer=media-rpc&x-canva-quality=screen", href: "/leistungen/headspa" },
        { title: "PERMANENT MAKE UP", description: "Natural beauty with state-of-the-art techniques and highest precision.", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop", href: "/leistungen/permanent-makeup" },
        { title: "NAILS", description: "Creative nail designs and professional foot care for well-groomed hands and feet.", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop", href: "/leistungen/nails" },
        { title: "EYELASHES", description: "Voluminous lashes for an expressive look.", image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=400&fit=crop", href: "/leistungen/wimpern" }
    ]
};

const reviewsData = {
    de: [
        { name: "Anna M.", avatar: "https://randomuser.me/api/portraits/women/44.jpg", text: "Ein wunderbares Erlebnis! Die Headspa-Behandlung war so entspannend. Ich komme definitiv wieder!", rating: 5 },
        { name: "Julia K.", avatar: "https://randomuser.me/api/portraits/women/68.jpg", text: "Endlich ein Permanent Make-up, das wirklich natürlich aussieht! Ich bin so happy mit dem Ergebnis. Die Beratung war super ehrlich und professionell – man fühlt sich direkt gut aufgehoben.", rating: 5 },
        { name: "Sophie H.", avatar: "https://randomuser.me/api/portraits/women/45.jpg", text: "Die besten Wimpernverlängerungen in Wiesbaden! Leicht, natürlich und lange haltbar.", rating: 5 },
        { name: "Marie L.", avatar: "https://randomuser.me/api/portraits/women/32.jpg", text: "Hervorragender Service und wunderschöne Nägel. Das Team ist super freundlich!", rating: 5 },
        { name: "Laura B.", avatar: "https://randomuser.me/api/portraits/women/65.jpg", text: "Einfach magisch! Die Kopfmassage war sehr entspannend & wirksam. Ich dachte immer, meine Kopfschmerzen seien chronisch, aber nach der Behandlung sind sie wie weggeblasen. Ich komme definitiv wieder!", rating: 5 }
    ],
    en: [
        { name: "Anna M.", avatar: "https://randomuser.me/api/portraits/women/44.jpg", text: "A wonderful experience! The headspa treatment was so relaxing. I'll definitely come back!", rating: 5 },
        { name: "Julia K.", avatar: "https://randomuser.me/api/portraits/women/68.jpg", text: "Finally a permanent make-up that really looks natural! I'm so happy with the result. The consultation was super honest and professional – you feel well taken care of right away.", rating: 5 },
        { name: "Sophie H.", avatar: "https://randomuser.me/api/portraits/women/45.jpg", text: "The best eyelash extensions in Wiesbaden! Light, natural and long-lasting.", rating: 5 },
        { name: "Marie L.", avatar: "https://randomuser.me/api/portraits/women/32.jpg", text: "Outstanding service and beautiful nails. The team is super friendly!", rating: 5 },
        { name: "Laura B.", avatar: "https://randomuser.me/api/portraits/women/65.jpg", text: "Simply magical! The head massage was very relaxing & effective. I always thought my headaches were chronic, but after the treatment they were blown away. I'll definitely come back!", rating: 5 }
    ]
};

type HomeClientProps = {
    content?: any;
};

export default function HomeClient({ content }: HomeClientProps) {
    const { language, t } = useLanguage();
    const servicesContent = content?.services_section || {};
    const services = servicesData[language].map((service, index) => {
        // Map index to specific dynamic keys
        let dynamicImage = service.image; // default
        if (index === 0) dynamicImage = servicesContent.headspa || service.image;
        if (index === 1) dynamicImage = servicesContent.permanent || service.image;
        if (index === 2) dynamicImage = servicesContent.nails || service.image;
        if (index === 3) dynamicImage = servicesContent.lashes || service.image;

        return {
            ...service,
            image: dynamicImage
        };
    });
    const reviews = reviewsData[language];

    // Dynamic Content with Fallbacks
    const hero = content?.hero || {};
    const welcome = content?.welcome || {};

    const heroVideo = hero.videoUrl || "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4";
    const heroTitle = language === 'de' ? (hero.titleDe || t("hero.welcome")) : (hero.titleEn || t("hero.welcome"));
    const heroSubtitle = language === 'de' ? (hero.subtitleDe || t("hero.studio")) : (hero.subtitleEn || t("hero.studio"));
    const heroDesc = language === 'de' ? (hero.descDe || t("hero.description")) : (hero.descEn || t("hero.description"));

    const studioGallery = content?.studio_gallery || {};
    const dynamicStudioImages = [
        studioGallery.image1 || studioImages[0],
        studioGallery.image2 || studioImages[1],
        studioGallery.image3 || studioImages[2],
        studioGallery.image4 || studioImages[3],
        studioGallery.image5 || studioImages[4]
    ];

    // Only use dynamic welcome if it exists, otherwise fallback to hardcoded
    // Note: For now using existing hardcoded via 't' for fallbacks if dynamic is missing, 
    // but if dynamic fields are present in CMS, they should override.

    return (
        <div className="min-h-screen">
            {/* Hero Section with Video */}
            <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5c4033]/80 via-[#5c4033]/50 to-transparent" />

                {/* Content - Positioned lower to not cover video focus */}
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end items-start pb-32">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 whitespace-nowrap">
                            <TypeWriter text="Willkommen bei Smiling Studio" />
                        </h1>
                        {/* <p className="text-xl md:text-2xl text-[#d4a373] font-medium mb-8 leading-relaxed">
                            Ihr Ort für Entspannung & Schönheit
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/4901638562022"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-gradient-to-r from-[#d4a373] to-[#c99362] hover:from-[#c99362] hover:to-[#d4a373] text-white font-bold rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(212,163,115,0.5)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined">calendar_month</span>
                                {t("nav.booking_full")}
                            </a>
                            <Link
                                href="/leistungen"
                                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 group"
                            >
                                {t("hero.discover")}
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div> */}
                    </div>
                </div>

                {/* Scroll Indicator - Clickable */}
                <button
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-white/70 hover:text-white cursor-pointer transition-colors"
                >
                    <span className="text-xs uppercase tracking-widest">{t("hero.scroll")}</span>
                    <span className="material-symbols-outlined">expand_more</span>
                </button>
            </section>

            {/* Studio Space Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-[#ff8b69] font-bold tracking-widest uppercase text-3xl">{t("studio.subtitle")}</h1>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#5c4033] mt-3">
                            {t("studio.title")}
                        </h2>
                        <p className="text-[#6b5344] mt-6 max-w-3xl mx-auto leading-relaxed text-lg">
                            Mit über 10 Jahren Erfahrung und kontinuierlicher Weiterbildung gewährleisten wir höchste Qualität und herausragende Ergebnisse. Genießen Sie den einzigartigen Service in einem Ambiente, das Ihnen ein Lächeln ins Gesicht zaubert.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {dynamicStudioImages.map((img, index) => (
                            <RevealOnScroll
                                key={index}
                                delay={index * 100}
                                className={index === 0 ? "col-span-2 row-span-2" : ""}
                            >
                                <div className="relative overflow-hidden rounded-xl shadow-lg group h-full">
                                    <img
                                        src={img}
                                        alt={`Studio ${index + 1}`}
                                        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${index === 0 ? "min-h-[300px]" : "h-48"}`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-[#f5ebe0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5c4033] mt-3">{t("services.title")}</h2>
                        </div>
                    </RevealOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, idx) => (
                            <RevealOnScroll key={service.title} delay={idx * 100}>
                                <Link href={service.href} className="group">
                                    <div className="relative h-72 rounded-xl overflow-hidden shadow-lg mb-4">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <h3 className="text-base font-bold text-white uppercase tracking-wide text-center px-4">{service.title}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customer Reviews Section (Infinite Scroll) */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <RevealOnScroll>
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5c4033] mt-3">
                                {t("reviews.title")}
                            </h2>
                        </div>
                    </RevealOnScroll>
                </div>

                {/* Marquee Container */}
                <div className="relative w-full">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <div className="flex w-max animate-scroll gap-6 px-6">
                        {/* Duplicate the list 3 times to ensure smooth infinite loop */}
                        {[...reviews, ...reviews, ...reviews].map((review, index) => (
                            <div
                                key={`${review.name}-${index}`}
                                className="bg-[#f5ebe0] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow w-[350px] flex-shrink-0"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={review.avatar}
                                        alt={review.name}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-[#d4a373]"
                                    />
                                    <div>
                                        <h4 className="font-bold text-[#5c4033]">{review.name}</h4>
                                        <div className="flex text-[#d4a373]">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[#6b5344] italic">"{review.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CSS for Animation */}
                <style jsx global>{`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-33.33%); } /* Move by 1/3 since we have 3 sets */
                    }
                    .animate-scroll {
                        animation: scroll 60s linear infinite;
                        will-change: transform;
                    }
                    .animate-scroll:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </section>


        </div>
    );
}
