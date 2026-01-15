"use client";

import { useLanguage } from "@/contexts/LanguageContext";

type AngeboteClientProps = {
    content?: any;
};

export default function AngeboteClient({ content }: AngeboteClientProps) {
    const { language, t } = useLanguage();

    // Helper to get dynamic or default value
    const getOffer = (key: string, defaultData: any) => {
        const offerContent = content?.[key] || {};

        // Visibility Check (default to true if not set)
        const isVisible = offerContent.visible !== false && offerContent.visible !== "false";

        if (!isVisible) return null;

        return {
            title: language === 'de' ? (offerContent.title_de || defaultData.de.title) : (offerContent.title_en || defaultData.en.title),
            desc: language === 'de' ? (offerContent.desc_de || defaultData.de.desc) : (offerContent.desc_en || defaultData.en.desc),
            validUntil: offerContent.valid_until || defaultData.validUntil,
            oldPrice: offerContent.old_price !== undefined ? offerContent.old_price : defaultData.oldPrice,
            newPrice: offerContent.new_price !== undefined ? offerContent.new_price : defaultData.newPrice,
            discount: offerContent.discount !== undefined ? offerContent.discount : defaultData.discount,
        };
    };

    const defaultOffer1 = {
        de: { title: "Headspa + Wimpern Kombi", desc: "Komplette Entspannung mit Headspa und Wimpernverlängerung" },
        en: { title: "Headspa + Lashes Combo", desc: "Complete relaxation with headspa and lash extensions" },
        oldPrice: "180€", newPrice: "150€", validUntil: "31.03.2025"
    };

    const defaultOffer2 = {
        de: { title: "Nageldesign Aktion", desc: "Maniküre mit Gel-Lack inklusive Design" },
        en: { title: "Nail Design Special", desc: "Manicure with gel polish including design" },
        oldPrice: "65€", newPrice: "50€", validUntil: "28.02.2025"
    };

    const defaultOffer3 = {
        de: { title: "Neukundenrabatt", desc: "10% Rabatt auf die erste Behandlung" },
        en: { title: "New Customer Discount", desc: "10% off your first treatment" },
        discount: "10%", validUntil: "Unbegrenzt" // or "Unlimited" handled by CMS value
    };

    const offer1 = getOffer("offer_1", defaultOffer1);
    const offer2 = getOffer("offer_2", defaultOffer2);
    const offer3 = getOffer("offer_3", defaultOffer3);

    const offers = [offer1, offer2, offer3].filter(Boolean); // Filter out nulls (hidden offers)

    return (
        <div className="min-h-screen bg-[#f5ebe0]">
            {/* Hero - Light brown background */}
            <section className="py-20 pt-44">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-[#ff8b69] text-4xl md:text-5xl font-bold">Entdecken Sie unsere exklusiven <br /> <br /> Kombi-Angebote!</h1>
                </div>
            </section>

            {/* Offers */}
            <section className="py-8 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-8">
                        {offers.map((offer: any, index) => (
                            <div key={index} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                                <div className="bg-[#ff8b69] text-white p-4 text-center">
                                    <span className="text-sm font-bold uppercase tracking-wide">{t("angebote.valid_until")}: {offer.validUntil}</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#5c4033] mb-2">{offer.title}</h3>
                                    <p className="text-[#6b5344] text-sm mb-4">{offer.desc}</p>

                                    {offer.newPrice ? (
                                        <div className="flex items-center gap-3">
                                            {offer.oldPrice && <span className="text-[#8b7355] line-through">{offer.oldPrice}</span>}
                                            <span className="text-2xl font-bold text-[#ff8b69]">{offer.newPrice}</span>
                                        </div>
                                    ) : (
                                        <span className="text-2xl font-bold text-[#ff8b69]">{offer.discount}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
