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
       
        const testData = Helper.getMyAccountData('ACCOUNT_E2E_002');

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login with valid credentials', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(testData.Email, testData.Password);
        });

        await test.step('3) Verify account information is displayed', async () => {
            await loginPage.page.goto(`${process.env.WEB_APP_URL}/customer/info`);
            await loginPage.page.waitForLoadState('networkidle');

            const isAccountPage = await myAccountPage.isMyAccountPageExists();
            expect(isAccountPage).toBeTruthy();

            const selectedGender = await myAccountPage.getAccountSelectedGender();
            const firstName = await myAccountPage.getAccountInfoFirstName();
            const lastName = await myAccountPage.getAccountInfoLastName();
            const email = await myAccountPage.getAccountInfoEmail();

            //Assertions
            expect(firstName).toBe(testData.FirstName);
            expect(lastName).toBe(testData.LastName);
            expect(email).toBe(testData.Email);
            expect(selectedGender).toBe(testData.Gender);
        });

        console.log('✅ ACCOUNT_E2E_002 Completed successfully!');
    });

    test('ACCOUNT_E2E_003 - Update account information @master @sanity @regression @web', async ({ homePage, loginPage, myAccountPage }) => {
        
        const testData = Helper.getMyAccountData('ACCOUNT_E2E_003');

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login with valid credentials', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(testData.Email, testData.Password);
        });

        await test.step('3) Update account information', async () => {
            await loginPage.page.goto(`${process.env.WEB_APP_URL}/customer/info`);
            await loginPage.page.waitForLoadState('networkidle');

            const isAccountPage = await myAccountPage.isMyAccountPageExists();
            expect(isAccountPage).toBeTruthy();

            await myAccountPage.updateAccountInfo('TestFirst', 'TestLast', testData.Email);
        });

        await test.step('4) Verify updated information is saved', async () => {
            //Open the accounts page again to verify the updated information    
            await loginPage.page.goto(`${process.env.WEB_APP_URL}/customer/info`);

            await loginPage.page.waitForLoadState('networkidle');

            const updatedFirstName = await myAccountPage.getAccountInfoFirstName();
            const updatedLastName = await myAccountPage.getAccountInfoLastName();
            const updatedEmail = await myAccountPage.getAccountInfoEmail();

            expect(updatedFirstName).toBe('TestFirst');
            expect(updatedLastName).toBe('TestLast');
            expect(updatedEmail).toBe(testData.Email);
        });

        console.log('✅ ACCOUNT_E2E_003 Completed successfully!');
    });

    test('ACCOUNT_E2E_004 - Update password and login with new password @master @sanity @regression @web', async ({ homePage, loginPage, myAccountPage }) => {
        const testData = Helper.getMyAccountData('ACCOUNT_E2E_004');
        const newPassword = 'newpassword456';

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login with valid credentials', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(testData.Email, testData.Password);
        });

        await test.step('3) Update password', async () => {
            await loginPage.page.goto(`${process.env.WEB_APP_URL}/customer/changepassword`);
            await loginPage.page.waitForLoadState('networkidle');

            await myAccountPage.changePassword(testData.Password, newPassword, newPassword);
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

            await loginPage.login(testData.Email, newPassword);
            const isSuccess = await loginPage.isLoginSuccessful();
            expect(isSuccess).toBeTruthy();
        });

        console.log('✅ ACCOUNT_E2E_004 Completed successfully!');

        await test.step('5) Update password again to old', async () => {
            await loginPage.page.goto(`${process.env.WEB_APP_URL}/customer/changepassword`);
            await loginPage.page.waitForLoadState('networkidle');

            await myAccountPage.changePassword(newPassword, testData.Password, testData.Password);
        });

    });

    test('ACCOUNT_E2E_005 - Open order history from account @master @sanity @regression @web', async ({ homePage, loginPage, myAccountPage, productPage, cartPage, checkoutPage }) => {
        const loginData = Helper.getLoginDetails();
        const billingData = Helper.getBillingAddress();
        let orderNumber: string;

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

        await test.step('3) Add a product and place an order', async () => {
            await homePage.searchProduct('Health Book');

            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();

            await homePage.clickCart();
            await cartPage.agreeToTerms();
            await cartPage.clickCheckout();

            await checkoutPage.fillBillingAddress(billingData);
            await checkoutPage.clickBillingContinue();
            await checkoutPage.clickShippingContinue();
            await checkoutPage.clickShippingMethodContinue();
            await checkoutPage.clickPaymentMethodContinue();
            await checkoutPage.clickPaymentInfoContinue();
            await checkoutPage.clickConfirmOrder();

            const isConfirmed = await checkoutPage.isOrderConfirmed();
            expect(isConfirmed).toBeTruthy();

            orderNumber = await checkoutPage.getOrderNumber();
            expect(orderNumber.length).toBeGreaterThan(0);
        });

        await test.step('4) Open order history and verify the new order appears', async () => {
            await loginPage.page.goto(`${process.env.WEB_APP_URL}/customer/orders`);
            await loginPage.page.waitForLoadState('networkidle');

            // Verify orders section is displayed
            const ordersHeading = loginPage.page.locator('h1:has-text("Orders")');
            await expect(ordersHeading).toBeVisible();

            // Verify the newly placed order appears in the order history
            const orderFound = await myAccountPage.orderExists(orderNumber);
            expect(orderFound).toBeTruthy();
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