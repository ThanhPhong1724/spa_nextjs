import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import NewsDetailContent from "@/components/NewsDetailContent";

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    let post: any;

    try {
        post = await prisma.post.findUnique({
            where: { id: parseInt(id) },
        });
    } catch (error) {
        console.error("Error fetching post:", error);
        notFound();
    }

    if (!post) {
        notFound();
    }

    return <NewsDetailContent post={post} />;
}
