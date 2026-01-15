import { prisma } from "@/lib/prisma";
import LeadsClient from "./LeadsClient";
import { Lead } from "@prisma/client";

// Force dynamic rendering to ensure fresh data
export const dynamic = 'force-dynamic';

export default async function LeadsPage() {
    let leads: Lead[] = [];

    try {
        leads = await prisma.lead.findMany({
            orderBy: { createdAt: "desc" },
        });
    } catch (error) {
        console.error("Error fetching leads:", error);
        // Return empty array on error - client will handle empty state
        leads = [];
    }

    // Convert dates to strings for serialization
    const serializedLeads = leads.map(lead => ({
        ...lead,
        createdAt: lead.createdAt.toISOString(),
    }));

    return <LeadsClient leads={serializedLeads} />;
}
