"use client";

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

const courseInfo = {
    id: "gruender-programm",
    name: "Expert-Gründerprogramm",
    price: 2499,
    duration: "10 Tage + Business Coaching",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop"
};

// SVG Icon components
const ChartIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const CurrencyIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const DeviceIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);

const GlobeIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
);

const ClipboardIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
);

const benefits = [
    {
        icon: <ChartIcon />,
        title: "Maßgeschneiderte Strategieplanung",
        description: "Wir erstellen mit dir einen konkreten Business-Plan, der exakt auf deine persönlichen Ziele und dein verfügbares Investitionskapital zugeschnitten ist."
    },
    {
        icon: <CurrencyIcon />,
        title: "Maximale Kostenersparnis",
        description: "Erfahre, wie du deine Buchhaltung ohne Vorkenntnisse selbst führst und so bis zu 250 € monatlich an Steuerberater-Gebühren sparst."
    },
    {
        icon: <DeviceIcon />,
        title: "Social Media Power",
        description: "Meistere die Erstellung von Video-Content (Reels/TikTok), um eine echte Bindung zu deinen Kunden aufzubauen."
    },
    {
        icon: <GlobeIcon />,
        title: "Ready-to-Go Marketing",
        description: "Du erhältst eine kostenlose Website und 15 fertige Social-Media-Posts, damit du sofort professionell sichtbar bist."
    },
    {
        icon: <ClipboardIcon />,
        title: "Finanzamt-Sicherheit",
        description: "Lerne den Umgang mit rechtssicheren Kassensystemen für nur 30 €/Monat. Von Anfang an alles richtig machen."
    }
];

export default function GruenderClient() {
    const { addToCart, totalItems, setIsCartOpen } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: courseInfo.id,
            name: courseInfo.name,
            price: courseInfo.price,
            image: courseInfo.image
        });
    };

    return (
        <main className="pt-24 bg-[#f8f7f6]">
            {/* Cart Button */}
            {totalItems > 0 && (
                <button
                    onClick={() => setIsCartOpen(true)}
                    className="fixed bottom-6 right-6 bg-[#d4a373] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-30 hover:bg-[#c49363] transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {totalItems}
                    </span>
                </button>
            )}

            {/* Breadcrumb */}
            <div className="max-w-6xl mx-auto px-6 py-4">
                <nav className="text-sm text-[#666]">
                    <Link href="/schulung" className="hover:text-[#d4a373]">Schulung</Link>
                    <span className="mx-2">/</span>
                    <span className="text-[#5c4033]">Expert-Gründerprogramm</span>
                </nav>
            </div>

            {/* Hero Section */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <img
                                src={courseInfo.image}
                                alt="Gründerprogramm"
                                className="rounded-2xl shadow-lg w-full"
                            />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#5c4033] mb-4">
                                Expert-Gründerprogramm
                            </h1>
                            <p className="text-xl text-[#666] mb-4">
                                Lerne nicht nur das Handwerk, sondern meistere das Geschäft dahinter.
                            </p>
                            <p className="text-[#d4a373] text-2xl font-bold mb-4">
                                {courseInfo.price.toLocaleString('de-DE')} €
                            </p>
                            <p className="text-[#666] mb-6 flex items-center gap-2">
                                <svg className="w-5 h-5 text-[#d4a373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {courseInfo.duration}
                            </p>

                            <div className="bg-white rounded-xl p-6 mb-6">
                                <p className="text-[#555] mb-4">
                                    Hier sind die exklusiven Vorteile, die dein Business auf das nächste Level heben:
                                </p>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className="w-full bg-[#d4a373] text-white py-4 rounded-full font-bold text-lg hover:bg-[#c49363] transition-colors"
                            >
                                In den Warenkorb – {courseInfo.price.toLocaleString('de-DE')} €
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-[#5c4033] text-center mb-12">
                        Was du in diesem Programm bekommst
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="bg-[#f8f7f6] rounded-2xl p-6">
                                <div className="text-[#d4a373] mb-4">{benefit.icon}</div>
                                <h3 className="text-lg font-bold text-[#5c4033] mb-3">{benefit.title}</h3>
                                <p className="text-[#666] text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-[#5c4033] to-[#3d2a22] text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                        Bereit, dein eigenes Beauty-Business zu starten?
                    </h2>
                    <p className="text-white/80 mb-8">
                        Mit dem Expert-Gründerprogramm bekommst du nicht nur das Handwerk, sondern auch
                        alle Business-Tools, die du für einen erfolgreichen Start brauchst.
                    </p>
                    <button
                        onClick={handleAddToCart}
                        className="bg-[#d4a373] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#c49363] transition-colors"
                    >
                        Jetzt buchen – {courseInfo.price.toLocaleString('de-DE')} €
                    </button>
                </div>
            </section>

            {/* WhatsApp CTA */}
            <section className="py-12 bg-[#f8f7f6]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-[#666] mb-4">Haben Sie weitere Fragen?</p>
                    <a
                        href="https://wa.me/491638562022"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1da851] transition-colors"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Kontaktieren Sie uns per WhatsApp!
                    </a>
                </div>
            </section>
        </main>
    );
}
