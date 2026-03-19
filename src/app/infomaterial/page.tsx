import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const metadata = {
    title: "Infomaterial | Smiling Studio",
    description: "Beauty-Wissen, Aftercare-Tipps, Pflegeempfehlungen und Lifestyle-Inhalte von Smiling Studio.",
};

export const dynamic = "force-dynamic";

const SECTIONS = ["Beauty-Wissen", "Aftercare", "Pflegetipps", "Lifestyle"] as const;

function getVideoEmbedUrl(url: string): string | null {
    if (!url) return null;
    if (url.includes("instagram.com/p/")) {
        const match = url.match(/instagram\.com\/p\/([^/?]+)/);
        if (match) return `https://www.instagram.com/p/${match[1]}/embed`;
        if (url.includes("/embed")) return url;
    }
    if (url.includes("tiktok.com")) {
        const match = url.match(/video\/(\d+)/);
        if (match) return `https://www.tiktok.com/embed/v2/${match[1]}`;
        if (url.includes("/embed")) return url;
    }
    return url;
}

export default async function InfomaterialPage({
    searchParams,
}: {
    searchParams: Promise<{ tab?: string }>;
}) {
    const { tab } = await searchParams;
    const activeSection = SECTIONS.includes(tab as any) ? (tab as string) : "Beauty-Wissen";

    let posts: any[] = [];
    try {
        posts = await (prisma as any).post.findMany({
            where: { status: "published", infomaterialEnabled: true },
            orderBy: { createdAt: "desc" },
        });
    } catch (error) {
        console.error("Error fetching infomaterial posts:", error);
    }

    const sectionPosts = posts.filter((p) => p.infomaterialSection === activeSection);

    return (
        <div className="min-h-screen bg-[#f5ebe0]">
            {/* Hero Header */}
            <div className="bg-gradient-to-br from-[#5c4033] to-[#8b6355] pt-32 pb-12 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Infomaterial</h1>
                <p className="text-white/70 text-sm md:text-base">Wissen, Tipps und Inspiration von Smiling Studio</p>
            </div>

            {/* Tab Bar — full-width, evenly distributed */}
            <div className="bg-white shadow-sm border-b border-[#e8d5c4] sticky top-20 z-30">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-4">
                        {SECTIONS.map((section) => (
                            <Link
                                key={section}
                                href={`/infomaterial?tab=${section}`}
                                className={`py-4 text-center text-sm md:text-base font-semibold transition-all border-b-2 ${
                                    activeSection === section
                                        ? "text-[#ff8b69] border-[#ff8b69] bg-[#fff8f5]"
                                        : "text-[#999] border-transparent hover:text-[#5c4033] hover:bg-[#faf4ef]"
                                }`}
                            >
                                {section}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="max-w-5xl mx-auto px-4 py-10">
                {sectionPosts.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 text-[#bbb]">
                        <span className="material-symbols-outlined text-6xl mb-4">folder_open</span>
                        <p className="text-lg font-medium text-[#aaa]">Noch keine Inhalte in dieser Kategorie.</p>
                        <p className="text-sm text-[#ccc] mt-1">Inhalte werden über den Admin-Bereich hinzugefügt.</p>
                    </div>
                ) : (
                    <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        {sectionPosts.map((post: any) => {
                            const embedUrl = post.videoUrl ? getVideoEmbedUrl(post.videoUrl) : null;
                            return (
                                <div
                                    key={post.id}
                                    className="bg-white rounded-2xl shadow-sm border border-[#e8d5c4] overflow-hidden hover:shadow-md transition-shadow"
                                >
                                    {embedUrl ? (
                                        /* Video Card */
                                        <>
                                            <div className="relative w-full bg-black" style={{ paddingBottom: "56.25%" }}>
                                                <iframe
                                                    src={embedUrl}
                                                    className="absolute inset-0 w-full h-full"
                                                    allowFullScreen
                                                    frameBorder="0"
                                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                                                    title={post.infomaterialLabel || "Video"}
                                                />
                                            </div>
                                            <div className="px-5 py-4 flex items-center justify-between gap-3">
                                                <div className="flex items-center gap-2 min-w-0">
                                                    <span className="material-symbols-outlined text-[#ff8b69] text-lg flex-shrink-0">play_circle</span>
                                                    <span className="font-semibold text-[#5c4033] text-sm truncate">
                                                        {post.infomaterialLabel || "Video-Beitrag"}
                                                    </span>
                                                </div>
                                                <Link
                                                    href={`/news/${post.id}`}
                                                    className="text-xs text-[#ff8b69] hover:underline whitespace-nowrap flex items-center gap-1 flex-shrink-0"
                                                >
                                                    Zum Beitrag
                                                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                                                </Link>
                                            </div>
                                        </>
                                    ) : (
                                        /* Article Link Card */
                                        <Link href={`/news/${post.id}`} className="flex items-center gap-4 p-5 group">
                                            {post.image ? (
                                                <img
                                                    src={post.image}
                                                    alt={post.infomaterialLabel || ""}
                                                    className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                                                />
                                            ) : (
                                                <div className="w-16 h-16 rounded-xl bg-[#f5ebe0] flex items-center justify-center flex-shrink-0">
                                                    <span className="material-symbols-outlined text-[#d4a373]">article</span>
                                                </div>
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <p className="font-semibold text-[#5c4033] group-hover:text-[#ff8b69] transition-colors text-sm line-clamp-2">
                                                    {post.infomaterialLabel || post.slug}
                                                </p>
                                                <p className="text-xs text-[#bbb] mt-1">
                                                    {new Date(post.createdAt).toLocaleDateString("de-DE")}
                                                </p>
                                            </div>
                                            <span className="material-symbols-outlined text-[#d4a373] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                                                arrow_forward
                                            </span>
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
