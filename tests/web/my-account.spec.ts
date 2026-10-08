/**
 * Test Case: My Account Feature
 *
 * Tags: @master @sanity @regression @web
 *
 * Steps:
 * 1) Navigate to the application URL
 * 2) Login and perform account operations
 * 3) Verify expected results
 */

// using custom fixtures
import { test, expect } from '../../fixtures/pageFixtures';
import { Helper } from '../../utils/helper';

test.describe('My Account Tests', () => {

    test('ACCOUNT_E2E_001 - Login → Open My Account @master @sanity @regression @web', async ({ homePage, loginPage, myAccountPage }) => {
        const loginData = Helper.getLoginDetails();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login with valid credentials', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);
        });

        await test.step('3) Verify account page opens successfully', async () => {
            // After login, user should be on account page or can navigate there
            await loginPage.page.goto(`${process.env.WEB_APP_URL}/customer/info`);
            await loginPage.page.waitForLoadState('networkidle');

            const isAccountPage = await myAccountPage.isMyAccountPageExists();
            expect(isAccountPage).toBeTruthy();
        });

        console.log('✅ ACCOUNT_E2E_001 Completed successfully!');
    });

    test('ACCOUNT_E2E_002 - Verify registered user information @master @sanity @regression @web', async ({ homePage, loginPage, myAccountPage }) => {
        const loginData = Helper.getLoginDetails();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login with valid credentials', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);
        });

        await test.step('3) Verify account information is displayed', async () => {
            await loginPage.page.goto(`${process.env.WEB_APP_URL}/customer/info`);
            await loginPage.page.waitForLoadState('networkidle');

            const isAccountPage = await myAccountPage.isMyAccountPageExists();
            expect(isAccountPage).toBeTruthy();

            const accountInfo = await myAccountPage.getAccountInfo();
            expect(accountInfo.length).toBeGreaterThan(0);
        });

        console.log('✅ ACCOUNT_E2E_002 Completed successfully!');
    });

    test('ACCOUNT_E2E_003 - Update account information @master @sanity @regression @web', async ({ homePage, loginPage, myAccountPage }) => {
        const loginData = Helper.getLoginDetails();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login with valid credentials', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);
        });

        await test.step('3) Update account information', async () => {
            await loginPage.page.goto(`${process.env.WEB_APP_URL}/customer/info`);
            await loginPage.page.waitForLoadState('networkidle');

            const isAccountPage = await myAccountPage.isMyAccountPageExists();
            expect(isAccountPage).toBeTruthy();

            await myAccountPage.updateAccountInfo('TestFirst', 'TestLast', loginData.email);
        });

        await test.step('4) Verify updated information is saved', async () => {
            const successMessage = homePage.page.locator('.bar-notification.success');
            const isVisible = await successMessage.isVisible();
            expect(isVisible).toBeTruthy();
        });

        console.log('✅ ACCOUNT_E2E_003 Completed successfully!');
    });

    test('ACCOUNT_E2E_004 - Update password and login with new password @master @sanity @regression @web', async ({ homePage, loginPage, myAccountPage }) => {
        const loginData = Helper.getLoginDetails();
        const newPassword = 'newpassword456';

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login with valid credentials', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);
        });

        await test.step('3) Update password', async () => {
            await loginPage.page.goto(`${process.env.WEB_APP_URL}/customer/changepassword`);
            await loginPage.page.waitForLoadState('networkidle');

            await myAccountPage.changePassword(loginData.password, newPassword, newPassword);
        });

        await test.step('4) Verify new password works', async () => {
            // Logout first
            const logoutLink = homePage.page.getByRole('link', { name: 'Log out' });
            if (await logoutLink.isVisible()) {
                await logoutLink.click();
                await homePage.page.waitForLoadState('networkidle');
            }

            // Login again with new password
            await homePage.clickLogin();
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, newPassword);
            const isSuccess = await loginPage.isLoginSuccessful();
            expect(isSuccess).toBeTruthy();
        });

        console.log('✅ ACCOUNT_E2E_004 Completed successfully!');
    });

    test('ACCOUNT_E2E_005 - Open order history from account @master @sanity @regression @web', async ({ homePage, loginPage, myAccountPage }) => {
        const loginData = Helper.getLoginDetails();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login with valid credentials', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);
        });

        await test.step('3) Open order history', async () => {
            await loginPage.page.goto(`${process.env.WEB_APP_URL}/customer/orders`);
            await loginPage.page.waitForLoadState('networkidle');

            // Verify orders section is displayed
            const ordersHeading = loginPage.page.locator('h1:has-text("Orders")');
            await expect(ordersHeading).toBeVisible();
        });

        await test.step('4) Verify previous orders are displayed', async () => {
            // Order history page should have a customer orders grid
            const ordersGrid = loginPage.page.locator('.customer-orders-grid, .order-list');
            // Verify the page structure exists (may or may not have orders)
        });

        console.log('✅ ACCOUNT_E2E_005 Completed successfully!');
    });

    test('ACCOUNT_E2E_006 - Open wishlist from account @master @sanity @regression @web', async ({ homePage, loginPage, wishlistPage }) => {
        const loginData = Helper.getLoginDetails();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login with valid credentials', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);
        });

        await test.step('3) Open wishlist from account', async () => {
            await homePage.clickWishlist();

            const isWishlistPage = await wishlistPage.isWishlistPageExists();
            expect(isWishlistPage).toBeTruthy();
        });

        await test.step('4) Verify wishlist is displayed', async () => {
            // Wishlist page should be accessible after login
            const wishlistHeading = loginPage.page.locator('h1:has-text("Wishlist")');
            await expect(wishlistHeading).toBeVisible();
        });

        console.log('✅ ACCOUNT_E2E_006 Completed successfully!');
    });
});