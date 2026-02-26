"use client";

import { useState, useEffect } from "react";
import { PAGE_CONTENT_DEFINITIONS } from "@/lib/page-content-definitions";

/**
 * Client-side hook to fetch page content from the API,
 * merging with definition defaults for consistent fallback behavior.
 */
export function usePageContent(pageKey: string) {
    const [content, setContent] = useState<Record<string, any>>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const definition = PAGE_CONTENT_DEFINITIONS[pageKey];

        // Build defaults from definition
        const defaults: Record<string, any> = {};
        if (definition) {
            definition.sections.forEach(section => {
                const sectionDefaults: Record<string, any> = {};
                section.fields.forEach(field => {
                    if (field.defaultValue) {
                        sectionDefaults[field.name] = field.defaultValue;
                    }
                });
                defaults[section.key] = sectionDefaults;
            });
        }

        // Fetch from API and merge
        fetch(`/api/page-content?pageKey=${pageKey}`)
            .then(res => res.ok ? res.json() : {})
            .then(data => {
                // Merge: defaults -> API data
                const merged: Record<string, Record<string, any>> = {};
                for (const key of Object.keys(defaults)) {
                    merged[key] = { ...defaults[key], ...(data as Record<string, any>)[key] };
                }
                // Also include any keys from API not in defaults
                for (const key of Object.keys(data as Record<string, any>)) {
                    if (!merged[key]) merged[key] = (data as Record<string, any>)[key];
                }
                setContent(merged);
            })
            .catch(() => setContent(defaults))
            .finally(() => setLoading(false));
    }, [pageKey]);

    return { content, loading };
}
