import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import PostEditor from "../PostEditor";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    let post;
    
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

    // Convert dates and nulls for serialization
    const serializedPost = {
        ...post,
        image: post.image || "",
        createdAt: post.createdAt.toISOString(),
        updatedAt: post.updatedAt.toISOString(),
    };

    return <PostEditor post={serializedPost} />;
}
