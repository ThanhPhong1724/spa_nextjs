import Link from "next/link";

const services = [
    {
        name: "Hydrating Facial",
        price: "$85",
        duration: "60 min",
        description: "Deep hydration therapy using hyaluronic acid and botanical extracts for plump, dewy skin. Perfect for dry or dehydrated skin.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDECNC5NUYGjdgR93y22idmd6FpHmoPqfi08NG5cTLt0nRgE5Q7Io1tcE_MKSOg-RQjOf1K6t9W4BcAXhhR_rDP2k1L09OBmHAimAFrJhdAwJRLTvXdiMLkIWbYjU3wARtQIALIKd2q9ZHsTjC2ImFjawz0HArf6PEq40sUkV8omc6SHogw6Ms7my8naAYwksExOmL_rgIt5-xJwLYhFHOJmAJwHWTGDxDm0gkwinonCpMtI6AcpjHSJtAir2kY6kpitzcMCUhk6UQU",
        faq: { question: "How often should I get this facial?", answer: "For best results, we recommend every 2-4 weeks, depending on your skin type and concerns." }
    },
    {
        name: "Anti-Aging Rejuvenation",
        nameVi: "Trẻ Hóa Chống Lão Hóa",
        price: "$120",
        duration: "75 min",
        description: "Advanced treatment targeting fine lines and wrinkles with peptides, vitamin C, and collagen-boosting technology.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7KHFMN1IZrqkNHBWQSSqLlxysZjC08HSZf-uHF9C2x1XGaUwrXom6ss8wCRxu8lcBH-2hXq9dEThyrv2oHeGBZCfmAmj4pTuF98sqhIk_fZh66FRMVSMJ324blbZ8n5gfkEgvZWcclO-nryIwsCm10MYqW3Oni3EpnSsvcChbrYcm9IGmXAdiugW7pEH4VRfX8X91WT6Z01Wjjt9ms81tJ1nVi1lwfNd93nrRvsx4n55HKKfm9bjGhhtP1WhbnCCxhCf4AxOlTlB8",
        faq: { question: "At what age should I start anti-aging treatments?", answer: "Prevention is key! We recommend starting in your mid-20s with lighter treatments, increasing intensity as needed." }
    },
    {
        name: "Deep Cleansing Facial",
        nameVi: "Làm Sạch Sâu Da Mặt",
        price: "$75",
        duration: "60 min",
        description: "Thorough extraction and purification for congested and oily skin types. Includes steam, exfoliation, and calming mask.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGoEMcnPqwODF0TAm97VFl0-eyp8mAxSFeWjSG37BcXZ9oaHOcHI8WPg1rNzJGSUDWPXK33p-eqNhknvFwxn7Icp0TSbDTHBHngicBWiYCNaDQO1-W6FD_d-RHolrsu4OlNiToao4DsHnD9kBZXmFFCeT95W0C1Ybo28JDtj1kAa1nDzwDsh58bRkk8ffcGPt1aYbn4uPXwx9Y0XB26qXQPn1bRmHsh9PiOYC9NG0BhjPhoBa1XfDPH0eoPFhaGynV6e8j5ZUbfNMy",
        faq: { question: "Is extraction painful?", answer: "Our specialists use gentle techniques. You may feel slight pressure, but the process is generally comfortable." }
    },
    {
        name: "Zen Calm Sensitive",
        nameVi: "Nhẹ Nhàng Cho Da Nhạy Cảm",
        price: "$100",
        duration: "60 min",
        description: "A soothing therapy using organic botanical extracts like chamomile, aloe, and oat for reactive, sensitive skin.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsaJSEPU9hvNxOLnhDwcppoW6usg2-5YjpRq1Eb-xRyPhLHocGKYLGoxBFK7gZVz_ngkRUbfrNrExAweevjeXi2bH6g5jGqjg7nwO7XpxcjReoB_XxMdiTyZ4Sl_7ZjUQuEIm9_eYIpzQaNHEEkGzyzEudN2MvOJFw2hI-d5B_7nU0iHF97gHfu1SXDUUHz1qM2KZTdz_hajYjjvsXMgEnWpKwBWLKllUfl_MiOJTKI6uE3rpWG_ZzXCa7fT0_tEnhBNlVR_XZXvQU",
        faq: { question: "Is this suitable for rosacea?", answer: "Yes! This facial is specifically designed for sensitive conditions including rosacea, using only calming, anti-inflammatory ingredients." }
    },
];

export default function FacialsPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section
                className="relative min-h-[450px] flex items-center justify-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDECNC5NUYGjdgR93y22idmd6FpHmoPqfi08NG5cTLt0nRgE5Q7Io1tcE_MKSOg-RQjOf1K6t9W4BcAXhhR_rDP2k1L09OBmHAimAFrJhdAwJRLTvXdiMLkIWbYjU3wARtQIALIKd2q9ZHsTjC2ImFjawz0HArf6PEq40sUkV8omc6SHogw6Ms7my8naAYwksExOmL_rgIt5-xJwLYhFHOJmAJwHWTGDxDm0gkwinonCpMtI6AcpjHSJtAir2kY6kpitzcMCUhk6UQU')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="text-center px-4 max-w-2xl z-10">
                    <span className="text-[#eeb32b] font-bold tracking-widest uppercase text-sm">Skincare Expertise</span>
                    <h1 className="text-white text-4xl md:text-5xl font-bold mt-3">Facials & Skincare</h1>
                    <p className="text-white/90 text-lg mt-4 max-w-xl mx-auto">
                        Rejuvenating facial treatments tailored to your unique skin needs. Experience the glow of healthy, radiant skin.
                    </p>
                    <Link href="/contact" className="inline-block mt-6 bg-[#eeb32b] hover:bg-[#d9a020] text-[#181611] px-8 py-3 rounded-lg font-bold transition-all">
                        Book a Facial
                    </Link>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#181611]">Our Facial Treatments</h2>
                    <p className="text-[#897d61] mt-3 max-w-xl mx-auto">Customized solutions for every skin type and concern</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service) => (
                        <div key={service.name} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                            <div
                                className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                style={{ backgroundImage: `url('${service.image}')` }}
                            />
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#181611] group-hover:text-[#eeb32b] transition-colors">{service.name}</h3>
                                    </div>
                                    <span className="text-[#eeb32b] font-bold text-xl">{service.price}</span>
                                </div>
                                <p className="text-[#555] text-sm mb-4">{service.description}</p>

                                {/* FAQ */}
                                <details className="bg-[#f8f7f6] rounded-lg overflow-hidden group/faq mb-4">
                                    <summary className="flex justify-between items-center p-3 cursor-pointer font-medium text-sm text-[#181611] hover:text-[#eeb32b]">
                                        <span className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-lg text-[#897d61]">help</span>
                                            {service.faq.question}
                                        </span>
                                        <span className="material-symbols-outlined group-open/faq:rotate-180 transition-transform">expand_more</span>
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

            {/* CTA */}
            <section className="py-16 bg-[#181611]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-white text-3xl font-bold">Not sure which facial is right for you?</h2>
                    <p className="text-gray-300 mt-4">Book a free skin consultation and let our experts recommend the perfect treatment.</p>
                    <Link href="/contact" className="inline-block mt-8 bg-[#eeb32b] hover:bg-[#d9a020] text-[#181611] px-8 py-4 rounded-xl font-bold transition-all">
                        Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
