import { prisma } from "./prisma";

export type PageContentData = {
    text?: string;
    image?: string;
    video?: string;
    link?: string;
    [key: string]: any;
};

/**
 * Get page content by pageKey and sectionKey
 */
export async function getPageContent(
    pageKey: string,
    sectionKey: string
): Promise<PageContentData | null> {
    try {
        const content = await prisma.pageContent.findUnique({
            where: {
                pageKey_sectionKey: {
                    pageKey,
                    sectionKey,
                },
            },
        });

        if (!content) return null;

        try {
            return JSON.parse(content.content) as PageContentData;
        } catch {
            // If not JSON, return as text
            return { text: content.content };
        }
    } catch (error) {
        console.error(`Error fetching content for ${pageKey}.${sectionKey}:`, error);
        return null;
    }
}

/**
 * Get all content for a page
 */
export async function getPageContents(pageKey: string): Promise<Record<string, PageContentData>> {
    try {
        const contents = await prisma.pageContent.findMany({
            where: { pageKey },
        });

        const result: Record<string, PageContentData> = {};

        for (const content of contents) {
            try {
                result[content.sectionKey] = JSON.parse(content.content) as PageContentData;
            } catch {
                result[content.sectionKey] = { text: content.content };
            }
        }

        return result;
    } catch (error) {
        console.error(`Error fetching contents for ${pageKey}:`, error);
        return {};
    }
}

/**
 * Get content with fallback to default value
 */
export async function getPageContentWithFallback(
    pageKey: string,
    sectionKey: string,
    fallback: PageContentData
): Promise<PageContentData> {
    const content = await getPageContent(pageKey, sectionKey);
    return content || fallback;
}

