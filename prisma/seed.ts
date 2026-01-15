import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create sample posts one by one (SQLite doesn't support createMany well)
  const post1 = await prisma.post.upsert({
    where: { slug: "5-benefits-head-spa" },
    update: {},
    create: {
      title: "5 Benefits of Regular Head Spa Treatments",
      titleVi: "5 Lợi Ích Của Liệu Pháp Gội Đầu Thường Xuyên",
      slug: "5-benefits-head-spa",
      content: `<p>Head spa treatments have gained immense popularity recently, and for good reason.</p><h3>1. Deep Cleansing & Detox</h3><p>Daily shampooing often fails to remove deep-seated dirt.</p><h3>2. Stress Relief</h3><p>The scalp is full of nerve endings.</p>`,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5L1XMRhGyqkLe9w93z2lfpS20_-10dMjAq2d7_p_KXP_uowNlwMIgiNKS7wMYRSn9ZLdv4UPzqUBbSaWODwsjSNdo2y6tt_Fb0VGH-BnW5tSupDIUemp5nbORKdIyotuODxLGRzHWJGW_3XCL9t-PM_lc5SkL69JI_UyBMPNZbRytaUBYkl6CxuypmgIISXOeBuRcM_Va7dDfRy4kODNapeDW4Tg8E14e37hH-zTxfbBDQQ89gR9N8hXc0YkstWL7hUHpcd3AImdH",
      category: "Wellness",
      author: "Dr. Linh Nguyen",
      status: "published"
    }
  });
  console.log(`✅ Created post: ${post1.title}`);

  const post2 = await prisma.post.upsert({
    where: { slug: "lash-extensions-care" },
    update: {},
    create: {
      title: "How to Care for Your Lash Extensions",
      titleVi: "Cách Chăm Sóc Mi Nối",
      slug: "lash-extensions-care",
      content: `<p>Lash extensions are a beautiful investment.</p><h3>Do NOT get them wet for 24-48 hours</h3><p>The adhesive needs time to fully cure.</p>`,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjuLHlgBVB9x4izQgrpt0_hichS1o5PuENv9-aFcv5wJkmzuFq4FWbnCMJLOgGWQ7N3Nv0EG_ufM0DBfJQeb59iJoTpMBXqd6CC05PRk83jFoe6cTsBca6Nj02WHLK3V7ouWSXH3LALIF9op7usOp9Yaw4AjygZC4aDxTE3f23Aet7IGkzY848URay3HKOs9tyCtVxi1FFoN-CVOTMckwDsuly_u_E55CsuaYUjNe95OxZoAaCpPjnq7Af_8hD-CRUPisAJhx6kIfx",
      category: "Beauty Tips",
      author: "Mai Tran",
      status: "published"
    }
  });
  console.log(`✅ Created post: ${post2.title}`);

  const post3 = await prisma.post.upsert({
    where: { slug: "vietnamese-nail-design" },
    update: {},
    create: {
      title: "The Art of Vietnamese Nail Design",
      titleVi: "Nghệ Thuật Thiết Kế Móng Việt Nam",
      slug: "vietnamese-nail-design",
      content: "<p>Vietnamese nail artists are renowned worldwide for their intricate designs and precision.</p>",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLcc3Kxc4JRsQvxTo1Tm0ei8ND7SKY-hxbkMyHoVHcV6hglomzb0NvKwBNNcSfZTItqV0kvqy2Jt0b2C7HrOIgasC18azyCqDoawn8PhB6zo73siA9DeVRBTEYNKGLnD4waRUctN8hTCj80rFy3BdbC8XWwuj3k0OYg7VKiNkdcRuA9KqFy5aYzWQ7OzcgPEUprcwHnwue--iUxUPq5Tl5pCg6DKLLiT8NryhKF-upECHMH99BLXJiP5FScRoK-4VqcqZxxFofkVpr",
      category: "Trends",
      author: "Hana Le",
      status: "published"
    }
  });
  console.log(`✅ Created post: ${post3.title}`);

  // Create sample leads
  const lead1 = await prisma.lead.create({
    data: {
      type: "consultation",
      name: "Nguyen Van A",
      email: "nguyenvana@gmail.com",
      phone: "0901234567",
      details: JSON.stringify({ message: "Tôi muốn tư vấn về dịch vụ Head Spa" }),
      status: "new"
    }
  });
  console.log(`✅ Created lead: ${lead1.name}`);

  const lead2 = await prisma.lead.create({
    data: {
      type: "contact",
      name: "Tran Thi B",
      email: "tranthib@gmail.com",
      phone: "0912345678",
      details: JSON.stringify({ service: "Eyelash Extensions", date: "2026-01-15", time: "10:00" }),
      status: "read"
    }
  });
  console.log(`✅ Created lead: ${lead2.name}`);

  console.log('🎉 Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
