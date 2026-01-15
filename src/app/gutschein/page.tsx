import { getPageContent } from "@/lib/get-page-content";
import GutscheinClient from "@/components/GutscheinClient";



export default async function GutscheinPage() {
    const content = await getPageContent("giftcard_page");

    return <GutscheinClient content={content} />;
}
