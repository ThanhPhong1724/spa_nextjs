"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await signIn("credentials", {
            username,
            password,
            redirect: false,
        });

        if (res?.error) {
            setError("Invalid credentials");
        } else {
            router.push("/admin");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8f7f6]">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-[#e6e2db]">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-[#181611]">Admin Login</h1>
                    <p className="text-[#897d61]">Smiling Studio Dashboard</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-[#181611] mb-1">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-[#e6e2db]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-[#181611] mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-[#e6e2db]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#181611] text-white py-3 rounded-xl font-bold hover:bg-[#333]"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
