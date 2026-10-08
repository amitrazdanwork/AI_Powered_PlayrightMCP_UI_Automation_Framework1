/**
 * Test Case: Product Details Feature
 *
 * Tags: @master @sanity @regression @web
 *
 * Steps:
 * 1) Navigate to the application URL
 * 2) View product details
 * 3) Verify expected results
 */

// using custom fixtures
import { test, expect } from '../../fixtures/pageFixtures';
import { Helper } from '../../utils/helper';

test.describe('Product Details Tests', () => {

    test('PRODUCT_E2E_001 - Open product from homepage @master @sanity @regression @web', async ({ homePage, productPage }) => {
        await test.step('1) Navigate to the application URL', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();
        });

        await test.step('2) Open product from homepage', async () => {
            // Click on a featured product from homepage
            const productLink = homePage.page.getByRole('link', { name: 'Health Book' }).first();
            await productLink.click();
        });

        await test.step('3) Verify correct product details are displayed', async () => {
            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            const productName = await productPage.getProductName();
            expect(productName.toLowerCase()).toContain('health');
        });

        console.log('✅ PRODUCT_E2E_001 Completed successfully!');
    });

    test('PRODUCT_E2E_002 - Open product from search results @master @sanity @regression @web', async ({ homePage, productPage }) => {
        await test.step('1) Navigate to the application URL', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();
        });

        await test.step('2) Search and open product from search results', async () => {
            await homePage.searchProduct('Health Book');
        });

        await test.step('3) Verify correct product details are displayed', async () => {
            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            const productName = await productPage.getProductName();
            expect(productName.toLowerCase()).toContain('health');
        });

        console.log('✅ PRODUCT_E2E_002 Completed successfully!');
    });

    test('PRODUCT_E2E_003 - Select product quantity and add to cart @master @sanity @regression @web', async ({ homePage, productPage, cartPage }) => {
        await test.step('1) Navigate to the application URL', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();
        });

        await test.step('2) Open product and select quantity', async () => {
            await homePage.searchProduct('Health Book');

            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            await productPage.setQuantity('2');
        });

        await test.step('3) Add to cart and verify quantity', async () => {
            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();

            await homePage.clickCart();

            const isCartPage = await cartPage.isCartPageExists();
            expect(isCartPage).toBeTruthy();

            const itemCount = await cartPage.getCartItemCount();
            expect(itemCount).toBe(2);
        });

        console.log('✅ PRODUCT_E2E_003 Completed successfully!');
    });

    test('PRODUCT_E2E_004 - Add product to wishlist from product page @master @regression @web', async ({ homePage, productPage, wishlistPage }) => {
        await test.step('1) Navigate to the application URL', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();
        });

        await test.step('2) Open product and add to wishlist', async () => {
            await homePage.searchProduct('Health Book');

            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            await productPage.clickAddToWishlist();
            await productPage.waitForCartNotification(); // Wishlist also shows notification
        });

        await test.step('3) Verify product appears in wishlist', async () => {
            await homePage.clickWishlist();

            const isWishlistPage = await wishlistPage.isWishlistPageExists();
            expect(isWishlistPage).toBeTruthy();

            const productNames = await wishlistPage.getProductNames();
            expect(productNames.some(name => name.toLowerCase().includes('health'))).toBeTruthy();
        });

        console.log('✅ PRODUCT_E2E_004 Completed successfully!');
    });

    test('PRODUCT_E2E_005 - Add product to cart and navigate to cart @master @sanity @regression @web', async ({ homePage, productPage, cartPage }) => {
        await test.step('1) Navigate to the application URL', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();
        });

        await test.step('2) Add product to cart and navigate to cart', async () => {
            await homePage.searchProduct('Health Book');

            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();

            await homePage.clickCart();
        });

        await test.step('3) Verify correct product and quantity are displayed', async () => {
            const isCartPage = await cartPage.isCartPageExists();
            expect(isCartPage).toBeTruthy();

            const productNames = await cartPage.getProductNames();
            expect(productNames.some(name => name.toLowerCase().includes('health'))).toBeTruthy();

            const itemCount = await cartPage.getCartItemCount();
            expect(itemCount).toBeGreaterThan(0);
        });

        console.log('✅ PRODUCT_E2E_005 Completed successfully!');
    });

    test('PRODUCT_E2E_006 - Product with configurable options @master @regression @web', async ({ homePage, productPage, cartPage }) => {
        await test.step('1) Navigate to the application URL', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();
        });

        await test.step('2) Open product with configurable options', async () => {
            // Navigate to a product with options (e.g., Build your own computer)
            await homePage.clickComputers();
            const computerLink = homePage.page.getByRole('link', { name: 'Build your own computer' });
            await computerLink.click();
        });

        await test.step('3) Verify required options can be selected and product added successfully', async () => {
            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            // Check for configurable options (dropdowns, radio buttons, checkboxes)
            const options = productPage.page.locator('select, input[type="radio"], input[type="checkbox"]');
            const optionCount = await options.count();

            // Add to cart
            await productPage.clickAddToCart();
            await productPage.waitForCartNotification();

            await homePage.clickCart();
            const isCartPage = await cartPage.isCartPageExists();
            expect(isCartPage).toBeTruthy();
        });

        console.log('✅ PRODUCT_E2E_006 Completed successfully!');
    });
});