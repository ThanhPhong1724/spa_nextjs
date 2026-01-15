import Link from "next/link";

const services = [
    {
        name: "Royal Herbal Wash",
        price: "$85",
        duration: "60 min",
        badge: "Signature",
        description: "A 60-minute session focusing on deep scalp cleansing using organic tea tree oil and traditional herbal remedies. Includes a neck and shoulder massage to relieve tension.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtTBia1BPt1fl-ckh_2UujMKQOpqGie0Xz_JF6RqZ6pNgCqPCpiOoTmLPXhCEMGusS8WHfyZ_DnTeDM24Vgr0HEWA0JHnwhbj5SCcJBx5cJ8xZ9qLuvMTjWUeudTn3M3hWggEb8eSYAzoR3qtCUDPbsEqSfEj50vEFLIyzyCHKyMMU0yjpbYccz_zYhK7JOjF0mts9tfnqrkRAHu5es_qMXJTwFCEyfr435uifkbiFNpq5XLC2YNEFuaaS2RPfV_Muv6GASZ65YgZx",
        faq: {
            question: "What herbs are used?",
            answer: "We use a proprietary blend of Lemongrass, Ginger, and Mint leaves steamed freshly before your session to maximize therapeutic benefits."
        }
    },
    {
        name: "Ginseng Root Vitality",
        price: "$95",
        duration: "70 min",
        description: "Designed for thinning hair, this treatment uses premium Red Ginseng extract to stimulate hair follicles, improve blood circulation, and strengthen roots from within.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5Sqr_QUvqwApwgSF2ApR74YGy0NdH89mlUBZOMaoMBNq_aCuCCmt8N7A7er2uFB7clT1MX_Cwm5XehxXqcvg0bqlgVlJAqxXX6P3_fxB6MoBqlOq486Ic4uprLF3zQl4r3H8qsOMyDs6OLkWjIyGiXzJKSsaOVOSkVHNJLJyJtSs1fqG9CcaJeBYu4mhaj2JHza5eSObALYapnYUvno4W8GiVYnjxSER2cZ2KrEYjtgwZAKu0HvWy6yvkpKWrNNuFlsaaSqNSWQEc",
        faq: {
            question: "Is this safe for colored hair?",
            answer: "Yes, our ginseng extract is pH balanced and completely safe for color-treated and chemically processed hair."
        }
    },
    {
        name: "Deep Scalp Detox",
        price: "$75",
        duration: "50 min",
        description: "A powerful exfoliation session using mineral-rich sea mud to remove product buildup, excess oil, and dead skin cells, leaving your scalp breathing freely.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlTqWsj_xnwCS9bF0Fr3fg_U2beE56CtBlL1AffHhqGetLg5901Izn0IoYow4lj4y2ggZ3b5Hfa_uanrrAJDT8jOc46frshG31hQwaDsWmEuV0uM3wid3XKEBkEOptmYt5sT0GT64MWX0p2GycfixPbQcdWHHHyx8IaG3EQ3MXy-v5lindByZM8dIj-M4y8XQakYQIPzCZeXhSZUZmmjNohskP_SeHVRONOHiZj3u9lbfTTV4p7FzM99tbgZP5kzR9igmRNdt4G2D_",
        faq: {
            question: "How often should I get this?",
            answer: "We recommend a deep detox once a month for normal scalps, or bi-weekly for oily scalp conditions."
        }
    },
    {
        name: "Aromatherapy Head Spa",
        price: "$90",
        duration: "60 min",
        description: "Focuses on mental relaxation. Choose your scent journey (Lavender, Eucalyptus, or Yuzu) combined with a slow, rhythmic acupressure head massage.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtxOBJOJiGGoXHBkuDjo2aoD-BZ3vcrdLZYfGYLz46BpsXxlUPXCvLGC9jrGfkITNF1bfubAAqj4wBZPKtlEUmWMol7QSxSlIeCrb_MC1vbdbInRBxEy26V_wov_MMs9XnOgHXr0ObOYjkpvn2fPsyZ2YnN4X7TeimDFvVbRDp0oIPueW3NZYnN4X7TeimDFvVbRDp0oIPueW3NZYkWPFd-1LNEx8D5UWhIpOtKjFCkIfFrKh_wu66CU76psU2A6zXa25t-0X8lLw9VBzh5MHhKM5SsSeD_u2LIuiJnXId",
        faq: {
            question: "Can I customize the oils?",
            answer: "Absolutely. Our therapist will guide you through a scent test before the session begins."
        }
    },
    {
        name: "Moisture Bomb Therapy",
        price: "$80",
        duration: "55 min",
        description: "The ultimate rescue for dry, frizzy, or damaged hair. We use a heated steam cap to infuse Argan and Jojoba oils deep into the hair shaft.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAnwUQ6VoLb4WAsAovgw0Xjs9w--2GIAyBPKyD3G42gMwWKM8-4OnrvscxRcOHafkjiq_8kfUBsUf7PfqvcvUE2QY-kYxfb4rYmjJQuREsIWf5ddO7UvEXdOcI6AE-OmAC2EhvDHfuGILxGnxWNi7shQL082mqwLkbEQfM0iAYJEoQvErIKVG2ZmX8Z9OhKnb2MOcyjrOJw2Nhj2HUQl_mqx-cum31ZpDl_BY5NvWHCqKL1-48BTJznck1JB10nKVfOlm4eR9jsZfG",
        faq: {
            question: "Does this include a blowout?",
            answer: "A basic blow-dry is included. For a full styling blowout, please add our styling service (+$25)."
        }
    },
    {
        name: "Hot Oil Scalp Treatment",
        price: "$70",
        duration: "45 min",
        description: "Warm olive and coconut oil infused with rosemary is massaged into your scalp to promote relaxation and nourish dry, itchy skin.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5L1XMRhGyqkLe9w93z2lfpS20_-10dMjAq2d7_p_KXP_uowNlwMIgiNKS7wMYRSn9ZLdv4UPzqUBbSaWODwsjSNdo2y6tt_Fb0VGH-BnW5tSupDIUemp5nbORKdIyotuODxLGRzHWJGW_3XCL9t-PM_lc5SkL69JI_UyBMPNZbRytaUBYkl6CxuypmgIISXOeBuRcM_Va7dDfRy4kODNapeDW4Tg8E14e37hH-zTxfbBDQQ89gR9N8hXc0YkstWL7hUHpcd3AImdH",
        faq: {
            question: "Is this good for dandruff?",
            answer: "Yes, the rosemary and tea tree oils in our blend have anti-fungal properties that help combat dandruff."
        }
    },
    {
        name: "Express Scalp Refresh",
        price: "$45",
        duration: "30 min",
        description: "Short on time? Our express treatment provides a quick cleansing wash with an invigorating peppermint massage to refresh your senses.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5Sqr_QUvqwApwgSF2ApR74YGy0NdH89mlUBZOMaoMBNq_aCuCCmt8N7A7er2uFB7clT1MX_Cwm5XehxXqcvg0bqlgVlJAqxXX6P3_fxB6MoBqlOq486Ic4uprLF3zQl4r3H8qsOMyDs6OLkWjIyGiXzJKSsaOVOSkVHNJLJyJtSs1fqG9CcaJeBYu4mhaj2JHza5eSObALYapnYUvno4W8GiVYnjxSER2cZ2KrEYjtgwZAKu0HvWy6yvkpKWrNNuFlsaaSqNSWQEc",
        faq: {
            question: "Can I add extras to this?",
            answer: "Yes! You can add a 10-minute neck massage (+$15) or essential oil upgrade (+$10)."
        }
    },
];

export default function HeadSpaPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section
                className="relative min-h-[450px] flex items-center justify-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5L1XMRhGyqkLe9w93z2lfpS20_-10dMjAq2d7_p_KXP_uowNlwMIgiNKS7wMYRSn9ZLdv4UPzqUBbSaWODwsjSNdo2y6tt_Fb0VGH-BnW5tSupDIUemp5nbORKdIyotuODxLGRzHWJGW_3XCL9t-PM_lc5SkL69JI_UyBMPNZbRytaUBYkl6CxuypmgIISXOeBuRcM_Va7dDfRy4kODNapeDW4Tg8E14e37hH-zTxfbBDQQ89gR9N8hXc0YkstWL7hUHpcd3AImdH')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="text-center px-4 max-w-2xl">
                    <span className="text-[#eeb32b] font-bold tracking-widest uppercase text-sm">Zen & Modern</span>
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mt-3 leading-tight">
                        Revitalize Your Mind & Scalp
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl mt-4 max-w-lg mx-auto">
                        Experience the ultimate head spa treatments designed for deep relaxation, scalp health, and holistic rejuvenation.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block mt-6 bg-[#eeb32b] hover:bg-white hover:text-[#eeb32b] text-[#181611] px-8 py-3 rounded-lg font-bold transition-all"
                    >
                        Explore Our Menu
                    </Link>
                </div>
            </section>

            {/* Section Title */}
            <section className="py-12 text-center">
                <span className="text-[#897d61] text-sm font-bold tracking-widest uppercase">Our Signature Menu</span>
                <h2 className="text-[#181611] text-xl font-bold mt-2">Lotus Spa & Salon</h2>
                <div className="w-16 h-1 bg-[#eeb32b] mx-auto rounded-full mt-4"></div>
            </section>

            {/* Services List */}
            <section className="pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8">
                    {services.map((service) => (
                        <div key={service.name} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-[#f0eee6]">
                            <div className="flex flex-col lg:flex-row">
                                {/* Image */}
                                <div className="relative w-full lg:w-2/5 min-h-[260px]">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url('${service.image}')` }}
                                    />
                                    {service.badge && (
                                        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#181611] px-3 py-1 rounded-full text-xs font-bold uppercase">
                                            {service.badge}
                                        </span>
                                    )}
                                </div>
                                {/* Content */}
                                <div className="flex-1 p-6 lg:p-8 flex flex-col">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="text-2xl font-bold text-[#181611]">{service.name}</h3>
                                        </div>
                                        <span className="text-[#897d61] font-bold text-lg">{service.price}</span>
                                    </div>
                                    <p className="text-[#555] text-base leading-relaxed mb-6">{service.description}</p>

                                    {/* Action Area */}
                                    <div className="mt-auto pt-6 border-t border-[#f4f3f0] space-y-4">
                                        {/* Duration & Price List */}
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2 text-sm text-[#897d61]">
                                                <span className="material-symbols-outlined text-lg">schedule</span>
                                                {service.duration}
                                            </div>
                                            <div className="flex items-center gap-2 px-3 py-2 bg-[#f8f7f6] rounded-lg cursor-pointer hover:bg-[#eeb32b]/10 transition-colors">
                                                <span className="material-symbols-outlined text-[#eeb32b]">menu_book</span>
                                                <span className="text-sm font-semibold">View Add-ons</span>
                                            </div>
                                        </div>

                                        {/* FAQ Accordion */}
                                        <details className="bg-[#f8f7f6] rounded-lg overflow-hidden group">
                                            <summary className="flex justify-between items-center p-3 cursor-pointer font-medium text-sm text-[#181611] hover:text-[#eeb32b] transition-colors">
                                                <div className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-lg text-[#897d61]">help</span>
                                                    <span>{service.faq.question}</span>
                                                </div>
                                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-[#897d61]">expand_more</span>
                                            </summary>
                                            <div className="px-4 pb-4 pt-1 text-sm text-[#555]">
                                                {service.faq.answer}
                                            </div>
                                        </details>

                                        {/* Book Button */}
                                        <Link
                                            href="/contact"
                                            className="flex w-full h-10 rounded-lg bg-[#eeb32b] text-[#181611] text-sm font-bold hover:bg-[#d9a020] transition-colors items-center justify-center gap-2"
                                        >
                                            Book {service.name.split(' ')[0]}
                                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Price List Image Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-[#181611] mb-6">Full Price List</h2>
                    <div className="bg-[#f8f7f6] rounded-2xl p-8 border border-[#f0eee6]">
                        <p className="text-[#897d61] mb-4">View our complete head spa menu with all add-ons and packages</p>
                        <Link
                            href="/price-list"
                            className="inline-flex items-center gap-2 bg-[#eeb32b] text-[#181611] px-6 py-3 rounded-lg font-bold hover:bg-[#d9a020] transition-colors"
                        >
                            <span className="material-symbols-outlined">menu_book</span>
                            View Full Price List
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
