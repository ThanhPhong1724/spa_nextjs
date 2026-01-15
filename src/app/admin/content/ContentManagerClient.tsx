"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type PageContent = {
    id: number;
    pageKey: string;
    sectionKey: string;
    content: string;
    updatedAt: string;
};

type PageStructure = {
    [pageKey: string]: {
        name: string;
        sections: Array<{
            key: string;
            label: string;
            type: "text" | "image" | "video";
        }>;
    };
};

export default function ContentManagerClient({
    contents,
    pageStructure,
}: {
    contents: PageContent[];
    pageStructure: PageStructure;
}) {
    const router = useRouter();
    const [editing, setEditing] = useState<{ pageKey: string; sectionKey: string } | null>(null);
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [isSaving, setIsSaving] = useState(false);

    // Group contents by pageKey
    const groupedContents: Record<string, PageContent[]> = {};
    for (const content of contents) {
        if (!groupedContents[content.pageKey]) {
            groupedContents[content.pageKey] = [];
        }
        groupedContents[content.pageKey].push(content);
    }

    const getContentValue = (pageKey: string, sectionKey: string): any => {
        const content = contents.find(
            c => c.pageKey === pageKey && c.sectionKey === sectionKey
        );
        if (!content) return null;
        try {
            return JSON.parse(content.content);
        } catch {
            return { text: content.content };
        }
    };

    const handleEdit = (pageKey: string, sectionKey: string) => {
        const currentValue = getContentValue(pageKey, sectionKey);
        setEditing({ pageKey, sectionKey });
        setFormData(currentValue || {});
    };

    const handleSave = async (pageKey: string, sectionKey: string) => {
        setIsSaving(true);
        try {
            const res = await fetch("/api/page-content", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    pageKey,
                    sectionKey,
                    content: formData,
                }),
            });

            if (!res.ok) throw new Error("Failed to save");

            setEditing(null);
            setFormData({});
            router.refresh();
        } catch (error) {
            console.error("Error saving:", error);
            alert("Error saving content. Please try again.");
        } finally {
            setIsSaving(false);
        }
    };

    const handleCancel = () => {
        setEditing(null);
        setFormData({});
    };

    const renderField = (pageKey: string, sectionKey: string, type: string, label: string) => {
        const isEditing = editing?.pageKey === pageKey && editing?.sectionKey === sectionKey;
        const currentValue = getContentValue(pageKey, sectionKey);

        if (isEditing) {
            return (
                <div className="space-y-3">
                    {type === "text" && (
                        <textarea
                            value={formData.text || ""}
                            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                            rows={3}
                            className="w-full px-4 py-2 rounded-lg border border-[#e6e2db] focus:border-[#eeb32b] outline-none"
                            placeholder="Enter text content"
                        />
                    )}
                    {type === "image" && (
                        <div className="space-y-2">
                            <input
                                type="text"
                                value={formData.image || ""}
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg border border-[#e6e2db] focus:border-[#eeb32b] outline-none"
                                placeholder="Image URL"
                            />
                            {formData.image && (
                                <div className="h-40 w-full rounded-lg bg-cover bg-center border border-[#e6e2db]"
                                    style={{ backgroundImage: `url('${formData.image}')` }} />
                            )}
                        </div>
                    )}
                    {type === "video" && (
                        <input
                            type="text"
                            value={formData.video || ""}
                            onChange={(e) => setFormData({ ...formData, video: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-[#e6e2db] focus:border-[#eeb32b] outline-none"
                            placeholder="Video URL"
                        />
                    )}
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleSave(pageKey, sectionKey)}
                            disabled={isSaving}
                            className="px-4 py-2 bg-[#eeb32b] text-[#181611] rounded-lg font-bold hover:bg-[#d9a020] disabled:opacity-50"
                        >
                            {isSaving ? "Saving..." : "Save"}
                        </button>
                        <button
                            onClick={handleCancel}
                            className="px-4 py-2 border border-[#e6e2db] rounded-lg font-bold hover:bg-[#f8f7f6]"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    {type === "text" && (
                        <p className="text-[#555]">{currentValue?.text || "Not set"}</p>
                    )}
                    {type === "image" && (
                        <div>
                            {currentValue?.image ? (
                                <div className="h-32 w-full rounded-lg bg-cover bg-center border border-[#e6e2db]"
                                    style={{ backgroundImage: `url('${currentValue.image}')` }} />
                            ) : (
                                <p className="text-[#897d61] text-sm">No image set</p>
                            )}
                        </div>
                    )}
                    {type === "video" && (
                        <p className="text-[#555] text-sm break-all">
                            {currentValue?.video || "No video set"}
                        </p>
                    )}
                </div>
                <button
                    onClick={() => handleEdit(pageKey, sectionKey)}
                    className="text-[#eeb32b] font-bold text-sm hover:underline"
                >
                    Edit
                </button>
            </div>
        );
    };

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#181611]">Page Content Management</h1>
                <p className="text-[#897d61]">Manage images, videos, and text content for public pages.</p>
            </div>

            <div className="space-y-8">
                {Object.entries(pageStructure).map(([pageKey, page]) => (
                    <div key={pageKey} className="bg-white rounded-2xl shadow-sm border border-[#e6e2db] overflow-hidden">
                        <div className="bg-[#f8f7f6] p-6 border-b border-[#e6e2db]">
                            <h2 className="text-xl font-bold text-[#181611]">{page.name}</h2>
                            <p className="text-sm text-[#897d61] mt-1">Page Key: <code className="bg-white px-2 py-1 rounded">{pageKey}</code></p>
                        </div>
                        <div className="p-6 space-y-6">
                            {page.sections.map((section) => (
                                <div key={section.key} className="border-b border-[#f4f3f0] pb-6 last:border-0">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <h3 className="font-bold text-[#181611]">{section.label}</h3>
                                            <p className="text-xs text-[#897d61]">
                                                <code>{pageKey}.{section.key}</code>
                                            </p>
                                        </div>
                                    </div>
                                    {renderField(pageKey, section.key, section.type, section.label)}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

