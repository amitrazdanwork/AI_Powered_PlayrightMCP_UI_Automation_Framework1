import { test, expect } from '../fixtures/pageFixtures';

test('Debug cart contents', async ({ homePage, productPage, cartPage }) => {
    const productData = {
        ProductName: 'Health Book'
    };

    await homePage.isHomePageExists();
    await homePage.searchProduct(productData.ProductName);

    const isProductPage = await productPage.isProductPageExists();
    console.log('Is product page:', isProductPage);

    const productName = await productPage.getProductName();
    console.log('Product name on results page:', productName);

    await productPage.clickAddToCart();
    await productPage.waitForCartNotification();

    await homePage.clickCart();

    const isCartPage = await cartPage.isCartPageExists();
    console.log('Is cart page:', isCartPage);

    const productNames = await cartPage.getProductNames();
    console.log('Product names in cart:', productNames);

    // Also check the raw HTML
    const cartHtml = await cartPage.page.locator('.cart').innerHTML();
    console.log('Cart HTML:', cartHtml.substring(0, 2000));
});