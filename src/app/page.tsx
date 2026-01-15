import { getPageContent } from "@/lib/get-page-content";
import HomeClient from "@/components/HomeClient";

export default async function HomePage() {
  const content = await getPageContent("home");

  return <HomeClient content={content} />;
}
