"use client";

import { useState, useRef, useId } from "react";
import { useToast } from "./Toast";

interface PdfUploaderProps {
    value: string;
    onChange: (url: string) => void;
}

export default function PdfUploader({ value, onChange }: PdfUploaderProps) {
    const { showToast } = useToast();
    const [isUploading, setIsUploading] = useState(false);
    const [mode, setMode] = useState<"url" | "upload">("url");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const inputId = useId();

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.type !== "application/pdf") {
            showToast("Bitte nur PDF-Dateien hochladen.", "error");
            return;
        }

        setIsUploading(true);
        try {
            const formData = new FormData();
            formData.append("file", file);

            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Upload fehlgeschlagen");

            onChange(data.url);
            showToast("PDF erfolgreich hochgeladen!", "success");
        } catch (error: any) {
            showToast(error.message || "Fehler beim Hochladen", "error");
        } finally {
            setIsUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    return (
        <div>
            <label className="block text-sm font-bold text-[#181611] mb-2">PDF Datei (optional)</label>

            {/* Mode Toggle */}
            <div className="flex gap-2 mb-3">
                <button
                    type="button"
                    onClick={() => setMode("url")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        mode === "url" ? "bg-[#181611] text-white" : "bg-[#f4f3f0] text-[#555] hover:bg-[#e6e2db]"
                    }`}
                >
                    <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">link</span>
                        Link eingeben
                    </span>
                </button>
                <button
                    type="button"
                    onClick={() => setMode("upload")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        mode === "upload" ? "bg-[#181611] text-white" : "bg-[#f4f3f0] text-[#555] hover:bg-[#e6e2db]"
                    }`}
                >
                    <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">upload_file</span>
                        PDF hochladen
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
                    placeholder="https://... (direkter Link zur PDF-Datei)"
                />
            )}

            {/* File Upload */}
            {mode === "upload" && (
                <div className="relative">
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileUpload}
                        className="hidden"
                        id={inputId}
                    />
                    <label
                        htmlFor={inputId}
                        className={`flex items-center justify-center gap-3 w-full px-4 py-6 rounded-xl border-2 border-dashed cursor-pointer transition-all ${
                            isUploading
                                ? "border-[#eeb32b] bg-[#eeb32b]/10"
                                : "border-[#e6e2db] hover:border-[#eeb32b] hover:bg-[#f8f7f6]"
                        }`}
                    >
                        {isUploading ? (
                            <>
                                <div className="h-5 w-5 animate-spin rounded-full border-2 border-solid border-[#eeb32b] border-r-transparent" />
                                <span className="text-[#897d61]">PDF wird hochgeladen...</span>
                            </>
                        ) : (
                            <>
                                <span className="material-symbols-outlined text-[#897d61]">picture_as_pdf</span>
                                <span className="text-[#897d61]">PDF-Datei auswählen (max 10MB)</span>
                            </>
                        )}
                    </label>
                </div>
            )}

            {/* Preview — show filename if uploaded */}
            {value && (
                <div className="mt-3 flex items-center gap-3 p-3 bg-[#f8f7f6] rounded-xl border border-[#e6e2db]">
                    <span className="material-symbols-outlined text-[#d4a373] text-2xl">picture_as_pdf</span>
                    <p className="text-xs text-[#897d61] flex-1 truncate">{value}</p>
                    <button
                        type="button"
                        onClick={() => onChange("")}
                        className="text-red-500 hover:text-red-700 transition-colors"
                        title="Entfernen"
                    >
                        <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                </div>
            )}
        </div>
    );
}
