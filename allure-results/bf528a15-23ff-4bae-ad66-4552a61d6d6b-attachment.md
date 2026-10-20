# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\my-account.spec.ts >> My Account Tests >> ACCOUNT_E2E_004 - Update password and login with new password @master @sanity @regression @web
- Location: tests\web\my-account.spec.ts:116:9

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.fill: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByLabel('Confirm new password:')

```

# Page snapshot

```yaml
- generic [ref=f3e2]:
  - generic [ref=f3e3]:
    - generic [ref=f3e4]:
      - link [ref=f3e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f3e7]
      - list [ref=f3e10]:
        - listitem [ref=f3e11]:
          - link "umeshkumar1@gmail.com" [ref=f3e12] [cursor=pointer]:
            - /url: /customer/info
        - listitem [ref=f3e13]:
          - link "Log out" [ref=f3e14] [cursor=pointer]:
            - /url: /logout
        - listitem [ref=f3e15]:
          - link "Shopping cart (5)" [ref=f3e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f3e17]: Shopping cart
            - generic [ref=f3e18]: (5)
        - listitem [ref=f3e19]:
          - link "Wishlist (0)" [ref=f3e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f3e21]: Wishlist
            - generic [ref=f3e22]: (0)
      - generic [ref=f3e24]:
        - status [ref=f3e25]
        - textbox [ref=f3e26]: Search store
        - button "Search" [ref=f3e27] [cursor=pointer]
    - list [ref=f3e29]:
      - listitem [ref=f3e30]:
        - link "Books" [ref=f3e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f3e32]:
        - link "Computers" [ref=f3e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f3e34]:
        - link "Electronics" [ref=f3e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f3e36]:
        - link "Apparel & Shoes" [ref=f3e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f3e38]:
        - link "Digital downloads" [ref=f3e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f3e40]:
        - link "Jewelry" [ref=f3e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f3e42]:
        - link "Gift Cards" [ref=f3e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f3e45]:
        - strong [ref=f3e47]: My account
        - list [ref=f3e49]:
          - listitem [ref=f3e50]:
            - link "Customer info" [ref=f3e51] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f3e52]:
            - link "Addresses" [ref=f3e53] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f3e54]:
            - link "Orders" [ref=f3e55] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f3e56]:
            - link "Downloadable products" [ref=f3e57] [cursor=pointer]:
              - /url: /customer/downloadableproducts
          - listitem [ref=f3e58]:
            - link "Back in stock subscriptions" [ref=f3e59] [cursor=pointer]:
              - /url: /customer/backinstocksubscriptions
          - listitem [ref=f3e60]:
            - link "Reward points" [ref=f3e61] [cursor=pointer]:
              - /url: /customer/rewardpoints
          - listitem [ref=f3e62]:
            - link "Change password" [ref=f3e63] [cursor=pointer]:
              - /url: /customer/changepassword
      - generic [ref=f3e66]:
        - heading "My account - Change password" [level=1] [ref=f3e68]
        - generic [ref=f3e69]:
          - generic [ref=f3e71]:
            - generic [ref=f3e72]:
              - generic [ref=f3e73]: "Old password:"
              - textbox "Old password:" [ref=f3e74]: password1
              - text: "*"
            - generic [ref=f3e75]:
              - generic [ref=f3e76]: "New password:"
              - textbox "New password:" [active] [ref=f3e77]: newpassword456
              - text: "*"
            - generic [ref=f3e78]:
              - generic [ref=f3e79]: "Confirm password:"
              - textbox "Confirm password:" [ref=f3e80]
              - text: "*"
          - button "Change password" [ref=f3e82] [cursor=pointer]
  - generic [ref=f3e83]:
    - generic [ref=f3e84]:
      - generic [ref=f3e85]:
        - heading "Information" [level=3] [ref=f3e86]
        - list [ref=f3e87]:
          - listitem [ref=f3e88]:
            - link "Sitemap" [ref=f3e89] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f3e90]:
            - link "Shipping & Returns" [ref=f3e91] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f3e92]:
            - link "Privacy Notice" [ref=f3e93] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f3e94]:
            - link "Conditions of Use" [ref=f3e95] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f3e96]:
            - link "About us" [ref=f3e97] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f3e98]:
            - link "Contact us" [ref=f3e99] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f3e100]:
        - heading "Customer service" [level=3] [ref=f3e101]
        - list [ref=f3e102]:
          - listitem [ref=f3e103]:
            - link "Search" [ref=f3e104] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f3e105]:
            - link "News" [ref=f3e106] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f3e107]:
            - link "Blog" [ref=f3e108] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f3e109]:
            - link "Recently viewed products" [ref=f3e110] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f3e111]:
            - link "Compare products list" [ref=f3e112] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f3e113]:
            - link "New products" [ref=f3e114] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f3e115]:
        - heading "My account" [level=3] [ref=f3e116]
        - list [ref=f3e117]:
          - listitem [ref=f3e118]:
            - link "My account" [ref=f3e119] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f3e120]:
            - link "Orders" [ref=f3e121] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f3e122]:
            - link "Addresses" [ref=f3e123] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f3e124]:
            - link "Shopping cart" [ref=f3e125] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f3e126]:
            - link "Wishlist" [ref=f3e127] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f3e128]:
        - heading "Follow us" [level=3] [ref=f3e129]
        - list [ref=f3e130]:
          - listitem [ref=f3e131]:
            - link "Facebook" [ref=f3e132] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f3e133]:
            - link "Twitter" [ref=f3e134] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f3e135]:
            - link "RSS" [ref=f3e136] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f3e137]:
            - link "YouTube" [ref=f3e138] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f3e139]:
            - link "Google+" [ref=f3e140] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f3e141]:
      - text: Powered by
      - link "nopCommerce" [ref=f3e142] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f3e143]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  10  |     private readonly lnkChangePassword: Locator;
  11  |     private readonly lblAccountInfo: Locator;
  12  |     private readonly txtFirstName: Locator;
  13  |     private readonly txtLastName: Locator;
  14  |     private readonly txtEmail: Locator;
  15  |     private readonly btnSave: Locator;
  16  |     private readonly txtOldPassword: Locator;
  17  |     private readonly txtNewPassword: Locator;
  18  |     private readonly txtConfirmNewPassword: Locator;
  19  |     private readonly btnChangePassword: Locator;
  20  | 
  21  |     constructor(page: Page) {
  22  |         this.page = page;
  23  | 
  24  |         // Initialize locators
  25  |         this.lnkOrders = page.getByRole('link', { name: 'Orders' });
  26  |         this.lnkAddresses = page.getByRole('link', { name: 'Addresses' });
  27  |         this.lnkWishlist = page.getByRole('link', { name: 'Wishlist' });
  28  |         this.lnkChangePassword = page.getByRole('link', { name: 'Change password' });
  29  |         this.lblAccountInfo = page.locator('.account-summary, .customer-info');
  30  |         this.txtFirstName = page.getByLabel('First name:');
  31  |         this.txtLastName = page.getByLabel('Last name:');
  32  |         this.txtEmail = page.getByLabel('Email:');
  33  |         this.btnSave = page.getByRole('button', { name: 'Save' });
  34  |         this.txtOldPassword = page.getByLabel('Old password:');
  35  |         this.txtNewPassword = page.getByLabel('New password:');
  36  |         this.txtConfirmNewPassword = page.getByLabel('Confirm new password:');
  37  |         this.btnChangePassword = page.getByRole('button', { name: 'Change password' });
  38  |     }
  39  | 
  40  |     /**
  41  |      * Clicks Orders link
  42  |      * @returns Promise<void>
  43  |      */
  44  |     async clickOrders(): Promise<void> {
  45  |         await this.lnkOrders.click();
  46  |     }
  47  | 
  48  |     /**
  49  |      * Clicks Addresses link
  50  |      * @returns Promise<void>
  51  |      */
  52  |     async clickAddresses(): Promise<void> {
  53  |         await this.lnkAddresses.click();
  54  |     }
  55  | 
  56  |     /**
  57  |      * Clicks Wishlist link
  58  |      * @returns Promise<void>
  59  |      */
  60  |     async clickWishlist(): Promise<void> {
  61  |         await this.lnkWishlist.click();
  62  |     }
  63  | 
  64  |     /**
  65  |      * Clicks Change Password link
  66  |      * @returns Promise<void>
  67  |      */
  68  |     async clickChangePassword(): Promise<void> {
  69  |         await this.lnkChangePassword.click();
  70  |     }
  71  | 
  72  |     /**
  73  |      * Gets account information text
  74  |      * @returns Promise<string> - Account info text
  75  |      */
  76  |     async getAccountInfo(): Promise<string> {
  77  |         try {
  78  |             return await this.lblAccountInfo.textContent() || '';
  79  |         } catch (error) {
  80  |             console.log(`Error getting account info: ${error}`);
  81  |             return '';
  82  |         }
  83  |     }
  84  | 
  85  |     /**
  86  |      * Updates account information
  87  |      * @param firstName - First name
  88  |      * @param lastName - Last name
  89  |      * @param email - Email
  90  |      * @returns Promise<void>
  91  |      */
  92  |     async updateAccountInfo(firstName: string, lastName: string, email: string): Promise<void> {
  93  |         await this.txtFirstName.fill(firstName);
  94  |         await this.txtLastName.fill(lastName);
  95  |         await this.txtEmail.fill(email);
  96  |         await this.btnSave.click();
  97  |         await this.page.waitForLoadState('networkidle');
  98  |     }
  99  | 
  100 |     /**
  101 |      * Changes password
  102 |      * @param oldPassword - Current password
  103 |      * @param newPassword - New password
  104 |      * @param confirmPassword - Confirm new password
  105 |      * @returns Promise<void>
  106 |      */
  107 |     async changePassword(oldPassword: string, newPassword: string, confirmPassword: string): Promise<void> {
  108 |         await this.txtOldPassword.fill(oldPassword);
  109 |         await this.txtNewPassword.fill(newPassword);
> 110 |         await this.txtConfirmNewPassword.fill(confirmPassword);
      |                                          ^ Error: locator.fill: Test timeout of 90000ms exceeded.
  111 |         await this.btnChangePassword.click();
  112 |         await this.page.waitForLoadState('networkidle');
  113 |     }
  114 | 
  115 |     /**
  116 |      * Verifies my account page exists
  117 |      * @returns Promise<boolean> - true if the page is displayed
  118 |      */
  119 |     async isMyAccountPageExists(): Promise<boolean> {
  120 |         try {
  121 |             return await this.page.locator('h1:has-text("My account")').isVisible();
  122 |         } catch (error) {
  123 |             console.log(`Error checking my account page: ${error}`);
  124 |             return false;
  125 |         }
  126 |     }
  127 | }
```