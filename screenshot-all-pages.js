const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Helper function to wait
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// All public pages to screenshot (excluding admin pages)
const pages = [
    { name: '01_home', url: '/', extraDelay: 5000 },  // Home needs more time for video
    { name: '02_leistungen', url: '/leistungen', extraDelay: 2000 },
    { name: '03_headspa', url: '/leistungen/headspa', extraDelay: 2000 },
    { name: '04_permanent_makeup', url: '/leistungen/permanent-makeup', extraDelay: 2000 },
    { name: '05_nails', url: '/leistungen/nails', extraDelay: 2000 },
    { name: '06_wimpern', url: '/leistungen/wimpern', extraDelay: 2000 },
    { name: '07_augenbrauen', url: '/leistungen/augenbrauen', extraDelay: 2000 },
    { name: '08_price_list', url: '/price-list', extraDelay: 2000 },
    { name: '09_news', url: '/news', extraDelay: 2000 },
    { name: '10_angebote', url: '/angebote', extraDelay: 2000 },
    { name: '11_gutschein', url: '/gutschein', extraDelay: 2000 },
    { name: '12_impressum', url: '/impressum', extraDelay: 2000 },
    { name: '13_agb', url: '/agb', extraDelay: 2000 },
    { name: '14_datenschutz', url: '/datenschutz', extraDelay: 2000 },
];

const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = path.join(__dirname, 'pictures');

async function captureScreenshots() {
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log('🚀 Starting Puppeteer browser...');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Set viewport to desktop size
    await page.setViewport({ width: 1920, height: 1080 });

    for (const pageInfo of pages) {
        const url = BASE_URL + pageInfo.url;
        const outputPath = path.join(OUTPUT_DIR, `${pageInfo.name}.png`);

        console.log(`📸 Capturing: ${pageInfo.name} (${url})`);

        try {
            // Navigate to page
            await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

            // Initial wait for page to render
            console.log(`   ⏳ Waiting ${pageInfo.extraDelay}ms for page to fully render...`);
            await delay(pageInfo.extraDelay);

            // Hide cookie banner FIRST before scrolling
            await page.evaluate(() => {
                // Hide cookie banner
                const cookieBanners = document.querySelectorAll('[class*="cookie"], [class*="Cookie"], [id*="cookie"], [id*="Cookie"]');
                cookieBanners.forEach(el => el.style.display = 'none');

                // Also look for any fixed bottom elements
                const fixedElements = document.querySelectorAll('.fixed, [style*="fixed"]');
                fixedElements.forEach(el => {
                    if (el.classList.contains('cookie') || el.innerText?.includes('Cookie')) {
                        el.style.display = 'none';
                    }
                });
            });

            // Click accept cookie button if visible
            try {
                const cookieButton = await page.$('button:has-text("Zustimmen"), button:has-text("Akzeptieren"), button:has-text("Accept")');
                if (cookieButton) {
                    await cookieButton.click();
                    await delay(500);
                }
            } catch (e) {
                // Cookie button not found, continue
            }

            // Scroll to bottom slowly to trigger lazy loading
            console.log(`   ⬇️ Scrolling to load all images...`);
            await page.evaluate(async () => {
                await new Promise((resolve) => {
                    let totalHeight = 0;
                    const distance = 300;
                    const timer = setInterval(() => {
                        const scrollHeight = document.body.scrollHeight;
                        window.scrollBy(0, distance);
                        totalHeight += distance;
                        if (totalHeight >= scrollHeight) {
                            clearInterval(timer);
                            resolve();
                        }
                    }, 100);
                });
            });

            // Wait extra time for images to load after scroll
            console.log(`   ⏳ Waiting for images to load...`);
            await delay(3000);

            // Scroll back to top
            await page.evaluate(() => window.scrollTo(0, 0));
            await delay(1000);

            // Hide fixed header for cleaner screenshot (optional - make it relative)
            await page.evaluate(() => {
                const header = document.querySelector('header');
                if (header) {
                    header.style.position = 'absolute';
                }
                // Final pass to hide any remaining cookie elements
                const allElements = document.querySelectorAll('*');
                allElements.forEach(el => {
                    if (el.innerText && el.innerText.includes('Diese Webseite verwendet Cookies')) {
                        el.style.display = 'none';
                    }
                });
            });

            await delay(500);

            // Take full page screenshot
            await page.screenshot({
                path: outputPath,
                fullPage: true
            });

            console.log(`   ✅ Saved: ${outputPath}`);

        } catch (error) {
            console.error(`   ❌ Error capturing ${pageInfo.name}: ${error.message}`);
        }
    }

    await browser.close();
    console.log('\n🎉 All screenshots captured successfully!');
    console.log(`📁 Output directory: ${OUTPUT_DIR}`);
}

captureScreenshots().catch(console.error);
