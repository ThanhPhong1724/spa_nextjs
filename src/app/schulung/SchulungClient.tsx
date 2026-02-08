"use client";

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

const courses = [
    {
        id: "nails-kurs",
        name: "Nails Profi-Kurs",
        description: "Detail-Training mit 100% Praxis an echten Modellen. Teste über 1.000 Farben und Profi-Equipment.",
        price: 1499,
        duration: "5 Tage Intensiv + Online-Vorbereitung",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop",
        href: "/schulung/nails",
        features: ["100% Praxis", "1.000+ Farben testen", "Individuelle Technik", "Profi-Speed Training"]
    },
    {
        id: "beauty-expert",
        name: "Head-to-Toe Beauty Expert",
        description: "Pediküre, Head Spa & Wimpernverlängerung – drei gefragte Services in einem Kurs.",
        price: 1999,
        duration: "7 Tage Intensiv",
        image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop",
        href: "/schulung/beauty-expert",
        features: ["3 Services in 1", "Sofort profitabel", "Größere Zielgruppe", "Maximale Bindung"]
    },
    {
        id: "gruender-programm",
        name: "Expert-Gründerprogramm",
        description: "Lerne nicht nur das Handwerk, sondern meistere das Geschäft dahinter.",
        price: 2499,
        duration: "10 Tage + Business Coaching",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
        href: "/schulung/gruender",
        features: ["Business-Plan", "Social Media Power", "Fertige Website", "Steuer-Basics"]
    }
];

const faqs = [
    {
        question: "Warum ein Handwerk?",
        answer: "Weil du damit die volle Kontrolle über dein Leben hast: KI-sicher (Handwerk ist echte Kunst), krisensicher (keine Angst vor Kurzarbeit), flexibel für die Familie, finanzielles Plus als Zusatzeinkommen, und überall gefragt mit deinem Zertifikat."
    },
    {
        question: "Warum unsere Schulung?",
        answer: "Wir verkaufen keine Theorie, sondern deine Abkürzung zum Erfolg. Profitiere von 15 Jahren Markterfahrung, individuelle Technik statt starres Schema F, modernes Business-Know-how inklusive Social-Media-Marketing, und Innovation statt Stillstand mit Trends wie Original Head Spa."
    },
    {
        question: "Wer ist für diese Programme geeignet?",
        answer: "Unsere Schulungen richten sich an Quereinsteiger (berufliche Neuorientierung), Beauty-Profis (Portfolio erweitern), und nebenberufliche Gründer (flexibles Zusatzeinkommen). Egal ob Vollzeit-Karriere oder zweites Standbein."
    },
    {
        question: "Brauche ich besonderes Talent oder Begabung?",
        answer: "Nein! Erfolg basiert zu 90% auf Technik, Übung und Präzision. Unsere Programme sind so aufgebaut, dass wir Ihnen die handwerklichen Fähigkeiten Schritt für Schritt beibringen. Mit Geduld und professioneller Anleitung kann jeder diese Kunst erlernen."
    },
    {
        question: "Ich bin schon etwas älter. Kann ich noch erfolgreich gründen?",
        answer: "Definitiv ja! In der Beauty-Branche zählen Erfahrung, Empathie und Professionalität oft mehr als das Alter. Reife Persönlichkeiten strahlen oft Ruhe und Vertrauenswürdigkeit aus, die Kunden sehr schätzen. Es ist nie zu spät!"
    },
    {
        question: "Kann ich Online- und Offline-Lernen kombinieren?",
        answer: "Ja, wir bieten flexible Lernmodelle an. Theoretische Grundlagen können bequem online erarbeitet werden. Praktische Module finden offline in unserem Studio statt, da die feine Handarbeit direkte Korrektur erfordert."
    },
    {
        question: "Was passiert, wenn ich während des Kurses krank werde?",
        answer: "Wir verstehen, dass unvorhersehbare Dinge passieren können. Bei wichtigen Gründen (z.B. Krankheit) bieten wir nach Absprache die Möglichkeit, den Kurs zu unterbrechen und später fortzusetzen."
    },
    {
        question: "Gibt es eine Rückerstattung?",
        answer: "Sobald der Kurs begonnen und Lehrmaterialien ausgehändigt wurden, ist eine Rückerstattung in der Regel ausgeschlossen. Wir empfehlen vorab ein Beratungsgespräch, um sicherzustellen, dass der Kurs perfekt zu Ihren Zielen passt."
    },
    {
        question: "Wie funktioniert die Jobvermittlung?",
        answer: "Jobvermittlung bedeutet bei uns: Networking (breites Netzwerk an Partner-Studios) und Existenzgründung (Tipps zu Marketing, Preisgestaltung und Kundenakquise für Selbstständige)."
    },
    {
        question: "Was lerne ich über die Gründung meines eigenen Studios?",
        answer: "Wir bereiten Sie nicht nur fachlich, sondern auch unternehmerisch vor: Lernen aus unseren Fehlern der Anfangszeit, Profi-Marketing mit einem Marketing-Experten, Kundenakquise, Branding und erfolgreiche Marktpositionierung."
    }
];

// SVG Icon components for premium look
const ShieldIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const CurrencyIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const LinkIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
);

const ChartIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const TrendingIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const BadgeIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
);

const benefits = [
    { icon: <ShieldIcon />, title: "Maximale Praxis", desc: "Unbegrenztes Üben an Modellen, bis jeder Handgriff sitzt." },
    { icon: <CurrencyIcon />, title: "Schluss mit Fehlkäufen", desc: "Wir zeigen dir genau, was du wirklich brauchst. Vermeide 100% typische Anfängerfehler." },
    { icon: <LinkIcon />, title: "Best-Preis-Netzwerk", desc: "Zugriff auf unsere Netzwerke für Profi-Zubehör – garantiert beste Preise und höchste Qualität." },
    { icon: <ChartIcon />, title: "Business & Media Skills", desc: "Von Steuer-Basics und Studio-Verwaltung bis zur perfekten Social-Media-Präsentation." },
    { icon: <TrendingIcon />, title: "Karriere-Boost", desc: "Wir unterstützen dich bei der Jobsuche oder deiner Gründung." },
    { icon: <BadgeIcon />, title: "Unser Versprechen", desc: "Wir haben die Fehler der letzten 15 Jahre gemacht, damit DU sie nicht machen musst." }
];

export default function SchulungClient() {
    const { addToCart, totalItems, setIsCartOpen } = useCart();

    return (
        <main className="pt-24 bg-[#f5ebe0]">
            {/* Cart Button */}
            {totalItems > 0 && (
                <button
                    onClick={() => setIsCartOpen(true)}
                    className="fixed bottom-6 right-6 bg-[#ff8b69] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-30 hover:bg-[#e87a5a] transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {totalItems}
                    </span>
                </button>
            )}

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-[#ff8b69] to-[#e87a5a] text-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        Deine Beauty-Karriere: 15 Jahre Vorsprung ab Tag 1!
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                        Verzichte auf teure Umwege. Wir lehren dich nicht nur das Handwerk, sondern das gesamte
                        Business-System, das wir in 15 Jahren Praxis perfektioniert haben.
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-[#5c4033] text-center mb-12">
                        Dein Erfolgspaket
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((item, i) => (
                            <div key={i} className="bg-[#f8f7f6] rounded-xl p-6 text-center">
                                <div className="text-[#ff8b69] mb-4 flex justify-center">{item.icon}</div>
                                <h3 className="font-bold text-[#5c4033] mb-2">{item.title}</h3>
                                <p className="text-[#666] text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-[#5c4033] text-center mb-4">
                        Unsere Kurse
                    </h2>
                    <p className="text-center text-[#666] mb-12 max-w-2xl mx-auto">
                        Wähle den Kurs, der zu deinen Zielen passt. Wir beraten dich persönlich und erstellen
                        eine Route, die auf deine Lebenssituation und dein Investment zugeschnitten ist.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {courses.map(course => (
                            <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={course.image}
                                        alt={course.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 right-4 bg-[#ff8b69] text-white px-3 py-1 rounded-full text-sm font-bold">
                                        {course.price.toLocaleString('de-DE')} €
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#5c4033] mb-2">{course.name}</h3>
                                    <p className="text-[#666] text-sm mb-3">{course.description}</p>
                                    <p className="text-[#ff8b69] text-sm font-medium mb-4 flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {course.duration}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {course.features.map((f, i) => (
                                            <span key={i} className="bg-[#f8f7f6] text-[#5c4033] text-xs px-2 py-1 rounded flex items-center gap-1">
                                                <svg className="w-3 h-3 text-[#ff8b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {f}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-2">
                                        <Link
                                            href={course.href}
                                            className="flex-1 text-center border border-[#ff8b69] text-[#ff8b69] py-2 rounded-full text-sm font-medium hover:bg-[#ff8b69] hover:text-white transition-colors"
                                        >
                                            Details
                                        </Link>
                                        <button
                                            onClick={() => addToCart({
                                                id: course.id,
                                                name: course.name,
                                                price: course.price,
                                                image: course.image
                                            })}
                                            className="flex-1 bg-[#ff8b69] text-white py-2 rounded-full text-sm font-medium hover:bg-[#e87a5a] transition-colors"
                                        >
                                            In den Warenkorb
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Self-Study Warning */}
            <section className="py-16 bg-gradient-to-br from-[#5c4033] to-[#3d2a22] text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                        Selbststudium oder Profi-Ausbildung?
                    </h2>
                    <p className="text-white/80 mb-6">
                        Alles selbst zu lernen klingt günstig, kostet dich aber deine ersten Kunden und wertvolle Zeit.
                        Ein schlechter Ruf am Anfang ist schwer zu reparieren.
                    </p>
                    <p className="text-white/80 mb-6">
                        Frage dich ehrlich: Hast du als Autodidakt wirklich die Qualität, um gegen Konkurrenten
                        zu bestehen, die seit 10 oder 20 Jahren am Markt sind? Mit Halbwissen wirst du im
                        Preis-Kampf untergehen.
                    </p>
                    <p className="text-[#ffb499] font-semibold text-lg">
                        Mach es direkt richtig: Eine Profi-Ausbildung gibt dir das Werkzeug, um etablierte
                        Mitbewerber nicht nur einzuholen, sondern zu überholen.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-[#5c4033] text-center mb-12">
                        FAQ – Häufig gestellte Fragen
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <details key={i} className="bg-[#f8f7f6] rounded-xl overflow-hidden group">
                                <summary className="p-6 cursor-pointer font-semibold text-[#5c4033] hover:bg-[#f0ede8] transition-colors list-none flex justify-between items-center">
                                    {faq.question}
                                    <span className="text-[#ff8b69] group-open:rotate-45 transition-transform">+</span>
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
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Kontaktieren Sie uns per WhatsApp!
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
