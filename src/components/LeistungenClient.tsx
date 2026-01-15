"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const servicesData = {
    de: [
        { key: "headspa", description: "Ganzheitliche Kopfhautpflege und Entspannung für Körper und Geist.", href: "/leistungen/headspa" },
        { key: "permanent", description: "Natürliche Schönheit mit modernsten Techniken und höchster Präzision.", href: "/leistungen/permanent-makeup" },
        { key: "nails", description: "Kreative Nageldesigns und professionelle Fußpflege.", href: "/leistungen/nails" },
        { key: "wimpern", description: "Voluminöse Wimpern für einen ausdrucksstarken Blick.", href: "/leistungen/wimpern" },
        { key: "augenbrauen", description: "Perfekte Augenbrauen durch Zupfen, Färben oder Laminieren.", href: "/leistungen/augenbrauen" }
    ],
    en: [
        { key: "headspa", description: "Holistic scalp care and relaxation for body and mind.", href: "/leistungen/headspa" },
        { key: "permanent", description: "Natural beauty with state-of-the-art techniques and highest precision.", href: "/leistungen/permanent-makeup" },
        { key: "nails", description: "Creative nail designs and professional foot care.", href: "/leistungen/nails" },
        { key: "wimpern", description: "Voluminöse Wimpern für einen ausdrucksstarken Blick.", href: "/leistungen/wimpern" },
        { key: "augenbrauen", description: "Perfect eyebrows through plucking, tinting or lamination.", href: "/leistungen/augenbrauen" }
    ]
};

const defaultImages = {
    headspa: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop",
    permanent: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop",
    nails: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop",
    wimpern: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=400&fit=crop",
    augenbrauen: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop"
};

const defaultTitles = {
    de: {
        headspa: "HEADSPA",
        permanent: "PERMANENT MAKE UP",
        nails: "NAILS",
        wimpern: "WIMPERN",
        augenbrauen: "AUGENBRAUEN"
    },
    en: {
        headspa: "HEADSPA",
        permanent: "PERMANENT MAKE UP",
        nails: "NAILS",
        wimpern: "EYELASHES",
        augenbrauen: "EYEBROWS"
    }
};

type LeistungenClientProps = {
    content?: any;
};

export default function LeistungenClient({ content }: LeistungenClientProps) {
    const { language, t } = useLanguage();
    const serviceCardsContent = content?.service_cards || {};

    // Merge static data with dynamic content
    const services = servicesData[language].map(service => {
        const key = service.key;

        // Dynamic Image
        const image = serviceCardsContent[`${key}_image`] || defaultImages[key as keyof typeof defaultImages];

        // Dynamic Title
        const titleKey = `${key}_title_${language}`;
        const defaultTitle = defaultTitles[language][key as keyof typeof defaultTitles['de']];
        const title = serviceCardsContent[titleKey] || defaultTitle;

        return {
            ...service,
            title,
            image
        };
    });

    return (
        <div className="min-h-screen bg-[#f5ebe0]">
            {/* Hero - Light brown background */}
            <section className="py-20 pt-44">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-[#ff8b69] text-4xl md:text-5xl font-bold">{t("services.title").toUpperCase()}</h1>
                    {/* <p className="text-[#5c4033] text-lg mt-4 max-w-2xl mx-auto">
                        {t("leistungen.subtitle")}
                    </p> */}
                </div>
            </section>

            {/* Services Grid */}
            <section className="pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Link key={service.key} href={service.href} className={`group animate-slide-in animate-slide-in-delay-${(index % 5) + 1}`}>
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-[#ff8b69] uppercase tracking-wide mb-2">{service.title}</h3>
                                        <div className="flex items-start gap-3">
                                            <p className="text-[#5c4033] font-medium text-sm flex-1">{service.description}</p>
                                            {/* Circular Arrow */}
                                            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ff8b69] flex items-center justify-center group-hover:bg-[#e87a5a] transition-colors">
                                                <span className="material-symbols-outlined text-white">arrow_forward</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
