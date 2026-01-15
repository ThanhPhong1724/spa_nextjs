"use client";

import { useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/Toast";

type Post = {
    id: number;
    title: string;
    category: string;
    author: string;
    status: string;
    createdAt: string;
};

export default function PostsClient({ posts }: { posts: Post[] }) {
    const router = useRouter();
    const { showToast } = useToast();
    const [isDeleting, setIsDeleting] = useState<number | null>(null);

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this post?")) return;

        setIsDeleting(id);
        try {
            const res = await fetch(`/api/posts/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Failed to delete");
            }

            showToast("Post deleted successfully!", "success");
            router.refresh();
        } catch (error: any) {
            console.error("Delete error:", error);
            showToast(error.message || "Error deleting post. Please try again.", "error");
        } finally {
            setIsDeleting(null);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-[#181611]">Blog Posts</h1>
                    <p className="text-[#897d61]">Manage your news and articles.</p>
                </div>
                <Link
                    href="/admin/posts/new"
                    className="bg-[#eeb32b] hover:bg-[#d9a020] text-[#181611] px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2"
                >
                    <span className="material-symbols-outlined">add</span>
                    New Post
                </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[#e6e2db] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#f8f7f6] border-b border-[#e6e2db]">
                            <tr>
                                <th className="p-6 font-bold text-[#181611] text-sm uppercase tracking-wide">Date</th>
                                <th className="p-6 font-bold text-[#181611] text-sm uppercase tracking-wide">Title</th>
                                <th className="p-6 font-bold text-[#181611] text-sm uppercase tracking-wide">Category</th>
                                <th className="p-6 font-bold text-[#181611] text-sm uppercase tracking-wide">Status</th>
                                <th className="p-6 font-bold text-[#181611] text-sm uppercase tracking-wide">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#f4f3f0]">
                            {posts.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="p-8 text-center text-[#897d61]">No posts found. Create one to get started!</td>
                                </tr>
                            ) : posts.map((post) => (
                                <tr key={post.id} className="hover:bg-[#f8f7f6] transition-colors">
                                    <td className="p-6 text-sm text-[#555]">
                                        {format(new Date(post.createdAt), "MMM d, yyyy")}
                                    </td>
                                    <td className="p-6 font-bold text-[#181611]">{post.title}</td>
                                    <td className="p-6 text-sm text-[#897d61]">{post.category}</td>
                                    <td className="p-6">
                                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold uppercase
                        ${post.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                            {post.status}
                                        </span>
                                    </td>
                                    <td className="p-6 flex items-center gap-3">
                                        <Link
                                            href={`/admin/posts/${post.id}`}
                                            className="text-[#eeb32b] font-bold text-sm hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(post.id)}
                                            disabled={isDeleting === post.id}
                                            className="text-red-400 font-bold text-sm hover:text-red-600 disabled:opacity-50"
                                        >
                                            {isDeleting === post.id ? "..." : "Delete"}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
