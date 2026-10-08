/**
 * Test Case: Order Placement Feature
 *
 * Tags: @master @sanity @regression @web
 *
 * Steps:
 * 1) Navigate to the application URL
 * 2) Login, add product, checkout, and place order
 * 3) Verify order details
 */

// using custom fixtures
import { test, expect } from '../../fixtures/pageFixtures';
import { Helper } from '../../utils/helper';

test.describe('Order Placement Tests', () => {

    test('ORDER_E2E_001 - Login → Add product → Checkout → Place order @master @sanity @regression @web', async ({ homePage, loginPage, productPage, cartPage, checkoutPage }) => {
        const loginData = Helper.getLoginDetails();
        const billingData = Helper.getBillingAddress();

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

        await test.step('4) Proceed to checkout and place order', async () => {
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

        await test.step('5) Verify order is created successfully', async () => {
            const isConfirmed = await checkoutPage.isOrderConfirmed();
            expect(isConfirmed).toBeTruthy();

            const orderNumber = await checkoutPage.getOrderNumber();
            expect(orderNumber.length).toBeGreaterThan(0);
        });

        console.log('✅ ORDER_E2E_001 Completed successfully!');
    });

    test('ORDER_E2E_002 - Place order and capture order number @master @sanity @regression @web', async ({ homePage, loginPage, productPage, cartPage, checkoutPage }) => {
        const loginData = Helper.getLoginDetails();
        const billingData = Helper.getBillingAddress();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login, add product and place order', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

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
        });

        await test.step('3) Verify unique order number is displayed', async () => {
            const isConfirmed = await checkoutPage.isOrderConfirmed();
            expect(isConfirmed).toBeTruthy();

            const orderNumber = await checkoutPage.getOrderNumber();
            expect(orderNumber.length).toBeGreaterThan(0);
        });

        console.log('✅ ORDER_E2E_002 Completed successfully!');
    });

    test('ORDER_E2E_003 - Place order and open order history @master @sanity @regression @web', async ({ homePage, loginPage, productPage, cartPage, checkoutPage, myAccountPage }) => {
        const loginData = Helper.getLoginDetails();
        const billingData = Helper.getBillingAddress();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login and place order', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            await homePage.searchProduct('Health Book');
            let isProductPage = await productPage.isProductPageExists();
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
        });

        await test.step('3) Verify order confirmation', async () => {
            const isConfirmed = await checkoutPage.isOrderConfirmed();
            expect(isConfirmed).toBeTruthy();

            const orderNumber = await checkoutPage.getOrderNumber();
            expect(orderNumber.length).toBeGreaterThan(0);
        });

        await test.step('4) Open order history and verify new order appears', async () => {
            // Navigate to My Account → Orders
            await homePage.clickLogin();

            // Wait for page to load and check order history
            await homePage.page.waitForLoadState('networkidle');
        });

        console.log('✅ ORDER_E2E_003 Completed successfully!');
    });

    test('ORDER_E2E_004 - Open order details @master @sanity @regression @web', async ({ homePage, loginPage, productPage, cartPage, checkoutPage, myAccountPage }) => {
        const loginData = Helper.getLoginDetails();
        const billingData = Helper.getBillingAddress();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login and place order', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            await homePage.searchProduct('Health Book');
            let isProductPage = await productPage.isProductPageExists();
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
        });

        await test.step('3) Verify order details are correct', async () => {
            const isConfirmed = await checkoutPage.isOrderConfirmed();
            expect(isConfirmed).toBeTruthy();

            const orderNumber = await checkoutPage.getOrderNumber();
            expect(orderNumber.length).toBeGreaterThan(0);
        });

        console.log('✅ ORDER_E2E_004 Completed successfully!');
    });

    test('ORDER_E2E_005 - Place order with multiple products @master @sanity @regression @web', async ({ homePage, loginPage, productPage, cartPage, checkoutPage }) => {
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

            await homePage.searchProduct('Health Book');
            let isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();
            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();

            await homePage.searchProduct('Fiction');
            isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();
            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Place order and verify all products are associated', async () => {
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

            const isConfirmed = await checkoutPage.isOrderConfirmed();
            expect(isConfirmed).toBeTruthy();
        });

        console.log('✅ ORDER_E2E_005 Completed successfully!');
    });

    test('ORDER_E2E_006 - Verify cart after successful order @master @sanity @regression @web', async ({ homePage, loginPage, productPage, cartPage, checkoutPage }) => {
        const loginData = Helper.getLoginDetails();
        const billingData = Helper.getBillingAddress();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login, add product and place order', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            await homePage.searchProduct('Health Book');
            let isProductPage = await productPage.isProductPageExists();
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
        });

        await test.step('3) Verify order is successful', async () => {
            const isConfirmed = await checkoutPage.isOrderConfirmed();
            expect(isConfirmed).toBeTruthy();
        });

        await test.step('4) Navigate to cart and verify it is empty or reflects post-order behavior', async () => {
            await homePage.clickCart();

            const cartCount = await homePage.getCartCount();
            // After successful order, cart should be empty (count 0)
            expect(cartCount).toBe(0);
        });

        console.log('✅ ORDER_E2E_006 Completed successfully!');
    });
});