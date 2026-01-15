import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
    // Fetch real stats from database
    const [totalLeads, totalPosts, newLeadsToday, recentLeads, postStats] = await Promise.all([
        prisma.lead.count(),
        prisma.post.count(),
        prisma.lead.count({
            where: {
                createdAt: {
                    gte: new Date(new Date().setHours(0, 0, 0, 0)),
                },
            },
        }),
        prisma.lead.findMany({
            take: 5,
            orderBy: { createdAt: "desc" },
        }),
        prisma.post.groupBy({
            by: ['status'],
            _count: { status: true },
        }),
    ]);

    // Calculate post stats
    const publishedPosts = postStats.find(s => s.status === 'published')?._count.status || 0;
    const draftPosts = postStats.find(s => s.status === 'draft')?._count.status || 0;

    // Count voucher leads
    const voucherLeads = await prisma.lead.count({ where: { type: 'voucher' } });

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#181611]">Dashboard Overview</h1>
                <p className="text-[#897d61]">Welcome back, Admin</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e6e2db]">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[#897d61]">Total Leads</span>
                        <span className="material-symbols-outlined text-[#eeb32b]">contacts</span>
                    </div>
                    <p className="text-4xl font-bold text-[#181611]">{totalLeads}</p>
                    <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">trending_up</span>
                        +{newLeadsToday} today
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e6e2db]">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[#897d61]">Blog Posts</span>
                        <span className="material-symbols-outlined text-[#eeb32b]">article</span>
                    </div>
                    <p className="text-4xl font-bold text-[#181611]">{totalPosts}</p>
                    <p className="text-xs text-[#897d61] mt-2">{publishedPosts} Published, {draftPosts} Drafts</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e6e2db]">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[#897d61]">Voucher Requests</span>
                        <span className="material-symbols-outlined text-[#eeb32b]">payments</span>
                    </div>
                    <p className="text-4xl font-bold text-[#181611]">{voucherLeads}</p>
                    <p className="text-xs text-[#897d61] mt-2">Total voucher inquiries</p>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#e6e2db] overflow-hidden">
                <div className="p-6 border-b border-[#e6e2db] flex justify-between items-center">
                    <h2 className="text-lg font-bold text-[#181611]">Recent Leads</h2>
                    <Link href="/admin/leads" className="text-sm text-[#eeb32b] font-bold hover:underline">View All</Link>
                </div>
                <div className="divide-y divide-[#f4f3f0]">
                    {recentLeads.length === 0 ? (
                        <div className="p-8 text-center text-[#897d61]">No leads yet</div>
                    ) : (
                        recentLeads.map((lead) => (
                            <div key={lead.id} className="p-4 flex items-center justify-between hover:bg-[#f8f7f6] transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                                        ${lead.type === "voucher" ? "bg-green-100 text-green-700" :
                                            lead.type === "contact" ? "bg-blue-100 text-blue-700" : "bg-[#eeb32b]/20 text-[#eeb32b]"}`}>
                                        {lead.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#181611] text-sm">{lead.name}</p>
                                        <p className="text-xs text-[#897d61] capitalize">{lead.type}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-[#897d61] mb-1">
                                        {formatDistanceToNow(new Date(lead.createdAt), { addSuffix: true })}
                                    </p>
                                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase
                                        ${lead.status === "new" ? "bg-yellow-100 text-yellow-700" :
                                            lead.status === "read" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>
                                        {lead.status}
                                    </span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
