"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { usePageContent } from "@/hooks/usePageContent";
import { handleDownloadImage } from "@/lib/utils";
import Image from "next/image";

export default function AngeboteClient({ content }: { content?: Record<string, any> }) {
    const { t } = useLanguage();
    const { content: pageContent } = usePageContent("angebote_page");

    const combos = [
        {
            title: "Combo 1",
            image: pageContent?.combo_images?.combo1_image || "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=1000&fit=crop",
        },
        {
            title: "Combo 2",
            image: pageContent?.combo_images?.combo2_image || "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=1000&fit=crop",
        },
        {
            title: "Combo 3",
            image: pageContent?.combo_images?.combo3_image || "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&h=1000&fit=crop",
        }
    ];

    const handleDownload = (imageUrl: string, title: string) => {
        handleDownloadImage(imageUrl, `Angebot-${title}.jpg`);
    };

    return (
        <div className="min-h-screen bg-[#f5ebe0]">
            <section className="pt-32 pb-16">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#5c4033] mb-4 uppercase">
                            {t("angebote.title")}
                        </h1>
                    </div>

                    {/* Combos Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {combos.map((combo, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2 border border-[#d4a373]/30">
                                <div className="relative h-[500px] overflow-hidden">
                                    <img
                                        src={combo.image}
                                        alt={combo.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Removed the dark gradient overlay and title text as requested */}
                                </div>
                                <div className="p-6 flex flex-col flex-grow bg-white items-center justify-center">
                                    <button
                                        onClick={() => handleDownload(combo.image, combo.title)}
                                        className="w-full bg-[#ff8b69] text-white py-4 rounded-full font-bold hover:bg-[#e87a5a] transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(255,139,105,0.4)]"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        {t("angebote.download")}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Instruction Box */}
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-[#ff8b69]/20 text-center max-w-4xl mx-auto shadow-xl">
                        <h3 className="text-2xl font-serif font-bold text-[#5c4033] mb-8 relative inline-block">
                            {t("angebote.how_title")}
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff8b69] to-transparent" />
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff8b69] to-[#d4a373] text-white flex items-center justify-center font-bold text-xl mb-4 shadow-md">1</div>
                                <p className="text-[#6b5344] font-medium">{t("angebote.step1")}</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff8b69] to-[#d4a373] text-white flex items-center justify-center font-bold text-xl mb-4 shadow-md">2</div>
                                <p className="text-[#6b5344] font-medium">{t("angebote.step2")}</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff8b69] to-[#d4a373] text-white flex items-center justify-center font-bold text-xl mb-4 shadow-md">3</div>
                                <p className="text-[#6b5344] font-medium">{t("angebote.step3")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
