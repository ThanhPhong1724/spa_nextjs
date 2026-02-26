"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageContent } from "@/hooks/usePageContent";

// Typewriter Effect Component - uses ref to avoid hydration/browser-extension conflicts
function TypeWriter({ text, className = "" }: { text: string; className?: string }) {
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let displayText = "";
        let isDeleting = false;
        let timeoutId: ReturnType<typeof setTimeout>;

        function tick() {
            const typeSpeed = isDeleting ? 50 : 100;
            const pauseTime = isDeleting ? 500 : 2000;

            if (!isDeleting && displayText === text) {
                timeoutId = setTimeout(() => { isDeleting = true; tick(); }, pauseTime);
                return;
            } else if (isDeleting && displayText === "") {
                timeoutId = setTimeout(() => { isDeleting = false; tick(); }, pauseTime);
                return;
            }

            if (isDeleting) {
                displayText = text.substring(0, displayText.length - 1);
            } else {
                displayText = text.substring(0, displayText.length + 1);
            }

            if (textRef.current) {
                textRef.current.textContent = displayText;
            }

            timeoutId = setTimeout(tick, typeSpeed);
        }

        tick();
        return () => clearTimeout(timeoutId);
    }, [text]);

    return (
        <span className={className} suppressHydrationWarning>
            <span ref={textRef} suppressHydrationWarning></span>
            <span className="animate-pulse">|</span>
        </span>
    );
}

export default function KopfhautPflegePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [heroTitle] = useState("INNOVATIVE TREATMENTS");
    const { content } = usePageContent("innovative_treatments_page");
    const videoUrl = content?.hero?.video_url || "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4";
    const microneedlingVideo = content?.hero?.microneedling_video || "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4";
    const glowmeVideo = content?.hero?.glowme_video || "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4";
    const expertVideo1 = content?.expert_videos?.video1_url || "https://www.youtube.com/embed/ULct2YaC9do";
    const expertVideo2 = content?.expert_videos?.video2_url || "https://www.youtube.com/embed/7i8WdexpTmk";
    const expertVideo3 = content?.expert_videos?.video3_url || "https://www.youtube.com/embed/693XjyHcxOE";
    const infoSheetImage = content?.info_sheet?.image || "/images/innovative-treatments-info.jpg";
    const { t } = useLanguage();

    const faqs = Array.from({ length: 10 }, (_, i) => ({
        question: t(`it.faq_q${i + 1}`),
        answer: t(`it.faq_a${i + 1}`),
    }));

    return (
        <div className="min-h-screen bg-[#f5ebe0]">
            {/* Hero */}
            <section className="pt-44 pb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-[#ff8b69] text-xl sm:text-2xl md:text-4xl font-bold uppercase tracking-wide">
                        <span className="block sm:inline">INNOVATIVE</span>{" "}
                        <span className="block sm:inline">TREATMENTS</span>
                    </h1>
                </div>
            </section>

            {/* ===== Treatment Section ===== */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-[#5c4033] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            {t("it.intro")} <br /> <strong>{t("it.intro_bold")}</strong>
                        </p>
                        <div className="mt-6 flex justify-center">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff8b69] to-[#d4a373] text-white px-6 py-2.5 rounded-full font-bold shadow-md shadow-[#ff8b69]/20">
                                <svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{t("it.sticker")} <span className="underline decoration-white/50 underline-offset-2">{t("it.sticker2")}</span></span>
                            </div>
                        </div>
                    </div>

                    {/* Premium Treatment - Oxygen Scalp Detox */}
                    <div className="mb-12">
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-gradient-to-br from-[#9b6846] to-[#8a5c40] group perspective-1000 border border-white/10" suppressHydrationWarning>
                            <div className="absolute inset-0 opacity-30 pointer-events-none">
                                <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px]" />
                                <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-black/10 rounded-full blur-[100px]" />
                            </div>
                            <div className="absolute top-0 right-0 w-40 h-40 overflow-hidden z-20 pointer-events-none"></div>

                            <div className="relative p-8 md:p-12 text-white">
                                <div className="flex flex-col items-center text-center mb-10 relative z-10">
                                    <h3 className="text-4xl md:text-[3.5rem] font-serif font-bold mb-4 text-white drop-shadow-md pb-1 tracking-wide">
                                        Oxygen Scalp Detox
                                    </h3>
                                    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent mb-5" />
                                </div>

                                <div className="mb-10 w-full rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 relative z-10">
                                    <video key={videoUrl + "1"} autoPlay loop muted playsInline className="w-full aspect-video object-cover">
                                        <source src={videoUrl} type="video/mp4" />
                                    </video>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6 mb-10">
                                    {[
                                        { title: "Bubble Cleaning", desc: t("it.osd_bubble"), icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" },
                                        { title: "Oxygen Infusion", desc: t("it.osd_oxygen"), icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" },
                                        { title: "Nutrient Serum", desc: t("it.osd_serum"), icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517l-2.387-.477a2 2 0 01-1.594-1.955v-8.164a2 2 0 012.5-1.95l2.387.478a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517l2.387.477a2 2 0 011.594 1.955v8.164a2 2 0 01-.948 1.7" }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white/10 backdrop-blur-md rounded-[1.5rem] p-6 border border-white/20 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:bg-white/[0.12]">
                                            <div className="w-[3.25rem] h-[3.25rem] bg-white/5 backdrop-blur-xl border border-white/30 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                                                <svg className="w-6 h-6 text-white/90 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                                </svg>
                                            </div>
                                            <h4 className="font-bold text-[1.1rem] text-white mb-2 tracking-wide drop-shadow-sm font-serif">{item.title}</h4>
                                            <p className="text-white/80 text-[13px] leading-[1.6] font-light">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="relative">
                                    <div className="relative bg-white/10 backdrop-blur-md rounded-[1.5rem] py-8 px-6 md:px-10 border border-white/20 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                                        <div className="w-[3.5rem] h-[3.5rem] flex-shrink-0 bg-[#ff8b69] rounded-full flex items-center justify-center shadow-md">
                                            <svg className="w-7 h-7 text-white drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div className="text-center md:text-left flex-grow">
                                            <h4 className="text-[#e2bca8] font-bold uppercase tracking-[0.15em] text-[11px] mb-2 drop-shadow-sm">{t("it.osd_result_label")}</h4>
                                            <p className="text-white text-lg md:text-[1.35rem] leading-relaxed drop-shadow-md">
                                                {t("it.osd_result")} <br className="hidden md:block" />
                                                <span className="font-serif italic text-white/95">{t("it.osd_result2")}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scalp Microneedling Service Section */}
                    <div className="mb-12 mt-12">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-[#f5ebe0] to-[#e8d5c4] border border-[#d4a373]/30">
                            <div className="relative p-8 md:p-12">
                                <div className="flex flex-col items-center text-center mb-10">
                                    <h3 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-[#5c4033]">Scalp Microneedling</h3>
                                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ff8b69] to-transparent mb-6 opacity-80" />
                                </div>

                                <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-[#d4a373]/30 mb-10">
                                    <video key={microneedlingVideo} autoPlay loop muted playsInline className="w-full aspect-video object-cover">
                                        <source src={microneedlingVideo} type="video/mp4" />
                                    </video>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
                                    {[
                                        { title: t("it.mn_f1"), icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" },
                                        { title: t("it.mn_f2"), icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                                        { title: t("it.mn_f3"), icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
                                        { title: t("it.mn_f4"), icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517l-2.387-.477a2 2 0 01-1.594-1.955v-8.164a2 2 0 012.5-1.95l2.387.478a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517l2.387.477a2 2 0 011.594 1.955v8.164a2 2 0 01-.948 1.7" }
                                    ].map((item, i) => (
                                        <div key={i} className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#e8d5c4] text-center flex flex-col items-center justify-center">
                                            <div className="w-12 h-12 bg-gradient-to-br from-[#ff8b69] to-[#d4a373] text-white rounded-full flex items-center justify-center mb-4 shadow-md">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                                </svg>
                                            </div>
                                            <h4 className="font-serif font-bold text-lg text-[#5c4033]">{item.title}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GlowMe Service Section */}
                    <div className="mb-12 mt-12">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-[#f5ebe0] to-[#e8d5c4] border border-[#d4a373]/30">
                            <div className="relative p-8 md:p-12">
                                <div className="flex flex-col items-center text-center mb-10">
                                    <h3 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-[#5c4033]">GlowMe</h3>
                                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ff8b69] to-transparent mb-6 opacity-80" />
                                    <p className="text-[#6b5344] text-lg md:text-xl max-w-2xl leading-relaxed">{t("it.glow_subtitle")}</p>
                                </div>

                                <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-[#d4a373]/30 mb-10">
                                    <video key={glowmeVideo} autoPlay loop muted playsInline className="w-full aspect-video object-cover">
                                        <source src={glowmeVideo} type="video/mp4" />
                                    </video>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                                    {[
                                        { icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", title: t("it.glow_s1"), desc: t("it.glow_s1_desc") },
                                        { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", title: "Bubble Cleaning", desc: t("it.glow_s2_desc") },
                                        { icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z", title: "Oxygen-Power", desc: t("it.glow_s3_desc") },
                                        { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "EMS Nano-Crystals", desc: t("it.glow_s4_desc") },
                                        { icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707", title: "Glow Light Treatment", desc: t("it.glow_s5_desc") },
                                        { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Purifying Finishing Care", desc: t("it.glow_s6_desc") }
                                    ].map((item, i) => (
                                        <div key={i} className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#e8d5c4]">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 bg-gradient-to-br from-[#ff8b69] to-[#d4a373] shadow-inner rounded-full flex items-center justify-center text-white flex-shrink-0">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                                    </svg>
                                                </div>
                                                <h4 className="font-serif font-bold text-lg text-[#5c4033]">{item.title}</h4>
                                            </div>
                                            <p className="text-[#6b5344] text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Expert Videos */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
                        <div className="mb-6">
                            <div className="font-bold text-[#5c4033] mb-4 flex items-center gap-2 justify-center">
                                <h3 className="text-2xl md:text-4xl font-serif font-bold text-[#5c4033] mb-0">{t("it.experts_title")}</h3>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="rounded-xl overflow-hidden shadow-lg">
                                    <iframe width="100%" height="200" src={expertVideo1} title={t("it.vid1_label")} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full"></iframe>
                                    <p className="text-center text-sm text-[#5c4033] py-2 bg-[#f5ebe0]">{t("it.vid1_label")}</p>
                                </div>
                                <div className="rounded-xl overflow-hidden shadow-lg">
                                    <iframe width="100%" height="200" src={expertVideo2} title={t("it.vid2_label")} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full"></iframe>
                                    <p className="text-center text-sm text-[#5c4033] py-2 bg-[#f5ebe0]">{t("it.vid2_label")}</p>
                                </div>
                                <div className="rounded-xl overflow-hidden shadow-lg">
                                    <iframe width="100%" height="200" src={expertVideo3} title={t("it.vid3_label")} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full"></iframe>
                                    <p className="text-center text-sm text-[#5c4033] py-2 bg-[#f5ebe0]">{t("it.vid3_label")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-[#ff8b69] text-center mb-8">{t("common.faq_title")}</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#ff8b69]/20 transition-all hover:shadow-md">
                                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors duration-300 ${openFaq === index ? "bg-[#e8d5c4]" : "bg-white hover:bg-[#faf4ef]"}`}>
                                    <span className="font-bold text-[#5c4033]">{faq.question}</span>
                                    <span className={`material-symbols-outlined transition-transform duration-300 ${openFaq === index ? "rotate-180 text-[#5c4033]" : "text-[#ff8b69]"}`}>expand_more</span>
                                </button>
                                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <div className="px-6 py-4 border-t border-[#ff8b69]/10">
                                        <div className="text-[#6b5344] leading-relaxed">{faq.answer}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* A4 Info Image + Download */}
            <section className="py-16 bg-[#f5ebe0]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#d4a373]/20 p-4">
                        <div className="relative w-full" style={{ aspectRatio: '210 / 297' }}>
                            <img src={infoSheetImage} alt="Innovative Treatments – Informationsblatt" className="w-full h-full object-contain rounded-xl" onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/630x891/f5ebe0/5c4033?text=Innovative+Treatments%0AInformationsblatt%0A(A4)'; }} />
                        </div>
                    </div>
                    <a href={infoSheetImage} download="Innovative-Treatments-Informationsblatt.jpg" className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-[#ff8b69] to-[#d4a373] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        {t("common.download")}
                    </a>
                </div>
            </section>
        </div>
    );
}
