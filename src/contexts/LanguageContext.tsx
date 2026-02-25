"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "de" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    de: {
        // Navigation
        "nav.home": "HOME",
        "nav.services": "LEISTUNGEN",
        "nav.pricelist": "PREISLISTE",
        "nav.news": "NEWS",
        "nav.offers": "ANGEBOTE",
        "nav.voucher": "ONLINE GUTSCHEIN",
        "nav.booking": "Termin",
        "nav.booking_full": "Termin buchen",

        // Home Hero
        "hero.welcome": "Willkommen bei",
        "hero.studio": "Smiling Studio",
        "hero.description": "Mit über 10 Jahren Erfahrung und kontinuierlicher Weiterbildung gewährleisten wir höchste Qualität und herausragende Ergebnisse. Genießen Sie den einzigartigen Service in einem Ambiente, das Ihnen ein Lächeln ins Gesicht zaubert.",
        "hero.discover": "Leistungen entdecken",
        "hero.scroll": "Scroll",

        // Studio Section
        "studio.title": "Ihr Ort für Entspannung & Schönheit",
        "studio.subtitle": " ",

        // Services
        "services.title": "Unsere Leistungen",
        "services.subtitle": "",
        "services.view_all": "Alle Leistungen ansehen",
        "services.book_now": "Jetzt buchen",
        "services.consultation": "Beratung buchen",
        "services.headspa": "HEADSPA",
        "services.headspa_desc": "Ganzheitliche Kopfhautpflege und Entspannung für Körper und Geist.",
        "services.pmu": "PERMANENT MAKE UP",
        "services.pmu_desc": "Natürliche Schönheit mit modernsten Techniken und höchster Präzision.",
        "services.nails": "NAILS",
        "services.nails_desc": "Kreative Nageldesigns und professionelle Fußpflege für gepflegte Hände und Füße.",
        "services.lashes": "WIMPERN",
        "services.lashes_desc": "Voluminöse Wimpern für einen ausdrucksstarken Blick.",
        "services.brows": "AUGENBRAUEN",
        "services.brows_desc": "Perfekt geformte Augenbrauen für einen ausdrucksstarken Look.",

        // Reviews
        "reviews.title": "Das sagen unsere Kunden",
        "reviews.subtitle": "Bewertungen",

        // CTA
        "cta.title": "Bereit für Ihre Verwandlung?",
        "cta.description": "Buchen Sie noch heute Ihren Termin und erleben Sie den Smiling Studio Unterschied.",
        "cta.offers": "Angebote ansehen",

        // Footer
        "footer.contact": "Kontakt",
        "footer.hours": "Öffnungszeiten",
        "footer.follow": "Folgen Sie uns",
        "footer.payment": "Zahlungsarten",
        "footer.map": "Karte anzeigen",
        "footer.rights": "Alle Rechte vorbehalten.",
        "footer.home": "Startseite",
        "footer.imprint": "Impressum",
        "footer.terms": "AGB",
        "footer.privacy": "Datenschutzerklärung",

        // Leistungen Page
        "leistungen.title": "Unsere Leistungen",
        "leistungen.subtitle": "Entdecken Sie unser vielfältiges Angebot",
        "leistungen.cta_title": "Haben Sie Fragen?",
        "leistungen.cta_desc": "Kontaktieren Sie uns für eine kostenlose Beratung.",
        "leistungen.contact_us": "Kontakt aufnehmen",

        // Angebote Page
        "angebote.title": "Aktuelle Angebote",
        "angebote.subtitle": "Sparen Sie bei unseren exklusiven Deals",
        "angebote.valid_until": "Gültig bis",
        "angebote.cta_title": "Interesse geweckt?",
        "angebote.cta_desc": "Kontaktieren Sie uns für weitere Informationen oder buchen Sie direkt einen Termin.",
        "angebote.call_us": "Anrufen",

        // Gutschein Page
        "gutschein.title": "Online Gutschein",
        "gutschein.subtitle": "Das perfekte Geschenk für Ihre Liebsten",
        "gutschein.step1": "Wert auswählen",
        "gutschein.step2": "Per PayPal bezahlen",
        "gutschein.step3": "Gutschein per E-Mail erhalten",
        "gutschein.custom_amount": "Individueller Betrag",
        "gutschein.recipient_name": "Name des Beschenkten",
        "gutschein.sender_name": "Ihr Name",
        "gutschein.email": "E-Mail für Gutscheinversand",
        "gutschein.message": "Persönliche Nachricht (optional)",
        "gutschein.pay_now": "Jetzt mit PayPal bezahlen",
        "gutschein.note": "Bitte beachten:",
        "gutschein.note_text": "Die Zustellung des Online-Gutscheins erfolgt per E-Mail – bitte überprüfen Sie Ihre E-Mail-Adresse sorgfältig.",

        // Price List Page
        "pricelist.title": "PREISLISTE",
        "pricelist.subtitle": "Transparente Preise",
        "pricelist.note": "Alle Preise verstehen sich inklusive Mehrwertsteuer",
        "pricelist.book_cta": "Bereit für Ihre Behandlung?",

        // FAQ
        "pricelist.faq_title": "Häufig gestellte Fragen",
        "pricelist.faq_q1": "Wie viele Tage im Voraus sollte ich einen Termin buchen?",
        "pricelist.faq_a1": "In der Regel sind 2–3 Tage im Voraus noch Termine verfügbar. Vor Feiertagen oder Urlaubszeiten empfehlen wir, mindestens 1 Woche vorher zu buchen. Wir sind sehr flexibel und versuchen immer, die beste Lösung für unsere Kundinnen und Kunden zu finden.",
        "pricelist.faq_q2": "Ich kann meinen Termin nicht wahrnehmen. Wie storniere oder verschiebe ich ihn?",
        "pricelist.faq_a2": "Bitte informieren Sie uns so früh wie möglich. Eine kostenfreie Stornierung oder Umbuchung ist bis 24 Stunden vor dem Termin möglich. Bei kurzfristigeren Absagen berechnen wir 50% des Behandlungspreises.",
        "pricelist.faq_q3": "Werde ich vor der Behandlung ausführlich beraten?",
        "pricelist.faq_a3": "Ja. Vor jeder Behandlung erhalten Sie eine umfassende Beratung. Ein Aufklärungsbogen stellt sicher, dass Nebenwirkungen, Verhaltensregeln sowie relevante Angaben zu Medikamenten oder bestehenden Erkrankungen berücksichtigt werden.",

        // News Page
        "news.title": "Neuigkeiten",
        "news.subtitle": "Bleiben Sie informiert",
        "news.read_more": "Weiterlesen",
        "news.no_posts": "Aktuell keine Neuigkeiten verfügbar.",

        // Impressum
        "impressum.title": "Impressum",
        "impressum.owner": "Inhaberin",
        "impressum.address": "Anschrift",
        "impressum.contact": "Kontakt",
        "impressum.tax": "Steuernummer",

        // AGB
        "agb.title": "Allgemeine Geschäftsbedingungen",
        "agb.general": "Allgemeines",
        "agb.booking": "Terminvereinbarung",
        "agb.cancellation": "Stornierung",
        "agb.payment": "Zahlung",
        "agb.liability": "Haftung",

        // Datenschutz
        "datenschutz.title": "Datenschutzerklärung",
        "datenschutz.intro": "Wir freuen uns über Ihr Interesse an unserer Website.",
        "datenschutz.responsible": "Verantwortlicher",
        "datenschutz.collection": "Datenerhebung",
        "datenschutz.cookies": "Cookies",
        "datenschutz.rights": "Ihre Rechte",

        // Common
        "common.back": "Zurück",
        "common.more_info": "Mehr erfahren",
        "common.our_services": "Unsere Leistungen",
    },
    en: {
        // Navigation
        "nav.home": "HOME",
        "nav.services": "SERVICES",
        "nav.pricelist": "PRICES",
        "nav.news": "NEWS",
        "nav.offers": "OFFERS",
        "nav.voucher": "GIFT CARD",
        "nav.booking": "Book",
        "nav.booking_full": "Book Appointment",

        // Home Hero
        "hero.welcome": "Welcome to",
        "hero.studio": "Smiling Studio",
        "hero.description": "With over 10 years of experience and continuous training, we guarantee the highest quality and outstanding results. Enjoy our unique service in an ambiance that puts a smile on your face.",
        "hero.discover": "Discover Services",
        "hero.scroll": "Scroll",

        // Studio Section
        "studio.title": "A Place to Feel Good",
        "studio.subtitle": "Our Studio",

        // Services
        "services.title": "Services",
        "services.subtitle": "Our Treatments",
        "services.view_all": "View All Services",
        "services.book_now": "Book Now",
        "services.consultation": "Book Consultation",
        "services.headspa": "HEADSPA",
        "services.headspa_desc": "Holistic scalp care and relaxation for body and mind.",
        "services.pmu": "PERMANENT MAKE UP",
        "services.pmu_desc": "Natural beauty with state-of-the-art techniques and highest precision.",
        "services.nails": "NAILS",
        "services.nails_desc": "Creative nail designs and professional foot care for well-groomed hands and feet.",
        "services.lashes": "EYELASHES",
        "services.lashes_desc": "Voluminous lashes for an expressive look.",
        "services.brows": "EYEBROWS",
        "services.brows_desc": "Perfectly shaped eyebrows for an expressive look.",

        // Reviews
        "reviews.title": "What Our Clients Say",
        "reviews.subtitle": "Reviews",

        // CTA
        "cta.title": "Ready for Your Transformation?",
        "cta.description": "Book your appointment today and experience the Smiling Studio difference.",
        "cta.offers": "View Offers",

        // Footer
        "footer.contact": "Contact",
        "footer.hours": "Opening Hours",
        "footer.follow": "Follow Us",
        "footer.payment": "Payment Methods",
        "footer.map": "View Map",
        "footer.rights": "All rights reserved.",
        "footer.home": "Home",
        "footer.imprint": "Imprint",
        "footer.terms": "Terms",
        "footer.privacy": "Privacy Policy",

        // Leistungen Page
        "leistungen.title": "Our Services",
        "leistungen.subtitle": "Discover our diverse offering",
        "leistungen.cta_title": "Have Questions?",
        "leistungen.cta_desc": "Contact us for a free consultation.",
        "leistungen.contact_us": "Contact Us",

        // Angebote Page
        "angebote.title": "Current Offers",
        "angebote.subtitle": "Save on our exclusive deals",
        "angebote.valid_until": "Valid until",
        "angebote.cta_title": "Interested?",
        "angebote.cta_desc": "Contact us for more information or book an appointment directly.",
        "angebote.call_us": "Call Us",

        // Gutschein Page
        "gutschein.title": "Online Gift Card",
        "gutschein.subtitle": "The perfect gift for your loved ones",
        "gutschein.step1": "Select value",
        "gutschein.step2": "Pay via PayPal",
        "gutschein.step3": "Receive voucher by email",
        "gutschein.custom_amount": "Custom amount",
        "gutschein.recipient_name": "Recipient's name",
        "gutschein.sender_name": "Your name",
        "gutschein.email": "Email for voucher delivery",
        "gutschein.message": "Personal message (optional)",
        "gutschein.pay_now": "Pay with PayPal now",
        "gutschein.note": "Please note:",
        "gutschein.note_text": "The online voucher will be delivered by email – please check your email address carefully.",

        // Price List Page
        "pricelist.title": "PRICE LIST",
        "pricelist.subtitle": "Transparent Prices",
        "pricelist.note": "All prices include VAT",
        "pricelist.book_cta": "Ready for your treatment?",

        // FAQ
        "pricelist.faq_title": "Frequently Asked Questions",
        "pricelist.faq_q1": "How many days in advance should I book an appointment?",
        "pricelist.faq_a1": "Usually, appointments are available 2–3 days in advance. Before holidays or vacation periods, we recommend booking at least 1 week in advance. We are very flexible and always try to find the best solution for our customers.",
        "pricelist.faq_q2": "I cannot keep my appointment. How do I cancel or reschedule?",
        "pricelist.faq_a2": "Please inform us as soon as possible. Free cancellation or rescheduling is possible up to 24 hours before the appointment. For cancellations on shorter notice, we charge 50% of the treatment price.",
        "pricelist.faq_q3": "Will I receive a detailed consultation before the treatment?",
        "pricelist.faq_a3": "Yes. Before every treatment, you will receive a comprehensive consultation. An informed consent form ensures that side effects, behavioral guidelines, and relevant information about medications or existing conditions are taken into account.",

        // News Page
        "news.title": "News",
        "news.subtitle": "Stay informed",
        "news.read_more": "Read more",
        "news.no_posts": "No news available at the moment.",

        // Impressum
        "impressum.title": "Imprint",
        "impressum.owner": "Owner",
        "impressum.address": "Address",
        "impressum.contact": "Contact",
        "impressum.tax": "Tax Number",

        // AGB
        "agb.title": "Terms and Conditions",
        "agb.general": "General",
        "agb.booking": "Booking",
        "agb.cancellation": "Cancellation",
        "agb.payment": "Payment",
        "agb.liability": "Liability",

        // Datenschutz
        "datenschutz.title": "Privacy Policy",
        "datenschutz.intro": "We appreciate your interest in our website.",
        "datenschutz.responsible": "Responsible Party",
        "datenschutz.collection": "Data Collection",
        "datenschutz.cookies": "Cookies",
        "datenschutz.rights": "Your Rights",

        // Common
        "common.back": "Back",
        "common.more_info": "Learn more",
        "common.our_services": "Our Services",
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("de");

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
