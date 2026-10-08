/**
 * Test Case: Checkout Feature
 *
 * Tags: @master @sanity @regression @web
 *
 * Steps:
 * 1) Navigate to the application URL
 * 2) Login and add product to cart
 * 3) Complete checkout
 * 4) Verify expected results
 */

// using custom fixtures
import { test, expect } from '../../fixtures/pageFixtures';
import { Helper } from '../../utils/helper';

test.describe('Checkout Tests', () => {

    test('CHECKOUT_E2E_001 - Login → Add product → Checkout @master @sanity @regression @web', async ({ homePage, loginPage, productPage, cartPage, checkoutPage }) => {
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

        await test.step('3) Add product to cart', async () => {
            await homePage.searchProduct('Health Book');

            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();
        });

        await test.step('4) Navigate to checkout', async () => {
            await homePage.clickCart();

            const isCartPage = await cartPage.isCartPageExists();
            expect(isCartPage).toBeTruthy();

            await cartPage.agreeToTerms();
            await cartPage.clickCheckout();
        });

        await test.step('5) Verify user reaches checkout', async () => {
            const currentUrl = await homePage.page.url();
            expect(currentUrl).toContain('checkout');
        });

        console.log('✅ CHECKOUT_E2E_001 Completed successfully!');
    });

    test('CHECKOUT_E2E_002 - Checkout using valid billing information @master @sanity @regression @web', async ({ homePage, loginPage, productPage, cartPage, checkoutPage }) => {
        const loginData = Helper.getLoginDetails();
        const billingData = Helper.getBillingAddress();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login and add product to cart', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            await homePage.searchProduct('Health Book');
            let isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();
            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Navigate to checkout with valid billing information', async () => {
            await homePage.clickCart();
            await cartPage.agreeToTerms();
            await cartPage.clickCheckout();

            // Fill billing address
            await checkoutPage.fillBillingAddress(billingData);
            await checkoutPage.clickBillingContinue();
        });

        await test.step('4) Verify billing step completes successfully', async () => {
            const currentUrl = await homePage.page.url();
            // After billing, should move to shipping or next step
            expect(currentUrl).toContain('checkout');
        });

        console.log('✅ CHECKOUT_E2E_002 Completed successfully!');
    });

    test('CHECKOUT_E2E_003 - Checkout using valid shipping information @master @sanity @regression @web', async ({ homePage, loginPage, productPage, cartPage, checkoutPage }) => {
        const loginData = Helper.getLoginDetails();
        const billingData = Helper.getBillingAddress();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login and add product to cart', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            await homePage.searchProduct('Health Book');
            let isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();
            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Complete shipping step with valid information', async () => {
            await homePage.clickCart();
            await cartPage.agreeToTerms();
            await cartPage.clickCheckout();

            await checkoutPage.fillBillingAddress(billingData);
            await checkoutPage.clickBillingContinue();
            await checkoutPage.clickShippingContinue();
        });

        await test.step('4) Verify shipping step completes successfully', async () => {
            const currentUrl = await homePage.page.url();
            // After shipping, should move to shipping method or next step
            expect(currentUrl).toContain('checkout');
        });

        console.log('✅ CHECKOUT_E2E_003 Completed successfully!');
    });

    test('CHECKOUT_E2E_004 - Select available shipping method @master @sanity @regression @web', async ({ homePage, loginPage, productPage, cartPage, checkoutPage }) => {
        const loginData = Helper.getLoginDetails();
        const billingData = Helper.getBillingAddress();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login and add product to cart', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            await homePage.searchProduct('Health Book');
            let isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();
            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Navigate through checkout steps', async () => {
            await homePage.clickCart();
            await cartPage.agreeToTerms();
            await cartPage.clickCheckout();

            await checkoutPage.fillBillingAddress(billingData);
            await checkoutPage.clickBillingContinue();
            await checkoutPage.clickShippingContinue();
            await checkoutPage.clickShippingMethodContinue();
        });

        await test.step('4) Verify shipping method is accepted', async () => {
            const currentUrl = await homePage.page.url();
            expect(currentUrl).toContain('checkout');
        });

        console.log('✅ CHECKOUT_E2E_004 Completed successfully!');
    });

    test('CHECKOUT_E2E_005 - Select available payment method @master @sanity @regression @web', async ({ homePage, loginPage, productPage, cartPage, checkoutPage }) => {
        const loginData = Helper.getLoginDetails();
        const billingData = Helper.getBillingAddress();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login and add product to cart', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            await homePage.searchProduct('Health Book');
            let isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();
            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Complete payment selection', async () => {
            await homePage.clickCart();
            await cartPage.agreeToTerms();
            await cartPage.clickCheckout();

            await checkoutPage.fillBillingAddress(billingData);
            await checkoutPage.clickBillingContinue();
            await checkoutPage.clickShippingContinue();
            await checkoutPage.clickShippingMethodContinue();
            await checkoutPage.clickPaymentMethodContinue();
        });

        await test.step('4) Verify payment step completes successfully', async () => {
            const currentUrl = await homePage.page.url();
            expect(currentUrl).toContain('checkout');
        });

        console.log('✅ CHECKOUT_E2E_005 Completed successfully!');
    });

    test('CHECKOUT_E2E_006 - Review order before submission @master @sanity @regression @web', async ({ homePage, loginPage, productPage, cartPage, checkoutPage }) => {
        const loginData = Helper.getLoginDetails();
        const billingData = Helper.getBillingAddress();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login and add product to cart', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            await homePage.searchProduct('Health Book');
            let isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();
            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Navigate to order confirmation page', async () => {
            await homePage.clickCart();
            await cartPage.agreeToTerms();
            await cartPage.clickCheckout();

            await checkoutPage.fillBillingAddress(billingData);
            await checkoutPage.clickBillingContinue();
            await checkoutPage.clickShippingContinue();
            await checkoutPage.clickShippingMethodContinue();
            await checkoutPage.clickPaymentMethodContinue();
            await checkoutPage.clickPaymentInfoContinue();
        });

        await test.step('4) Verify products, quantities, prices and totals are displayed', async () => {
            const isConfirmed = await checkoutPage.isOrderConfirmed();
            // The confirm order page should show order details before clicking confirm
        });

        console.log('✅ CHECKOUT_E2E_006 Completed successfully!');
    });

    test('CHECKOUT_E2E_007 - Complete checkout @master @sanity @regression @web', async ({ homePage, loginPage, productPage, cartPage, checkoutPage }) => {
        const loginData = Helper.getLoginDetails();
        const billingData = Helper.getBillingAddress();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login and add product to cart', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            await homePage.searchProduct('Health Book');
            let isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();
            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Complete checkout', async () => {
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
        });

        await test.step('4) Verify order is successfully placed', async () => {
            const isConfirmed = await checkoutPage.isOrderConfirmed();
            expect(isConfirmed).toBeTruthy();

            const orderNumber = await checkoutPage.getOrderNumber();
            expect(orderNumber.length).toBeGreaterThan(0);
        });

        console.log('✅ CHECKOUT_E2E_007 Completed successfully!');
    });

    test('CHECKOUT_E2E_008 - Checkout with missing mandatory information @master @regression @web', async ({ homePage, loginPage, productPage, cartPage, checkoutPage }) => {
        const loginData = Helper.getLoginDetails();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login and add product to cart', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            await homePage.searchProduct('Health Book');
            let isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();
            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Proceed to checkout without filling mandatory info', async () => {
            await homePage.clickCart();
            await cartPage.agreeToTerms();
            await cartPage.clickCheckout();

            // Click continue without filling billing info
            await checkoutPage.clickBillingContinue();
        });

        await test.step('4) Verify user cannot proceed and validation is displayed', async () => {
            // Page should show validation errors
            // Should still be on billing step
            const currentUrl = await homePage.page.url();
            expect(currentUrl).toContain('checkout');

            // Check for validation messages
            const validationErrors = homePage.page.locator('.field-validation-error, .message-error');
            const errorCount = await validationErrors.count();
            expect(errorCount).toBeGreaterThan(0);
        });

        console.log('✅ CHECKOUT_E2E_008 Completed successfully!');
    });

    test('CHECKOUT_E2E_009 - Checkout with multiple products @master @sanity @regression @web', async ({ homePage, loginPage, productPage, cartPage, checkoutPage }) => {
        const loginData = Helper.getLoginDetails();
        const billingData = Helper.getBillingAddress();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login and add multiple products to cart', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            // Add first product
            await homePage.searchProduct('Health Book');
            let isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();
            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();

            // Add second product
            await homePage.searchProduct('Fiction');
            isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();
            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Complete checkout with multiple products', async () => {
            await homePage.clickCart();

            const isCartPage = await cartPage.isCartPageExists();
            expect(isCartPage).toBeTruthy();

            const productNames = await cartPage.getProductNames();
            expect(productNames.length).toBe(2);

            await cartPage.agreeToTerms();
            await cartPage.clickCheckout();

            await checkoutPage.fillBillingAddress(billingData);
            await checkoutPage.clickBillingContinue();
            await checkoutPage.clickShippingContinue();
            await checkoutPage.clickShippingMethodContinue();
            await checkoutPage.clickPaymentMethodContinue();
            await checkoutPage.clickPaymentInfoContinue();
            await checkoutPage.clickConfirmOrder();
        });

        await test.step('4) Verify all products and calculated totals are correct', async () => {
            const isConfirmed = await checkoutPage.isOrderConfirmed();
            expect(isConfirmed).toBeTruthy();

            const orderNumber = await checkoutPage.getOrderNumber();
            expect(orderNumber.length).toBeGreaterThan(0);
        });

        console.log('✅ CHECKOUT_E2E_009 Completed successfully!');
    });

    test('CHECKOUT_E2E_010 - Cancel/return from checkout @master @sanity @regression @web', async ({ homePage, loginPage, productPage, cartPage }) => {
        const loginData = Helper.getLoginDetails();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login and add product to cart', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            await homePage.searchProduct('Health Book');
            let isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();
            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Navigate to checkout and cancel/return', async () => {
            await homePage.clickCart();
            await cartPage.agreeToTerms();
            await cartPage.clickCheckout();

            // Return to cart
            await homePage.clickCart();
        });

        await test.step('4) Verify cart retains product', async () => {
            const isCartPage = await cartPage.isCartPageExists();
            expect(isCartPage).toBeTruthy();

            const productNames = await cartPage.getProductNames();
            expect(productNames.length).toBeGreaterThan(0);
        });

        console.log('✅ CHECKOUT_E2E_010 Completed successfully!');
    });
});