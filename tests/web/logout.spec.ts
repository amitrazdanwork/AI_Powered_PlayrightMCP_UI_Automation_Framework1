/**
 * Test Case: Logout Feature
 *
 * Tags: @master @sanity @regression @web
 *
 * Steps:
 * 1) Navigate to the application URL
 * 2) Login and log out
 * 3) Verify expected results
 */

// using custom fixtures
import { test, expect } from '../../fixtures/pageFixtures';
import { Helper } from '../../utils/helper';

test.describe('Logout Tests', () => {

    test('LOGOUT_E2E_001 - Login → Logout @master @sanity @regression @web', async ({ homePage, loginPage }) => {
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

        await test.step('3) Verify user is successfully logged out', async () => {
            const logoutLink = homePage.page.getByRole('link', { name: 'Log out' });
            await expect(logoutLink).toBeVisible();

            await logoutLink.click();
            await homePage.page.waitForLoadState('networkidle');

            // Verify logout - should see Register and Login links, not Log out
            const isRegisterVisible = await homePage.page.getByRole('link', { name: 'Register' }).isVisible();
            const isLoginVisible = await homePage.page.getByRole('link', { name: 'Log in' }).isVisible();
            expect(isRegisterVisible).toBeTruthy();
            expect(isLoginVisible).toBeTruthy();
        });

        console.log('✅ LOGOUT_E2E_001 Completed successfully!');
    });

    test('LOGOUT_E2E_002 - Logout → Open My Account @master @sanity @regression @web', async ({ homePage, loginPage, myAccountPage }) => {
        const loginData = Helper.getLoginDetails();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login and then logout', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            const logoutLink = homePage.page.getByRole('link', { name: 'Log out' });
            await expect(logoutLink).toBeVisible();
            await logoutLink.click();
            await homePage.page.waitForLoadState('networkidle');
        });

        await test.step('3) Try to open My Account while logged out', async () => {
            // Try accessing account page directly
            await homePage.page.goto(`${process.env.WEB_APP_URL}/customer/info`);
            await homePage.page.waitForLoadState('networkidle');

            // Should be redirected to login page
            const currentUrl = homePage.page.url();
            expect(currentUrl).toContain('/login');
        });

        console.log('✅ LOGOUT_E2E_002 Completed successfully!');
    });

    test('LOGOUT_E2E_003 - Logout → Attempt checkout @master @sanity @regression @web', async ({ homePage, loginPage, productPage, cartPage }) => {
        const loginData = Helper.getLoginDetails();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login, add product to cart, then logout', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            await homePage.searchProduct('Health Book');
            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();

            const logoutLink = homePage.page.getByRole('link', { name: 'Log out' });
            await expect(logoutLink).toBeVisible();
            await logoutLink.click();
            await homePage.page.waitForLoadState('networkidle');
        });

        await test.step('3) Attempt checkout while logged out', async () => {
            await homePage.clickCart();
            await cartPage.agreeToTerms();

            // Should be redirected to login when trying to checkout
            await cartPage.clickCheckout();

            await homePage.page.waitForLoadState('networkidle');
            const currentUrl = homePage.page.url();
            expect(currentUrl).toContain('/login');
        });

        console.log('✅ LOGOUT_E2E_003 Completed successfully!');
    });

    test('LOGOUT_E2E_004 - Logout → Login again @master @sanity @regression @web', async ({ homePage, loginPage }) => {
        const loginData = Helper.getLoginDetails();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login and then logout', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            const logoutLink = homePage.page.getByRole('link', { name: 'Log out' });
            await expect(logoutLink).toBeVisible();
            await logoutLink.click();
            await homePage.page.waitForLoadState('networkidle');
        });

        await test.step('3) Login again and verify authentication succeeds', async () => {
            await homePage.clickLogin();

            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);
            const isSuccess = await loginPage.isLoginSuccessful();
            expect(isSuccess).toBeTruthy();

            // Verify logged in again
            const logoutLink = homePage.page.getByRole('link', { name: 'Log out' });
            await expect(logoutLink).toBeVisible();
        });

        console.log('✅ LOGOUT_E2E_004 Completed successfully!');
    });

    test('LOGOUT_E2E_005 - Logout and use browser Back @master @sanity @regression @web', async ({ homePage, loginPage }) => {
        const loginData = Helper.getLoginDetails();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login and navigate to account page', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            // Navigate to account page
            await homePage.page.goto(`${process.env.WEB_APP_URL}/customer/info`);
            await homePage.page.waitForLoadState('networkidle');
        });

        await test.step('3) Logout and use browser Back', async () => {
            const logoutLink = homePage.page.getByRole('link', { name: 'Log out' });
            await expect(logoutLink).toBeVisible();
            await logoutLink.click();
            await homePage.page.waitForLoadState('networkidle');

            // Use browser back
            await homePage.page.goBack();
            await homePage.page.waitForLoadState('networkidle');
        });

        await test.step('4) Verify protected user information is not improperly exposed', async () => {
            const currentUrl = homePage.page.url();

            // Should be redirected to login or shown login page, not account page
            if (currentUrl.includes('/customer/')) {
                // If still on customer page, should show login prompt
                const loginButton = homePage.page.getByRole('button', { name: 'Log in' });
                const loginLink = homePage.page.getByRole('link', { name: 'Log in' });
                const isLoginVisible = await loginButton.isVisible() || await loginLink.isVisible();
                expect(isLoginVisible).toBeTruthy();
            } else {
                // Should be on login page or home page
                expect(currentUrl.includes('/login') || currentUrl === process.env.WEB_APP_URL).toBeTruthy();
            }
        });

        console.log('✅ LOGOUT_E2E_005 Completed successfully!');
    });
});