"use client";

import { useState } from "react";
import { ContentSection, ContentField } from "@/lib/page-content-definitions";
import MediaSelector from "./MediaSelector";
import { useToast } from "@/components/Toast";

type SectionEditorProps = {
    pageKey: string;
    section: ContentSection;
    initialData: Record<string, any>;
};

export default function SectionEditor({ pageKey, section, initialData }: SectionEditorProps) {
    const { showToast } = useToast();
    const [formData, setFormData] = useState<Record<string, any>>(initialData || {});
    const [isSaving, setIsSaving] = useState(false);

    const handleChange = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = async () => {
        setIsSaving(true);
        try {
            const res = await fetch("/api/page-content", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    pageKey,
                    sectionKey: section.key,
                    content: formData
                }),
            });

            if (!res.ok) throw new Error("Failed to save");

            showToast(`${section.label} saved successfully!`, "success");
        } catch (error) {
            console.error(error);
            showToast("Error saving content.", "error");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-[#e6e2db] overflow-hidden mb-8">
            <div className="p-6 border-b border-[#e6e2db] flex justify-between items-center bg-[#fcfbf9]">
                <div>
                    <h3 className="font-bold text-lg text-[#181611]">{section.label}</h3>
                    {section.description && <p className="text-sm text-[#897d61] mt-1">{section.description}</p>}
                </div>
                <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="bg-[#181611] text-white px-6 py-2 rounded-xl font-bold hover:bg-[#333] transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                    {isSaving ? (
                        <>
                            <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            Saving...
                        </>
                    ) : (
                        <>
                            <span className="material-symbols-outlined text-lg">save</span>
                            Save Changes
                        </>
                    )}
                </button>
            </div>

            <div className="p-6 grid grid-cols-1 gap-6">
                {section.fields.map((field) => (
                    <div key={field.name}>
                        {renderField(field, formData[field.name] ?? field.defaultValue ?? "", handleChange)}
                    </div>
                ))}
            </div>
        </div>
    );
}

function renderField(field: ContentField, value: any, onChange: (field: string, val: any) => void) {
    switch (field.type) {
        case "text":
            return (
                <div>
                    <label className="block text-sm font-bold text-[#181611] mb-2">{field.label}</label>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => onChange(field.name, e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#e6e2db] focus:border-[#eeb32b] outline-none"
                        placeholder={field.helperText}
                    />
                    {field.helperText && <p className="text-xs text-[#897d61] mt-1">{field.helperText}</p>}
                </div>
            );
        case "textarea":
            return (
                <div>
                    <label className="block text-sm font-bold text-[#181611] mb-2">{field.label}</label>
                    <textarea
                        rows={4}
                        value={value}
                        onChange={(e) => onChange(field.name, e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#e6e2db] focus:border-[#eeb32b] outline-none resize-y"
                        placeholder={field.helperText}
                    />
                    {field.helperText && <p className="text-xs text-[#897d61] mt-1">{field.helperText}</p>}
                </div>
            );
        case "image":
        case "video":
            return (
                <MediaSelector
                    label={field.label}
                    type={field.type}
                    value={value}
                    onChange={(val) => onChange(field.name, val)}
                />
            );
        case "boolean":
            return (
                <div className="flex items-center gap-3 bg-[#f8f7f6] p-3 rounded-xl border border-[#e6e2db]">
                    <input
                        type="checkbox"
                        checked={value === true || value === "true"}
                        onChange={(e) => onChange(field.name, e.target.checked)}
                        className="w-5 h-5 accent-[#d4a373] cursor-pointer"
                    />
                    <label className="text-sm font-bold text-[#181611] cursor-pointer" onClick={() => onChange(field.name, !(value === true || value === "true"))}>
                        {field.label}
                    </label>
                </div>
            );
        default:
            return null;
    }
}
