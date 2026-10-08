/**
 * Test Case: Add To Cart Feature
 *
 * Tags: @master @sanity @regression @web
 *
 * Steps:
 * 1) Navigate to the application URL
 * 2) Add products to cart
 * 3) Verify expected results
 */

// using custom fixtures
import { test, expect } from '../../fixtures/pageFixtures';
import { Helper } from '../../utils/helper';

test.describe('Add To Cart Tests', () => {

    test('CART_E2E_001 - Add one product to cart @master @sanity @regression @web', async ({ homePage, productPage, cartPage }) => {
        const cartData = Helper.getCartData('CART_E2E_001');

        await test.step('1) Navigate to the application URL', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();
        });

        await test.step('2) Add one product to cart', async () => {
            await homePage.searchProduct(cartData.ProductName);

            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Verify product appears in cart', async () => {
            await homePage.clickCart();

            const isCartPage = await cartPage.isCartPageExists();
            expect(isCartPage).toBeTruthy();

            const productNames = await cartPage.getProductNames();
            expect(productNames.length).toBeGreaterThan(0);
            expect(productNames.some(name => name.toLowerCase().includes(cartData.ProductName.toLowerCase()))).toBeTruthy();
        });

        console.log('✅ CART_E2E_001 Completed successfully!');
    });

    test('CART_E2E_002 - Add multiple different products @master @sanity @regression @web', async ({ homePage, productPage, cartPage }) => {
        await test.step('1) Navigate to the application URL', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();
        });

        await test.step('2) Add multiple different products to cart', async () => {
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

            // Add third product
            await homePage.searchProduct('Science');
            isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();
            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Verify all selected products appear in cart', async () => {
            await homePage.clickCart();

            const isCartPage = await cartPage.isCartPageExists();
            expect(isCartPage).toBeTruthy();

            const productNames = await cartPage.getProductNames();
            expect(productNames.length).toBe(3);
        });

        console.log('✅ CART_E2E_002 Completed successfully!');
    });

    test('CART_E2E_003 - Add same product multiple times @master @sanity @regression @web', async ({ homePage, productPage, cartPage }) => {
        await test.step('1) Navigate to the application URL', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();
        });

        await test.step('2) Add same product multiple times', async () => {
            await homePage.searchProduct('Health Book');

            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();

            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Verify quantity/line items behave correctly', async () => {
            await homePage.clickCart();

            const isCartPage = await cartPage.isCartPageExists();
            expect(isCartPage).toBeTruthy();

            const itemCount = await cartPage.getCartItemCount();
            expect(itemCount).toBe(2);
        });

        console.log('✅ CART_E2E_003 Completed successfully!');
    });

    test('CART_E2E_004 - Add product and verify cart count @master @sanity @regression @web', async ({ homePage, productPage }) => {
        await test.step('1) Navigate to the application URL', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();
        });

        await test.step('2) Add product and verify cart count', async () => {
            const cartCountBefore = await homePage.getCartCount();

            await homePage.searchProduct('Health Book');

            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();

            const cartCountAfter = await homePage.getCartCount();
            expect(cartCountAfter).toBe(cartCountBefore + 1);
        });

        console.log('✅ CART_E2E_004 Completed successfully!');
    });

    test('CART_E2E_005 - Add product, navigate away, return to cart @master @sanity @regression @web', async ({ homePage, productPage, cartPage }) => {
        await test.step('1) Navigate to the application URL', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();
        });

        await test.step('2) Add product and navigate away', async () => {
            await homePage.searchProduct('Health Book');

            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();

            // Navigate away
            await homePage.page.goto('/');
            await homePage.page.waitForLoadState('networkidle');
        });

        await test.step('3) Return to cart and verify product is retained', async () => {
            await homePage.clickCart();

            const isCartPage = await cartPage.isCartPageExists();
            expect(isCartPage).toBeTruthy();

            const productNames = await cartPage.getProductNames();
            expect(productNames.length).toBeGreaterThan(0);
        });

        console.log('✅ CART_E2E_005 Completed successfully!');
    });

    test('CART_E2E_006 - Update product quantity @master @sanity @regression @web', async ({ homePage, productPage, cartPage }) => {
        await test.step('1) Navigate to the application URL', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();
        });

        await test.step('2) Add a product to cart', async () => {
            await homePage.searchProduct('Health Book');

            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Update product quantity and verify totals', async () => {
            await homePage.clickCart();

            const isCartPage = await cartPage.isCartPageExists();
            expect(isCartPage).toBeTruthy();

            const subtotalBefore = await cartPage.getSubtotal();

            await cartPage.updateQuantity(0, '3');

            await cartPage.page.waitForLoadState('networkidle');

            const subtotalAfter = await cartPage.getSubtotal();
            expect(subtotalAfter).toBeTruthy();
        });

        console.log('✅ CART_E2E_006 Completed successfully!');
    });

    test('CART_E2E_007 - Remove product from cart @master @sanity @regression @web', async ({ homePage, productPage, cartPage }) => {
        await test.step('1) Navigate to the application URL', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();
        });

        await test.step('2) Add a product to cart', async () => {
            await homePage.searchProduct('Health Book');

            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Remove product and verify totals are updated', async () => {
            await homePage.clickCart();

            const isCartPage = await cartPage.isCartPageExists();
            expect(isCartPage).toBeTruthy();

            await cartPage.removeProduct(0);

            const isCartEmpty = await cartPage.isCartEmpty();
            expect(isCartEmpty).toBeTruthy();
        });

        console.log('✅ CART_E2E_007 Completed successfully!');
    });

    test('CART_E2E_008 - Remove all products @master @sanity @regression @web', async ({ homePage, productPage, cartPage }) => {
        await test.step('1) Navigate to the application URL', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();
        });

        await test.step('2) Add multiple products to cart', async () => {
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

        await test.step('3) Remove all products and verify empty-cart state', async () => {
            await homePage.clickCart();

            const isCartPage = await cartPage.isCartPageExists();
            expect(isCartPage).toBeTruthy();

            await cartPage.removeAllProducts();

            const isCartEmpty = await cartPage.isCartEmpty();
            expect(isCartEmpty).toBeTruthy();
        });

        console.log('✅ CART_E2E_008 Completed successfully!');
    });

    test('CART_E2E_009 - Add product while logged out and then login @master @sanity @regression @web', async ({ homePage, productPage, cartPage, loginPage }) => {
        const loginData = Helper.getLoginDetails();

        await test.step('1) Navigate to the application URL', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();
        });

        await test.step('2) Add product while logged out', async () => {
            await homePage.searchProduct('Health Book');

            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Login and verify cart behavior', async () => {
            await homePage.clickLogin();

            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            await homePage.clickCart();

            const isCartPage = await cartPage.isCartPageExists();
            expect(isCartPage).toBeTruthy();
        });

        console.log('✅ CART_E2E_009 Completed successfully!');
    });
});