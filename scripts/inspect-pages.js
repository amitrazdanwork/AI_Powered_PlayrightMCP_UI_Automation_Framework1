const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://demowebshop.tricentis.com/');
    await page.click('a[href="/login"]');
    await page.fill('label:has-text("Email:") + input', 'umeshkumar1@gmail.com');
    await page.fill('label:has-text("Password:") + input', 'password1');
    await page.click('input[type="submit"][value="Log in"]');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    await page.goto('https://demowebshop.tricentis.com/customer/info');
    await page.waitForLoadState('networkidle');

    console.log('=== ACCOUNT INFO PAGE STRUCTURE ===');

    // Get notification area before save
    const notifBefore = await page.$eval('.bar-notification', el => el.outerHTML).catch(() => 'none');
    console.log('Notification HTML before save:', notifBefore);

    // Save the form
    await page.fill('#FirstName', 'TestFirst');
    await page.fill('#LastName', 'TestLast');
    await page.click('input[type="submit"][value="Save"]');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // Get notification after save
    const notifAfter = await page.$eval('.bar-notification', el => el.outerHTML).catch(() => 'none');
    console.log('\nNotification HTML after save:', notifAfter);

    const notifText = await page.$eval('.bar-notification', el => el.textContent).catch(() => 'none');
    console.log('Notification text:', notifText?.trim());

    // Check for success-specific selectors
    const successNotif = await page.$('.bar-notification.success');
    console.log('Success notification (.bar-notification.success) exists:', !!successNotif);

    const notificationSuccess = await page.$('.notification.success');
    console.log('.notification.success exists:', !!notificationSuccess);

    // Get the page HTML around the notification
    const bodyText = await page.evaluate(() => document.body.innerText);
    const hasSuccessText = bodyText.includes('successfully') || bodyText.includes('updated') || bodyText.includes('saved');
    console.log('Has success-related text in body:', hasSuccessText);

    // Look for the notification by text content
    const allBars = await page.$$('.bar-notification');
    for (let i = 0; i < allBars.length; i++) {
        const text = await allBars[i].textContent();
        const cls = await allBars[i].evaluate(el => el.className);
        const parentClass = await allBars[i].evaluate(el => el.parentElement?.className);
        console.log(`bar-notification[${i}]: text="${text?.trim()}", class="${cls}", parent="${parentClass}"`);
    }

    // Save screenshot for visual inspection
    await page.screenshot({ path: 'scripts/account-after-save.png', fullPage: true });

    await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
