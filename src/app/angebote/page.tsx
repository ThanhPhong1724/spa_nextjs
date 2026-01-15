import { getPageContent } from "@/lib/get-page-content";
import AngeboteClient from "@/components/AngeboteClient";



export default async function AngebotePage() {
    const content = await getPageContent("offers_page");

    return <AngeboteClient content={content} />;
}
