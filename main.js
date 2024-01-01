const puppeteer = require('puppeteer');
async function main() {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.goto('https://instagram.com');
	await page.locator(`input[aria-label*="username"]`).fill('someUsername');
	await page.type("input[aria-label='Password']", 'somePassword');
	await page.locator('button[type="submit"]').click();
	setTimeout(null, 7000);
}
main();
