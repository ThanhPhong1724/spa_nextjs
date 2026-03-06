"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type PriceListClientProps = {
    content?: any;
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#d4a373]/20 transition-all hover:shadow-md">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between p-6 text-left transition-colors duration-300 ${isOpen ? "bg-[#e8d5c4]" : "bg-white hover:bg-[#faf4ef]"
                    }`}
            >
                <span className="font-bold text-[#5c4033] text-lg pr-8">{question}</span>
                <span className={`material-symbols-outlined transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180 text-[#5c4033]" : "text-[#d4a373]"
                    }`}>
                    expand_more
                </span>
            </button>
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="p-6 text-[#6b5344] leading-relaxed border-t border-[#d4a373]/10">
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default function PriceListClient({ content }: PriceListClientProps) {
    const { language, t } = useLanguage();

    const menuImageDe = content?.menu_image?.image || "https://vipcorel.com/attachments/hanos-skincare-beauty-dep-thach-thuc-thoi-gian-png.793/";
    const menuImageEn = content?.menu_image?.image_en || menuImageDe;
    const menuImage = language === 'en' ? menuImageEn : menuImageDe;

    return (
        <div className="min-h-screen bg-[#f5ebe0]">
            {/* Hero */}
            <section className="py-20 pt-44">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-[#ff8b69] text-4xl md:text-5xl font-bold">{t("pricelist.title")}</h1>
                    <p className="text-[#5c4033] text-lg mt-4 max-w-2xl mx-auto">
                        {t("pricelist.note")}
                    </p>
                </div>
            </section>

            {/* Price List Image */}
            <section className="pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#d4a373]/20">
                    {/* Price List Image */}
                    <img
                        src={menuImage}
                        alt="Preisliste - Smiling Studio"
                        className="w-full h-auto"
                    />
                </div>

                {/* FAQ */}
                <div className="mt-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#ff8b69] text-center mb-10 font-serif">{t("pricelist.faq_title")}</h2>
                    <div className="space-y-4">
                        <FAQItem
                            question={t("pricelist.faq_q1")}
                            answer={t("pricelist.faq_a1")}
                        />
                        <FAQItem
                            question={t("pricelist.faq_q2")}
                            answer={t("pricelist.faq_a2")}
                        />
                        <FAQItem
                            question={t("pricelist.faq_q3")}
                            answer={t("pricelist.faq_a3")}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
