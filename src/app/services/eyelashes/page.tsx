import Link from "next/link";

const features = [
    {
        icon: "hotel_class",
        title: "Premium Japanese Products",
        description: "We use only high-grade, hypoallergenic glue and soft silk lashes imported from Japan."
    },
    {
        icon: "verified_user",
        title: "Certified Artists",
        description: "Our technicians are certified with years of experience in mapping and styling for every eye shape."
    },
    {
        icon: "clean_hands",
        title: "Hygiene Guarantee",
        description: "Strict sterilization protocols for all tweezers and single-use disposables for every client."
    }
];

const services = [
    {
        name: "Classic Extensions",
        price: "$80+",
        description: "A natural \"mascara\" look. One extension is applied to one natural lash. Perfect for everyday elegance.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYTdxsVuOdavtT5nM0u4UZXUA65KFEffjYX_LLExobO3Epoj4fI9Pxfxqp4ICOnr5JCPgS4PbXazXP_R2XxYWCBEZC-JfWS_8Me_-2g_q8z7W6wO1jMn57nYpBQhw1qNrC1A4Uzav4K8kC2q0VQNFUFlEErlFrOBeHkgDR9pjIQkM-dVRaTO1iVN3p0GrueuS0YqdC5XSH0C6TK0dNxkr9hejQBJqb3HTG3xrBJnsEJFolv4yBEGeBwoPha8AkGs-2n0yH2Ft-z4iP",
        faq: { question: "How long do classic lashes last?", answer: "With proper care, classic lash extensions last 2-3 weeks before needing a fill." }
    },
    {
        name: "Hybrid Volume",
        nameVi: "Mi Hybrid",
        price: "$120+",
        description: "A mix of classic and volume lashes for a textured, wispy look. The best of both worlds for versatile style.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmMwMvpqIRbgrN-g6ZIsc8yLB0t5FH8RZi3P98pkrWyKJzfjvKkzAZoZX74KNwwvRMLb_oPN4PYHTks9ru-fBY3Y5l1ZHR8cheYU9GEJX_DfRYD69LPwhoN-9A0cQjprssVexKRI8oCyM3UdKkMffA6Qcakwzwyn6eHbOcEBPsE-yfRcmtRPLieObvc52N_XCOtptYKi0FK4CZ_u79nNxo-Fncz1ahDpFqFPrD8ILe2aHoL9tCtUdSOrpsj7RmeL_mTbJuF0JhJPsQ",
        faq: { question: "Is hybrid suitable for sparse lashes?", answer: "Yes! Hybrid is perfect for those with gaps in their lash line as the volume fans fill in the sparse areas." }
    },
    {
        name: "Mega Volume",
        nameVi: "Mi Volume Đậm",
        price: "$150+",
        description: "Maximum drama and fullness. Ultra-light fans with 5-16 lashes per fan for a bold, glamorous look.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjuLHlgBVB9x4izQgrpt0_hichS1o5PuENv9-aFcv5wJkmzuFq4FWbnCMJLOgGWQ7N3Nv0EG_ufM0DBfJQeb59iJoTpMBXqd6CC05PRk83jFoe6cTsBca6Nj02WHLK3V7ouWSXH3LALIF9op7usOp9Yaw4AjygZC4aDxTE3f23Aet7IGkzY848URay3HKOs9tyCtVxi1FFoN-CVOTMckwDsuly_u_E55CsuaYUjNe95OxZoAaCpPjnq7Af_8hD-CRUPisAJhx6kIfx",
        faq: { question: "Will mega volume damage my lashes?", answer: "No, when applied correctly by certified artists using proper-weight extensions, there is no damage to your natural lashes." }
    },
    {
        name: "Lash Lift & Tint",
        nameVi: "Uốn & Phủ Đen Mi",
        price: "$90",
        description: "A low-maintenance alternative to extensions. Curled and tinted natural lashes lasting 6-8 weeks.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYTdxsVuOdavtT5nM0u4UZXUA65KFEffjYX_LLExobO3Epoj4fI9Pxfxqp4ICOnr5JCPgS4PbXazXP_R2XxYWCBEZC-JfWS_8Me_-2g_q8z7W6wO1jMn57nYpBQhw1qNrC1A4Uzav4K8kC2q0VQNFUFlEErlFrOBeHkgDR9pjIQkM-dVRaTO1iVN3p0GrueuS0YqdC5XSH0C6TK0dNxkr9hejQBJqb3HTG3xrBJnsEJFolv4yBEGeBwoPha8AkGs-2n0yH2Ft-z4iP",
        faq: { question: "Can I wear mascara after a lash lift?", answer: "Yes, but we recommend waiting 24 hours. Many clients find they no longer need mascara after a lift and tint!" }
    },
];

export default function EyelashesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section
                className="relative min-h-[450px] flex items-center justify-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjuLHlgBVB9x4izQgrpt0_hichS1o5PuENv9-aFcv5wJkmzuFq4FWbnCMJLOgGWQ7N3Nv0EG_ufM0DBfJQeb59iJoTpMBXqd6CC05PRk83jFoe6cTsBca6Nj02WHLK3V7ouWSXH3LALIF9op7usOp9Yaw4AjygZC4aDxTE3f23Aet7IGkzY848URay3HKOs9tyCtVxi1FFoN-CVOTMckwDsuly_u_E55CsuaYUjNe95OxZoAaCpPjnq7Af_8hD-CRUPisAJhx6kIfx')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 border border-white/20 m-4 rounded-xl pointer-events-none" />
                <div className="text-center px-4 max-w-3xl z-10">
                    <span className="text-[#eeb32b] font-bold tracking-widest uppercase text-sm">Professional Lash Artistry</span>
                    <h1 className="text-white text-4xl md:text-6xl font-bold mt-3 leading-tight">
                        Eyelashes & Lash Lifts
                    </h1>
                    <p className="text-white/90 text-lg mt-4 max-w-2xl mx-auto">
                        Awaken your eyes with our bespoke lash extensions and lifting treatments. Designed for comfort, longevity, and natural beauty.
                    </p>
                    <div className="flex gap-4 justify-center mt-6">
                        <Link href="/contact" className="bg-[#eeb32b] hover:bg-[#d9a020] text-[#181611] px-8 py-3 rounded-full font-bold transition-all">
                            Book Appointment
                        </Link>
                        <Link href="/price-list" className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white px-8 py-3 rounded-full font-bold transition-all">
                            View Price List
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 px-4 md:px-10 max-w-7xl mx-auto">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#181611]">
                        The Luxe Experience
                    </h2>
                    <p className="text-[#897d61] max-w-2xl mt-3">
                        We prioritize the health of your natural lashes while giving you the look you desire. Safety, hygiene, and artistry are our core principles.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature) => (
                        <div key={feature.title} className="flex flex-col gap-4 rounded-xl border border-[#e6e2db] bg-white p-6 hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 rounded-full bg-[#eeb32b]/10 flex items-center justify-center text-[#eeb32b]">
                                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                            </div>
                            <h3 className="text-[#181611] text-lg font-bold">{feature.title}</h3>
                            <p className="text-[#897d61] text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services */}
            <section className="py-12 px-4 md:px-10 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#181611] mb-8">
                    Service Menu
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <div key={service.name} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#e6e2db] hover:border-[#eeb32b]/50 hover:shadow-lg transition-all">
                            <div className="w-full aspect-[4/5] relative overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                                    style={{ backgroundImage: `url('${service.image}')` }}
                                />
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-[#181611] text-lg font-bold">{service.name}</h3>
                                <p className="text-[#897d61] text-sm mt-2 mb-4 line-clamp-3">{service.description}</p>

                                {/* FAQ */}
                                <details className="bg-[#f8f7f6] rounded-lg overflow-hidden group/faq mt-auto mb-4">
                                    <summary className="flex justify-between items-center p-2 cursor-pointer text-xs font-medium text-[#181611] hover:text-[#eeb32b]">
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm text-[#897d61]">help</span>
                                            FAQ
                                        </span>
                                        <span className="material-symbols-outlined text-sm group-open/faq:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="px-2 pb-2 text-xs text-[#555]">
                                        <strong>{service.faq.question}</strong><br />{service.faq.answer}
                                    </div>
                                </details>

                                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <span className="text-[#eeb32b] font-bold text-lg">{service.price}</span>
                                    <Link href="/contact" className="text-[#181611] text-sm font-semibold hover:text-[#eeb32b] transition-colors">
                                        Book Now →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4 md:px-10 bg-[#181611]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-white text-3xl md:text-4xl font-bold">Ready for your transformation?</h2>
                    <p className="text-gray-300 text-lg mt-4 max-w-xl mx-auto">
                        Book your relaxation session today. <span className="italic text-[#eeb32b]">Sẵn sàng để tỏa sáng?</span>
                    </p>
                    <div className="flex gap-4 justify-center mt-8">
                        <Link href="/contact" className="bg-[#eeb32b] hover:bg-[#d9a020] text-[#181611] px-8 py-4 rounded-xl font-bold transition-all">
                            Book Now
                        </Link>
                        <Link href="/price-list" className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all">
                            View Prices
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
