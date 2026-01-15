import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
        datasources: {
            db: {
                url: process.env.DATABASE_URL,
            },
        },
    });

// Handle connection errors gracefully
prisma.$connect().catch((err) => {
    console.error("Failed to connect to database:", err);
});

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
