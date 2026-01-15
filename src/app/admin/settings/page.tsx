"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { useToast } from "@/components/Toast";

export default function ChangePasswordPage() {
    const { showToast } = useToast();
    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Validation
        if (formData.newPassword !== formData.confirmPassword) {
            showToast("New passwords do not match", "error");
            setIsLoading(false);
            return;
        }

        if (formData.newPassword.length < 6) {
            showToast("New password must be at least 6 characters", "error");
            setIsLoading(false);
            return;
        }

        try {
            const res = await fetch("/api/admin/change-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    currentPassword: formData.currentPassword,
                    newPassword: formData.newPassword,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to change password");
            }

            showToast("Password changed successfully! Redirecting to login...", "success");
            setFormData({ currentPassword: "", newPassword: "", confirmPassword: "" });

            // Sign out after 2 seconds
            setTimeout(() => {
                signOut({ callbackUrl: "/admin/login" });
            }, 2000);
        } catch (error: any) {
            showToast(error.message, "error");
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#181611]">Settings</h1>
                <p className="text-[#897d61]">Manage your admin account</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[#e6e2db] p-8">
                <h2 className="text-lg font-bold text-[#181611] mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#eeb32b]">lock</span>
                    Change Password
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-[#181611] mb-2">
                            Current Password
                        </label>
                        <input
                            type="password"
                            value={formData.currentPassword}
                            onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#e6e2db] focus:border-[#eeb32b] outline-none"
                            placeholder="Enter current password"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-[#181611] mb-2">
                            New Password
                        </label>
                        <input
                            type="password"
                            value={formData.newPassword}
                            onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                            required
                            minLength={6}
                            className="w-full px-4 py-3 rounded-xl border border-[#e6e2db] focus:border-[#eeb32b] outline-none"
                            placeholder="Enter new password (min 6 characters)"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-[#181611] mb-2">
                            Confirm New Password
                        </label>
                        <input
                            type="password"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#e6e2db] focus:border-[#eeb32b] outline-none"
                            placeholder="Confirm new password"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#181611] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#333] disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                        {isLoading ? "Updating..." : "Update Password"}
                        <span className="material-symbols-outlined">lock</span>
                    </button>
                </form>

                <div className="mt-6 pt-6 border-t border-[#f4f3f0]">
                    <p className="text-xs text-[#897d61]">
                        <strong>Note:</strong> After changing your password, you will be automatically signed out
                        and redirected to the login page.
                    </p>
                </div>
            </div>
        </div>
    );
}
