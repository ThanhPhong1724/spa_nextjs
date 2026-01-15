"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { format } from "date-fns";

type Post = {
    id: number;
    title: string;
    titleEn?: string | null;
    content: string;
    contentEn?: string | null;
    image: string | null;
    category: string;
    author: string;
    createdAt: Date;
    slug: string;
};

export default function NewsDetailContent({ post }: { post: Post }) {
    const { language, t } = useLanguage();

    const displayTitle = language === 'en' && post.titleEn ? post.titleEn : post.title;
    const displayContent = language === 'en' && post.contentEn ? post.contentEn : post.content;

    return (
        <div className="min-h-screen pb-16 bg-[#f5ebe0]">
            {/* Hero */}
            <div className="relative h-[400px] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${post.image}')` }}
                />
                <div className="absolute inset-0 bg-[#5c4033]/60" />
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-4 text-sm font-bold uppercase tracking-widest">
                        <span className="bg-[#d4a373] text-white px-3 py-1 rounded-full">{post.category}</span>
                        <span>{format(new Date(post.createdAt), "MMM d, yyyy")}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">{displayTitle}</h1>
                </div>
            </div>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-4 py-12">
                <div className="flex items-center gap-3 mb-8 border-b border-[#d4a373]/20 pb-8">
                    <div className="w-12 h-12 rounded-full bg-[#d4a373]/20 flex items-center justify-center text-[#d4a373] font-bold text-xl">
                        {post.author.charAt(0)}
                    </div>
                    <div>
                        <p className="font-bold text-[#5c4033]">{post.author}</p>
                        <p className="text-xs text-[#8b7355]">Senior Therapist</p>
                    </div>
                </div>

                <div
                    className="prose prose-lg max-w-none text-[#6b5344] prose-headings:text-[#5c4033] prose-headings:font-bold prose-a:text-[#d4a373]"
                    dangerouslySetInnerHTML={{ __html: displayContent }}
                />

                <div className="mt-12 pt-8 border-t border-[#d4a373]/20 flex justify-between">
                    <Link href="/news" className="flex items-center gap-2 text-[#8b7355] hover:text-[#d4a373] font-bold transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                        {t("common.back")}
                    </Link>
                </div>
            </article>


        </div>
    );
}
