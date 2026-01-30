import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { currentPassword, newPassword } = await request.json();

        // Validate inputs
        if (!currentPassword || !newPassword) {
            return NextResponse.json(
                { error: "Both current and new passwords are required" },
                { status: 400 }
            );
        }

        if (newPassword.length < 6) {
            return NextResponse.json(
                { error: "New password must be at least 6 characters" },
                { status: 400 }
            );
        }

        // Get current password from env
        const adminPass = process.env.ADMIN_PASS || "admin123";

        // Verify current password
        if (currentPassword !== adminPass) {
            return NextResponse.json(
                { error: "Current password is incorrect" },
                { status: 400 }
            );
        }

        // Update the .env file with the new password
        const envPath = path.join(process.cwd(), ".env");
        let envContent = "";

        try {
            envContent = fs.readFileSync(envPath, "utf-8");
        } catch {
            envContent = "";
        }

        // Update or add ADMIN_PASS
        if (envContent.includes("ADMIN_PASS=")) {
            envContent = envContent.replace(
                /ADMIN_PASS=.*/,
                `ADMIN_PASS=${newPassword}`
            );
        } else {
            envContent += `\nADMIN_PASS=${newPassword}`;
        }

        fs.writeFileSync(envPath, envContent);

        // Update the process.env for the current session
        process.env.ADMIN_PASS = newPassword;

        return NextResponse.json({ success: true, message: "Password updated successfully" });
    } catch (error) {
        console.error("Error changing password:", error);
        return NextResponse.json(
            { error: "Failed to change password" },
            { status: 500 }
        );
    }
}
