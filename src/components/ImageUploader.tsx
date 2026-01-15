"use client";

import { useState, useRef } from "react";
import { useToast } from "./Toast";

interface ImageUploaderProps {
    value: string;
    onChange: (url: string) => void;
    label?: string;
}

export default function ImageUploader({ value, onChange, label = "Image" }: ImageUploaderProps) {
    const { showToast } = useToast();
    const [isUploading, setIsUploading] = useState(false);
    const [mode, setMode] = useState<"url" | "upload">("url");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);

        try {
            const formData = new FormData();
            formData.append("file", file);

            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Upload failed");
            }

            onChange(data.url);
            showToast("Image uploaded successfully!", "success");
        } catch (error: any) {
            showToast(error.message || "Failed to upload image", "error");
        } finally {
            setIsUploading(false);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
    };

    return (
        <div>
            <label className="block text-sm font-bold text-[#181611] mb-2">{label}</label>

            {/* Mode Toggle */}
            <div className="flex gap-2 mb-3">
                <button
                    type="button"
                    onClick={() => setMode("url")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${mode === "url"
                        ? "bg-[#181611] text-white"
                        : "bg-[#f4f3f0] text-[#555] hover:bg-[#e6e2db]"
                        }`}
                >
                    <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">link</span>
                        URL
                    </span>
                </button>
                <button
                    type="button"
                    onClick={() => setMode("upload")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${mode === "upload"
                        ? "bg-[#181611] text-white"
                        : "bg-[#f4f3f0] text-[#555] hover:bg-[#e6e2db]"
                        }`}
                >
                    <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">upload</span>
                        Upload
                    </span>
                </button>
            </div>

            {/* URL Input */}
            {mode === "url" && (
                <input
                    type="url"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#e6e2db] focus:border-[#eeb32b] outline-none"
                    placeholder="https://example.com/image.jpg"
                />
            )}

            {/* File Upload */}
            {mode === "upload" && (
                <div className="relative">
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/png,image/gif,image/webp"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="image-upload"
                    />
                    <label
                        htmlFor="image-upload"
                        className={`flex items-center justify-center gap-3 w-full px-4 py-6 rounded-xl border-2 border-dashed cursor-pointer transition-all
                            ${isUploading
                                ? "border-[#eeb32b] bg-[#eeb32b]/10"
                                : "border-[#e6e2db] hover:border-[#eeb32b] hover:bg-[#f8f7f6]"
                            }`}
                    >
                        {isUploading ? (
                            <>
                                <div className="h-5 w-5 animate-spin rounded-full border-2 border-solid border-[#eeb32b] border-r-transparent"></div>
                                <span className="text-[#897d61]">Uploading...</span>
                            </>
                        ) : (
                            <>
                                <span className="material-symbols-outlined text-[#897d61]">cloud_upload</span>
                                <span className="text-[#897d61]">Click to upload (max 5MB)</span>
                            </>
                        )}
                    </label>
                </div>
            )}

            {/* Preview */}
            {value && (
                <div className="mt-3 relative group">
                    <div
                        className="h-40 w-full rounded-xl bg-cover bg-center border border-[#e6e2db]"
                        style={{ backgroundImage: `url('${value}')` }}
                    />
                    <button
                        type="button"
                        onClick={() => onChange("")}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Remove image"
                    >
                        <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                    <p className="text-xs text-[#897d61] mt-1 truncate">{value}</p>
                </div>
            )}
        </div>
    );
}
