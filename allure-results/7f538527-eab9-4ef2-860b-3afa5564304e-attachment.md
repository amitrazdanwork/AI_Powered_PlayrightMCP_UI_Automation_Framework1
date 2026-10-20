# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\registration.spec.ts >> Registration Tests >> REG_E2E_004 - Register using an already registered email @master @regression @web
- Location: tests\web\registration.spec.ts:133:9

# Error details

```
Error: locator.check: Error: strict mode violation: getByRole('radio', { name: 'Male' }) resolved to 2 elements:
    1) <input value="M" type="radio" name="Gender" id="gender-male"/> aka getByRole('radio', { name: 'Male', exact: true })
    2) <input value="F" type="radio" name="Gender" id="gender-female"/> aka getByRole('radio', { name: 'Female' })

Call log:
  - waiting for getByRole('radio', { name: 'Male' })

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
      - generic [ref=f1e82]:
        - heading "Register" [level=1] [ref=f1e84]
        - generic [ref=f1e85]:
          - generic [ref=f1e86]:
            - strong [ref=f1e88]: Your Personal Details
            - generic [ref=f1e89]:
              - generic [ref=f1e90]:
                - generic [ref=f1e91]: "Gender:"
                - generic [ref=f1e92]:
                  - radio "Male" [ref=f1e93]
                  - text: Male
                - generic [ref=f1e94]:
                  - radio "Female" [ref=f1e95]
                  - text: Female
              - generic [ref=f1e96]:
                - generic [ref=f1e97]: "First name:"
                - textbox "First name:" [ref=f1e98]
                - text: "*"
              - generic [ref=f1e99]:
                - generic [ref=f1e100]: "Last name:"
                - textbox "Last name:" [ref=f1e101]
                - text: "*"
              - generic [ref=f1e102]:
                - generic [ref=f1e103]: "Email:"
                - textbox "Email:" [ref=f1e104]
                - text: "*"
          - generic [ref=f1e105]:
            - strong [ref=f1e107]: Your Password
            - generic [ref=f1e108]:
              - generic [ref=f1e109]:
                - generic [ref=f1e110]: "Password:"
                - textbox "Password:" [ref=f1e111]
                - text: "*"
              - generic [ref=f1e112]:
                - generic [ref=f1e113]: "Confirm password:"
                - textbox "Confirm password:" [ref=f1e114]
                - text: "*"
          - button "Register" [ref=f1e116] [cursor=pointer]
  - generic [ref=f1e117]:
    - generic [ref=f1e118]:
      - generic [ref=f1e119]:
        - heading "Information" [level=3] [ref=f1e120]
        - list [ref=f1e121]:
          - listitem [ref=f1e122]:
            - link "Sitemap" [ref=f1e123] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f1e124]:
            - link "Shipping & Returns" [ref=f1e125] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f1e126]:
            - link "Privacy Notice" [ref=f1e127] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f1e128]:
            - link "Conditions of Use" [ref=f1e129] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f1e130]:
            - link "About us" [ref=f1e131] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f1e132]:
            - link "Contact us" [ref=f1e133] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f1e134]:
        - heading "Customer service" [level=3] [ref=f1e135]
        - list [ref=f1e136]:
          - listitem [ref=f1e137]:
            - link "Search" [ref=f1e138] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f1e139]:
            - link "News" [ref=f1e140] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f1e141]:
            - link "Blog" [ref=f1e142] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f1e143]:
            - link "Recently viewed products" [ref=f1e144] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f1e145]:
            - link "Compare products list" [ref=f1e146] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f1e147]:
            - link "New products" [ref=f1e148] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f1e149]:
        - heading "My account" [level=3] [ref=f1e150]
        - list [ref=f1e151]:
          - listitem [ref=f1e152]:
            - link "My account" [ref=f1e153] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f1e154]:
            - link "Orders" [ref=f1e155] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f1e156]:
            - link "Addresses" [ref=f1e157] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f1e158]:
            - link "Shopping cart" [ref=f1e159] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f1e160]:
            - link "Wishlist" [ref=f1e161] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f1e162]:
        - heading "Follow us" [level=3] [ref=f1e163]
        - list [ref=f1e164]:
          - listitem [ref=f1e165]:
            - link "Facebook" [ref=f1e166] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f1e167]:
            - link "Twitter" [ref=f1e168] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f1e169]:
            - link "RSS" [ref=f1e170] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f1e171]:
            - link "YouTube" [ref=f1e172] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f1e173]:
            - link "Google+" [ref=f1e174] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f1e175]:
      - text: Powered by
      - link "nopCommerce" [ref=f1e176] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f1e177]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1   | import { Page, Locator, expect } from '@playwright/test';
  2   | 
  3   | export class RegisterPage {
  4   |     private readonly page: Page;
  5   | 
  6   |     // Locators
  7   |     private readonly rdGenderMale: Locator;
  8   |     private readonly rdGenderFemale: Locator;
  9   |     private readonly txtFirstName: Locator;
  10  |     private readonly txtLastName: Locator;
  11  |     private readonly txtEmail: Locator;
  12  |     private readonly txtPassword: Locator;
  13  |     private readonly txtConfirmPassword: Locator;
  14  |     private readonly btnRegister: Locator;
  15  |     private readonly lblResult: Locator;
  16  | 
  17  |     constructor(page: Page) {
  18  |         this.page = page;
  19  | 
  20  |         // Initialize locators
  21  |         this.rdGenderMale = page.getByRole('radio', { name: 'Male' });
  22  |         this.rdGenderFemale = page.getByRole('radio', { name: 'Female' });
  23  |         this.txtFirstName = page.getByLabel('First name:');
  24  |         this.txtLastName = page.getByLabel('Last name:');
  25  |         this.txtEmail = page.getByLabel('Email:');
  26  |         this.txtPassword = page.getByLabel('Password:');
  27  |         this.txtConfirmPassword = page.getByLabel('Confirm password:');
  28  |         this.btnRegister = page.getByRole('button', { name: 'Register' });
  29  |         this.lblResult = page.locator('.result');
  30  |     }
  31  | 
  32  |     /**
  33  |      * Selects gender
  34  |      * @param gender - 'male' or 'female'
  35  |      * @returns Promise<void>
  36  |      */
  37  |     async selectGender(gender: string): Promise<void> {
  38  |         if (gender.toLowerCase() === 'male') {
> 39  |             await this.rdGenderMale.check();
      |                                     ^ Error: locator.check: Error: strict mode violation: getByRole('radio', { name: 'Male' }) resolved to 2 elements:
  40  |         } else {
  41  |             await this.rdGenderFemale.check();
  42  |         }
  43  |     }
  44  | 
  45  |     /**
  46  |      * Sets first name
  47  |      * @param firstName - First name
  48  |      * @returns Promise<void>
  49  |      */
  50  |     async setFirstName(firstName: string): Promise<void> {
  51  |         await this.txtFirstName.fill(firstName);
  52  |     }
  53  | 
  54  |     /**
  55  |      * Sets last name
  56  |      * @param lastName - Last name
  57  |      * @returns Promise<void>
  58  |      */
  59  |     async setLastName(lastName: string): Promise<void> {
  60  |         await this.txtLastName.fill(lastName);
  61  |     }
  62  | 
  63  |     /**
  64  |      * Sets email
  65  |      * @param email - Email address
  66  |      * @returns Promise<void>
  67  |      */
  68  |     async setEmail(email: string): Promise<void> {
  69  |         await this.txtEmail.fill(email);
  70  |     }
  71  | 
  72  |     /**
  73  |      * Sets password
  74  |      * @param password - Password
  75  |      * @returns Promise<void>
  76  |      */
  77  |     async setPassword(password: string): Promise<void> {
  78  |         await this.txtPassword.fill(password);
  79  |     }
  80  | 
  81  |     /**
  82  |      * Sets confirm password
  83  |      * @param confirmPassword - Confirm password
  84  |      * @returns Promise<void>
  85  |      */
  86  |     async setConfirmPassword(confirmPassword: string): Promise<void> {
  87  |         await this.txtConfirmPassword.fill(confirmPassword);
  88  |     }
  89  | 
  90  |     /**
  91  |      * Clicks the Register button
  92  |      * @returns Promise<void>
  93  |      */
  94  |     async clickRegister(): Promise<void> {
  95  |         await this.btnRegister.click();
  96  |     }
  97  | 
  98  |     /**
  99  |      * Completes registration with all fields
  100 |      * @param userData - Registration data
  101 |      * @returns Promise<void>
  102 |      */
  103 |     async register(userData: {
  104 |         gender: string;
  105 |         firstName: string;
  106 |         lastName: string;
  107 |         email: string;
  108 |         password: string;
  109 |         confirmPassword: string;
  110 |     }): Promise<void> {
  111 |         await this.selectGender(userData.gender);
  112 |         await this.setFirstName(userData.firstName);
  113 |         await this.setLastName(userData.lastName);
  114 |         await this.setEmail(userData.email);
  115 |         await this.setPassword(userData.password);
  116 |         await this.setConfirmPassword(userData.confirmPassword);
  117 |         await this.clickRegister();
  118 |     }
  119 | 
  120 |     /**
  121 |      * Gets the result message after registration
  122 |      * @returns Promise<string> - Result message
  123 |      */
  124 |     async getResultMessage(): Promise<string> {
  125 |         try {
  126 |             return await this.lblResult.textContent() || '';
  127 |         } catch (error) {
  128 |             console.log(`Error getting result message: ${error}`);
  129 |             return '';
  130 |         }
  131 |     }
  132 | 
  133 |     /**
  134 |      * Verifies registration success
  135 |      * @returns Promise<boolean> - true if registration was successful
  136 |      */
  137 |     async isRegistrationSuccessful(): Promise<boolean> {
  138 |         try {
  139 |             const message = await this.getResultMessage();
```