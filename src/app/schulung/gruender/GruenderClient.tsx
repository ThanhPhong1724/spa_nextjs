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

const benefits = [
    {
        icon: "📊",
        title: "Maßgeschneiderte Strategieplanung",
        description: "Wir erstellen mit dir einen konkreten Business-Plan, der exakt auf deine persönlichen Ziele und dein verfügbares Investitionskapital zugeschnitten ist."
    },
    {
        icon: "💰",
        title: "Maximale Kostenersparnis",
        description: "Erfahre, wie du deine Buchhaltung ohne Vorkenntnisse selbst führst und so bis zu 250 € monatlich an Steuerberater-Gebühren sparst."
    },
    {
        icon: "📱",
        title: "Social Media Power",
        description: "Meistere die Erstellung von Video-Content (Reels/TikTok), um eine echte Bindung zu deinen Kunden aufzubauen."
    },
    {
        icon: "🌐",
        title: "Ready-to-Go Marketing",
        description: "Du erhältst eine kostenlose Website und 15 fertige Social-Media-Posts, damit du sofort professionell sichtbar bist."
    },
    {
        icon: "📋",
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
                    <span className="text-xl">🛒</span>
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
                            <p className="text-[#666] mb-6">
                                ⏱ {courseInfo.duration}
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
                                <span className="text-4xl mb-4 block">{benefit.icon}</span>
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
                        Kontaktieren Sie uns per WhatsApp!
                    </a>
                </div>
            </section>
        </main>
    );
}
