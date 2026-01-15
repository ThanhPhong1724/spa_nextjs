"use client";

import { useState } from "react";
import { format } from "date-fns";

type Lead = {
    id: number;
    type: string;
    name: string;
    email: string;
    phone: string | null;
    details: string | null;
    status: string;
    createdAt: string; // Serialized date
};

export default function LeadsClient({ leads }: { leads: Lead[] }) {
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#181611]">Leads & Requests</h1>
                <p className="text-[#897d61]">Manage form submissions from your website.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[#e6e2db] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#f8f7f6] border-b border-[#e6e2db]">
                            <tr>
                                <th className="p-6 font-bold text-[#181611] text-sm uppercase tracking-wide">Date</th>
                                <th className="p-6 font-bold text-[#181611] text-sm uppercase tracking-wide">Type</th>
                                <th className="p-6 font-bold text-[#181611] text-sm uppercase tracking-wide">Customer</th>
                                <th className="p-6 font-bold text-[#181611] text-sm uppercase tracking-wide">Status</th>
                                <th className="p-6 font-bold text-[#181611] text-sm uppercase tracking-wide">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#f4f3f0]">
                            {leads.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="p-8 text-center text-[#897d61]">No leads found yet.</td>
                                </tr>
                            ) : leads.map((lead) => (
                                <tr key={lead.id} className="hover:bg-[#f8f7f6] transition-colors">
                                    <td className="p-6 text-sm text-[#555]">
                                        {format(new Date(lead.createdAt), "MMM d, yyyy HH:mm")}
                                    </td>
                                    <td className="p-6">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                      ${lead.type === "voucher" ? "bg-green-100 text-green-700" :
                                                lead.type === "consultation" ? "bg-purple-100 text-purple-700" :
                                                    "bg-blue-100 text-blue-700"}`}>
                                            {lead.type}
                                        </span>
                                    </td>
                                    <td className="p-6">
                                        <p className="font-bold text-[#181611]">{lead.name}</p>
                                        <p className="text-xs text-[#897d61]">{lead.email}</p>
                                        {lead.phone && <p className="text-xs text-[#897d61]">{lead.phone}</p>}
                                    </td>
                                    <td className="p-6">
                                        <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-[#f4f3f0] text-[#555] uppercase">
                                            {lead.status}
                                        </span>
                                    </td>
                                    <td className="p-6">
                                        <button
                                            onClick={() => setSelectedLead(lead)}
                                            className="text-[#eeb32b] font-bold text-sm hover:underline"
                                        >
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Detail Modal */}
            {selectedLead && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-[#f4f3f0] flex justify-between items-center">
                            <h3 className="text-xl font-bold text-[#181611]">Submission Details</h3>
                            <button onClick={() => setSelectedLead(null)} className="text-[#897d61] hover:text-[#181611]">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs font-bold text-[#897d61] uppercase">Type</p>
                                    <p className="text-[#181611] font-medium">{selectedLead.type}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#897d61] uppercase">Date</p>
                                    <p className="text-[#181611]">{format(new Date(selectedLead.createdAt), "PPpp")}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#897d61] uppercase">Name</p>
                                    <p className="text-[#181611]">{selectedLead.name}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#897d61] uppercase">Contact</p>
                                    <p className="text-[#181611] text-sm">{selectedLead.email}</p>
                                    <p className="text-[#181611] text-sm">{selectedLead.phone}</p>
                                </div>
                            </div>

                            <div className="bg-[#f8f7f6] p-4 rounded-xl">
                                <p className="text-xs font-bold text-[#897d61] uppercase mb-2">Additional Details</p>
                                <pre className="whitespace-pre-wrap text-sm text-[#555] font-sans">
                                    {selectedLead.details ? JSON.stringify(JSON.parse(selectedLead.details), null, 2) : "No details provided"}
                                </pre>
                            </div>
                        </div>
                        <div className="p-6 bg-[#f8f7f6] flex justify-end">
                            <button
                                onClick={() => setSelectedLead(null)}
                                className="px-6 py-2 bg-[#181611] text-white rounded-lg font-bold"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
