"use client";

import Link from 'next/link';
import { useLanguage } from "@/contexts/LanguageContext";

const courseInfo = {
    id: "beauty-expert",
    name: "Head-to-Toe Beauty Expert",
    subtitle: "Pediküre, Head Spa & Wimpernverlängerung",
    duration: "7 Tage Intensiv",
    defaultImage: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&h=500&fit=crop"
};

// SVG Icons
const FootIcon = () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const SpaIcon = () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

const EyeIcon = () => (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const modules = [
    {
        icon: <FootIcon />,
        title: "Professionelle Pediküre",
        description: "Wir vermitteln Ihnen nicht nur die Ästhetik, sondern das komplette Behandlungskonzept: Fachgerechte Hornhautentfernung (Fersenreinigung), präzise Formgebung sowie das perfekte Auftragen von Gel auf den Zehennägeln. Ihre Kunden werden das Gefühl lieben, wie auf Wolken zu gehen."
    },
    {
        icon: <SpaIcon />,
        title: "Head Spa",
        description: "Tauchen Sie ein in die Welt der Entspannung. Sie lernen die Kopfmassage nach asiatischer Heilkunde, kombiniert mit intensiver Kopfhautpflege. Dieser Trend ist aktuell stark gefragt und bietet Ihnen eine attraktive Gewinnspanne bei geringem Materialeinsatz."
    },
    {
        icon: <EyeIcon />,
        title: "Wimpernverlängerung",
        description: "Hier lernen Sie, wie Sie den Blick Ihrer Kunden gezielt verändern. Wir trainieren mit Ihnen die Präzision und Technik, die Sie benötigen, um saubere und langanhaltende Ergebnisse zu erzielen."
    }
];

export default function BeautyExpertClient({ content: pageContent }: { content?: any }) {
    const { t } = useLanguage();
    const heroImage = pageContent?.hero?.image || courseInfo.defaultImage;

    return (
        <main className="pt-24 bg-[#f5ebe0]">
            {/* Breadcrumb */}
            <div className="max-w-6xl mx-auto px-6 py-4">
                <nav className="text-sm text-[#666]">
                    <Link href="/schulung" className="hover:text-[#ff8b69]">Schulung</Link>
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
                                src={heroImage}
                                alt="Beauty Expert Kurs"
                                className="rounded-2xl shadow-lg w-full"
                            />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#5c4033] mb-2">
                                Beauty-Trio: Ihr schnellerer Weg zum Erfolg
                            </h1>
                            <p className="text-xl text-[#666] mb-4">
                                {courseInfo.subtitle}
                            </p>
                            <p className="text-[#666] mb-6 flex items-center gap-2">
                                <svg className="w-5 h-5 text-[#ff8b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {courseInfo.duration}
                            </p>

                            <div className="bg-white rounded-xl p-6 mb-6">
                                <p className="text-[#555] mb-4">
                                    Keine Lust auf langwieriges Üben? Starten Sie direkt durch!
                                    Diese drei Behandlungen gehören aktuell zu den gefragtesten Services auf dem Markt.
                                </p>

                                <h3 className="font-bold text-[#5c4033] mb-3">Ihr Business-Vorteil:</h3>
                                <ul className="space-y-3 text-[#666]">
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-[#ff8b69] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
                                        </svg>
                                        <span><strong>Größere Zielgruppe:</strong><br />Auch Kunden, die keine Wimpern benötigen, kommen für Fußpflege oder Entspannung.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-[#ff8b69] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
                                        </svg>
                                        <span><strong>Voller Terminkalender:</strong><br />Mehr Services bedeuten eine konstante Auslastung – ganz ohne Leerlauf.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-[#ff8b69] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
                                        </svg>
                                        <span><strong>Maximale Kundenbindung:</strong><br />Ihre Kunden erhalten alles aus einer Hand – das spart langfristig Marketingkosten.</span>
                                    </li>
                                </ul>
                            </div>

                            <a
                                href="https://wa.me/491638562022"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-[#25D366] text-white py-4 rounded-full font-bold text-lg hover:bg-[#1da851] transition-colors text-center flex items-center justify-center gap-2"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                Jetzt per WhatsApp anfragen
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-[#5c4033] text-center mb-12">
                        Das erwartet Sie im Kurs
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {modules.map((module, i) => (
                            <div key={i} className="bg-[#f8f7f6] rounded-2xl p-8 text-center">
                                <div className="text-[#ff8b69] mb-4 flex justify-center">{module.icon}</div>
                                <h3 className="text-xl font-bold text-[#5c4033] mb-4">{module.title}</h3>
                                <p className="text-[#666]">{module.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-[#ff8b69] to-[#e87a5a] text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                        Bereit für Ihren schnelleren Weg zum Erfolg?
                    </h2>
                    <p className="text-white/80 mb-8">
                        Mit dem Beauty-Trio Kurs bist du in nur 7 Tagen bereit, drei der gefragtesten Services anzubieten.
                    </p>
                    <a
                        href="https://wa.me/491638562022"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-[#ff8b69] px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-colors inline-flex items-center gap-2"
                    >
                        Jetzt anfragen
                    </a>
                </div>
            </section>

            {/* WhatsApp CTA */}
            {/* <section className="py-12 bg-white">
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
            </section> */}
        </main>
    );
}
