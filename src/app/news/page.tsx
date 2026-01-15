import { prisma } from "@/lib/prisma";
import NewsList from "@/components/NewsList";
import NewsHeader from "@/components/NewsHeader";

export const metadata = {
    title: "News | Smiling Studio",
    description: "Aktuelle Neuigkeiten und Tipps von Smiling Studio.",
};

export const dynamic = "force-dynamic";

export default async function NewsPage() {
    let posts: any[] = [];

    try {
        posts = await prisma.post.findMany({
            where: { status: "published" },
            orderBy: { createdAt: "desc" },
            // Select specific fields including new English ones
            // We select all or specific fields. Prisma types might be outdated so we cast result to any[] above
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }

    // Fallback placeholder posts if no posts in database
    const displayPosts = posts.length > 0 ? posts : [
        {
            id: 0,
            title: "Neue Headspa-Pakete ab sofort verfügbar!",
            titleEn: "New Headspa Packages Available Now!",
            image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop",
            createdAt: new Date(),
            slug: "headspa-packages"
        },
        {
            id: 0,
            title: "Winterpflege für Ihre Haut – unsere Empfehlungen.",
            titleEn: "Winter Care for Your Skin – Our Recommendations.",
            image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop",
            createdAt: new Date(),
            slug: "winter-skincare"
        },
        {
            id: 0,
            title: "Neue Farben für Ihre Nägel – jetzt entdecken!",
            titleEn: "New Colors for Your Nails – Discover Now!",
            image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop",
            createdAt: new Date(),
            slug: "new-nail-colors"
        },
        {
            id: 0,
            title: "Tipps für lange haltbare Wimpernverlängerungen.",
            titleEn: "Tips for Long-Lasting Eyelash Extensions.",
            image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&h=400&fit=crop",
            createdAt: new Date(),
            slug: "lash-extension-tips"
        }
    ];

    return (
        <div className="min-h-screen bg-[#f5ebe0]">
            <NewsHeader />
            <NewsList posts={displayPosts} />
        </div>
    );
}
