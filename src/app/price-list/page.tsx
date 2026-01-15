import { getPageContent } from "@/lib/get-page-content";
import PriceListClient from "@/components/PriceListClient";



export default async function PriceListPage() {
    const content = await getPageContent("pricelist_page");

    return <PriceListClient content={content} />;
}
