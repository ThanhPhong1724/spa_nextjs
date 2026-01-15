import Link from "next/link";

const services = [
    {
        category: "Hand Care",
        categoryVi: "Chăm Sóc Tay",
        icon: "spa",
        title: "Manicure & Hand Rituals",
        description: "Restore softness and radiance to your hands with our organic scrubs and precision polish. We use only premium, non-toxic polishes and essential oils to ensure your hands look and feel their absolute best.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLcc3Kxc4JRsQvxTo1Tm0ei8ND7SKY-hxbkMyHoVHcV6hglomzb0NvKwBNNcSfZTItqV0kvqy2Jt0b2C7HrOIgasC18azyCqDoawn8PhB6zo73siA9DeVRBTEYNKGLnD4waRUctN8hTCj80rFy3BdbC8XWwuj3k0OYg7VKiNkdcRuA9KqFy5aYzWQ7OzcgPEUprcwHnwue--iUxUPq5Tl5pCg6DKLLiT8NryhKF-upECHMH99BLXJiP5FScRoK-4VqcqZxxFofkVpr",
        tags: ["Organic Scrub", "Gel Polish", "Massage"],
        price: "$35",
        hasVideo: false,
    },
    {
        category: "Foot Wellness",
        categoryVi: "Chăm Sóc Chân",
        icon: "foot_bones",
        title: "Pedicure & Foot Wellness",
        description: "Sink into comfort. Our foot therapies relieve tension and rejuvenate tired soles using herbal soaks and hot stone massage. Experience the ultimate grounding treatment.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG-vtyku5IpprVFFdj3Gn164pAxVYmR7aIR8xrKYlh8OB6YQd99_jYD9-_44TCMFzG7KIQOQKAtaIw8T7QjBhlTv_TYIIg_4Sh5eLqsH-FnGQxox2Yj_DLowQHWHXH014Gn9g4BmTDWLDY0jiASg7B6w7zT_d0KP1rxfnAxPIWQhhTjt-l66zEH32Yr4ywqfzmHYwtpWioncJzhRupxfTvvki5sezcifncsuWzIOwdmcJV5nb2lyrERyIYO8XZ2kxVLyb3ozdaTf7J",
        tags: ["Hot Stones", "Herbal Soak", "Reflexology"],
        price: "$45",
        hasVideo: true,
    }
];

export default function NailsPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section
                className="relative min-h-[400px] flex items-center justify-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLcc3Kxc4JRsQvxTo1Tm0ei8ND7SKY-hxbkMyHoVHcV6hglomzb0NvKwBNNcSfZTItqV0kvqy2Jt0b2C7HrOIgasC18azyCqDoawn8PhB6zo73siA9DeVRBTEYNKGLnD4waRUctN8hTCj80rFy3BdbC8XWwuj3k0OYg7VKiNkdcRuA9KqFy5aYzWQ7OzcgPEUprcwHnwue--iUxUPq5Tl5pCg6DKLLiT8NryhKF-upECHMH99BLXJiP5FScRoK-4VqcqZxxFofkVpr')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="text-center px-4 max-w-2xl z-10">
                    <span className="text-[#eeb32b] font-bold tracking-widest uppercase text-sm">Nail Artistry</span>
                    <h1 className="text-white text-4xl md:text-5xl font-bold mt-3 leading-tight">
                        Nails & Nail Art
                    </h1>
                    <p className="text-white/80 text-2xl font-light mt-2">Làm Móng Tay & Chân</p>
                    <p className="text-white/90 text-lg mt-4">
                        From simple elegance to intricate artistry, we bring out the beauty in your hands and feet.
                    </p>
                    <Link href="/contact" className="inline-block mt-6 bg-[#eeb32b] hover:bg-[#d9a020] text-[#181611] px-8 py-3 rounded-lg font-bold transition-all">
                        Book Appointment
                    </Link>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 max-w-4xl mx-auto px-4 md:px-10">
                <div className="flex flex-col gap-12 md:gap-20">
                    {services.map((service, index) => (
                        <article key={service.title} className="group">
                            <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch gap-6 md:gap-10 bg-white p-4 rounded-2xl shadow-sm border border-[#f0eee6]`}>
                                {/* Image */}
                                <div className="w-full md:w-1/2 min-h-[280px] rounded-xl overflow-hidden relative">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                                        style={{ backgroundImage: `url('${service.image}')` }}
                                    />
                                    {service.hasVideo && (
                                        <>
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur flex items-center justify-center border border-white/50">
                                                    <span className="material-symbols-outlined text-white text-4xl">play_arrow</span>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-4 left-4 px-3 py-1 rounded-lg bg-black/60 backdrop-blur text-white text-xs font-medium flex items-center gap-1">
                                                <span className="material-symbols-outlined text-sm animate-pulse">videocam</span>
                                                Watch Ritual
                                            </div>
                                        </>
                                    )}
                                </div>
                                {/* Content */}
                                <div className="w-full md:w-1/2 flex flex-col justify-center py-2 md:py-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="material-symbols-outlined text-[#eeb32b] text-xl">{service.icon}</span>
                                        <span className="text-xs font-bold tracking-widest uppercase text-[#897d61]">{service.category}</span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#181611] mb-4 leading-tight">
                                        {service.title}
                                    </h2>
                                    <p className="text-[#5c5546] text-base leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {service.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-[#f4f3f0] text-xs font-medium text-[#5c5546]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-[#897d61] mb-1">Starting from</span>
                                            <span className="text-xl font-bold text-[#181611]">{service.price}</span>
                                        </div>
                                        <Link
                                            href="/contact"
                                            className="flex items-center gap-2 text-sm font-bold text-[#181611] bg-[#eeb32b] hover:bg-[#d9a020] px-5 py-3 rounded-xl transition-all"
                                        >
                                            View {service.category.split(' ')[0]} Menu
                                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4 bg-[#f8f7f6] border-y border-[#e5e5e5]">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
                    <span className="material-symbols-outlined text-4xl text-[#eeb32b]">diamond</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#181611]">Ready to relax?</h2>
                    <p className="text-[#5c5546] text-lg max-w-xl">
                        Book your appointment today and let our experts take care of your hands and feet in our serene sanctuary.
                    </p>
                    <Link href="/contact" className="h-12 px-8 rounded-xl bg-[#eeb32b] text-[#181611] font-bold text-base hover:shadow-lg transition-all flex items-center justify-center">
                        Book Appointment
                    </Link>
                </div>
            </section>
        </div>
    );
}
