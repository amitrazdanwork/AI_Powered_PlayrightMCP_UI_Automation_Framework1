# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\my-account.spec.ts >> My Account Tests >> ACCOUNT_E2E_005 - Open order history from account @master @sanity @regression @web
- Location: tests\web\my-account.spec.ts:189:9

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.fill: Test timeout of 90000ms exceeded.
Call log:
  - waiting for locator('input#BillingNewAddress_FirstName')
    - locator resolved to <input type="text" data-val="true" value="TestUser" class="text-box single-line" id="BillingNewAddress_FirstName" name="BillingNewAddress.FirstName" data-val-required="First name is required."/>
    - fill("John")
  - attempting fill action
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
      - waiting 100ms
    139 × waiting for element to be visible, enabled and editable
        - element is not visible
      - retrying fill action
        - waiting 500ms
    - waiting for element to be visible, enabled and editable

```

# Page snapshot

```yaml
- generic [ref=f5e2]:
  - generic [ref=f5e3]:
    - generic [ref=f5e4]:
      - link [ref=f5e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f5e7]
      - list [ref=f5e10]:
        - listitem [ref=f5e11]:
          - link "testuser1792050816292@gmail.com" [ref=f5e12] [cursor=pointer]:
            - /url: /customer/info
        - listitem [ref=f5e13]:
          - link "Log out" [ref=f5e14] [cursor=pointer]:
            - /url: /logout
        - listitem [ref=f5e15]:
          - link "Shopping cart (11)" [ref=f5e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f5e17]: Shopping cart
            - generic [ref=f5e18]: (11)
        - listitem [ref=f5e19]:
          - link "Wishlist (0)" [ref=f5e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f5e21]: Wishlist
            - generic [ref=f5e22]: (0)
      - generic [ref=f5e24]:
        - status [ref=f5e25]
        - textbox [ref=f5e26]: Search store
        - button "Search" [ref=f5e27] [cursor=pointer]
    - list [ref=f5e29]:
      - listitem [ref=f5e30]:
        - link "Books" [ref=f5e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f5e32]:
        - link "Computers" [ref=f5e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f5e34]:
        - link "Electronics" [ref=f5e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f5e36]:
        - link "Apparel & Shoes" [ref=f5e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f5e38]:
        - link "Digital downloads" [ref=f5e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f5e40]:
        - link "Jewelry" [ref=f5e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f5e42]:
        - link "Gift Cards" [ref=f5e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic [ref=f5e45]:
      - heading "Checkout" [level=1] [ref=f5e47]
      - list [ref=f5e49]:
        - listitem [ref=f5e50]:
          - generic [ref=f5e51]:
            - generic [ref=f5e52]: "1"
            - heading "Billing address" [level=2] [ref=f5e53]
            - text: .
          - generic [ref=f5e54]:
            - generic [ref=f5e58]:
              - text: Select a billing address from your address book or enter a new address.
              - combobox "Select a billing address from your address book or enter a new address." [ref=f5e60]:
                - option "John Doe, 123 Test Street, New York 10001, United States" [selected]
                - option "Test User, 123 Test St, New York, AA (Armed Forces Americas) 10001, United States"
                - option "New Address"
            - button "Continue" [ref=f5e62] [cursor=pointer]
        - listitem [ref=f5e63]:
          - generic [ref=f5e64]:
            - generic [ref=f5e65]: "2"
            - heading "Shipping address" [level=2] [ref=f5e66]
            - text: .
        - listitem [ref=f5e67]:
          - generic [ref=f5e68]:
            - generic [ref=f5e69]: "3"
            - heading "Shipping method" [level=2] [ref=f5e70]
            - text: .
        - listitem [ref=f5e71]:
          - generic [ref=f5e72]:
            - generic [ref=f5e73]: "4"
            - heading "Payment method" [level=2] [ref=f5e74]
            - text: .
        - listitem [ref=f5e75]:
          - generic [ref=f5e76]:
            - generic [ref=f5e77]: "5"
            - heading "Payment information" [level=2] [ref=f5e78]
            - text: .
        - listitem [ref=f5e79]:
          - generic [ref=f5e80]:
            - generic [ref=f5e81]: "6"
            - heading "Confirm order" [level=2] [ref=f5e82]
            - text: .
  - generic [ref=f5e83]:
    - generic [ref=f5e84]:
      - generic [ref=f5e85]:
        - heading "Information" [level=3] [ref=f5e86]
        - list [ref=f5e87]:
          - listitem [ref=f5e88]:
            - link "Sitemap" [ref=f5e89] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f5e90]:
            - link "Shipping & Returns" [ref=f5e91] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f5e92]:
            - link "Privacy Notice" [ref=f5e93] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f5e94]:
            - link "Conditions of Use" [ref=f5e95] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f5e96]:
            - link "About us" [ref=f5e97] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f5e98]:
            - link "Contact us" [ref=f5e99] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f5e100]:
        - heading "Customer service" [level=3] [ref=f5e101]
        - list [ref=f5e102]:
          - listitem [ref=f5e103]:
            - link "Search" [ref=f5e104] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f5e105]:
            - link "News" [ref=f5e106] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f5e107]:
            - link "Blog" [ref=f5e108] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f5e109]:
            - link "Recently viewed products" [ref=f5e110] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f5e111]:
            - link "Compare products list" [ref=f5e112] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f5e113]:
            - link "New products" [ref=f5e114] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f5e115]:
        - heading "My account" [level=3] [ref=f5e116]
        - list [ref=f5e117]:
          - listitem [ref=f5e118]:
            - link "My account" [ref=f5e119] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f5e120]:
            - link "Orders" [ref=f5e121] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f5e122]:
            - link "Addresses" [ref=f5e123] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f5e124]:
            - link "Shopping cart" [ref=f5e125] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f5e126]:
            - link "Wishlist" [ref=f5e127] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f5e128]:
        - heading "Follow us" [level=3] [ref=f5e129]
        - list [ref=f5e130]:
          - listitem [ref=f5e131]:
            - link "Facebook" [ref=f5e132] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f5e133]:
            - link "Twitter" [ref=f5e134] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f5e135]:
            - link "RSS" [ref=f5e136] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f5e137]:
            - link "YouTube" [ref=f5e138] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f5e139]:
            - link "Google+" [ref=f5e140] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f5e141]:
      - text: Powered by
      - link "nopCommerce" [ref=f5e142] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f5e143]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1   | import { Page, Locator, expect } from '@playwright/test';
  2   | 
  3   | export class CheckoutPage {
  4   |     readonly page: Page;
  5   | 
  6   |     // Locators - Billing Address
  7   |     private readonly txtBillingFirstName: Locator;
  8   |     private readonly txtBillingLastName: Locator;
  9   |     private readonly txtBillingEmail: Locator;
  10  |     private readonly txtBillingCompany: Locator;
  11  |     private readonly txtBillingAddress1: Locator;
  12  |     private readonly txtBillingAddress2: Locator;
  13  |     private readonly txtBillingCity: Locator;
  14  |     private readonly txtBillingState: Locator;
  15  |     private readonly txtBillingZip: Locator;
  16  |     private readonly txtBillingCountry: Locator;
  17  |     private readonly txtBillingPhone: Locator;
  18  |     private readonly txtBillingFax: Locator;
  19  |     private readonly btnBillingContinue: Locator;
  20  | 
  21  |     // Locators - Shipping Address
  22  |     private readonly btnShippingContinue: Locator;
  23  | 
  24  |     // Locators - Shipping Method
  25  |     private readonly btnShippingMethodContinue: Locator;
  26  | 
  27  |     // Locators - Payment Method
  28  |     private readonly btnPaymentMethodContinue: Locator;
  29  | 
  30  |     // Locators - Payment Information
  31  |     private readonly btnPaymentInfoContinue: Locator;
  32  | 
  33  |     // Locators - Confirm Order
  34  |     private readonly btnConfirmOrder: Locator;
  35  | 
  36  |     // Locators - Order Confirmation
  37  |     private readonly lblOrderNumber: Locator;
  38  |     private readonly lblOrderConfirmation: Locator;
  39  | 
  40  |     constructor(page: Page) {
  41  |         this.page = page;
  42  | 
  43  |         // Initialize locators - Billing
  44  |         this.txtBillingFirstName = page.locator("input#BillingNewAddress_FirstName");
  45  |         this.txtBillingLastName = page.locator("input#BillingNewAddress_LastName");
  46  |         this.txtBillingEmail = page.locator("input#BillingNewAddress_Email");;     
  47  |         this.txtBillingCompany = page.locator("input#BillingNewAddress_Company");
  48  |         this.txtBillingAddress1 = page.getByLabel('Address 1:');
  49  |         this.txtBillingAddress2 = page.getByLabel('Address 2:');
  50  |         this.txtBillingCity = page.getByLabel('City:');
  51  |         this.txtBillingState = page.locator("select#BillingNewAddress_StateProvinceId");
  52  |         this.txtBillingZip = page.getByLabel('Zip / postal code:');
  53  |         this.txtBillingCountry = page.getByLabel('Country:');
  54  |         this.txtBillingPhone = page.getByLabel('Phone number:');
  55  |         this.txtBillingFax = page.getByLabel('Fax number:');
  56  |         this.btnBillingContinue = page.locator('input.new-address-next-step-button').first();
  57  | 
  58  |         // Shipping
  59  |         this.btnShippingContinue = page.locator('input.new-address-next-step-button').nth(1);
  60  | 
  61  |         // Shipping Method
  62  |         this.btnShippingMethodContinue = page.locator('input.shipping-method-next-step-button');
  63  | 
  64  |         // Payment Method
  65  |         this.btnPaymentMethodContinue = page.locator('input.payment-method-next-step-button');
  66  | 
  67  |         // Payment Info
  68  |         this.btnPaymentInfoContinue = page.locator('input.payment-info-next-step-button');
  69  | 
  70  |         // Confirm Order
  71  |         this.btnConfirmOrder = page.locator('input.confirm-order-next-step-button');
  72  | 
  73  |         // Order Confirmation
  74  |         this.lblOrderNumber = page.locator('.order-number');
  75  |         this.lblOrderConfirmation = page.locator('.order-complete-message, .section.order-completion-content');
  76  |     }
  77  | 
  78  |     /**
  79  |      * Fills billing address
  80  |      * @param billingData - Billing address data
  81  |      * @returns Promise<void>
  82  |      */
  83  |     async fillBillingAddress(billingData: {
  84  |         firstName: string;
  85  |         lastName: string;
  86  |         email: string;
  87  |         company?: string;
  88  |         address1: string;
  89  |         address2?: string;
  90  |         city: string;
  91  |         state: string;
  92  |         zip: string;
  93  |         country: string;
  94  |         phone: string;
  95  |         fax?: string;
  96  |     }): Promise<void> {
> 97  |         await this.txtBillingFirstName.fill(billingData.firstName);
      |                                        ^ Error: locator.fill: Test timeout of 90000ms exceeded.
  98  |         await this.txtBillingLastName.fill(billingData.lastName);
  99  |         await this.txtBillingEmail.fill(billingData.email);
  100 |         if (billingData.company) await this.txtBillingCompany.fill(billingData.company);
  101 |         await this.txtBillingAddress1.fill(billingData.address1);
  102 |         if (billingData.address2) await this.txtBillingAddress2.fill(billingData.address2);
  103 |         await this.txtBillingCity.fill(billingData.city);
  104 |       //  await this.txtBillingState.fill(billingData.state);
  105 |         await this.txtBillingZip.fill(billingData.zip);
  106 |         await this.txtBillingCountry.selectOption(billingData.country);
  107 |         await this.txtBillingPhone.fill(billingData.phone);
  108 |         if (billingData.fax) await this.txtBillingFax.fill(billingData.fax);
  109 |     }
  110 | 
  111 |     /**
  112 |      * Clicks billing continue
  113 |      * @returns Promise<void>
  114 |      */
  115 |     async clickBillingContinue(): Promise<void> {
  116 |         await this.btnBillingContinue.click();
  117 |         await this.page.waitForLoadState('networkidle');
  118 |     }
  119 | 
  120 |     /**
  121 |      * Clicks shipping continue
  122 |      * @returns Promise<void>
  123 |      */
  124 |     async clickShippingContinue(): Promise<void> {
  125 |         await this.btnShippingContinue.click();
  126 |         await this.page.waitForLoadState('networkidle');
  127 |     }
  128 | 
  129 |     /**
  130 |      * Clicks shipping method continue
  131 |      * @returns Promise<void>
  132 |      */
  133 |     async clickShippingMethodContinue(): Promise<void> {
  134 |         await this.btnShippingMethodContinue.click();
  135 |         await this.page.waitForLoadState('networkidle');
  136 |     }
  137 | 
  138 |     /**
  139 |      * Clicks payment method continue
  140 |      * @returns Promise<void>
  141 |      */
  142 |     async clickPaymentMethodContinue(): Promise<void> {
  143 |         await this.btnPaymentMethodContinue.click();
  144 |         await this.page.waitForLoadState('networkidle');
  145 |     }
  146 | 
  147 |     /**
  148 |      * Clicks payment info continue
  149 |      * @returns Promise<void>
  150 |      */
  151 |     async clickPaymentInfoContinue(): Promise<void> {
  152 |         await this.btnPaymentInfoContinue.click();
  153 |         await this.page.waitForLoadState('networkidle');
  154 |     }
  155 | 
  156 |     /**
  157 |      * Clicks confirm order
  158 |      * @returns Promise<void>
  159 |      */
  160 |     async clickConfirmOrder(): Promise<void> {
  161 |         await this.btnConfirmOrder.click();
  162 |         await this.page.waitForLoadState('networkidle');
  163 |     }
  164 | 
  165 |     /**
  166 |      * Gets order number
  167 |      * @returns Promise<string> - Order number
  168 |      */
  169 |     async getOrderNumber(): Promise<string> {
  170 |         try {
  171 |             const text = await this.lblOrderNumber.textContent() || '';
  172 |             const match = text.match(/Order number:?\s*(\d+)/i);
  173 |             return match ? match[1] : text;
  174 |         } catch (error) {
  175 |             console.log(`Error getting order number: ${error}`);
  176 |             return '';
  177 |         }
  178 |     }
  179 | 
  180 |     /**
  181 |      * Verifies order confirmation
  182 |      * @returns Promise<boolean> - true if order was confirmed
  183 |      */
  184 |     async isOrderConfirmed(): Promise<boolean> {
  185 |         try {
  186 |             await this.lblOrderConfirmation.isVisible({ timeout: 10000 });
  187 |             return true;
  188 |         } catch (error) {
  189 |             console.log(`Error checking order confirmation: ${error}`);
  190 |             return false;
  191 |         }
  192 |     }
  193 | 
  194 |     /**
  195 |      * Completes checkout flow
  196 |      * @param billingData - Billing data
  197 |      * @returns Promise<void>
```