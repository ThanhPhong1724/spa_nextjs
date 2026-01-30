"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { format } from "date-fns";
import { useState } from "react";

type Post = {
    id: number;
    title: string;
    titleEn?: string | null;
    image: string | null;
    createdAt: Date;
    slug: string;
};

export default function NewsList({ posts: initialPosts }: { posts: Post[] }) {
    const { language, t } = useLanguage();
    const [posts, setPosts] = useState<Post[]>(initialPosts);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(initialPosts.length === 6);

    const loadMore = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const nextPage = page + 1;
            const res = await fetch(`/api/posts?status=published&page=${nextPage}&limit=6`);
            const newPosts = await res.json();

            if (Array.isArray(newPosts)) {
                setPosts(prev => [...prev, ...newPosts]);
                setPage(nextPage);
                if (newPosts.length < 6) {
                    setHasMore(false);
                }
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Failed to load more posts", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {posts.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-[#6b5344] text-lg">{t("news.no_posts")}</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {posts.map((post, index) => {
                                const displayTitle = language === 'en' && post.titleEn ? post.titleEn : post.title;

                                return (
                                    <Link
                                        key={`${post.id}-${index}`}
                                        href={`/news/${post.id}`}
                                        className={`group animate-slide-in animate-slide-in-delay-${(index % 5) + 1}`}
                                    >
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                                            <div className="h-56 overflow-hidden flex-shrink-0 relative">
                                                <img
                                                    src={post.image || "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop"}
                                                    alt={displayTitle}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                            </div>
                                            <div className="p-6 flex-1 flex flex-col">
                                                <div className="mb-2 text-xs font-bold text-[#ff8b69] uppercase tracking-wider">
                                                    {format(new Date(post.createdAt), "dd.MM.yyyy")}
                                                </div>
                                                <div className="flex items-start gap-4 flex-1">
                                                    <h3 className="text-[#5c4033] font-bold text-lg line-clamp-2 leading-tight flex-1">
                                                        {displayTitle}
                                                    </h3>
                                                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ff8b69] flex items-center justify-center group-hover:bg-[#e87a5a] transition-colors">
                                                        <span className="material-symbols-outlined text-white">arrow_forward</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        {hasMore && (
                            <div className="mt-12 text-center">
                                <button
                                    onClick={loadMore}
                                    disabled={loading}
                                    className="px-8 py-3 bg-[#eeb32b] text-[#181611] font-bold rounded-xl hover:bg-[#d49f25] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <span className="flex items-center gap-2">
                                            <span className="animate-spin w-4 h-4 border-2 border-[#181611] border-t-transparent rounded-full"></span>
                                            {language === 'en' ? 'Loading...' : 'Laden...'}
                                        </span>
                                    ) : (
                                        language === 'en' ? 'Load More' : 'Mehr anzeigen'
                                    )}
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}
