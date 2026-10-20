const { chromium } = require('@playwright/test');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://demowebshop.tricentis.com/register');
    await page.waitForLoadState('networkidle');
    const email = 'testuser' + Date.now() + '@gmail.com';
    const pass = 'password1';
    await page.fill('input[name="FirstName"]', 'TestUser');
    await page.fill('input[name="LastName"]', 'Demo');
    await page.fill('input[name="Email"]', email);
    await page.fill('input[name="Password"]', pass);
    await page.fill('input[name="ConfirmPassword"]', pass);
    await page.click('input[type="submit"][value="Register"]');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    console.log('REGISTRATION DONE');
    console.log('Email:', email);
    console.log('URL:', page.url());
    await browser.close();
})();
