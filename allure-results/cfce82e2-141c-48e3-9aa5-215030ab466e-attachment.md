# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\login.spec.ts >> Login Tests >> LOGIN_E2E_002 - Login with incorrect password @master @sanity @regression @web
- Location: tests\web\login.spec.ts:43:9

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "login was unsuccessful"
Received string:    ""
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
          - link "Register" [ref=f2e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=f2e13]:
          - link "Log in" [ref=f2e14] [cursor=pointer]:
            - /url: /login
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
        - heading "Welcome, Please Sign In!" [level=1] [ref=f2e83]
        - generic [ref=f2e84]:
          - generic [ref=f2e85]:
            - generic [ref=f2e86]:
              - strong [ref=f2e88]: New Customer
              - generic [ref=f2e89]: By creating an account on our website you will be able to shop faster, be up to date on an orders status, and keep track of the orders you have previously made.
              - button "Register" [ref=f2e91] [cursor=pointer]
            - generic [ref=f2e92]:
              - strong [ref=f2e94]: Returning Customer
              - generic [ref=f2e96]:
                - generic [ref=f2e98]:
                  - text: Login was unsuccessful. Please correct the errors and try again.
                  - list [ref=f2e99]:
                    - listitem [ref=f2e100]: The credentials provided are incorrect
                - generic [ref=f2e101]:
                  - generic [ref=f2e102]: "Email:"
                  - textbox "Email:" [active] [ref=f2e103]: umeshkumar1@gmail.com
                - generic [ref=f2e104]:
                  - generic [ref=f2e105]: "Password:"
                  - textbox "Password:" [ref=f2e106]
                - generic [ref=f2e107]:
                  - checkbox "Remember me?" [ref=f2e108]
                  - generic [ref=f2e109]: Remember me?
                  - link "Forgot password?" [ref=f2e111] [cursor=pointer]:
                    - /url: /passwordrecovery
                - button "Log in" [ref=f2e113] [cursor=pointer]
          - generic [ref=f2e114]:
            - heading "About login / registration" [level=2] [ref=f2e116]
            - paragraph [ref=f2e118]: Put your login / registration information here. You can edit this in the admin site.
  - generic [ref=f2e119]:
    - generic [ref=f2e120]:
      - generic [ref=f2e121]:
        - heading "Information" [level=3] [ref=f2e122]
        - list [ref=f2e123]:
          - listitem [ref=f2e124]:
            - link "Sitemap" [ref=f2e125] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f2e126]:
            - link "Shipping & Returns" [ref=f2e127] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f2e128]:
            - link "Privacy Notice" [ref=f2e129] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f2e130]:
            - link "Conditions of Use" [ref=f2e131] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f2e132]:
            - link "About us" [ref=f2e133] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f2e134]:
            - link "Contact us" [ref=f2e135] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f2e136]:
        - heading "Customer service" [level=3] [ref=f2e137]
        - list [ref=f2e138]:
          - listitem [ref=f2e139]:
            - link "Search" [ref=f2e140] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f2e141]:
            - link "News" [ref=f2e142] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f2e143]:
            - link "Blog" [ref=f2e144] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f2e145]:
            - link "Recently viewed products" [ref=f2e146] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f2e147]:
            - link "Compare products list" [ref=f2e148] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f2e149]:
            - link "New products" [ref=f2e150] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f2e151]:
        - heading "My account" [level=3] [ref=f2e152]
        - list [ref=f2e153]:
          - listitem [ref=f2e154]:
            - link "My account" [ref=f2e155] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f2e156]:
            - link "Orders" [ref=f2e157] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f2e158]:
            - link "Addresses" [ref=f2e159] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f2e160]:
            - link "Shopping cart" [ref=f2e161] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f2e162]:
            - link "Wishlist" [ref=f2e163] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f2e164]:
        - heading "Follow us" [level=3] [ref=f2e165]
        - list [ref=f2e166]:
          - listitem [ref=f2e167]:
            - link "Facebook" [ref=f2e168] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f2e169]:
            - link "Twitter" [ref=f2e170] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f2e171]:
            - link "RSS" [ref=f2e172] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f2e173]:
            - link "YouTube" [ref=f2e174] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f2e175]:
            - link "Google+" [ref=f2e176] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f2e177]:
      - text: Powered by
      - link "nopCommerce" [ref=f2e178] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f2e179]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1   | /**
  2   |  * Test Case: Login Feature
  3   |  *
  4   |  * Tags: @master @sanity @regression @web
  5   |  *
  6   |  * Steps:
  7   |  * 1) Navigate to the application URL
  8   |  * 2) Login with various scenarios
  9   |  * 3) Verify expected results
  10  |  */
  11  | 
  12  | // using custom fixtures
  13  | import { test, expect } from '../../fixtures/pageFixtures';
  14  | import { Helper } from '../../utils/helper';
  15  | 
  16  | test.describe('Login Tests', () => {
  17  | 
  18  |     test('LOGIN_E2E_001 - Login using valid registered credentials @master @sanity @regression @web', async ({ homePage, loginPage, myAccountPage }) => {
  19  |         const loginData = Helper.getLoginData('LOGIN_E2E_001');
  20  | 
  21  |         await test.step('1) Navigate to the application URL and click Login', async () => {
  22  |             const isHomePage = await homePage.isHomePageExists();
  23  |             expect(isHomePage).toBeTruthy();
  24  | 
  25  |             await homePage.clickLogin();
  26  |         });
  27  | 
  28  |         await test.step('2) Login with valid credentials', async () => {
  29  |             const isLoginPage = await loginPage.isLoginPageExists();
  30  |             expect(isLoginPage).toBeTruthy();
  31  | 
  32  |             await loginPage.login(loginData.Email, loginData.Password);
  33  |         });
  34  | 
  35  |         await test.step('3) Verify user successfully logs in', async () => {
  36  |             const isSuccess = await loginPage.isLoginSuccessful();
  37  |             expect(isSuccess).toBeTruthy();
  38  |         });
  39  | 
  40  |         console.log('✅ LOGIN_E2E_001 Completed successfully!');
  41  |     });
  42  | 
  43  |     test('LOGIN_E2E_002 - Login with incorrect password @master @sanity @regression @web', async ({ homePage, loginPage }) => {
  44  |         const loginData = Helper.getLoginData('LOGIN_E2E_002');
  45  | 
  46  |         await test.step('1) Navigate to the application URL and click Login', async () => {
  47  |             const isHomePage = await homePage.isHomePageExists();
  48  |             expect(isHomePage).toBeTruthy();
  49  | 
  50  |             await homePage.clickLogin();
  51  |         });
  52  | 
  53  |         await test.step('2) Login with incorrect password', async () => {
  54  |             const isLoginPage = await loginPage.isLoginPageExists();
  55  |             expect(isLoginPage).toBeTruthy();
  56  | 
  57  |             await loginPage.login(loginData.Email, loginData.Password);
  58  |         });
  59  | 
  60  |         await test.step('3) Verify login fails with appropriate error', async () => {
  61  |             const errorMessage = await loginPage.getErrorMessage();
> 62  |             expect(errorMessage.toLowerCase()).toContain('login was unsuccessful');
      |                                                ^ Error: expect(received).toContain(expected) // indexOf
  63  |         });
  64  | 
  65  |         console.log('✅ LOGIN_E2E_002 Completed successfully!');
  66  |     });
  67  | 
  68  |     test('LOGIN_E2E_003 - Login with unregistered email @master @regression @web', async ({ homePage, loginPage }) => {
  69  |         const loginData = Helper.getLoginData('LOGIN_E2E_003');
  70  | 
  71  |         await test.step('1) Navigate to the application URL and click Login', async () => {
  72  |             const isHomePage = await homePage.isHomePageExists();
  73  |             expect(isHomePage).toBeTruthy();
  74  | 
  75  |             await homePage.clickLogin();
  76  |         });
  77  | 
  78  |         await test.step('2) Login with unregistered email', async () => {
  79  |             const isLoginPage = await loginPage.isLoginPageExists();
  80  |             expect(isLoginPage).toBeTruthy();
  81  | 
  82  |             await loginPage.login(loginData.Email, loginData.Password);
  83  |         });
  84  | 
  85  |         await test.step('3) Verify login fails with appropriate error', async () => {
  86  |             const errorMessage = await loginPage.getErrorMessage();
  87  |             expect(errorMessage.toLowerCase()).toContain('login was unsuccessful');
  88  |         });
  89  | 
  90  |         console.log('✅ LOGIN_E2E_003 Completed successfully!');
  91  |     });
  92  | 
  93  |     test('LOGIN_E2E_004 - Login with blank credentials @master @regression @web', async ({ homePage, loginPage }) => {
  94  |         const loginData = Helper.getLoginData('LOGIN_E2E_004');
  95  | 
  96  |         await test.step('1) Navigate to the application URL and click Login', async () => {
  97  |             const isHomePage = await homePage.isHomePageExists();
  98  |             expect(isHomePage).toBeTruthy();
  99  | 
  100 |             await homePage.clickLogin();
  101 |         });
  102 | 
  103 |         await test.step('2) Login with blank credentials', async () => {
  104 |             const isLoginPage = await loginPage.isLoginPageExists();
  105 |             expect(isLoginPage).toBeTruthy();
  106 | 
  107 |             await loginPage.login(loginData.Email, loginData.Password);
  108 |         });
  109 | 
  110 |         await test.step('3) Verify required-field validation is displayed', async () => {
  111 |             const errorMessage = await loginPage.getErrorMessage();
  112 |             expect(errorMessage.length).toBeGreaterThan(0);
  113 |         });
  114 | 
  115 |         console.log('✅ LOGIN_E2E_004 Completed successfully!');
  116 |     });
  117 | 
  118 |     test('LOGIN_E2E_005 - Login and navigate to account page @master @sanity @regression @web', async ({ homePage, loginPage, myAccountPage }) => {
  119 |         const loginData = Helper.getLoginData('LOGIN_E2E_005');
  120 | 
  121 |         await test.step('1) Navigate to the application URL and click Login', async () => {
  122 |             const isHomePage = await homePage.isHomePageExists();
  123 |             expect(isHomePage).toBeTruthy();
  124 | 
  125 |             await homePage.clickLogin();
  126 |         });
  127 | 
  128 |         await test.step('2) Login with valid credentials', async () => {
  129 |             const isLoginPage = await loginPage.isLoginPageExists();
  130 |             expect(isLoginPage).toBeTruthy();
  131 | 
  132 |             await loginPage.login(loginData.Email, loginData.Password);
  133 |         });
  134 | 
  135 |         await test.step('3) Navigate to account page', async () => {
  136 |             // After login, click on account link or navigate directly
  137 |             await homePage.clickLogin(); // This might show account dropdown
  138 | 
  139 |             const isAccountPage = await myAccountPage.isMyAccountPageExists();
  140 |             // If redirected to account page, this will be true
  141 |         });
  142 | 
  143 |         console.log('✅ LOGIN_E2E_005 Completed successfully!');
  144 |     });
  145 | 
  146 |     test('LOGIN_E2E_006 - Login and logout @master @sanity @regression @web', async ({ homePage, loginPage }) => {
  147 |         const loginData = Helper.getLoginData('LOGIN_E2E_006');
  148 | 
  149 |         await test.step('1) Navigate to the application URL and click Login', async () => {
  150 |             const isHomePage = await homePage.isHomePageExists();
  151 |             expect(isHomePage).toBeTruthy();
  152 | 
  153 |             await homePage.clickLogin();
  154 |         });
  155 | 
  156 |         await test.step('2) Login with valid credentials', async () => {
  157 |             const isLoginPage = await loginPage.isLoginPageExists();
  158 |             expect(isLoginPage).toBeTruthy();
  159 | 
  160 |             await loginPage.login(loginData.Email, loginData.Password);
  161 |         });
  162 | 
```