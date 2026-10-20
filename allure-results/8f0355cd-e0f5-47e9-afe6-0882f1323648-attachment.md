# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\product-search.spec.ts >> Product Search Tests >> SEARCH_E2E_005 - Search product and add it to cart from results @master @regression @web
- Location: tests\web\product-search.spec.ts:117:9

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Add to cart' }) resolved to 2 elements:
    1) <input type="button" value="Add to cart" class="button-2 product-box-add-to-cart-button" onclick="AjaxCart.addproducttocart_catalog('/addproducttocart/catalog/36/1/1    ');return false;"/> aka getByRole('button', { name: 'Add to cart' }).first()
    2) <input type="button" value="Add to cart" class="button-2 product-box-add-to-cart-button" onclick="AjaxCart.addproducttocart_catalog('/addproducttocart/catalog/81/1/1    ');return false;"/> aka getByRole('button', { name: 'Add to cart' }).nth(1)

Call log:
  - waiting for getByRole('button', { name: 'Add to cart' })

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - generic [ref=f1e3]:
    - generic [ref=f1e4]:
      - link [ref=f1e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f1e7]
      - list [ref=f1e10]:
        - listitem [ref=f1e11]:
          - link "Register" [ref=f1e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=f1e13]:
          - link "Log in" [ref=f1e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=f1e15]:
          - link "Shopping cart (0)" [ref=f1e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f1e17]: Shopping cart
            - generic [ref=f1e18]: (0)
        - listitem [ref=f1e19]:
          - link "Wishlist (0)" [ref=f1e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f1e21]: Wishlist
            - generic [ref=f1e22]: (0)
      - generic [ref=f1e24]:
        - status [ref=f1e25]
        - textbox [ref=f1e26]: Search store
        - button "Search" [ref=f1e27] [cursor=pointer]
    - list [ref=f1e29]:
      - listitem [ref=f1e30]:
        - link "Books" [ref=f1e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f1e32]:
        - link "Computers" [ref=f1e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f1e34]:
        - link "Electronics" [ref=f1e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f1e36]:
        - link "Apparel & Shoes" [ref=f1e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f1e38]:
        - link "Digital downloads" [ref=f1e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f1e40]:
        - link "Jewelry" [ref=f1e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f1e42]:
        - link "Gift Cards" [ref=f1e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f1e44]:
        - generic [ref=f1e45]:
          - strong [ref=f1e47]: Categories
          - list [ref=f1e49]:
            - listitem [ref=f1e50]:
              - link "Books" [ref=f1e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f1e52]:
              - link "Computers" [ref=f1e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f1e54]:
              - link "Electronics" [ref=f1e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f1e56]:
              - link "Apparel & Shoes" [ref=f1e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f1e58]:
              - link "Digital downloads" [ref=f1e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f1e60]:
              - link "Jewelry" [ref=f1e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f1e62]:
              - link "Gift Cards" [ref=f1e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f1e64]:
          - strong [ref=f1e66]: Manufacturers
          - list [ref=f1e68]:
            - listitem [ref=f1e69]:
              - link "Tricentis" [ref=f1e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f1e71]:
          - strong [ref=f1e73]: Newsletter
          - generic [ref=f1e75]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f1e77]
            - button "Subscribe" [ref=f1e79] [cursor=pointer]
      - generic [ref=f1e81]:
        - heading "Search" [level=1] [ref=f1e83]
        - generic [ref=f1e84]:
          - generic [ref=f1e86]:
            - generic [ref=f1e87]:
              - generic [ref=f1e88]:
                - generic [ref=f1e89]: "Search keyword:"
                - textbox "Search keyword:" [ref=f1e90]: Jeans
              - generic [ref=f1e91]:
                - checkbox "Advanced search" [ref=f1e92]
                - generic [ref=f1e93]: Advanced search
            - button "Search" [ref=f1e95] [cursor=pointer]
          - generic [ref=f1e96]:
            - generic [ref=f1e97]:
              - text: View as
              - combobox [ref=f1e98]:
                - option "Grid" [selected]
                - option "List"
            - generic [ref=f1e99]:
              - text: Sort by
              - combobox [ref=f1e100]:
                - option "Position" [selected]
                - 'option "Name: A to Z"'
                - 'option "Name: Z to A"'
                - 'option "Price: Low to High"'
                - 'option "Price: High to Low"'
                - option "Created on"
            - generic [ref=f1e101]:
              - text: Display
              - combobox [ref=f1e102]:
                - option "4"
                - option "8" [selected]
                - option "12"
              - text: per page
          - generic [ref=f1e104]:
            - generic [ref=f1e106]:
              - link [ref=f1e108] [cursor=pointer]:
                - /url: /blue-jeans
                - img "Picture of Blue Jeans" [ref=f1e109]
              - generic [ref=f1e110]:
                - heading [level=2] [ref=f1e111]:
                  - link "Blue Jeans" [ref=f1e112] [cursor=pointer]:
                    - /url: /blue-jeans
                - generic "701 review(s)" [ref=f1e113]
                - generic [ref=f1e116]:
                  - generic [ref=f1e117]: "1.00"
                  - button "Add to cart" [ref=f1e120] [cursor=pointer]
            - generic [ref=f1e122]:
              - link [ref=f1e124] [cursor=pointer]:
                - /url: /tblue-jeans
                - img "Picture of TBlue Jeans" [ref=f1e125]
              - generic [ref=f1e126]:
                - heading [level=2] [ref=f1e127]:
                  - link "TBlue Jeans" [ref=f1e128] [cursor=pointer]:
                    - /url: /tblue-jeans
                - generic "12 review(s)" [ref=f1e129]
                - generic [ref=f1e132]:
                  - generic [ref=f1e133]: "1.00"
                  - button "Add to cart" [ref=f1e136] [cursor=pointer]
  - generic [ref=f1e137]:
    - generic [ref=f1e138]:
      - generic [ref=f1e139]:
        - heading "Information" [level=3] [ref=f1e140]
        - list [ref=f1e141]:
          - listitem [ref=f1e142]:
            - link "Sitemap" [ref=f1e143] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f1e144]:
            - link "Shipping & Returns" [ref=f1e145] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f1e146]:
            - link "Privacy Notice" [ref=f1e147] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f1e148]:
            - link "Conditions of Use" [ref=f1e149] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f1e150]:
            - link "About us" [ref=f1e151] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f1e152]:
            - link "Contact us" [ref=f1e153] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f1e154]:
        - heading "Customer service" [level=3] [ref=f1e155]
        - list [ref=f1e156]:
          - listitem [ref=f1e157]:
            - link "Search" [ref=f1e158] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f1e159]:
            - link "News" [ref=f1e160] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f1e161]:
            - link "Blog" [ref=f1e162] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f1e163]:
            - link "Recently viewed products" [ref=f1e164] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f1e165]:
            - link "Compare products list" [ref=f1e166] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f1e167]:
            - link "New products" [ref=f1e168] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f1e169]:
        - heading "My account" [level=3] [ref=f1e170]
        - list [ref=f1e171]:
          - listitem [ref=f1e172]:
            - link "My account" [ref=f1e173] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f1e174]:
            - link "Orders" [ref=f1e175] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f1e176]:
            - link "Addresses" [ref=f1e177] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f1e178]:
            - link "Shopping cart" [ref=f1e179] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f1e180]:
            - link "Wishlist" [ref=f1e181] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f1e182]:
        - heading "Follow us" [level=3] [ref=f1e183]
        - list [ref=f1e184]:
          - listitem [ref=f1e185]:
            - link "Facebook" [ref=f1e186] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f1e187]:
            - link "Twitter" [ref=f1e188] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f1e189]:
            - link "RSS" [ref=f1e190] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f1e191]:
            - link "YouTube" [ref=f1e192] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f1e193]:
            - link "Google+" [ref=f1e194] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f1e195]:
      - text: Powered by
      - link "nopCommerce" [ref=f1e196] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f1e197]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1   | import { Page, Locator, expect } from '@playwright/test';
  2   | 
  3   | export class ProductPage {
  4   |     private readonly page: Page;
  5   | 
  6   |     // Locators
  7   |     private readonly lblProductName: Locator;
  8   |     private readonly lblPrice: Locator;
  9   |     private readonly txtQuantity: Locator;
  10  |     private readonly btnAddToCart: Locator;
  11  |     private readonly btnAddToWishlist: Locator;
  12  |     private readonly lblAvailability: Locator;
  13  |     private readonly lblProductDetails: Locator;
  14  | 
  15  |     constructor(page: Page) {
  16  |         this.page = page;
  17  | 
  18  |         // Initialize locators
  19  |         this.lblProductName = page.locator("div[class='search-results'] h2 a").first();
  20  |         this.lblPrice = page.locator('.price.actual-price, .price-value').first();
  21  |         this.txtQuantity = page.getByLabel('Qty:');
  22  |         this.btnAddToCart = page.getByRole('button', { name: 'Add to cart' });
  23  |         this.btnAddToWishlist = page.getByRole('button', { name: 'Add to wishlist' });
  24  |         this.lblAvailability = page.locator('[class*="availability"]');
  25  |         this.lblProductDetails = page.locator('.short-description');
  26  |     }
  27  | 
  28  |     /**
  29  |      * Gets the product name
  30  |      * @returns Promise<string> - Product name
  31  |      */
  32  |     async getProductName(): Promise<string> {
  33  |         try {
  34  |             return await this.lblProductName.textContent() || '';
  35  |         } catch (error) {
  36  |             console.log(`Error getting product name: ${error}`);
  37  |             return '';
  38  |         }
  39  |     }
  40  | 
  41  |     /**
  42  |      * Gets the product price
  43  |      * @returns Promise<string> - Product price
  44  |      */
  45  |     async getPrice(): Promise<string> {
  46  |         try {
  47  |             return await this.lblPrice.textContent() || '';
  48  |         } catch (error) {
  49  |             console.log(`Error getting price: ${error}`);
  50  |             return '';
  51  |         }
  52  |     }
  53  | 
  54  |     /**
  55  |      * Sets quantity
  56  |      * @param quantity - Quantity to set
  57  |      * @returns Promise<void>
  58  |      */
  59  |     async setQuantity(quantity: string): Promise<void> {
  60  |         await this.txtQuantity.fill(quantity);
  61  |     }
  62  | 
  63  |     /**
  64  |      * Clicks Add to Cart button
  65  |      * @returns Promise<void>
  66  |      */
  67  |     async clickAddToCart(): Promise<void> {
> 68  |         await this.btnAddToCart.click();
      |                                 ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Add to cart' }) resolved to 2 elements:
  69  |     }
  70  | 
  71  |     /**
  72  |      * Clicks Add to Wishlist button
  73  |      * @returns Promise<void>
  74  |      */
  75  |     async clickAddToWishlist(): Promise<void> {
  76  |         await this.btnAddToWishlist.click();
  77  |     }
  78  | 
  79  |     /**
  80  |      * Gets availability status
  81  |      * @returns Promise<string> - Availability text
  82  |      */
  83  |     async getAvailability(): Promise<string> {
  84  |         try {
  85  |             return await this.lblAvailability.textContent() || '';
  86  |         } catch (error) {
  87  |             console.log(`Error getting availability: ${error}`);
  88  |             return '';
  89  |         }
  90  |     }
  91  | 
  92  |     /**
  93  |      * Verifies product details page exists
  94  |      * @returns Promise<boolean> - true if the page is displayed
  95  |      */
  96  |     async isProductPageExists(): Promise<boolean> {
  97  |         try {
  98  |             return await this.lblProductName.isVisible();
  99  |         } catch (error) {
  100 |             console.log(`Error checking product page: ${error}`);
  101 |             return false;
  102 |         }
  103 |     }
  104 | 
  105 |     /**
  106 |      * Waits for add to cart notification to disappear
  107 |      * @returns Promise<void>
  108 |      */
  109 |     async waitForCartNotification(): Promise<void> {
  110 |         try {
  111 |             await this.page.waitForSelector('.bar-notification.success', { state: 'visible', timeout: 5000 });
  112 |             await this.page.waitForSelector('.bar-notification.success', { state: 'hidden', timeout: 5000 });
  113 |         } catch (error) {
  114 |             console.log(`Notification handling: ${error}`);
  115 |         }
  116 |     }
  117 | 
  118 |     async openProductDetails(): Promise<void> {
  119 |         await this.lblProductName.click();
  120 |     }
  121 | }
```