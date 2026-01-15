"use client";

import { useState, useEffect } from "react";
import ImageUploader from "@/components/ImageUploader";

type MediaSelectorProps = {
    value?: string;
    onChange: (value: string) => void;
    type: "image" | "video";
    label: string;
};

export default function MediaSelector({ value, onChange, type, label }: MediaSelectorProps) {
    const [mode, setMode] = useState<"upload" | "url">("upload");
    const [urlInput, setUrlInput] = useState("");

    useEffect(() => {
        if (value && value.startsWith("http")) {
            setMode("url");
            setUrlInput(value);
        }
    }, [value]);

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrlInput(e.target.value);
        onChange(e.target.value);
    };

    return (
        <div className="space-y-3">
            <label className="block text-sm font-bold text-[#181611]">{label}</label>

            <div className="border border-[#e6e2db] rounded-xl overflow-hidden bg-white">
                {/* Tabs */}
                <div className="flex border-b border-[#e6e2db]">
                    <button
                        type="button"
                        onClick={() => setMode("upload")}
                        className={`flex-1 py-2 text-sm font-medium transition-colors ${mode === "upload" ? "bg-[#f8f7f6] text-[#181611]" : "text-[#897d61] hover:bg-[#f8f7f6]"
                            }`}
                    >
                        Upload Details
                    </button>
                    <button
                        type="button"
                        onClick={() => setMode("url")}
                        className={`flex-1 py-2 text-sm font-medium transition-colors ${mode === "url" ? "bg-[#f8f7f6] text-[#181611]" : "text-[#897d61] hover:bg-[#f8f7f6]"
                            }`}
                    >
                        External URL
                    </button>
                </div>

                <div className="p-4">
                    {mode === "upload" ? (
                        <div className="space-y-2">
                            {type === "image" ? (
                                <ImageUploader
                                    label=""
                                    value={value || ""}
                                    onChange={onChange}
                                />
                            ) : (
                                // Video Upload Logic
                                <div className="relative">
                                    <input
                                        type="file"
                                        accept="video/mp4,video/webm"
                                        onChange={async (e) => {
                                            const file = e.target.files?.[0];
                                            if (!file) return;

                                            // Simple upload logic inline
                                            const formData = new FormData();
                                            formData.append("file", file);

                                            try {
                                                const res = await fetch("/api/upload", {
                                                    method: "POST",
                                                    body: formData,
                                                });
                                                const data = await res.json();
                                                if (res.ok) {
                                                    onChange(data.url);
                                                } else {
                                                    alert(data.error || "Upload failed");
                                                }
                                            } catch (err) {
                                                console.error(err);
                                                alert("Upload failed");
                                            }
                                        }}
                                        className="hidden"
                                        id={`video-upload-${label}`}
                                    />
                                    <label
                                        htmlFor={`video-upload-${label}`}
                                        className="flex items-center justify-center gap-3 w-full px-4 py-8 rounded-xl border-2 border-dashed border-[#e6e2db] hover:border-[#eeb32b] hover:bg-[#f8f7f6] cursor-pointer transition-all"
                                    >
                                        <div className="text-center">
                                            <span className="material-symbols-outlined text-[#897d61] text-3xl mb-2">movie</span>
                                            <p className="text-sm font-medium text-[#181611]">Click to upload video</p>
                                            <p className="text-xs text-[#897d61] mt-1">MP4, WebM (Max 50MB)</p>
                                        </div>
                                    </label>
                                </div>
                            )}
                        </div>
                    ) : (
                        <input
                            type="text"
                            value={urlInput}
                            onChange={handleUrlChange}
                            placeholder={type === "image" ? "https://example.com/image.jpg" : "https://youtube.com/watch?v=..."}
                            className="w-full px-4 py-3 rounded-xl border border-[#e6e2db] focus:border-[#eeb32b] outline-none text-sm"
                        />
                    )}
                </div>
            </div>

            {/* Preview */}
            {value && (
                <div className="mt-2 rounded-xl overflow-hidden border border-[#e6e2db] bg-[#f8f7f6] relative group">
                    {/* For videos we want to show a player or at least a thumbnail if possible */}
                    {type === "video" ? (
                        <div className="aspect-video w-full bg-black flex items-center justify-center">
                            {value.includes("mp4") ? (
                                <video src={value} controls className="w-full h-full" />
                            ) : (
                                // Creating valid embed link for youtube is complex, so we just show a link or simple iframe if valid
                                <p className="text-white text-xs p-4">Video functionality enabled for: {value}</p>
                            )}
                        </div>
                    ) : (
                        <div className="relative h-48 w-full">
                            <img src={value} alt="Preview" className="w-full h-full object-contain bg-[#e6e2db]" />
                        </div>
                    )}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                            onClick={() => onChange("")}
                            className="bg-red-500 text-white p-1 rounded-full shadow-lg hover:bg-red-600"
                            title="Remove"
                        >
                            <span className="material-symbols-outlined text-sm">close</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
