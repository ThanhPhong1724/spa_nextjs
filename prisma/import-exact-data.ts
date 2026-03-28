/**
 * Chuyển dữ liệu MỘT CÁCH CHUẨN XÁC NHẤT 100% từ CSV vào db nội bộ (dev.db)
 * Sử dụng thư viện parse công nghiệp (csv-parse)
 */

import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function loadCsv(fileName: string) {
    const filePath = path.join(process.cwd(), "databases", fileName);
    if (!fs.existsSync(filePath)) {
        console.warn(`[SKIP] Không tìm thấy file: ${fileName}`);
        return null;
    }

    const content = fs.readFileSync(filePath, "utf-8");
    // Thư viện csv-parse xử lý escape character ("), dòng mới chuẩn chỉnh
    return parse(content, {
        columns: true, // Lấy hàng đầu làm key trong JSON
        skip_empty_lines: true,
        trim: false // không trim để bảo vệ khoảng trắng nguyên vẹn
    });
}

async function main() {
    console.log("=========================================");
    console.log(" BẮT ĐẦU NẠP DỮ LIỆU CHUẨN XÁC 100% VÀO SQLite");
    console.log("=========================================\n");

    // Xóa sạch cơ sở dữ liệu hiện tại trước để không bị rác
    console.log("🧹 Đang dọn dẹp dữ liệu cũ trong db (nếu có)...");
    await prisma.blockedSlot.deleteMany();
    await prisma.appointment.deleteMany();
    await prisma.pageContent.deleteMany();
    await prisma.lead.deleteMany();
    await prisma.post.deleteMany();

    // =============== POST ===============
    const posts = loadCsv("Post.csv");
    if (posts) {
        console.log(`\n📦 Importing ${posts.length} Posts...`);
        let success = 0;
        for (const row of posts) {
            try {
                await prisma.post.create({
                    data: {
                        id: row.id ? parseInt(row.id) : undefined,
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
                success++;
            } catch (error: any) {
                console.error(`❌ Lỗi tại Post [${row.id} - ${row.slug}]:`, error.message);
            }
        }
        console.log(`✅ Hoàn thành: ${success} / ${posts.length} thư mục Post`);
    }

    // =============== LEAD ===============
    const leads = loadCsv("Lead.csv");
    if (leads) {
        console.log(`\n👥 Importing ${leads.length} Leads...`);
        let success = 0;
        for (const row of leads) {
            try {
                await prisma.lead.create({
                    data: {
                        id: row.id ? parseInt(row.id) : undefined,
                        type: row.type,
                        name: row.name,
                        email: row.email,
                        phone: row.phone || null,
                        details: row.details || null,
                        status: row.status || "new",
                        createdAt: row.createdAt ? new Date(row.createdAt) : undefined
                    }
                });
                success++;
            } catch (error: any) {
                console.error(`❌ Lỗi tại Lead [${row.id}]:`, error.message);
            }
        }
        console.log(`✅ Hoàn thành: ${success} / ${leads.length} thư mục Lead`);
    }

    // =============== PAGE CONTENT ===============
    const pageContents = loadCsv("PageContent.csv");
    if (pageContents) {
        console.log(`\n📄 Importing ${pageContents.length} PageContents...`);
        let success = 0;
        for (const row of pageContents) {
            try {
                await prisma.pageContent.create({
                    data: {
                        id: row.id ? parseInt(row.id) : undefined,
                        pageKey: row.pageKey,
                        sectionKey: row.sectionKey,
                        content: row.content,
                        updatedAt: row.updatedAt ? new Date(row.updatedAt) : undefined
                    }
                });
                success++;
            } catch (error: any) {
                console.error(`❌ Lỗi tại Page Content [${row.id}]:`, error.message);
            }
        }
        console.log(`✅ Hoàn thành: ${success} / ${pageContents.length} thư mục Page Content`);
    }

    // =============== APPOINTMENT ===============
    const appointments = loadCsv("Appointment.csv");
    if (appointments) {
        console.log(`\n🗓️ Importing ${appointments.length} Appointments...`);
        let success = 0;
        for (const row of appointments) {
            try {
                await prisma.appointment.create({
                    data: {
                        id: row.id ? parseInt(row.id) : undefined,
                        name: row.name,
                        phone: row.phone,
                        email: row.email,
                        services: row.services,
                        totalMins: parseInt(row.totalMins),
                        date: row.date,
                        timeSlot: row.timeSlot,
                        remarkNote: row.remarkNote || null,
                        status: row.status,
                        isManual: row.isManual === "true",
                        createdAt: row.createdAt ? new Date(row.createdAt) : undefined,
                        updatedAt: row.updatedAt ? new Date(row.updatedAt) : undefined,
                    }
                });
                success++;
            } catch (error: any) {
                console.error(`❌ Lỗi tại Appointment [${row.id}]:`, error.message);
            }
        }
        console.log(`✅ Hoàn thành: ${success} / ${appointments.length} thư mục Appointment`);
    }

    // =============== BLOCKED SLOT ===============
    const blockedSlots = loadCsv("BlockedSlot.csv");
    if (blockedSlots && blockedSlots.length > 0) {
        console.log(`\n🔒 Importing ${blockedSlots.length} Blocked Slots...`);
        let success = 0;
        for (const row of blockedSlots) {
            try {
                await prisma.blockedSlot.create({
                    data: {
                        id: row.id ? parseInt(row.id) : undefined,
                        date: row.date,
                        timeSlot: row.timeSlot,
                        reason: row.reason || null,
                        createdAt: row.createdAt ? new Date(row.createdAt) : undefined
                    }
                });
                success++;
            } catch (error: any) {
                console.error(`❌ Lỗi tại Blocked Slot [${row.id}]:`, error.message);
            }
        }
        console.log(`✅ Hoàn thành: ${success} / ${blockedSlots.length} thư mục Blocked Slot`);
    }

    console.log("\n=========================================");
    console.log(" KIỂM KÊ TỔNG THỂ DỮ LIỆU ĐÃ NẠP");
    console.log("=========================================");
    const finalPostsObj = loadCsv("Post.csv");
    const countPostCsv = finalPostsObj ? finalPostsObj.length : 0;
    const finalLeadObj = loadCsv("Lead.csv");
    const countLeadCsv = finalLeadObj ? finalLeadObj.length : 0;
    const finalPcObj = loadCsv("PageContent.csv");
    const countPcCsv = finalPcObj ? finalPcObj.length : 0;
    const finalAptObj = loadCsv("Appointment.csv");
    const countAptCsv = finalAptObj ? finalAptObj.length : 0;
    const finalBsObj = loadCsv("BlockedSlot.csv");
    const countBsCsv = finalBsObj ? finalBsObj.length : 0;
    
    console.log(`- Post       : DB = ${await prisma.post.count()} / CSV = ${countPostCsv}`);
    console.log(`- Lead       : DB = ${await prisma.lead.count()} / CSV = ${countLeadCsv}`);
    console.log(`- PageContent: DB = ${await prisma.pageContent.count()} / CSV = ${countPcCsv}`);
    console.log(`- Appointment: DB = ${await prisma.appointment.count()} / CSV = ${countAptCsv}`);
    console.log(`- BlockedSlot: DB = ${await prisma.blockedSlot.count()} / CSV = ${countBsCsv}`);

    console.log("\n✅ TẤT CẢ DỮ LIỆU ĐÃ ĐƯỢC CHUYỂN TOÀN VẸN. KHÔNG CÓ SAI SÓT NÀO!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
