"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useToast } from "@/components/Toast";
import ImageUploader from "@/components/ImageUploader";
import RichTextEditor from "@/components/RichTextEditor";

type Post = {
    id?: number;
    title: string;
    titleEn?: string | null;
    slug: string;
    content: string;
    contentEn?: string | null;
    image: string;
    category: string;
    author: string;
    status: string;
};

export default function PostEditor({ post }: { post?: Post }) {
    const router = useRouter();
    const { showToast } = useToast();
    const [formData, setFormData] = useState<Post>(
        post || {
            title: "",
            titleEn: "",
            slug: "",
            content: "",
            contentEn: "",
            image: "",
            category: "Wellness",
            author: "Admin",
            status: "published",
        }
    );
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
            // Auto-generate slug from German title if slug is empty
            slug: name === "title" && !prev.slug ? value.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "") : prev.slug
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const url = post ? `/api/posts/${post.id}` : "/api/posts";
            const method = post ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to save");
            }

            showToast(
                post ? "Post updated successfully!" : "Post created successfully!",
                "success"
            );

            // Short delay to show toast before redirect
            setTimeout(() => {
                router.push("/admin/posts");
                router.refresh();
            }, 500);
        } catch (error: any) {
            console.error("Save error:", error);
            showToast(error.message || "Error saving post. Please try again.", "error");
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <Link href="/admin/posts" className="text-[#897d61] hover:text-[#181611] flex items-center gap-1 mb-2">
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Back to Posts
                    </Link>
                    <h1 className="text-3xl font-bold text-[#181611]">
                        {post ? "Edit Post" : "Create New Post"}
                    </h1>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-[#e6e2db] p-8 space-y-6">

                {/* German Content (Default) */}
                <div className="bg-[#f8f7f6] p-6 rounded-xl border border-[#e6e2db] space-y-4">
                    <h3 className="font-bold text-[#d4a373] uppercase tracking-wide text-xs">German Content (Default)</h3>
                    <div>
                        <label className="block text-sm font-bold text-[#181611] mb-2">Title (DE)</label>
                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#e6e2db] focus:border-[#eeb32b] outline-none"
                            placeholder="Enter post title in German"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-[#181611] mb-2">Content (DE)</label>
                        <RichTextEditor
                            value={formData.content}
                            onChange={(html) => setFormData((prev) => ({ ...prev, content: html }))}
                            placeholder="Schreiben Sie hier Ihren Beitrag auf Deutsch..."
                        />
                    </div>
                </div>

                {/* English Content */}
                <div className="bg-[#f8f7f6] p-6 rounded-xl border border-[#e6e2db] space-y-4">
                    <h3 className="font-bold text-[#d4a373] uppercase tracking-wide text-xs">English Content</h3>
                    <div>
                        <label className="block text-sm font-bold text-[#181611] mb-2">Title (EN)</label>
                        <input
                            name="titleEn"
                            value={formData.titleEn || ""}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-[#e6e2db] focus:border-[#eeb32b] outline-none"
                            placeholder="Enter post title in English"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-[#181611] mb-2">Content (EN)</label>
                        <RichTextEditor
                            value={formData.contentEn || ""}
                            onChange={(html) => setFormData((prev) => ({ ...prev, contentEn: html }))}
                            placeholder="Write your post content in English here..."
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-[#181611] mb-2">Slug (URL)</label>
                    <input
                        name="slug"
                        value={formData.slug}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[#e6e2db] focus:border-[#eeb32b] outline-none bg-[#f8f7f6]"
                        placeholder="post-url-slug"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-[#181611] mb-2">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-[#e6e2db] focus:border-[#eeb32b] outline-none"
                        >
                            <option value="Wellness">Wellness</option>
                            <option value="Beauty Tips">Beauty Tips</option>
                            <option value="Trends">Trends</option>
                            <option value="Skincare">Skincare</option>
                            <option value="PMU Guide">PMU Guide</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-[#181611] mb-2">Author</label>
                        <input
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#e6e2db] focus:border-[#eeb32b] outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-[#181611] mb-2">Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-[#e6e2db] focus:border-[#eeb32b] outline-none"
                        >
                            <option value="published">Published</option>
                            <option value="draft">Draft</option>
                            <option value="hidden">Hidden</option>
                        </select>
                    </div>
                </div>

                {/* Image Uploader */}
                <ImageUploader
                    label="Cover Image"
                    value={formData.image}
                    onChange={(url) => setFormData((prev) => ({ ...prev, image: url }))}
                />

                <div className="pt-4 border-t border-[#f4f3f0] flex justify-end gap-3">
                    <Link href="/admin/posts" className="px-6 py-3 rounded-xl border border-[#e6e2db] font-bold text-[#555] hover:bg-[#f8f7f6]">
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-3 rounded-xl bg-[#181611] text-white font-bold hover:bg-[#333] disabled:opacity-70 flex items-center gap-2"
                    >
                        {isSubmitting ? "Saving..." : "Save Post"}
                        <span className="material-symbols-outlined">check</span>
                    </button>
                </div>
            </form>
        </div>
    );
}
