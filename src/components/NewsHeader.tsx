"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function NewsHeader() {
    const { t } = useLanguage();

    return (
        <section className="py-20 pt-44">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-[#ff8b69] text-4xl md:text-5xl font-bold">{t("news.title").toUpperCase()}</h1>
                <p className="text-[#5c4033] text-lg mt-4 max-w-2xl mx-auto">
                    {t("news.subtitle")}
                </p>
            </div>
        </section>
    );
}
