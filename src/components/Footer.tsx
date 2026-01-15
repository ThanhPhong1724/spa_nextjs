"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const socials = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/smilingstudiowiesbaden/",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/smilingstudiowiesbaden",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                />
            </svg>
        ),
    },
    {
        name: "TikTok",
        href: "https://www.tiktok.com/@smilingstudiowiesbaden",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
            </svg>
        ),
    },
];

const paymentLabels = {
    de: { cash: "Barzahlung", banking: "Online-Banking" },
    en: { cash: "Cash", banking: "Online Banking" }
};

const hoursLabels = {
    de: { weekdays: "Mo.–Fr.: 09:00–18:00", saturday: "Sa.: 09:00–17:00", mapLink: "Auf Google Maps öffnen", busStop: "Direkt gegenüber der Bushaltestelle Dreiweidenstraße." },
    en: { weekdays: "Mon–Fri: 09:00–18:00", saturday: "Sat: 09:00–17:00", mapLink: "Open in Google Maps", busStop: "Directly opposite the Dreiweidenstraße bus stop." }
};

export default function Footer({ content }: { content?: any }) {
    const { language, t } = useLanguage();

    // Default values if no content is provided
    const info = content?.contact_info || {
        address: "Dotzheimerstr. 68, 65197 Wiesbaden",
        phone: "0163 856 2022",
        email: "info@smilingstudio@gmail.com",
        whatsapp: "0163 856 2022"
    };

    const socialsLinks = content?.social_media || {
        facebook: "https://www.facebook.com/smilingstudiowiesbaden/",
        instagram: "https://www.instagram.com/smilingstudiowiesbaden",
        tiktok: "https://www.tiktok.com/@smilingstudiowiesbaden"
    };

    const hoursData = content?.hours || {
        weekdays: "09:00 - 18:00",
        saturday: "09:00 - 17:00",
        sunday: "geschlossen"
    };

    const payment = paymentLabels[language];
    const hours = hoursLabels[language];

    // Helper to view default hours text directly
    const displayedHours = {
        weekdays: hoursData.weekdays,
        saturday: hoursData.saturday,
        sunday: hoursData.sunday
    };

    return (
        <footer className="bg-white text-[#ff8b69]">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Column 1: Kontakt */}
                    <div>
                        <h3 className="text-[#ff8b69] font-bold text-lg uppercase tracking-wide mb-6">
                            {t("footer.contact")}
                        </h3>
                        <div className="space-y-4 text-[#5c4033]">
                            <a
                                href={`tel:${info.phone}`}
                                className="flex items-center gap-3 hover:text-[#ff8b69] transition-colors"
                            >
                                <span className="material-symbols-outlined text-[#ff8b69]">call</span>
                                <span>{info.phone}</span>
                            </a>
                            <a
                                href={`mailto:${info.email}`}
                                className="flex items-center gap-3 hover:text-[#ff8b69] transition-colors"
                            >
                                <span className="material-symbols-outlined text-[#ff8b69]">mail</span>
                                <span>{info.email}</span>
                            </a>
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#ff8b69] mt-0.5">location_on</span>
                                <div>
                                    <p>{info.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Öffnungszeiten + Map */}
                    <div>
                        <h3 className="text-[#ff8b69] font-bold text-lg uppercase tracking-wide mb-6">
                            {t("footer.hours")}
                        </h3>
                        <div className="space-y-4 text-[#5c4033]">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#ff8b69] mt-0.5">schedule</span>
                                <div>
                                    <p>{language === 'de' ? 'Mo.–Fr.' : 'Mon–Fri'}: {displayedHours.weekdays}</p>
                                    <p>{language === 'de' ? 'Sa.' : 'Sat'}: {displayedHours.saturday}</p>
                                    <p>{language === 'de' ? 'So.' : 'Sun'}: {displayedHours.sunday}</p>
                                </div>
                            </div>
                            <a
                                href={`https://maps.google.com/?q=${encodeURIComponent(info.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 hover:text-[#ff8b69] transition-colors"
                            >
                                <span className="material-symbols-outlined text-[#ff8b69]">map</span>
                                <span>{hours.mapLink}</span>
                            </a>
                            <p className="text-sm italic text-[#5c4033]/70">
                                {hours.busStop}
                            </p>
                        </div>
                    </div>

                    {/* Column 3: Socials + Zahlungsarten */}
                    <div>
                        <h3 className="text-[#ff8b69] font-bold text-lg uppercase tracking-wide mb-6">
                            {t("footer.follow")}
                        </h3>
                        <div className="flex gap-3 mb-8">
                            {socials.map((social) => {
                                // Map social keys to urls dynamically
                                const key = social.name.toLowerCase();
                                const href = socialsLinks[key] || social.href;

                                return (
                                    <a
                                        key={social.name}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="w-11 h-11 rounded-full bg-[#ff8b69]/10 flex items-center justify-center text-[#ff8b69] hover:bg-[#ff8b69] hover:text-white transition-all"
                                    >
                                        {social.icon}
                                    </a>
                                );
                            })}
                        </div>

                        <h4 className="text-[#ff8b69] font-bold text-sm uppercase tracking-wide mb-4">
                            {t("footer.payment")}
                        </h4>
                        <div className="flex flex-wrap gap-3 text-sm text-[#5c4033]">
                            <span className="flex items-center gap-2 bg-[#ff8b69]/10 px-3 py-1.5 rounded-full border border-[#ff8b69]/20">
                                <span className="material-symbols-outlined text-base text-[#ff8b69]">payments</span>
                                {payment.cash}
                            </span>
                            <span className="flex items-center gap-2 bg-[#ff8b69]/10 px-3 py-1.5 rounded-full border border-[#ff8b69]/20">
                                <span className="material-symbols-outlined text-base text-[#ff8b69]">account_balance</span>
                                {payment.banking}
                            </span>
                            <span className="flex items-center gap-2 bg-[#ff8b69]/10 px-3 py-1.5 rounded-full border border-[#ff8b69]/20">
                                <svg className="w-4 h-4 text-[#ff8b69]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 00-.794.68l-.04.22-.63 4.073-.032.17a.804.804 0 01-.794.677h-2.11a.483.483 0 01-.477-.558l.593-3.807h-.002l-.001.018.862-5.546.02-.11a.806.806 0 01.795-.68h.501c3.238 0 5.774-1.316 6.514-5.12.03-.153.054-.302.073-.447a3.541 3.541 0 011.236 1.983z" />
                                    <path d="M9.048 8.016l.003-.02.072-.46a.804.804 0 01.794-.68h5.044c.599 0 1.158.052 1.67.16a6.84 6.84 0 011.235.384 5.15 5.15 0 01.734.359c-.037-.687-.037-1.21-.037-1.21l-.002-.025c-.38-2.42-2.542-3.24-5.174-3.24H7.394a.805.805 0 00-.794.68L4.6 16.935a.483.483 0 00.477.558h3.51l.88-5.668.581-3.81z" />
                                </svg>
                                PayPal
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#ff8b69]/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#5c4033]">
                        <p>© 2025 Smiling Studio. {t("footer.rights")}</p>
                        <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
                            <Link href="/" className="hover:text-[#ff8b69] transition-colors">
                                {t("footer.home")}
                            </Link>
                            <span className="text-[#ff8b69]/30">|</span>
                            <Link href="/impressum" className="hover:text-[#ff8b69] transition-colors">
                                {t("footer.imprint")}
                            </Link>
                            <span className="text-[#ff8b69]/30">|</span>
                            <Link href="/agb" className="hover:text-[#ff8b69] transition-colors">
                                {t("footer.terms")}
                            </Link>
                            <span className="text-[#ff8b69]/30">|</span>
                            <Link href="/datenschutz" className="hover:text-[#ff8b69] transition-colors">
                                {t("footer.privacy")}
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}
