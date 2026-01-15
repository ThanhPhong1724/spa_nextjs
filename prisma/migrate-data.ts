import { PrismaClient as PostgresClient } from "@prisma/client";
import Database from "better-sqlite3";

// Connect to old SQLite database
const sqliteDb = new Database("./prisma/dev.db");

// Connect to new PostgreSQL database
const postgresClient = new PostgresClient();

async function migrateData() {
    console.log("🚀 Starting data migration from SQLite to PostgreSQL...\n");

    try {
        // Migrate Posts
        console.log("📝 Migrating Posts...");
        const posts = sqliteDb.prepare("SELECT * FROM Post").all() as any[];
        for (const post of posts) {
            await postgresClient.post.upsert({
                where: { slug: post.slug },
                update: {},
                create: {
                    title: post.title,
                    titleEn: post.titleEn,
                    titleVi: post.titleVi,
                    slug: post.slug,
                    content: post.content,
                    contentEn: post.contentEn,
                    image: post.image,
                    category: post.category,
                    author: post.author,
                    status: post.status || "published",
                    createdAt: new Date(post.createdAt),
                    updatedAt: new Date(post.updatedAt),
                },
            });
            console.log(`  ✅ Post: ${post.title}`);
        }
        console.log(`  Total: ${posts.length} posts migrated\n`);

        // Migrate Leads
        console.log("📧 Migrating Leads...");
        const leads = sqliteDb.prepare("SELECT * FROM Lead").all() as any[];
        for (const lead of leads) {
            await postgresClient.lead.create({
                data: {
                    type: lead.type,
                    name: lead.name,
                    email: lead.email,
                    phone: lead.phone,
                    details: lead.details,
                    status: lead.status || "new",
                    createdAt: new Date(lead.createdAt),
                },
            });
            console.log(`  ✅ Lead: ${lead.name}`);
        }
        console.log(`  Total: ${leads.length} leads migrated\n`);

        // Migrate PageContent
        console.log("📄 Migrating PageContent...");
        const pageContents = sqliteDb.prepare("SELECT * FROM PageContent").all() as any[];
        for (const pc of pageContents) {
            await postgresClient.pageContent.upsert({
                where: {
                    pageKey_sectionKey: {
                        pageKey: pc.pageKey,
                        sectionKey: pc.sectionKey,
                    },
                },
                update: {
                    content: pc.content,
                    updatedAt: new Date(pc.updatedAt),
                },
                create: {
                    pageKey: pc.pageKey,
                    sectionKey: pc.sectionKey,
                    content: pc.content,
                    updatedAt: new Date(pc.updatedAt),
                },
            });
            console.log(`  ✅ PageContent: ${pc.pageKey}/${pc.sectionKey}`);
        }
        console.log(`  Total: ${pageContents.length} page contents migrated\n`);

        console.log("🎉 Migration completed successfully!");

    } catch (error) {
        console.error("❌ Migration failed:", error);
    } finally {
        sqliteDb.close();
        await postgresClient.$disconnect();
    }
}

migrateData();
