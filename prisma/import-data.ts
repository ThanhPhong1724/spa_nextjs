/**
 * Script: import-data.ts
 * Nhập dữ liệu từ CSV sang DB thông qua PrismaClient
 * Chạy: npx tsx prisma/import-data.ts
 */

import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

function parseCSV(filePath: string): Record<string, string>[] {
    const content = fs.readFileSync(filePath, "utf-8");
    const rows: Record<string, string>[] = [];
    
    let i = 0;
    const len = content.length;
    
    function parseField() {
        if (content[i] === '"') {
            i++;
            let field = "";
            while (i < len) {
                if (content[i] === '"' && content[i + 1] === '"') {
                    field += '"';
                    i += 2;
                } else if (content[i] === '"') {
                    i++;
                    break;
                } else {
                    field += content[i];
                    i++;
                }
            }
            return field;
        } else {
            let field = "";
            while (i < len && content[i] !== ',' && content[i] !== '\n' && content[i] !== '\r') {
                field += content[i];
                i++;
            }
            return field;
        }
    }
    
    function parseLine() {
        if (i >= len) return null;
        const fields: string[] = [];
        while (i < len) {
            fields.push(parseField());
            if (i < len && content[i] === ',') {
                i++;
            } else {
                if (content[i] === '\r') i++;
                if (content[i] === '\n') i++;
                break;
            }
        }
        return fields.length > 0 ? fields : null;
    }
    
    const header = parseLine();
    if (!header) return rows;
    
    while (i < len) {
        if (content[i] === '\r' || content[i] === '\n') {
            if (content[i] === '\r') i++;
            if (content[i] === '\n') i++;
            continue;
        }
        const fields = parseLine();
        if (!fields) break;
        const row: Record<string, string> = {};
        header.forEach((h: string, idx: number) => {
            row[h] = fields[idx] ?? "";
        });
        rows.push(row);
    }
    
    return rows;
}

async function main() {
    console.log("🚀 Bắt đầu import dữ liệu từ CSV bằng PrismaClient...");

    // ─── Import Post ───
    const postCsvPath = path.join(process.cwd(), "databases", "Post.csv");
    if (fs.existsSync(postCsvPath)) {
        console.log("\n📝 Importing Posts...");
        const posts = parseCSV(postCsvPath);
        
        let count = 0;
        for (const row of posts) {
            try {
                await prisma.post.upsert({
                    where: { id: parseInt(row.id) || 0 },
                    update: {
                        title: row.title,
                        titleEn: row.titleEn || null,
                        titleVi: row.titleVi || null,
                        slug: row.slug,
                        content: row.content,
                        contentEn: row.contentEn || null,
                        image: row.image || null,
                        category: row.category,
                        author: row.author,
                        status: row.status || "published",
                        createdAt: row.createdAt ? new Date(row.createdAt) : undefined,
                        updatedAt: row.updatedAt ? new Date(row.updatedAt) : undefined,
                        pdfUrl: row.pdfUrl || null,
                        videoUrl: row.videoUrl || null,
                        infomaterialEnabled: row.infomaterialEnabled === "true",
                        infomaterialLabel: row.infomaterialLabel || null,
                        infomaterialSection: row.infomaterialSection || null
                    },
                    create: {
                        id: parseInt(row.id) || undefined,
                        title: row.title,
                        titleEn: row.titleEn || null,
                        titleVi: row.titleVi || null,
                        slug: row.slug,
                        content: row.content,
                        contentEn: row.contentEn || null,
                        image: row.image || null,
                        category: row.category,
                        author: row.author,
                        status: row.status || "published",
                        createdAt: row.createdAt ? new Date(row.createdAt) : undefined,
                        updatedAt: row.updatedAt ? new Date(row.updatedAt) : undefined,
                        pdfUrl: row.pdfUrl || null,
                        videoUrl: row.videoUrl || null,
                        infomaterialEnabled: row.infomaterialEnabled === "true",
                        infomaterialLabel: row.infomaterialLabel || null,
                        infomaterialSection: row.infomaterialSection || null
                    }
                });
                count++;
            } catch (e: any) {
                console.error(`  ❌ Lỗi post id="${row.id}" slug="${row.slug}": ${e.message}`);
            }
        }
        console.log(`  ✅ ${count}/${posts.length} posts đã import`);
    }

    // ─── Import Lead ───
    const leadCsvPath = path.join(process.cwd(), "databases", "Lead.csv");
    if (fs.existsSync(leadCsvPath)) {
        console.log("\n📧 Importing Leads...");
        const leads = parseCSV(leadCsvPath);
        
        await prisma.lead.deleteMany({});
        
        let count = 0;
        for (const row of leads) {
            try {
                await prisma.lead.create({
                    data: {
                        id: parseInt(row.id) || undefined,
                        type: row.type || "contact",
                        name: row.name || "Unknown",
                        email: row.email || "unknown@example.com",
                        phone: row.phone || null,
                        details: row.details || null,
                        status: row.status || "new",
                        createdAt: row.createdAt ? new Date(row.createdAt) : undefined,
                    }
                });
                count++;
            } catch (e: any) {
                console.error(`  ❌ Lỗi lead id="${row.id}": ${e.message}`);
            }
        }
        console.log(`  ✅ ${count}/${leads.length} leads đã import`);
    }

    // ─── Import PageContent ───
    const pageContentCsvPath = path.join(process.cwd(), "databases", "PageContent.csv");
    if (fs.existsSync(pageContentCsvPath)) {
        console.log("\n📄 Importing PageContent...");
        const pageContents = parseCSV(pageContentCsvPath);
        
        let count = 0;
        for (const row of pageContents) {
            try {
                await prisma.pageContent.upsert({
                    where: {
                        pageKey_sectionKey: {
                            pageKey: row.pageKey,
                            sectionKey: row.sectionKey
                        }
                    },
                    update: {
                        content: row.content,
                        updatedAt: row.updatedAt ? new Date(row.updatedAt) : undefined
                    },
                    create: {
                        id: parseInt(row.id) || undefined,
                        pageKey: row.pageKey,
                        sectionKey: row.sectionKey,
                        content: row.content || "{}",
                        updatedAt: row.updatedAt ? new Date(row.updatedAt) : undefined
                    }
                });
                count++;
            } catch (e: any) {
                console.error(`  ❌ Lỗi PageContent id="${row.id}": ${e.message}`);
            }
        }
        console.log(`  ✅ ${count}/${pageContents.length} page contents đã import`);
    }

    // ─── Import Appointment ───
    const appointmentCsvPath = path.join(process.cwd(), "databases", "Appointment.csv");
    if (fs.existsSync(appointmentCsvPath)) {
        console.log("\n📅 Importing Appointments...");
        const appointments = parseCSV(appointmentCsvPath);
        
        let count = 0;
        for (const row of appointments) {
            try {
                await prisma.appointment.upsert({
                    where: { id: parseInt(row.id) || 0 },
                    update: {
                        name: row.name,
                        phone: row.phone,
                        email: row.email,
                        services: row.services,
                        totalMins: parseInt(row.totalMins) || 0,
                        date: row.date,
                        timeSlot: row.timeSlot,
                        remarkNote: row.remarkNote || null,
                        status: row.status,
                        isManual: row.isManual === "true",
                        updatedAt: row.updatedAt ? new Date(row.updatedAt) : undefined
                    },
                    create: {
                        id: parseInt(row.id) || undefined,
                        name: row.name || "Unknown",
                        phone: row.phone || "000",
                        email: row.email || "test@example.com",
                        services: row.services || "[]",
                        totalMins: parseInt(row.totalMins) || 0,
                        date: row.date || "2000-01-01",
                        timeSlot: row.timeSlot || "00:00",
                        remarkNote: row.remarkNote || null,
                        status: row.status || "confirmed",
                        isManual: row.isManual === "true",
                        createdAt: row.createdAt ? new Date(row.createdAt) : undefined,
                        updatedAt: row.updatedAt ? new Date(row.updatedAt) : undefined
                    }
                });
                count++;
            } catch (e: any) {
                console.error(`  ❌ Lỗi appointment id="${row.id}": ${e.message}`);
            }
        }
        console.log(`  ✅ ${count}/${appointments.length} appointments đã import`);
    }

    // ─── Import BlockedSlot ───
    const blockedSlotCsvPath = path.join(process.cwd(), "databases", "BlockedSlot.csv");
    if (fs.existsSync(blockedSlotCsvPath)) {
        const rawContent = fs.readFileSync(blockedSlotCsvPath, "utf-8").trim();
        if (rawContent.length > 5) {
            console.log("\n🚫 Importing BlockedSlots...");
            const blockedSlots = parseCSV(blockedSlotCsvPath);
            
            let count = 0;
            for (const row of blockedSlots) {
                try {
                    // Cố gắng check xem tồn tại chưa (vì Prisma BlockedSlot không có unique text, chỉ id)
                    const existing = parseInt(row.id) ? await prisma.blockedSlot.findUnique({ where: { id: parseInt(row.id) } }) : null;
                    if (!existing) {
                        await prisma.blockedSlot.create({
                            data: {
                                id: parseInt(row.id) || undefined,
                                date: row.date,
                                timeSlot: row.timeSlot,
                                reason: row.reason || null,
                                createdAt: row.createdAt ? new Date(row.createdAt) : undefined
                            }
                        });
                        count++;
                    }
                } catch (e: any) {
                    console.error(`  ❌ Lỗi blockedSlot id="${row.id}": ${e.message}`);
                }
            }
            console.log(`  ✅ ${count}/${blockedSlots.length} blocked slots đã import`);
        }
    }

    console.log("\n📊 Thống kê database sau khi import:");
    console.log(`  ✅ Post:         ${await prisma.post.count()} records`);
    console.log(`  ✅ Lead:         ${await prisma.lead.count()} records`);
    console.log(`  ✅ PageContent:  ${await prisma.pageContent.count()} records`);
    console.log(`  ✅ Appointment:  ${await prisma.appointment.count()} records`);
    console.log(`  ✅ BlockedSlot:  ${await prisma.blockedSlot.count()} records`);
    
    await prisma.$disconnect();
    console.log("\n🎉 Import hoàn tất!");
}

main().catch(e => {
    console.error(e);
    process.exit(1);
});
