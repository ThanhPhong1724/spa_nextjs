"use client";

import Link from 'next/link';
import { usePageContent } from "@/hooks/usePageContent";

const courseInfo = {
    id: "nails-kurs",
    name: "Nails Profi-Kurs",
    duration: "2 Kursstufen – zeitlich flexibel nach deinen Bedürfnissen",
    defaultImage: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=500&fit=crop"
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
        answer: (
            <>
                Das ist unser besonderer Vorteil:<br />
                Im Studio hast du Zugriff auf über 1.000 Farben und professionelle Geräte.<br />
                Du kannst alles testen und herausfinden, was wirklich zu dir passt – das spart dir später viel Geld.<br /><br />
                Alle Lernmaterialien stellen wir dir selbstverständlich zur Verfügung.
            </>
        )
    },
    {
        question: "Arbeiten wir an Übungshänden aus Plastik?",
        answer: "Wir setzen auf maximale Praxisnähe, bis 90% an echten Modellen. Nur so lernen Sie den Umgang mit unterschiedlichen Nageltypen und gewinnen die nötige Sicherheit für Ihre zukünftigen Kunden."
    }
];

export default function NailsKursClient() {
    const { content: pageContent } = usePageContent("schulung_nails_page");
    const heroImage = pageContent?.hero?.image || courseInfo.defaultImage;
    const extraImage = pageContent?.hero?.extra_image || "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&h=400&fit=crop";

    return (
        <main className="pt-24 bg-[#f5ebe0]">
            {/* Breadcrumb */}
            <div className="max-w-6xl mx-auto px-6 py-4">
                <nav className="text-sm text-[#666]">
                    <Link href="/schulung" className="hover:text-[#ff8b69]">Schulung</Link>
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
                                src={heroImage}
                                alt="Nails Kurs"
                                className="rounded-2xl shadow-lg w-full"
                            />
                            <img
                                src={extraImage}
                                alt="Nails Praxis"
                                className="rounded-2xl shadow-lg w-full mt-4"
                            />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#5c4033] mb-4">
                                {courseInfo.name}
                            </h1>
                            <p className="text-[#666] mb-6 flex items-center gap-2">
                                <svg className="w-5 h-5 text-[#ff8b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {courseInfo.duration}
                            </p>

                            <div className="bg-white rounded-xl p-6 mb-6">
                                <h3 className="font-bold text-[#5c4033] mb-4">
                                    Warum Zeit mit Selbstversuchen verschwenden? Bei uns lernst du direkt auf Profi-Niveau:
                                </h3>
                                <ul className="space-y-3 text-[#666]">
                                    {[
                                        { title: "Detail-Training:", desc: "Wir lehren Bewegungsabläufe, keine starren Formeln." },
                                        { title: "100% Praxis:", desc: "Training an echten Modellen für maximale Sicherheit." },
                                        { title: "Fehlkäufe vermeiden:", desc: "Teste über 1.000 Farben und Profi-Equipment, ohne selbst investieren zu müssen." },
                                        { title: "Individuelle Technik:", desc: "Finde aus vielen Methoden genau die, die zu dir passt." },
                                        { title: "Profi-Speed:", desc: 'Wir trainieren nicht nur das "Wie", sondern auch das effiziente Tempo.' },
                                        { title: "Kundenbindung ab Tag 1:", desc: "Vermeide typische Anfängerfehler und begeistere deine ersten Kunden sofort." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-[#ff8b69] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span><strong>{item.title}</strong> {item.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="text-lg font-semibold text-[#5c4033] mb-6 flex items-center gap-2">
                                <svg className="w-6 h-6 text-[#ff8b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                                Werde Profi statt Amateur. Dein Erfolg beginnt hier!
                            </p>

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
