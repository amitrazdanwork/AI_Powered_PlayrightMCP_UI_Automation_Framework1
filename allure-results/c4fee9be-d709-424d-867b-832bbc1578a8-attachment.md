# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\registration.spec.ts >> Registration Tests >> REG_E2E_002 - Register with valid details and then navigate to Login @master @sanity @regression @web
- Location: tests\web\registration.spec.ts:55:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Log in' })

```

# Page snapshot

```yaml
- generic [ref=f2e2]:
  - generic [ref=f2e3]:
    - generic [ref=f2e4]:
      - link [ref=f2e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f2e7]
      - list [ref=f2e10]:
        - listitem [ref=f2e11]:
          - link "testuser1791951297906396@example.com" [ref=f2e12] [cursor=pointer]:
            - /url: /customer/info
        - listitem [ref=f2e13]:
          - link "Log out" [ref=f2e14] [cursor=pointer]:
            - /url: /logout
        - listitem [ref=f2e15]:
          - link "Shopping cart (0)" [ref=f2e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f2e17]: Shopping cart
            - generic [ref=f2e18]: (0)
        - listitem [ref=f2e19]:
          - link "Wishlist (0)" [ref=f2e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f2e21]: Wishlist
            - generic [ref=f2e22]: (0)
      - generic [ref=f2e24]:
        - status [ref=f2e25]
        - textbox [ref=f2e26]: Search store
        - button "Search" [ref=f2e27] [cursor=pointer]
    - list [ref=f2e29]:
      - listitem [ref=f2e30]:
        - link "Books" [ref=f2e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f2e32]:
        - link "Computers" [ref=f2e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f2e34]:
        - link "Electronics" [ref=f2e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f2e36]:
        - link "Apparel & Shoes" [ref=f2e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f2e38]:
        - link "Digital downloads" [ref=f2e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f2e40]:
        - link "Jewelry" [ref=f2e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f2e42]:
        - link "Gift Cards" [ref=f2e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f2e44]:
        - generic [ref=f2e45]:
          - strong [ref=f2e47]: Categories
          - list [ref=f2e49]:
            - listitem [ref=f2e50]:
              - link "Books" [ref=f2e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f2e52]:
              - link "Computers" [ref=f2e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f2e54]:
              - link "Electronics" [ref=f2e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f2e56]:
              - link "Apparel & Shoes" [ref=f2e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f2e58]:
              - link "Digital downloads" [ref=f2e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f2e60]:
              - link "Jewelry" [ref=f2e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f2e62]:
              - link "Gift Cards" [ref=f2e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f2e64]:
          - strong [ref=f2e66]: Manufacturers
          - list [ref=f2e68]:
            - listitem [ref=f2e69]:
              - link "Tricentis" [ref=f2e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f2e71]:
          - strong [ref=f2e73]: Newsletter
          - generic [ref=f2e75]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f2e77]
            - button "Subscribe" [ref=f2e79] [cursor=pointer]
      - generic [ref=f2e81]:
        - heading "Register" [level=1] [ref=f2e83]
        - generic [ref=f2e84]:
          - generic [ref=f2e85]: Your registration completed
          - button "Continue" [ref=f2e87] [cursor=pointer]
  - generic [ref=f2e88]:
    - generic [ref=f2e89]:
      - generic [ref=f2e90]:
        - heading "Information" [level=3] [ref=f2e91]
        - list [ref=f2e92]:
          - listitem [ref=f2e93]:
            - link "Sitemap" [ref=f2e94] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f2e95]:
            - link "Shipping & Returns" [ref=f2e96] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f2e97]:
            - link "Privacy Notice" [ref=f2e98] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f2e99]:
            - link "Conditions of Use" [ref=f2e100] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f2e101]:
            - link "About us" [ref=f2e102] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f2e103]:
            - link "Contact us" [ref=f2e104] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f2e105]:
        - heading "Customer service" [level=3] [ref=f2e106]
        - list [ref=f2e107]:
          - listitem [ref=f2e108]:
            - link "Search" [ref=f2e109] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f2e110]:
            - link "News" [ref=f2e111] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f2e112]:
            - link "Blog" [ref=f2e113] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f2e114]:
            - link "Recently viewed products" [ref=f2e115] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f2e116]:
            - link "Compare products list" [ref=f2e117] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f2e118]:
            - link "New products" [ref=f2e119] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f2e120]:
        - heading "My account" [level=3] [ref=f2e121]
        - list [ref=f2e122]:
          - listitem [ref=f2e123]:
            - link "My account" [ref=f2e124] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f2e125]:
            - link "Orders" [ref=f2e126] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f2e127]:
            - link "Addresses" [ref=f2e128] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f2e129]:
            - link "Shopping cart" [ref=f2e130] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f2e131]:
            - link "Wishlist" [ref=f2e132] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f2e133]:
        - heading "Follow us" [level=3] [ref=f2e134]
        - list [ref=f2e135]:
          - listitem [ref=f2e136]:
            - link "Facebook" [ref=f2e137] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f2e138]:
            - link "Twitter" [ref=f2e139] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f2e140]:
            - link "RSS" [ref=f2e141] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f2e142]:
            - link "YouTube" [ref=f2e143] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f2e144]:
            - link "Google+" [ref=f2e145] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f2e146]:
      - text: Powered by
      - link "nopCommerce" [ref=f2e147] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f2e148]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1   | import { Page, Locator, expect } from '@playwright/test';
  2   | 
  3   | export class HomePage {
  4   |     readonly page: Page;
  5   | 
  6   |     // Locators
  7   |     private readonly lnkRegister: Locator;
  8   |     private readonly lnkLogin: Locator;
  9   |     private readonly lnkCart: Locator;
  10  |     private readonly lnkWishlist: Locator;
  11  |     private readonly txtSearch: Locator;
  12  |     private readonly btnSearch: Locator;
  13  |     private readonly lnkBooks: Locator;
  14  |     private readonly lnkComputers: Locator;
  15  |     private readonly lnkElectronics: Locator;
  16  |     private readonly lnkApparelShoes: Locator;
  17  |     private readonly lnkDigitalDownloads: Locator;
  18  |     private readonly lnkJewelry: Locator;
  19  |     private readonly lnkGiftCards: Locator;
  20  | 
  21  |     constructor(page: Page) {
  22  |         this.page = page;
  23  | 
  24  |         // Initialize locators
  25  |         this.lnkRegister = page.getByRole('link', { name: 'Register' });
  26  |         this.lnkLogin = page.getByRole('link', { name: 'Log in' });
  27  |         this.lnkCart = page.getByRole('link', { name: 'Shopping cart' });
  28  |         this.lnkWishlist = page.getByRole('link', { name: 'Wishlist' });
  29  |         this.txtSearch = page.getByPlaceholder('Search store');
  30  |         this.btnSearch = page.getByRole('button', { name: 'Search' });
  31  |         this.lnkBooks = page.getByRole('link', { name: 'Books' });
  32  |         this.lnkComputers = page.getByRole('link', { name: 'Computers' });
  33  |         this.lnkElectronics = page.getByRole('link', { name: 'Electronics' });
  34  |         this.lnkApparelShoes = page.getByRole('link', { name: 'Apparel & Shoes' });
  35  |         this.lnkDigitalDownloads = page.getByRole('link', { name: 'Digital downloads' });
  36  |         this.lnkJewelry = page.getByRole('link', { name: 'Jewelry' });
  37  |         this.lnkGiftCards = page.getByRole('link', { name: 'Gift Cards' });
  38  |     }
  39  | 
  40  |     /**
  41  |      * Clicks the Register link
  42  |      * @returns Promise<void>
  43  |      */
  44  |     async clickRegister(): Promise<void> {
  45  |         await this.lnkRegister.click();
  46  |     }
  47  | 
  48  |     /**
  49  |      * Clicks the Login link
  50  |      * @returns Promise<void>
  51  |      */
  52  |     async clickLogin(): Promise<void> {
> 53  |         await this.lnkLogin.click();
      |                             ^ Error: locator.click: Test timeout of 60000ms exceeded.
  54  |     }
  55  | 
  56  |     /**
  57  |      * Clicks the Shopping Cart link
  58  |      * @returns Promise<void>
  59  |      */
  60  |     async clickCart(): Promise<void> {
  61  |         await this.lnkCart.click();
  62  |     }
  63  | 
  64  |     /**
  65  |      * Clicks the Wishlist link
  66  |      * @returns Promise<void>
  67  |      */
  68  |     async clickWishlist(): Promise<void> {
  69  |         await this.lnkWishlist.click();
  70  |     }
  71  | 
  72  |     /**
  73  |      * Searches for a product
  74  |      * @param productName - Product name to search
  75  |      * @returns Promise<void>
  76  |      */
  77  |     async searchProduct(productName: string): Promise<void> {
  78  |         await this.txtSearch.fill(productName);
  79  |         await this.btnSearch.click();
  80  |     }
  81  | 
  82  |     /**
  83  |      * Clicks on Books category
  84  |      * @returns Promise<void>
  85  |      */
  86  |     async clickBooks(): Promise<void> {
  87  |         await this.lnkBooks.click();
  88  |     }
  89  | 
  90  |     /**
  91  |      * Clicks on Computers category
  92  |      * @returns Promise<void>
  93  |      */
  94  |     async clickComputers(): Promise<void> {
  95  |         await this.lnkComputers.click();
  96  |     }
  97  | 
  98  |     /**
  99  |      * Clicks on Electronics category
  100 |      * @returns Promise<void>
  101 |      */
  102 |     async clickElectronics(): Promise<void> {
  103 |         await this.lnkElectronics.click();
  104 |     }
  105 | 
  106 |     /**
  107 |      * Clicks on Apparel & Shoes category
  108 |      * @returns Promise<void>
  109 |      */
  110 |     async clickApparelShoes(): Promise<void> {
  111 |         await this.lnkApparelShoes.click();
  112 |     }
  113 | 
  114 |     /**
  115 |      * Clicks on Digital downloads category
  116 |      * @returns Promise<void>
  117 |      */
  118 |     async clickDigitalDownloads(): Promise<void> {
  119 |         await this.lnkDigitalDownloads.click();
  120 |     }
  121 | 
  122 |     /**
  123 |      * Clicks on Jewelry category
  124 |      * @returns Promise<void>
  125 |      */
  126 |     async clickJewelry(): Promise<void> {
  127 |         await this.lnkJewelry.click();
  128 |     }
  129 | 
  130 |     /**
  131 |      * Clicks on Gift Cards category
  132 |      * @returns Promise<void>
  133 |      */
  134 |     async clickGiftCards(): Promise<void> {
  135 |         await this.lnkGiftCards.click();
  136 |     }
  137 | 
  138 |     /**
  139 |      * Verifies the home page exists
  140 |      * @returns Promise<boolean> - true if the page is displayed
  141 |      */
  142 |     async isHomePageExists(): Promise<boolean> {
  143 |         try {
  144 |             return await this.lnkRegister.isVisible();
  145 |         } catch (error) {
  146 |             console.log(`Error checking home page: ${error}`);
  147 |             return false;
  148 |         }
  149 |     }
  150 | 
  151 |     /**
  152 |      * Gets the cart count from the header
  153 |      * @returns Promise<number> - cart count
```