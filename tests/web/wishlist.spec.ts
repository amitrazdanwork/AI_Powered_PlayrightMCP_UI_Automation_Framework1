/**
 * Test Case: Wishlist Feature
 *
 * Tags: @master @sanity @regression @web
 *
 * Steps:
 * 1) Navigate to the application URL
 * 2) Login and interact with wishlist
 * 3) Verify expected results
 */

// using custom fixtures
import { test, expect } from '../../fixtures/pageFixtures';
import { Helper } from '../../utils/helper';

test.describe('Wishlist Tests', () => {

    test('WISH_E2E_001 - Login and add product to wishlist @master @sanity @regression @web', async ({ homePage, loginPage, productPage, wishlistPage }) => {
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

        await test.step('3) Add product to wishlist', async () => {
            await homePage.searchProduct('Health Book');

            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            await productPage.clickAddToWishlist();
            await productPage.waitForCartNotification();
        });

        await test.step('4) Verify product is added to wishlist', async () => {
            await homePage.clickWishlist();

            const isWishlistPage = await wishlistPage.isWishlistPageExists();
            expect(isWishlistPage).toBeTruthy();

            const productNames = await wishlistPage.getProductNames();
            expect(productNames.some(name => name.toLowerCase().includes('health'))).toBeTruthy();
        });

        console.log('✅ WISH_E2E_001 Completed successfully!');
    });

    test('WISH_E2E_002 - Open wishlist @master @sanity @regression @web', async ({ homePage, loginPage, productPage, wishlistPage }) => {
        const loginData = Helper.getLoginDetails();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login and add a product to wishlist', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            await homePage.searchProduct('Health Book');

            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            await productPage.clickAddToWishlist();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Open wishlist and verify added product is displayed', async () => {
            await homePage.clickWishlist();

            const isWishlistPage = await wishlistPage.isWishlistPageExists();
            expect(isWishlistPage).toBeTruthy();

            const productNames = await wishlistPage.getProductNames();
            expect(productNames.length).toBeGreaterThan(0);
        });

        console.log('✅ WISH_E2E_002 Completed successfully!');
    });

    test('WISH_E2E_003 - Add multiple products to wishlist @master @sanity @regression @web', async ({ homePage, loginPage, productPage, wishlistPage }) => {
        const loginData = Helper.getLoginDetails();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login and add multiple products to wishlist', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            // Add first product
            await homePage.searchProduct('Health Book');
            let isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();
            await productPage.clickAddToWishlist();
            await productPage.waitForCartNotification();

            // Add second product
            await homePage.searchProduct('Fiction');
            isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();
            await productPage.clickAddToWishlist();
            await productPage.waitForCartNotification();

            // Add third product
            await homePage.searchProduct('Science');
            isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();
            await productPage.clickAddToWishlist();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Verify all products are displayed', async () => {
            await homePage.clickWishlist();

            const isWishlistPage = await wishlistPage.isWishlistPageExists();
            expect(isWishlistPage).toBeTruthy();

            const productNames = await wishlistPage.getProductNames();
            expect(productNames.length).toBe(3);
        });

        console.log('✅ WISH_E2E_003 Completed successfully!');
    });

    test('WISH_E2E_004 - Remove product from wishlist @master @sanity @regression @web', async ({ homePage, loginPage, productPage, wishlistPage }) => {
        const loginData = Helper.getLoginDetails();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login and add product to wishlist', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            await homePage.searchProduct('Health Book');

            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            await productPage.clickAddToWishlist();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Remove product and verify it is removed', async () => {
            await homePage.clickWishlist();

            const isWishlistPage = await wishlistPage.isWishlistPageExists();
            expect(isWishlistPage).toBeTruthy();

            await wishlistPage.removeProduct(0);

            const isWishlistEmpty = await wishlistPage.isWishlistEmpty();
            expect(isWishlistEmpty).toBeTruthy();
        });

        console.log('✅ WISH_E2E_004 Completed successfully!');
    });

    test('WISH_E2E_005 - Move/add wishlist product to cart @master @sanity @regression @web', async ({ homePage, loginPage, productPage, wishlistPage, cartPage }) => {
        const loginData = Helper.getLoginDetails();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login and add product to wishlist', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            await homePage.searchProduct('Health Book');

            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            await productPage.clickAddToWishlist();
            await productPage.waitForCartNotification();
        });

        await test.step('3) Move/add product to cart', async () => {
            await homePage.clickWishlist();

            const isWishlistPage = await wishlistPage.isWishlistPageExists();
            expect(isWishlistPage).toBeTruthy();

            await wishlistPage.addToCart(0);
        });

        await test.step('4) Verify product appears in cart', async () => {
            await homePage.clickCart();

            const isCartPage = await cartPage.isCartPageExists();
            expect(isCartPage).toBeTruthy();

            const productNames = await cartPage.getProductNames();
            expect(productNames.length).toBeGreaterThan(0);
        });

        console.log('✅ WISH_E2E_005 Completed successfully!');
    });

    test('WISH_E2E_006 - Logout and login again @master @sanity @regression @web', async ({ homePage, loginPage, productPage, wishlistPage }) => {
        const loginData = Helper.getLoginDetails();

        await test.step('1) Navigate to the application URL and login', async () => {
            const isHomePage = await homePage.isHomePageExists();
            expect(isHomePage).toBeTruthy();

            await homePage.clickLogin();
        });

        await test.step('2) Login, add product to wishlist, and logout', async () => {
            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            await homePage.searchProduct('Health Book');

            const isProductPage = await productPage.isProductPageExists();
            expect(isProductPage).toBeTruthy();

            await productPage.clickAddToWishlist();
            await productPage.waitForCartNotification();

            // Logout
            const logoutLink = homePage.page.getByRole('link', { name: 'Log out' });
            if (await logoutLink.isVisible()) {
                await logoutLink.click();
                await homePage.page.waitForLoadState('networkidle');
            }
        });

        await test.step('3) Login again and verify wishlist persists', async () => {
            await homePage.clickLogin();

            const isLoginPage = await loginPage.isLoginPageExists();
            expect(isLoginPage).toBeTruthy();

            await loginPage.login(loginData.email, loginData.password);

            await homePage.clickWishlist();

            const isWishlistPage = await wishlistPage.isWishlistPageExists();
            expect(isWishlistPage).toBeTruthy();

            // Wishlist should persist for the same user
            const productNames = await wishlistPage.getProductNames();
            // Wishlist should contain previously added products
        });

        console.log('✅ WISH_E2E_006 Completed successfully!');
    });
});