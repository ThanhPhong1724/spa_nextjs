import Link from "next/link";

const services = [
    {
        name: "Eyebrow Microblading",
        price: "$350",
        duration: "2-3 hours",
        description: "Natural-looking, hair-stroke eyebrows that last 1-2 years. Includes consultation and one touch-up session.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXFLY5zEUqnVxH4M5gBpmrNg-xNvqWevTazz9n1t2SIfA6UBk29B3UaNTK3VfI0ByPbSLiSPEQXMqzqLqnNpRJgRQZiPPPj2xlq5D-6NvE5nEILJo-8J-zVxMqRwTMlAOPzJSAqIGXKR1Pp-Y1j2MMh7PJtQxITsN6lNhT_Tpqr_-qkpCaXr3N9EZM3FIvZA2tJ_aT_wqKJLJl9bBQPMC2kGAkqLPT9rRqD4iIGr3AqMlQJqGcV8AeLZT6JnE5mSB9mYbPLk0q8Q7B",
        faq: { question: "Does microblading hurt?", answer: "We apply a numbing cream before the procedure. Most clients describe it as light scratching with minimal discomfort." }
    },
    {
        name: "Lip Blush",
        nameVi: "Phun Môi",
        price: "$400",
        duration: "2-3 hours",
        description: "Enhance your natural lip color with a soft, gradient blush effect that lasts 2-3 years. Wake up with beautiful lips every day.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQFIlB4u3wZ5glmANnJT_TVVp6FHlJx4HQbVJ6gqe_rLR7W2f0RpAq3oCNK9qKDEXKlfrXx-AjvpP2B3nO0I2jxMpMnxk_JPwR3qxp1WB2jKsR1q6lQ3Xq8XrqJF7qVqA5iXzFl-XZp0Wa9zAi5qrlJDn1hRFnqLpJqGzRME3XHJM0XQv0nrGq1XqQMXqPNMq8qV8J7kPq9qzQ8qV0qMGj1qXqhQ5qMYq1qnq0qGZ9qYMq7qQMqMq0qGMq",
        faq: { question: "How long is the healing process?", answer: "Full healing takes about 4-6 weeks. The color will appear darker initially but will fade to a natural shade." }
    },
    {
        name: "Eyeliner Tattoo",
        nameVi: "Xăm Mí Mắt",
        price: "$300",
        duration: "1.5-2 hours",
        description: "Wake up with perfectly defined eyes. Classic or winged liner available. Lasts 2-5 years depending on skin type.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNPlgSLSPwawJ_y7jP-YpI1hYMDhSXQZ2jEaK_vXGhHGINSXVCEW8UrdeSZPpPeKZB6q71Iv5aZBNL3T8D8PUwGjfLqlNSwxkPg6eJGNjCXLLCtjBDz4Uo3Bz1vG-K1MkfK_0wGLBaKX2qhx3OMiE36T4cSyh3m1Hc_xN8HHMhWN4qBMCo7P8WlCH-1qN8eoYLqGfHvgBtXFVxKDHwxq4xAGTGMG30kYkLxSPYJPfyNAT7HqLlG6aGbQ6wWpE0I0rGmSPDRrP-0XyD",
        faq: { question: "Can I choose the liner thickness?", answer: "Absolutely! We offer thin, medium, and thick lines, as well as classic and winged styles during consultation." }
    },
    {
        name: "Beauty Mark",
        nameVi: "Nốt Ruồi Làm Đẹp",
        price: "$50",
        duration: "30 min",
        description: "Add a signature beauty mark for that classic, timeless look. Quick procedure with minimal healing time.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXFLY5zEUqnVxH4M5gBpmrNg-xNvqWevTazz9n1t2SIfA6UBk29B3UaNTK3VfI0ByPbSLiSPEQXMqzqLqnNpRJgRQZiPPPj2xlq5D-6NvE5nEILJo-8J-zVxMqRwTMlAOPzJSAqIGXKR1Pp-Y1j2MMh7PJtQxITsN6lNhT_Tpqr_-qkpCaXr3N9EZM3FIvZA2tJ_aT_wqKJLJl9bBQPMC2kGAkqLPT9rRqD4iIGr3AqMlQJqGcV8AeLZT6JnE5mSB9mYbPLk0q8Q7B",
        faq: { question: "Is a beauty mark permanent?", answer: "Yes, it's permanent but may fade slightly over 3-5 years. Touch-ups are available to maintain the look." }
    },
];

export default function PMUPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section
                className="relative min-h-[450px] flex items-center justify-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXFLY5zEUqnVxH4M5gBpmrNg-xNvqWevTazz9n1t2SIfA6UBk29B3UaNTK3VfI0ByPbSLiSPEQXMqzqLqnNpRJgRQZiPPPj2xlq5D-6NvE5nEILJo-8J-zVxMqRwTMlAOPzJSAqIGXKR1Pp-Y1j2MMh7PJtQxITsN6lNhT_Tpqr_-qkpCaXr3N9EZM3FIvZA2tJ_aT_wqKJLJl9bBQPMC2kGAkqLPT9rRqD4iIGr3AqMlQJqGcV8AeLZT6JnE5mSB9mYbPLk0q8Q7B')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="text-center px-4 max-w-2xl z-10">
                    <span className="text-[#eeb32b] font-bold tracking-widest uppercase text-sm">Permanent Beauty</span>
                    <h1 className="text-white text-4xl md:text-5xl font-bold mt-3">PMU & Tattoo</h1>
                    <p className="text-white/90 text-lg mt-4 max-w-xl mx-auto">
                        Wake up beautiful every day with our professional permanent makeup services. Expertly crafted for natural, lasting results.
                    </p>
                    <div className="flex gap-4 justify-center mt-6">
                        <Link href="/contact" className="bg-[#eeb32b] hover:bg-[#d9a020] text-[#181611] px-8 py-3 rounded-lg font-bold transition-all">
                            Free Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#181611]">Our Services</h2>
                    <p className="text-[#897d61] mt-3 max-w-xl mx-auto">Enhance your natural beauty with semi-permanent makeup techniques</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service) => (
                        <div key={service.name} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                            <div
                                className="h-64 bg-cover bg-center"
                                style={{ backgroundImage: `url('${service.image}')` }}
                            />
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#181611]">{service.name}</h3>
                                    </div>
                                    <span className="text-[#eeb32b] font-bold text-xl">{service.price}</span>
                                </div>
                                <p className="text-[#555] text-sm mb-4">{service.description}</p>

                                {/* FAQ */}
                                <details className="bg-[#f8f7f6] rounded-lg overflow-hidden group mb-4">
                                    <summary className="flex justify-between items-center p-3 cursor-pointer font-medium text-sm text-[#181611] hover:text-[#eeb32b]">
                                        <span className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-lg text-[#897d61]">help</span>
                                            {service.faq.question}
                                        </span>
                                        <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="px-4 pb-4 text-sm text-[#555]">{service.faq.answer}</div>
                                </details>

                                <div className="flex items-center justify-between pt-4 border-t border-[#f4f3f0]">
                                    <span className="text-sm text-[#897d61] flex items-center gap-1">
                                        <span className="material-symbols-outlined text-lg">schedule</span>
                                        {service.duration}
                                    </span>
                                    <Link href="/contact" className="bg-[#eeb32b] hover:bg-[#d9a020] text-[#181611] px-6 py-2 rounded-lg text-sm font-bold transition-all">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Info Section */}
            <section className="py-16 bg-[#f8f7f6]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                        <h3 className="text-2xl font-bold text-[#181611] mb-4">Before Your Appointment</h3>
                        <ul className="space-y-3 text-[#555]">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#eeb32b]">check_circle</span>
                                Avoid caffeine and alcohol 24 hours before your appointment
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#eeb32b]">check_circle</span>
                                Do not take blood thinners or aspirin for 72 hours prior
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#eeb32b]">check_circle</span>
                                Come with clean, makeup-free skin in the treatment area
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#eeb32b]">check_circle</span>
                                A patch test is recommended 48 hours before for sensitive skin
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
