# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\product-search.spec.ts >> Product Search Tests >> SEARCH_E2E_003 - Search using non-existing product @master @regression @web
- Location: tests\web\product-search.spec.ts:64:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator(':has-text("No products were found")')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator(':has-text("No products were found")') with timeout 5000ms
  - waiting for locator(':has-text("No products were found")')

```

```yaml
- link "Tricentis Demo Web Shop":
  - /url: /
  - img "Tricentis Demo Web Shop"
- list:
  - listitem:
    - link "Register":
      - /url: /register
  - listitem:
    - link "Log in":
      - /url: /login
  - listitem:
    - link "Shopping cart (0)":
      - /url: /cart
  - listitem:
    - link "Wishlist (0)":
      - /url: /wishlist
- status
- textbox: Search store
- button "Search"
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Categories
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Manufacturers
- list:
  - listitem:
    - link "Tricentis":
      - /url: /tricentis
- strong: Newsletter
- text: "Sign up for our newsletter:"
- textbox
- button "Subscribe"
- heading "Search" [level=1]
- text: "Search keyword:"
- textbox "Search keyword:": Health Book
- checkbox "Advanced search"
- text: Advanced search
- button "Search"
- text: View as
- combobox:
  - option "Grid" [selected]
  - option "List"
- text: Sort by
- combobox:
  - option "Position" [selected]
  - 'option "Name: A to Z"'
  - 'option "Name: Z to A"'
  - 'option "Price: Low to High"'
  - 'option "Price: High to Low"'
  - option "Created on"
- text: Display
- combobox:
  - option "4"
  - option "8" [selected]
  - option "12"
- text: per page
- link "Picture of Health Book":
  - /url: /health
  - img "Picture of Health Book"
- heading "Health Book" [level=2]:
  - link "Health Book":
    - /url: /health
- text: 27.00 10.00
- button "Add to cart"
- heading "Information" [level=3]
- list:
  - listitem:
    - link "Sitemap":
      - /url: /sitemap
  - listitem:
    - link "Shipping & Returns":
      - /url: /shipping-returns
  - listitem:
    - link "Privacy Notice":
      - /url: /privacy-policy
  - listitem:
    - link "Conditions of Use":
      - /url: /conditions-of-use
  - listitem:
    - link "About us":
      - /url: /about-us
  - listitem:
    - link "Contact us":
      - /url: /contactus
- heading "Customer service" [level=3]
- list:
  - listitem:
    - link "Search":
      - /url: /search
  - listitem:
    - link "News":
      - /url: /news
  - listitem:
    - link "Blog":
      - /url: /blog
  - listitem:
    - link "Recently viewed products":
      - /url: /recentlyviewedproducts
  - listitem:
    - link "Compare products list":
      - /url: /compareproducts
  - listitem:
    - link "New products":
      - /url: /newproducts
- heading "My account" [level=3]
- list:
  - listitem:
    - link "My account":
      - /url: /customer/info
  - listitem:
    - link "Orders":
      - /url: /customer/orders
  - listitem:
    - link "Addresses":
      - /url: /customer/addresses
  - listitem:
    - link "Shopping cart":
      - /url: /cart
  - listitem:
    - link "Wishlist":
      - /url: /wishlist
- heading "Follow us" [level=3]
- list:
  - listitem:
    - link "Facebook":
      - /url: http://www.facebook.com/nopCommerce
  - listitem:
    - link "Twitter":
      - /url: https://twitter.com/nopCommerce
  - listitem:
    - link "RSS":
      - /url: /news/rss/1
  - listitem:
    - link "YouTube":
      - /url: http://www.youtube.com/user/nopCommerce
  - listitem:
    - link "Google+":
      - /url: https://plus.google.com/+nopcommerce
- text: Powered by
- link "nopCommerce":
  - /url: http://www.nopcommerce.com/
- text: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1   | /**
  2   |  * Test Case: Product Search Feature
  3   |  *
  4   |  * Tags: @master @sanity @regression @web
  5   |  *
  6   |  * Steps:
  7   |  * 1) Navigate to the application URL
  8   |  * 2) Search for products
  9   |  * 3) Verify expected results
  10  |  */
  11  | 
  12  | // using custom fixtures
  13  | import { test, expect } from '../../fixtures/pageFixtures';
  14  | import { Helper } from '../../utils/helper';
  15  | 
  16  | test.describe('Product Search Tests', () => {
  17  | 
  18  |     test('SEARCH_E2E_001 - Search for an existing product @master @sanity @regression @web', async ({ homePage, productPage }) => {
  19  |         const searchData = Helper.getSearchData('SEARCH_E2E_001');
  20  | 
  21  |         await test.step('1) Navigate to the application URL', async () => {
  22  |             const isHomePage = await homePage.isHomePageExists();
  23  |             expect(isHomePage).toBeTruthy();
  24  |         });
  25  | 
  26  |         await test.step('2) Search for an existing product', async () => {
  27  |             await homePage.searchProduct(searchData.ProductName);
  28  |         });
  29  | 
  30  |         await test.step('3) Verify matching product is displayed', async () => {
  31  |             const isProductPage = await productPage.isProductPageExists();
  32  |             expect(isProductPage).toBeTruthy();
  33  | 
  34  |             const productName = await productPage.getProductName();
  35  |             expect(productName.toLowerCase()).toContain(searchData.ProductName.toLowerCase());
  36  |         });
  37  | 
  38  |         console.log('✅ SEARCH_E2E_001 Completed successfully!');
  39  |     });
  40  | 
  41  |     test('SEARCH_E2E_002 - Search using partial product name @master @sanity @regression @web', async ({ homePage, productPage }) => {
  42  |         const searchData = Helper.getSearchData('SEARCH_E2E_002');
  43  | 
  44  |         await test.step('1) Navigate to the application URL', async () => {
  45  |             const isHomePage = await homePage.isHomePageExists();
  46  |             expect(isHomePage).toBeTruthy();
  47  |         });
  48  | 
  49  |         await test.step('2) Search using partial product name', async () => {
  50  |             await homePage.searchProduct(searchData.ProductName);
  51  |         });
  52  | 
  53  |         await test.step('3) Verify relevant products are displayed', async () => {
  54  |             // Search results page should show products
  55  |             // Check if we're on search results or product page
  56  |             const isProductPage = await productPage.isProductPageExists();
  57  |             // Could be on search results page with multiple products
  58  |             // Just verify we got results
  59  |         });
  60  | 
  61  |         console.log('✅ SEARCH_E2E_002 Completed successfully!');
  62  |     });
  63  | 
  64  |     test('SEARCH_E2E_003 - Search using non-existing product @master @regression @web', async ({ homePage }) => {
  65  |         const searchData = Helper.getSearchData('SEARCH_E2E_003');
  66  | 
  67  |         await test.step('1) Navigate to the application URL', async () => {
  68  |             const isHomePage = await homePage.isHomePageExists();
  69  |             expect(isHomePage).toBeTruthy();
  70  |         });
  71  | 
  72  |         await test.step('2) Search using non-existing product', async () => {
  73  |             await homePage.searchProduct(searchData.ProductName);
  74  |         });
  75  | 
  76  |         await test.step('3) Verify no-result state/message is displayed', async () => {
  77  |             // Check for no results message
  78  |             const noResults = homePage.page.locator(':has-text("No products were found")');
> 79  |             await expect(noResults).toBeVisible();
      |                                     ^ Error: expect(locator).toBeVisible() failed
  80  |         });
  81  | 
  82  |         console.log('✅ SEARCH_E2E_003 Completed successfully!');
  83  |     });
  84  | 
  85  |     test('SEARCH_E2E_004 - Search and open product from results @master @sanity @regression @web', async ({ homePage, productPage }) => {
  86  |         const searchData = Helper.getSearchData('SEARCH_E2E_004');
  87  | 
  88  |         await test.step('1) Navigate to the application URL', async () => {
  89  |             const isHomePage = await homePage.isHomePageExists();
  90  |             expect(isHomePage).toBeTruthy();
  91  |         });
  92  | 
  93  |         await test.step('2) Search and open product from results', async () => {
  94  |             await homePage.searchProduct(searchData.ProductName);
  95  |         });
  96  | 
  97  |         await test.step('3) Verify correct product details page opens', async () => {
  98  |             const isProductPage = await productPage.isProductPageExists();
  99  |             expect(isProductPage).toBeTruthy();
  100 | 
  101 |             const productName = await productPage.getProductName();
  102 |             expect(productName.toLowerCase()).toContain(searchData.ProductName.toLowerCase());
  103 |         });
  104 | 
  105 |         console.log('✅ SEARCH_E2E_004 Completed successfully!');
  106 |     });
  107 | 
  108 |     test('SEARCH_E2E_005 - Search product and add it to cart from results @master @regression @web', async ({ homePage, productPage, cartPage }) => {
  109 |         const searchData = Helper.getSearchData('SEARCH_E2E_005');
  110 | 
  111 |         await test.step('1) Navigate to the application URL', async () => {
  112 |             const isHomePage = await homePage.isHomePageExists();
  113 |             expect(isHomePage).toBeTruthy();
  114 |         });
  115 | 
  116 |         await test.step('2) Search product and add it to cart from results', async () => {
  117 |             await homePage.searchProduct(searchData.ProductName);
  118 | 
  119 |             const isProductPage = await productPage.isProductPageExists();
  120 |             expect(isProductPage).toBeTruthy();
  121 | 
  122 |             await productPage.clickAddToCart();
  123 |             await productPage.waitForCartNotification();
  124 |         });
  125 | 
  126 |         await test.step('3) Verify correct product is added to cart', async () => {
  127 |             await homePage.clickCart();
  128 | 
  129 |             const isCartPage = await cartPage.isCartPageExists();
  130 |             expect(isCartPage).toBeTruthy();
  131 | 
  132 |             const productNames = await cartPage.getProductNames();
  133 |             expect(productNames.some(name => name.toLowerCase().includes(searchData.ProductName.toLowerCase()))).toBeTruthy();
  134 |         });
  135 | 
  136 |         console.log('✅ SEARCH_E2E_005 Completed successfully!');
  137 |     });
  138 | 
  139 |     test('SEARCH_E2E_006 - Search using special characters @master @regression @web', async ({ homePage }) => {
  140 |         await test.step('1) Navigate to the application URL', async () => {
  141 |             const isHomePage = await homePage.isHomePageExists();
  142 |             expect(isHomePage).toBeTruthy();
  143 |         });
  144 | 
  145 |         await test.step('2) Search using special characters', async () => {
  146 |             await homePage.searchProduct('!@#$%^&*()');
  147 |         });
  148 | 
  149 |         await test.step('3) Verify application handles input without UI/application failure', async () => {
  150 |             // Should not crash - just show no results or handle gracefully
  151 |             const noResults = homePage.page.locator(':has-text("No products were found"), :has-text("Search")');
  152 |             // Just verify page loads without error
  153 |             await expect(homePage.page.locator('body')).toBeVisible();
  154 |         });
  155 | 
  156 |         console.log('✅ SEARCH_E2E_006 Completed successfully!');
  157 |     });
  158 | });
```