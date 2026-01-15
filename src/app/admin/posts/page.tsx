import { prisma } from "@/lib/prisma";
import PostsClient from "./PostsClient";
import { Post } from "@prisma/client";

export const dynamic = 'force-dynamic';

export default async function PostsPage() {
    let posts: Post[] = [];

    try {
        posts = await prisma.post.findMany({
            orderBy: { createdAt: "desc" },
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
        // Return empty array on error - client will handle empty state
        posts = [];
    }

    const serializedPosts = posts.map(post => ({
        ...post,
        createdAt: post.createdAt.toISOString(),
        updatedAt: post.updatedAt.toISOString(),
    }));

    return <PostsClient posts={serializedPosts} />;
}

