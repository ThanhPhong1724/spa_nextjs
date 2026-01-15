import { prisma } from "@/lib/prisma";
import { PAGE_CONTENT_DEFINITIONS, PageDefinition } from "@/lib/page-content-definitions";
import { unstable_cache } from "next/cache";

// Wrap the fetching logic in a cached function
const fetchPageContent = async (pageKey: string) => {
    try {
        const contents = await prisma.pageContent.findMany({
            where: { pageKey },
        });

        // Map sectionKey -> content object
        const contentMap: Record<string, any> = {};

        contents.forEach((item) => {
            try {
                contentMap[item.sectionKey] = JSON.parse(item.content);
            } catch (e) {
                console.error(`Error parsing content for ${pageKey}.${item.sectionKey}`);
            }
        });

        // Merge with defaults from definition
        const definition = PAGE_CONTENT_DEFINITIONS[pageKey];
        if (!definition) return contentMap;

        const result: Record<string, any> = {};
        definition.sections.forEach(section => {
            const defaults: Record<string, any> = {};
            section.fields.forEach(field => {
                if (field.defaultValue) {
                    defaults[field.name] = field.defaultValue;
                }
            });

            // Override defaults with DB content
            result[section.key] = { ...defaults, ...contentMap[section.key] };
        });

        return result;
    } catch (error) {
        console.error("Error fetching page content:", error);
        return {};
    }
};

// Export the cached version
export const getPageContent = unstable_cache(
    fetchPageContent,
    ['page-content'], // Cache key prefix
    {
        revalidate: 60, // Revalidate every 60 seconds
        tags: ['page-content'] // Cache tag for on-demand revalidation
    }
);
