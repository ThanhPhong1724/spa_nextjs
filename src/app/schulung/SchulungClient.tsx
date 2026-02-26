"use client";

import Link from 'next/link';
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageContent } from "@/hooks/usePageContent";

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

export default function SchulungClient() {
    const { t } = useLanguage();
    const { content: pageContent } = usePageContent("schulung_page");

    const benefits = [
        { icon: <ShieldIcon />, title: t("schulung.b1_title"), desc: t("schulung.b1_desc") },
        { icon: <CurrencyIcon />, title: t("schulung.b2_title"), desc: t("schulung.b2_desc") },
        { icon: <LinkIcon />, title: t("schulung.b3_title"), desc: t("schulung.b3_desc") },
        { icon: <ChartIcon />, title: t("schulung.b4_title"), desc: t("schulung.b4_desc") },
        { icon: <TrendingIcon />, title: t("schulung.b5_title"), desc: t("schulung.b5_desc") },
        { icon: <BadgeIcon />, title: t("schulung.b6_title"), desc: t("schulung.b6_desc") }
    ];

    const courses = [
        {
            id: "nails-kurs",
            name: t("schulung.c1_name"),
            description: t("schulung.c1_desc"),
            duration: t("schulung.c1_dur"),
            image: pageContent?.course_images?.nails_image || "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop",
            href: "/schulung/nails",
            features: [t("schulung.c1_f1"), t("schulung.c1_f2"), t("schulung.c1_f3"), t("schulung.c1_f4")]
        },
        {
            id: "beauty-expert",
            name: t("schulung.c2_name"),
            description: t("schulung.c2_desc"),
            duration: t("schulung.c2_dur"),
            image: pageContent?.course_images?.beauty_image || "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop",
            href: "/schulung/beauty-expert",
            features: [t("schulung.c2_f1"), t("schulung.c2_f2"), t("schulung.c2_f3"), t("schulung.c2_f4")]
        },
        {
            id: "gruender-programm",
            name: t("schulung.c3_name"),
            description: t("schulung.c3_desc"),
            duration: t("schulung.c3_dur"),
            image: pageContent?.course_images?.business_image || "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
            href: "/schulung/studiobussinessmastery",
            features: [t("schulung.c3_f1"), t("schulung.c3_f2"), t("schulung.c3_f3"), t("schulung.c3_f4")]
        }
    ];

    const faqs = Array.from({ length: 10 }, (_, i) => ({
        question: t(`schulung.faq_q${i + 1}`),
        answer: t(`schulung.faq_a${i + 1}`),
    }));

    return (
        <main className="pt-24 bg-[#f5ebe0]">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-[#ff8b69] to-[#e87a5a] text-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 uppercase leading-tight md:leading-tight">
                        {t("schulung.hero_title")}
                        <span className="block mt-3 md:mt-5">{t("schulung.hero_title2")}</span>
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                        {t("schulung.hero_desc")}
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-[#5c4033] text-center mb-12 uppercase">
                        {t("schulung.benefits_title")}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((item, i) => (
                            <div key={i} className="bg-[#f8f7f6] rounded-xl p-6 text-center">
                                <div className="text-[#ff8b69] mb-4 flex justify-center">{item.icon}</div>
                                <h3 className="font-bold text-[#5c4033] text-lg mb-2">{item.title}</h3>
                                <p className="text-[#666] text-base">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-[#5c4033] text-center mb-4 uppercase">
                        {t("schulung.courses_title")}
                    </h2>
                    <p className="text-center text-[#666] mb-12 max-w-2xl mx-auto">
                        {t("schulung.courses_desc")}
                        <br />
                        <strong className="text-[#5c4033] mt-2 block">{t("schulung.courses_note")}</strong>
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 items-stretch">
                        {courses.map(course => (
                            <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow flex flex-col h-full">
                                <div className="relative h-48 overflow-hidden shrink-0">
                                    <img
                                        src={course.image}
                                        alt={course.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-[#ff8b69] uppercase mb-2">{course.name}</h3>
                                    <p className="text-[#666] text-base mb-3">{course.description}</p>
                                    <p className="text-[#ff8b69] text-sm font-medium mb-4 flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {course.duration}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {course.features.map((f, i) => (
                                            <span key={i} className="bg-[#f8f7f6] text-[#5c4033] text-xs px-2 py-1 rounded flex items-center gap-1">
                                                <svg className="w-3 h-3 text-[#ff8b69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {f}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-2 mt-auto">
                                        <Link
                                            href={course.href}
                                            className="flex-1 text-center border border-[#ff8b69] text-[#ff8b69] py-2 rounded-full text-sm font-medium hover:bg-[#ff8b69] hover:text-white transition-colors"
                                        >
                                            {t("schulung.details")}
                                        </Link>
                                        <a
                                            href="https://wa.me/491638562022"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-[#25D366] text-white py-2 rounded-full text-sm font-medium hover:bg-[#1da851] transition-colors text-center flex items-center justify-center gap-1"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            {t("schulung.contact")}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Self-Study Warning */}
            <section className="py-16 bg-gradient-to-br from-[#a27450] to-[#a27450] text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                        {t("schulung.selfstudy_title")}
                    </h2>
                    <p className="text-white/80 mb-6">{t("schulung.selfstudy_1")}</p>
                    <p className="text-white/80 mb-6">{t("schulung.selfstudy_2")}</p>
                    <p className="text-white/80 mb-6">{t("schulung.selfstudy_3")}</p>
                    <p className="text-white/80 mb-6">{t("schulung.selfstudy_4")}</p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-[#5c4033] text-center mb-12">
                        {t("schulung.faq_title")}
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <details key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#ff8b69]/20 group">
                                <summary className="p-6 cursor-pointer font-bold text-[#5c4033] hover:bg-[#faf4ef] transition-colors list-none flex justify-between items-center">
                                    {faq.question}
                                    <span className="material-symbols-outlined text-[#ff8b69] group-open:rotate-180 transition-transform duration-300 flex-shrink-0">
                                        expand_more
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-[#666] border-t border-[#ff8b69]/10">
                                    <div className="pt-4">{faq.answer}</div>
                                </div>
                            </details>
                        ))}
                    </div>

                    {/* WhatsApp CTA */}
                    <div className="mt-12 text-center">
                        <p className="text-[#666] mb-4">{t("schulung.more_questions")}</p>
                        <a
                            href="https://wa.me/491638562022"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1da851] transition-colors"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            {t("schulung.whatsapp_cta")}
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
