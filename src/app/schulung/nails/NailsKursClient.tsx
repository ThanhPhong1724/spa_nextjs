"use client";

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

const courseInfo = {
    id: "nails-kurs",
    name: "Nails Profi-Kurs",
    price: 1499,
    duration: "5 Tage Intensiv + Online-Vorbereitung",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=500&fit=crop"
};

const faqs = [
    {
        question: 'Was wird bei der "Individuellen Technik" genau angeboten?',
        answer: "Jeder Mensch ist einzigartig – das gilt auch für deine Handhaltung und Arbeitsweise. Nach 15 Jahren Erfahrung wissen wir: Es gibt nicht nur einen Weg zum Erfolg. Wir bieten dir eine Vielfalt an Methoden an, damit du diejenige wählen kannst, die sich für dich natürlich anfühlt. Beispiel: Beim Zeichnen von French Nails lassen wir dich 5 verschiedene Techniken ausprobieren."
    },
    {
        question: "Ich übe viel, aber das Ergebnis wird nicht schön. Fehlt mir das Talent?",
        answer: "In diesem Moment ist ein professioneller Mentor entscheidend. Oft liegt es nicht am mangelnden Talent, sondern an falschen Bewegungsabläufen, dem falschen Werkzeug oder ungeeignetem Arbeitsmaterial. Wir erkennen diese kleinen Fehler sofort und zeigen dir einen einfacheren, effektiveren Weg."
    },
    {
        question: "Es gibt so viele kostenlose Videos im Netz. Warum lohnt sich trotzdem ein Kurs?",
        answer: 'Im Internet findest du Fragmente, aber kein System. Man kann vielleicht ein Design "nachmachen", aber man versteht das "Warum" dahinter nicht. Unser Kurs bietet dir ein geschlossenes System: Du lernst, wie du in jeder Situation reagierst, welche Produkte für welchen Nageltyp geeignet sind und was du unbedingt vermeiden musst.'
    },
    {
        question: "Ich weiß noch gar nichts über Nails. Wie werde ich nach nur 5 Tagen zum Profi?",
        answer: "Bevor es losgeht, führen wir ein Gespräch über deinen aktuellen Stand. Du erhältst ein Starter-Set und exklusive Video-Lektionen für die Vorbereitung. Dann kommst du für 5 Tage zu uns ins Studio und arbeitest an echten Modellen. Dein Lernplan wird individuell an dein Tempo angepasst."
    },
    {
        question: "Was passiert, wenn ich nach dem Kurs Fragen habe?",
        answer: "Wir bieten eine Nachbetreuung an, um dich auch nach den 5 Tagen zu begleiten. Besuch unser Studio als Gast, erlebe unsere Arbeitsweise und spür die Wertschätzung, die wir jedem Kunden und Schüler entgegenbringen."
    },
    {
        question: "Muss ich mein eigenes Material für die Schulung kaufen?",
        answer: "Nein, das ist das Besondere bei uns! Im Studio haben Sie Zugriff auf über 1.000 Farben und verschiedenste Profi-Geräte. Sie können alles testen, um herauszufinden, was Ihnen liegt. Das spart Ihnen später viel Geld."
    },
    {
        question: "Arbeiten wir an Übungshänden aus Plastik?",
        answer: "Wir setzen auf maximale Praxisnähe, bis 90% an echten Modellen. Nur so lernen Sie den Umgang mit unterschiedlichen Nageltypen und gewinnen die nötige Sicherheit für Ihre zukünftigen Kunden."
    }
];

export default function NailsKursClient() {
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
                    <span className="text-[#5c4033]">Nails Profi-Kurs</span>
                </nav>
            </div>

            {/* Hero Section */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src={courseInfo.image}
                                alt="Nails Kurs"
                                className="rounded-2xl shadow-lg w-full"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&h=400&fit=crop"
                                alt="Nails Praxis"
                                className="rounded-2xl shadow-lg w-full mt-4"
                            />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#5c4033] mb-4">
                                {courseInfo.name}
                            </h1>
                            <p className="text-[#d4a373] text-2xl font-bold mb-4">
                                {courseInfo.price.toLocaleString('de-DE')} €
                            </p>
                            <p className="text-[#666] mb-6">
                                ⏱ {courseInfo.duration}
                            </p>

                            <div className="bg-white rounded-xl p-6 mb-6">
                                <h3 className="font-bold text-[#5c4033] mb-4">
                                    Warum Zeit mit Selbstversuchen verschwenden? Bei uns lernst du direkt auf Profi-Niveau:
                                </h3>
                                <ul className="space-y-3 text-[#666]">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#d4a373]">✓</span>
                                        <span><strong>Detail-Training:</strong> Wir lehren Bewegungsabläufe, keine starren Formeln.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#d4a373]">✓</span>
                                        <span><strong>100% Praxis:</strong> Training an echten Modellen für maximale Sicherheit.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#d4a373]">✓</span>
                                        <span><strong>Fehlkäufe vermeiden:</strong> Teste über 1.000 Farben und Profi-Equipment, ohne selbst investieren zu müssen.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#d4a373]">✓</span>
                                        <span><strong>Individuelle Technik:</strong> Finde aus vielen Methoden genau die, die zu dir passt.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#d4a373]">✓</span>
                                        <span><strong>Profi-Speed:</strong> Wir trainieren nicht nur das „Wie", sondern auch das effiziente Tempo.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#d4a373]">✓</span>
                                        <span><strong>Kundenbindung ab Tag 1:</strong> Vermeide typische Anfängerfehler und begeistere deine ersten Kunden sofort.</span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-lg font-semibold text-[#5c4033] mb-6">
                                👉 Werde Profi statt Amateur. Dein Erfolg beginnt hier!
                            </p>

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

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-[#5c4033] text-center mb-12">
                        Häufig gestellte Fragen
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <details key={i} className="bg-[#f8f7f6] rounded-xl overflow-hidden group">
                                <summary className="p-6 cursor-pointer font-semibold text-[#5c4033] hover:bg-[#f0ede8] transition-colors list-none flex justify-between items-center">
                                    {faq.question}
                                    <span className="text-[#d4a373] group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <div className="px-6 pb-6 text-[#666]">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>

                    {/* WhatsApp CTA */}
                    <div className="mt-12 text-center">
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
                </div>
            </section>
        </main>
    );
}
