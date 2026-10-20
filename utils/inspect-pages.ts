import { chromium } from '@playwright/test';

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        await page.goto('https://demowebshop.tricentis.com/', { waitUntil: 'networkidle' });
        await page.waitForTimeout(2000);

        // Register and login
        const email = 'testuser' + Date.now() + '@gmail.com';
        await page.goto('https://demowebshop.tricentis.com/register');
        await page.waitForLoadState('networkidle');
        await page.fill('input[name="FirstName"]', 'TestUser');
        await page.fill('input[name="LastName"]', 'Demo');
        await page.fill('input[name="Email"]', email);
        await page.fill('input[name="Password"]', 'password1');
        await page.fill('input[name="ConfirmPassword"]', 'password1');
        await page.click('input[type="submit"][value="Register"]');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(3000);

        // Login
        await page.goto('https://demowebshop.tricentis.com/login');
        await page.getByLabel('Email:').fill(email);
        await page.getByLabel('Password:').fill('password1');
        await page.click('input[type="submit"][value="Log in"]');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(3000);

        console.log('=== LOGIN SUCCESS:', await page.locator('a.ico-logout').count() > 0);

        // Go to customer info
        await page.goto('https://demowebshop.tricentis.com/customer/info', { waitUntil: 'networkidle' });
        await page.waitForTimeout(3000);

        // Save with unchanged values
        await page.click('input[type="submit"][value="Save"]');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(5000);

        // Check all elements that might show notification
        console.log('\n=== After Save - All notification/result elements ===');
        const notifElements = await page.locator('.bar-notification, .message-error, .result, [class*="success"], [class*="alert"]').all();
        console.log('Elements found:', notifElements.length);
        for (const el of notifElements) {
            const cls = await el.getAttribute('class');
            const text = await el.textContent();
            const visible = await el.isVisible();
            console.log(`  class="${cls}" visible=${visible} text="${text?.trim().substring(0,200)}"`);
        }

        // Check what's the first visible text on page
        const allVisibleText = await page.evaluate(() => {
            const elements = document.querySelectorAll('div, p, span');
            const results: {text: string, cls: string}[] = [];
            for (const el of elements) {
                const style = window.getComputedStyle(el);
                if (style.display !== 'none' && style.visibility !== 'hidden') {
                    const text = el.textContent?.trim();
                    if (text && text.length > 0 && text.length < 200) {
                        results.push({text: text, cls: el.className});
                    }
                }
            }
            return results.slice(0, 30);
        });
        console.log('\n=== First 30 visible text elements ===');
        allVisibleText.forEach((e, i) => console.log(`  ${i}: class="${e.cls}" text="${e.text.substring(0, 100)}"`));

        // Check if bar-notification becomes visible after save
        const barClass = await page.locator('#bar-notification').getAttribute('class');
        const barVisible = await page.locator('#bar-notification').isVisible();
        console.log('\nbar-notification class:', barClass, 'visible:', barVisible);

        // Try to find any success message using broader search
        const successText = await page.evaluate(() => {
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
            let node;
            while (node = walker.nextNode()) {
                const text = node.textContent || '';
                if (text.toLowerCase().includes('success') || text.toLowerCase().includes('saved') || text.toLowerCase().includes('updated')) {
                    const style = window.getComputedStyle(node as Element);
                    return {
                        tag: node.tagName,
                        class: (node as Element).className,
                        text: text.trim().substring(0, 200),
                        display: style.display,
                        visibility: style.visibility
                    };
                }
            }
            return null;
        });
        console.log('\nSuccess/saved/updated text found:', JSON.stringify(successText));

        // Check the change password form labels more carefully
        console.log('\n=== CHANGE PASSWORD FORM ===');
        await page.goto('https://demowebshop.tricentis.com/customer/changepassword', { waitUntil: 'networkidle' });
        await page.waitForTimeout(3000);

        // Check the labels and their associated inputs
        const labelInfo = await page.evaluate(() => {
            const results: {label: string, htmlFor: string, inputType: string}[] = [];
            document.querySelectorAll('label').forEach(label => {
                const htmlFor = label.getAttribute('for') || '';
                const associatedInput = htmlFor ? document.getElementById(Math.floor(Math.random() * 100000).toString()) : null;
                results.push({
                    label: label.textContent?.trim() || '',
                    htmlFor: htmlFor,
                    inputType: ''
                });
            });
            return results;
        });
        console.log('Labels:', labelInfo);

        // Check input name attributes
        const passInputs = await page.locator('input[type="password"]').all();
        console.log('Password inputs:');
        for (const input of passInputs) {
            const name = await input.getAttribute('name');
            const id = await input.getAttribute('id');
            const associatedLabel = id ? await page.locator(`label[for="${id}"]`).textContent() : null;
            console.log(`  name="${name}" id="${id}" label="${associatedLabel?.trim()}"`);
        }

        // Test getByLabel for ConfirmNewPassword
        console.log('\n=== getByLabel tests for password fields ===');
        const getByLabelTests = [
            'Old password:',
            'New password:',
            'Confirm password:',
            'Confirm new password:',
            'Confirm Password:',
            'Confirm new Password:',
        ];
        for (const label of getByLabelTests) {
            try {
                const count = await page.getByLabel(label).count();
                if (count > 0) {
                    const name = await page.getByLabel(label).first().getAttribute('name');
                    console.log(`getByLabel("${label}"): count=${count} name="${name}"`);
                } else {
                    console.log(`getByLabel("${label}"): count=0`);
                }
            } catch (e) {
                console.log(`getByLabel("${label}"): ERROR`);
            }
        }

        // Now actually do the change password and check the result
        await page.fill('input[name="OldPassword"]', 'password1');
        await page.fill('input[name="NewPassword"]', 'newpassword456');
        await page.fill('input[name="ConfirmNewPassword"]', 'newpassword456');
        await page.click('input[type="submit"][value="Change password"]');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(5000);

        console.log('\n=== After Change Password ===');
        console.log('URL:', page.url());

        const allElements = await page.locator('.bar-notification, .message-error, .result, [class*="success"], [class*="alert"]').all();
        for (const el of allElements) {
            const cls = await el.getAttribute('class');
            const text = await el.textContent();
            const visible = await el.isVisible();
            console.log(`  class="${cls}" visible=${visible} text="${text?.trim().substring(0,200)}"`);
        }

        // Verify new password works
        console.log('\n=== VERIFY NEW PASSWORD ===');
        await page.goto('https://demowebshop.tricentis.com/login');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000);
        await page.getByLabel('Email:').fill(email);
        await page.getByLabel('Password:').fill('newpassword456');
        await page.click('input[type="submit"][value="Log in"]');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(3000);

        const logoutAfter = await page.locator('a.ico-logout').count();
        console.log('Logout link count with new password:', logoutAfter);

        // Also change password back
        if (logoutAfter > 0) {
            await page.goto('https://demowebshop.tricentis.com/customer/changepassword');
            await page.waitForLoadState('networkidle');
            await page.waitForTimeout(2000);
            await page.fill('input[name="OldPassword"]', 'newpassword456');
            await page.fill('input[name="NewPassword"]', 'password1');
            await page.fill('input[name="ConfirmNewPassword"]', 'password1');
            await page.click('input[type="submit"][value="Change password"]');
            await page.waitForLoadState('networkidle');
            await page.waitForTimeout(3000);
            console.log('Password restored');

            // Now check wishlist link
            console.log('\n=== WISHLIST LINK ===');
            await page.goto('https://demowebshop.tricentis.com/');
            await page.waitForLoadState('networkidle');
            await page.waitForTimeout(2000);

            // Check wishlist links
            const wlLinks = await page.locator('a.ico-wishlist').all();
            console.log('ico-wishlist links:', wlLinks.length);
            for (const link of wlLinks) {
                console.log('  href:', await link.getAttribute('href'), 'text:', (await link.textContent()).trim(), 'class:', await link.getAttribute('class'));
            }

            // Check what getByRole('link', { name: 'Wishlist' }) resolves to
            const wlByRole = await page.getByRole('link', { name: 'Wishlist' }).count();
            console.log('getByRole("link", { name: "Wishlist" }) count:', wlByRole);
            const wlByRoleExact = await page.getByRole('link', { name: 'Wishlist', exact: true }).count();
            console.log('getByRole("link", { name: "Wishlist", exact: true }) count:', wlByRoleExact);
        }

        console.log('\n=== DONE ===');
        console.log('New user email:', email);

    } catch (e) {
        console.error('Error:', e);
    } finally {
        await browser.close();
    }
})();
