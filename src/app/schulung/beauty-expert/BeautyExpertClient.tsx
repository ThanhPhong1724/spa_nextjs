"use client";

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

const courseInfo = {
    id: "beauty-expert",
    name: "Head-to-Toe Beauty Expert",
    subtitle: "Pediküre, Head Spa & Wimpernverlängerung",
    price: 1999,
    duration: "7 Tage Intensiv",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&h=500&fit=crop"
};

const modules = [
    {
        icon: "👣",
        title: "Professionelle Pediküre",
        description: "Wir zeigen dir nicht nur die Ästhetik, sondern das volle Programm: Fachgerechte Hornhautentfernung (Fersenreinigung), Formgebung und das perfekte Auftragen von Gel auf den Zehennägeln. Deine Kunden werden das Gefühl \"auf Wolken zu gehen\" lieben."
    },
    {
        icon: "💆‍♀️",
        title: "Head Spa",
        description: "Tauche ein in die Welt der Entspannung. Du lernst die Kopfmassage nach asiatischer Heilkunde kombiniert mit intensiver Kopfhautpflege. Dieser Trend ist aktuell extrem gefragt und bietet dir eine hohe Gewinnspanne bei geringem Materialeinsatz."
    },
    {
        icon: "✨",
        title: "Wimpernverlängerung",
        description: "Hier lernst du, wie du den Blick deiner Kunden veränderst. Wir trainieren mit dir die Präzision, die du brauchst, um saubere und langanhaltende Ergebnisse zu liefern."
    }
];

export default function BeautyExpertClient() {
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
                    <span className="text-[#5c4033]">Beauty Expert</span>
                </nav>
            </div>

            {/* Hero Section */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <img
                                src={courseInfo.image}
                                alt="Beauty Expert Kurs"
                                className="rounded-2xl shadow-lg w-full"
                            />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#5c4033] mb-2">
                                Beauty-Trio: Dein schnellerer Weg zum Erfolg 🚀
                            </h1>
                            <p className="text-xl text-[#666] mb-4">
                                {courseInfo.subtitle}
                            </p>
                            <p className="text-[#d4a373] text-2xl font-bold mb-4">
                                {courseInfo.price.toLocaleString('de-DE')} €
                            </p>
                            <p className="text-[#666] mb-6">
                                ⏱ {courseInfo.duration}
                            </p>

                            <div className="bg-white rounded-xl p-6 mb-6">
                                <p className="text-[#555] mb-4">
                                    Keine Lust auf jahrelanges Üben? Starte sofort durch! Diese drei Behandlungen gehören
                                    aktuell zu den gefragtesten Services auf dem Markt.
                                </p>

                                <h3 className="font-bold text-[#5c4033] mb-3">Dein Business-Vorteil:</h3>
                                <ul className="space-y-2 text-[#666]">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#d4a373]">✓</span>
                                        <span><strong>Größere Zielgruppe:</strong> Wer keine Wimpern braucht, kommt für die Füße oder die Entspannung.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#d4a373]">✓</span>
                                        <span><strong>Voller Kalender:</strong> Mehr Services bedeuten konstante Auslastung ohne Leerlauf.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#d4a373]">✓</span>
                                        <span><strong>Maximale Bindung:</strong> Deine Kunden bekommen alles aus einer Hand. Das spart Marketingkosten.</span>
                                    </li>
                                </ul>
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

            {/* Modules Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-[#5c4033] text-center mb-12">
                        Was du in den einzelnen Modulen lernst
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {modules.map((module, i) => (
                            <div key={i} className="bg-[#f8f7f6] rounded-2xl p-8 text-center">
                                <span className="text-5xl mb-4 block">{module.icon}</span>
                                <h3 className="text-xl font-bold text-[#5c4033] mb-4">{module.title}</h3>
                                <p className="text-[#666]">{module.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-[#5c4033] to-[#3d2a22] text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                        Bereit für deinen schnelleren Weg zum Erfolg?
                    </h2>
                    <p className="text-white/80 mb-8">
                        Mit dem Beauty-Trio Kurs bist du in nur 7 Tagen bereit, drei der gefragtesten Services anzubieten.
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
            <section className="py-12 bg-white">
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
