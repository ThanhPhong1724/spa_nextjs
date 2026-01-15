import Link from "next/link";

const vouchers = [
    {
        title: "The Golden Hour Revival",
        description: "90-min Full Body Massage + Gold Mask Facial. The ultimate rejuvenation package.",
        originalPrice: "$150",
        price: "$120",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJGYewUGl3N6kFnJBgs9o4Ta_nQM9Ze9f2TOKB_kwNMhAyUbcWdFGsHJbIsJ5apqRvy_iKr6so_dJKH1Gxfg1LjBhpEfN4QlFjIdkJscZqjtITecWwAcyCZtD0BOtxFc1Lx0SNjZcO0xRcQrz51-5JSIW8o4uVjSx2ybjXltGLQc2lDCoiM_YijT92w_gp-A4cfJOdXN6NW0a0FOSQHVfKdzLtFoGsDE0Tj9dLxMJRfDCxVvV8NOiLgHFY0naDUgOUlvO3aSoEZEpX",
        tag: "Best Seller"
    },
    {
        title: "Zen Couples Retreat",
        description: "Private Suite access, Aromatherapy, and Sauna session for two people.",
        originalPrice: "$250",
        price: "$200",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh7cDfnwQt7nMMNFkL6iQu40jMotjrZTJfBWbMPclJy1as34gyfV-rtki54EVp_YlJ8eGRn-BobjZayIZc9_pjhXq-vSIY-YK1qlwtbQqjMjjgWsnhdYjXVFxxDHmlDSU6yKdsJpZEK6Y7_YiXJnr1palUW2_78vmeA6eZmeMyi_2V9E6h9QnUXJzstpELkoMCTtKw76rECuSb6uLBBEkCFnHc-DWWGv8ikJDzK6bZHvQLAVS7zOA-OY_jzb2uw7nu7uNHcVPDV8KX",
    },
    {
        title: "Holistic Healing",
        description: "Combination of Reiki energy healing and gentle Swedish Massage.",
        originalPrice: "$180",
        price: "$150",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAg5pNM5Mwfl0oQAgVpTPT3IzvqDHUAXRuJcfXzRU2_J8BFDp_Ujb5MxxdRA7WPeFVbCBynBWWZaaugm8bbNopajqnnK3q8JSGq3F4IkPk-JdMc7zQQjpkkbZrI8_PzFBvMjPtOiKTiHsfWfa5hQyylmj6V931tNF1bVquCMI45Dny_Ir8nEKFHLi0Kxf52Ubh8Nx1GgNuRtoUsePnGrdgVqc7_clnye7t3JEw-a9_bUy45W81e61x5w7xGBOHXTeuQE9vLSY0F1zKN",
        tag: "Limited Time"
    },
    {
        title: "Radiant Glow Facial",
        description: "Vitamin C infused treatment for immediate brightening and hydration.",
        originalPrice: "$120",
        price: "$90",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGFWT9pebNLcRz4FZKJRfyxcGwEU9BXSK01Q5tI9ZS7M0lrRzVL3b7wxK1T-HC3msEXKhNYHLV6GGHwLZgKX7juha23DlUoAa480wDb13KfwrLP-olICRCHGY8c5MYnNt0ZcPkwgz2lekTzsDSucIjmSS_qNdufgGodY5Wy0iti7CDmqaV5X-c2JJt9LyEzNT4sLEnuPo8Im7PLWmAUMOPYdlxaB_c40952BAtCeC92zVu5JyBN-J4Zxuf4RkiV9vYeA6EyKCjOP40",
    },
    {
        title: "Deep Tissue Release",
        description: "Therapeutic massage focusing on deep muscle layers to release chronic tension.",
        originalPrice: "$130",
        price: "$100",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGaCBKUNqeBiLu1jrtssVd2Y4CgzHj2aFZ93r5FGXsGxf35ssbWYTyxmPfCJpZB3rHboHYs3kDqvZ-X-XofDJAYi_xHAAyrl9AljGOxpFbj7seHbbAEnwceb4EXG6vp2jVU_ewdWbR6m9pdNHg0DFMl_wDO6wEwB9ZkwLSuz0n3zxbfNstg4wiDBzL4YSD0ubCKM9z8uomtjQ__ixkqCEWX72MWAdW1EQrydA0wSvGeQgPHphZRcysRmuICJ6Ey3bwVLYvPk27Bi2U",
    }
];

export default function ComboVouchersPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="bg-[#181611] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-[#eeb32b] font-bold tracking-widest uppercase text-xs">Special Offers</span>
                    <h1 className="text-white text-4xl md:text-5xl font-bold mt-3">Combo Vouchers</h1>
                    <p className="text-white/80 text-2xl font-light mt-2">Voucher Combo</p>
                    <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
                        Exclusive packages designed for total relaxation and savings.
                    </p>
                </div>
            </section>

            {/* Vouchers Grid */}
            <section className="py-16 bg-[#f8f7f6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {vouchers.map((voucher) => (
                            <div key={voucher.title} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
                                <div className="relative h-56 overflow-hidden">
                                    {voucher.tag && (
                                        <div className="absolute top-4 left-4 bg-[#eeb32b] text-[#181611] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 shadow-sm">
                                            {voucher.tag}
                                        </div>
                                    )}
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url('${voucher.image}')` }}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#181611] mb-2">{voucher.title}</h3>
                                    <p className="text-[#555] text-sm mb-4 h-10 line-clamp-2">{voucher.description}</p>
                                    <div className="mt-4 pt-4 border-t border-[#f4f3f0] flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-gray-400 line-through">{voucher.originalPrice}</span>
                                            <span className="text-xl font-bold text-[#eeb32b]">{voucher.price}</span>
                                        </div>
                                        <Link href="/vouchers/online" className="bg-[#f8f7f6] hover:bg-[#eeb32b] text-[#181611] px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                                            Purchase Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
