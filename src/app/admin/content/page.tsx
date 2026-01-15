"use client";

import { useState, useEffect } from "react";
import { PAGE_CONTENT_DEFINITIONS } from "@/lib/page-content-definitions";
import SectionEditor from "@/components/admin/SectionEditor";
import Link from "next/link";

export default function ContentDashboard() {
    const [selectedPage, setSelectedPage] = useState("home");
    const [contentData, setContentData] = useState<Record<string, any>>({});
    const [loading, setLoading] = useState(true);

    const definition = PAGE_CONTENT_DEFINITIONS[selectedPage];

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/page-content?pageKey=${selectedPage}`);
                if (res.ok) {
                    const data = await res.json();
                    setContentData(data);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedPage]);

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-[#181611]">Content Management</h1>
                    <p className="text-[#897d61]">Manage content for {PAGE_CONTENT_DEFINITIONS[selectedPage]?.label}</p>
                </div>
                <a
                    href="/"
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-[#f4f3f0] hover:bg-[#e6e2db] text-[#181611] rounded-lg transition-colors font-medium"
                >
                    <span className="material-symbols-outlined text-sm">visibility</span>
                    View Live Site
                </a>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Navigation */}
                <div className="w-full md:w-64 flex-shrink-0">
                    <div className="bg-white rounded-2xl shadow-sm border border-[#e6e2db] p-4 overflow-hidden sticky top-8">
                        <h3 className="text-xs font-bold text-[#d4a373] uppercase tracking-wider mb-4 px-2">Pages</h3>
                        <nav className="space-y-1">
                            {Object.values(PAGE_CONTENT_DEFINITIONS).map((def) => (
                                <button
                                    key={def.key}
                                    onClick={() => setSelectedPage(def.key)}
                                    className={`w-full text-left px-4 py-3 rounded-xl transition-colors font-medium flex items-center justify-between ${selectedPage === def.key
                                        ? "bg-[#181611] text-white"
                                        : "text-[#555] hover:bg-[#f8f7f6] hover:text-[#181611]"
                                        }`}
                                >
                                    {def.label}
                                    {selectedPage === def.key && (
                                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                                    )}
                                </button>
                            ))}
                        </nav>

                        <div className="mt-8 pt-6 border-t border-[#f4f3f0]">
                            <Link href="/admin" className="flex items-center gap-2 px-4 text-[#897d61] hover:text-[#181611] text-sm font-medium">
                                <span className="material-symbols-outlined text-lg">arrow_back</span>
                                Back to Dashboard
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1">
                    {loading ? (
                        <div className="flex items-center justify-center h-64">
                            <div className="w-8 h-8 border-4 border-[#d4a373] border-t-transparent rounded-full animate-spin" />
                        </div>
                    ) : (
                        <div className="space-y-8 animate-fade-in">
                            {definition.sections.map((section) => (
                                <SectionEditor
                                    key={section.key}
                                    pageKey={selectedPage}
                                    section={section}
                                    initialData={contentData[section.key]}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
