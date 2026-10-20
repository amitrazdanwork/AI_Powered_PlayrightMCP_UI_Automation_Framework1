# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\my-account.spec.ts >> My Account Tests >> ACCOUNT_E2E_003 - Update account information @master @sanity @regression @web
- Location: tests\web\my-account.spec.ts:80:9

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=f4e2]:
  - generic [ref=f4e3]:
    - generic [ref=f4e4]:
      - link [ref=f4e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f4e7]
      - list [ref=f4e10]:
        - listitem [ref=f4e11]:
          - link "umeshkumar1@gmail.com" [ref=f4e12] [cursor=pointer]:
            - /url: /customer/info
        - listitem [ref=f4e13]:
          - link "Log out" [ref=f4e14] [cursor=pointer]:
            - /url: /logout
        - listitem [ref=f4e15]:
          - link "Shopping cart (5)" [ref=f4e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f4e17]: Shopping cart
            - generic [ref=f4e18]: (5)
        - listitem [ref=f4e19]:
          - link "Wishlist (0)" [ref=f4e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f4e21]: Wishlist
            - generic [ref=f4e22]: (0)
      - generic [ref=f4e24]:
        - status [ref=f4e25]
        - textbox [ref=f4e26]: Search store
        - button "Search" [ref=f4e27] [cursor=pointer]
    - list [ref=f4e29]:
      - listitem [ref=f4e30]:
        - link "Books" [ref=f4e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f4e32]:
        - link "Computers" [ref=f4e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f4e34]:
        - link "Electronics" [ref=f4e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f4e36]:
        - link "Apparel & Shoes" [ref=f4e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f4e38]:
        - link "Digital downloads" [ref=f4e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f4e40]:
        - link "Jewelry" [ref=f4e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f4e42]:
        - link "Gift Cards" [ref=f4e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f4e45]:
        - strong [ref=f4e47]: My account
        - list [ref=f4e49]:
          - listitem [ref=f4e50]:
            - link "Customer info" [ref=f4e51] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f4e52]:
            - link "Addresses" [ref=f4e53] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f4e54]:
            - link "Orders" [ref=f4e55] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f4e56]:
            - link "Downloadable products" [ref=f4e57] [cursor=pointer]:
              - /url: /customer/downloadableproducts
          - listitem [ref=f4e58]:
            - link "Back in stock subscriptions" [ref=f4e59] [cursor=pointer]:
              - /url: /customer/backinstocksubscriptions
          - listitem [ref=f4e60]:
            - link "Reward points" [ref=f4e61] [cursor=pointer]:
              - /url: /customer/rewardpoints
          - listitem [ref=f4e62]:
            - link "Change password" [ref=f4e63] [cursor=pointer]:
              - /url: /customer/changepassword
      - generic [ref=f4e65]:
        - heading "My account - Customer info" [level=1] [ref=f4e67]
        - generic [ref=f4e69]:
          - generic [ref=f4e70]:
            - strong [ref=f4e72]: Your Personal Details
            - generic [ref=f4e73]:
              - generic [ref=f4e74]:
                - generic [ref=f4e75]: "Gender:"
                - generic [ref=f4e76]:
                  - radio "Male" [checked] [ref=f4e77]
                  - text: Male
                - generic [ref=f4e78]:
                  - radio "Female" [ref=f4e79]
                  - text: Female
              - generic [ref=f4e80]:
                - generic [ref=f4e81]: "First name:"
                - textbox "First name:" [ref=f4e82]: TestFirst
                - text: "*"
              - generic [ref=f4e83]:
                - generic [ref=f4e84]: "Last name:"
                - textbox "Last name:" [ref=f4e85]: TestLast
                - text: "*"
              - generic [ref=f4e86]:
                - generic [ref=f4e87]: "Email:"
                - textbox "Email:" [ref=f4e88]: umeshkumar1@gmail.com
                - text: "*"
          - button "Save" [ref=f4e90] [cursor=pointer]
  - generic [ref=f4e91]:
    - generic [ref=f4e92]:
      - generic [ref=f4e93]:
        - heading "Information" [level=3] [ref=f4e94]
        - list [ref=f4e95]:
          - listitem [ref=f4e96]:
            - link "Sitemap" [ref=f4e97] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f4e98]:
            - link "Shipping & Returns" [ref=f4e99] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f4e100]:
            - link "Privacy Notice" [ref=f4e101] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f4e102]:
            - link "Conditions of Use" [ref=f4e103] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f4e104]:
            - link "About us" [ref=f4e105] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f4e106]:
            - link "Contact us" [ref=f4e107] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f4e108]:
        - heading "Customer service" [level=3] [ref=f4e109]
        - list [ref=f4e110]:
          - listitem [ref=f4e111]:
            - link "Search" [ref=f4e112] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f4e113]:
            - link "News" [ref=f4e114] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f4e115]:
            - link "Blog" [ref=f4e116] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f4e117]:
            - link "Recently viewed products" [ref=f4e118] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f4e119]:
            - link "Compare products list" [ref=f4e120] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f4e121]:
            - link "New products" [ref=f4e122] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f4e123]:
        - heading "My account" [level=3] [ref=f4e124]
        - list [ref=f4e125]:
          - listitem [ref=f4e126]:
            - link "My account" [ref=f4e127] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f4e128]:
            - link "Orders" [ref=f4e129] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f4e130]:
            - link "Addresses" [ref=f4e131] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f4e132]:
            - link "Shopping cart" [ref=f4e133] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f4e134]:
            - link "Wishlist" [ref=f4e135] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f4e136]:
        - heading "Follow us" [level=3] [ref=f4e137]
        - list [ref=f4e138]:
          - listitem [ref=f4e139]:
            - link "Facebook" [ref=f4e140] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f4e141]:
            - link "Twitter" [ref=f4e142] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f4e143]:
            - link "RSS" [ref=f4e144] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f4e145]:
            - link "YouTube" [ref=f4e146] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f4e147]:
            - link "Google+" [ref=f4e148] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f4e149]:
      - text: Powered by
      - link "nopCommerce" [ref=f4e150] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f4e151]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  10  |  */
  11  | 
  12  | // using custom fixtures
  13  | import { test, expect } from '../../fixtures/pageFixtures';
  14  | import { Helper } from '../../utils/helper';
  15  | 
  16  | test.describe('My Account Tests', () => {
  17  | 
  18  |     test('ACCOUNT_E2E_001 - Login → Open My Account @master @sanity @regression @web', async ({ homePage, loginPage, myAccountPage }) => {
  19  |        
  20  |         const loginData = Helper.getLoginDetails();
  21  | 
  22  |         await test.step('1) Navigate to the application URL and login', async () => {
  23  |             
  24  |             const isHomePage = await homePage.isHomePageExists();
  25  |             expect(isHomePage).toBeTruthy();
  26  | 
  27  |             await homePage.clickLogin();
  28  |         });
  29  | 
  30  |         await test.step('2) Login with valid credentials', async () => {
  31  |             const isLoginPage = await loginPage.isLoginPageExists();
  32  |             expect(isLoginPage).toBeTruthy();
  33  | 
  34  |             await loginPage.login(loginData.email, loginData.password);
  35  |         });
  36  | 
  37  |         await test.step('3) Verify account page opens successfully', async () => {
  38  |             // After login, user should be on account page or can navigate there
  39  |             await loginPage.page.goto(`${process.env.WEB_APP_URL}/customer/info`);
  40  |             await loginPage.page.waitForLoadState('networkidle');
  41  | 
  42  |             const isAccountPage = await myAccountPage.isMyAccountPageExists();
  43  |             expect(isAccountPage).toBeTruthy();
  44  |         });
  45  | 
  46  |         console.log('✅ ACCOUNT_E2E_001 Completed successfully!');
  47  |     });
  48  | 
  49  |     test('ACCOUNT_E2E_002 - Verify registered user information @master @sanity @regression @web', async ({ homePage, loginPage, myAccountPage }) => {
  50  |         const loginData = Helper.getLoginDetails();
  51  | 
  52  |         await test.step('1) Navigate to the application URL and login', async () => {
  53  |             const isHomePage = await homePage.isHomePageExists();
  54  |             expect(isHomePage).toBeTruthy();
  55  | 
  56  |             await homePage.clickLogin();
  57  |         });
  58  | 
  59  |         await test.step('2) Login with valid credentials', async () => {
  60  |             const isLoginPage = await loginPage.isLoginPageExists();
  61  |             expect(isLoginPage).toBeTruthy();
  62  | 
  63  |             await loginPage.login(loginData.email, loginData.password);
  64  |         });
  65  | 
  66  |         await test.step('3) Verify account information is displayed', async () => {
  67  |             await loginPage.page.goto(`${process.env.WEB_APP_URL}/customer/info`);
  68  |             await loginPage.page.waitForLoadState('networkidle');
  69  | 
  70  |             const isAccountPage = await myAccountPage.isMyAccountPageExists();
  71  |             expect(isAccountPage).toBeTruthy();
  72  | 
  73  |             const accountInfo = await myAccountPage.getAccountInfo();
  74  |             expect(accountInfo.length).toBeGreaterThan(0);
  75  |         });
  76  | 
  77  |         console.log('✅ ACCOUNT_E2E_002 Completed successfully!');
  78  |     });
  79  | 
  80  |     test('ACCOUNT_E2E_003 - Update account information @master @sanity @regression @web', async ({ homePage, loginPage, myAccountPage }) => {
  81  |         const loginData = Helper.getLoginDetails();
  82  | 
  83  |         await test.step('1) Navigate to the application URL and login', async () => {
  84  |             const isHomePage = await homePage.isHomePageExists();
  85  |             expect(isHomePage).toBeTruthy();
  86  | 
  87  |             await homePage.clickLogin();
  88  |         });
  89  | 
  90  |         await test.step('2) Login with valid credentials', async () => {
  91  |             const isLoginPage = await loginPage.isLoginPageExists();
  92  |             expect(isLoginPage).toBeTruthy();
  93  | 
  94  |             await loginPage.login(loginData.email, loginData.password);
  95  |         });
  96  | 
  97  |         await test.step('3) Update account information', async () => {
  98  |             await loginPage.page.goto(`${process.env.WEB_APP_URL}/customer/info`);
  99  |             await loginPage.page.waitForLoadState('networkidle');
  100 | 
  101 |             const isAccountPage = await myAccountPage.isMyAccountPageExists();
  102 |             expect(isAccountPage).toBeTruthy();
  103 | 
  104 |             await myAccountPage.updateAccountInfo('TestFirst', 'TestLast', loginData.email);
  105 |         });
  106 | 
  107 |         await test.step('4) Verify updated information is saved', async () => {
  108 |             const successMessage = homePage.page.locator('.bar-notification.success');
  109 |             const isVisible = await successMessage.isVisible();
> 110 |             expect(isVisible).toBeTruthy();
      |                               ^ Error: expect(received).toBeTruthy()
  111 |         });
  112 | 
  113 |         console.log('✅ ACCOUNT_E2E_003 Completed successfully!');
  114 |     });
  115 | 
  116 |     test('ACCOUNT_E2E_004 - Update password and login with new password @master @sanity @regression @web', async ({ homePage, loginPage, myAccountPage }) => {
  117 |         const loginData = Helper.getLoginDetails();
  118 |         const newPassword = 'newpassword456';
  119 | 
  120 |         await test.step('1) Navigate to the application URL and login', async () => {
  121 |             const isHomePage = await homePage.isHomePageExists();
  122 |             expect(isHomePage).toBeTruthy();
  123 | 
  124 |             await homePage.clickLogin();
  125 |         });
  126 | 
  127 |         await test.step('2) Login with valid credentials', async () => {
  128 |             const isLoginPage = await loginPage.isLoginPageExists();
  129 |             expect(isLoginPage).toBeTruthy();
  130 | 
  131 |             await loginPage.login(loginData.email, loginData.password);
  132 |         });
  133 | 
  134 |         await test.step('3) Update password', async () => {
  135 |             await loginPage.page.goto(`${process.env.WEB_APP_URL}/customer/changepassword`);
  136 |             await loginPage.page.waitForLoadState('networkidle');
  137 | 
  138 |             await myAccountPage.changePassword(loginData.password, newPassword, newPassword);
  139 |         });
  140 | 
  141 |         await test.step('4) Verify new password works', async () => {
  142 |             // Logout first
  143 |             const logoutLink = homePage.page.getByRole('link', { name: 'Log out' });
  144 |             if (await logoutLink.isVisible()) {
  145 |                 await logoutLink.click();
  146 |                 await homePage.page.waitForLoadState('networkidle');
  147 |             }
  148 | 
  149 |             // Login again with new password
  150 |             await homePage.clickLogin();
  151 |             const isLoginPage = await loginPage.isLoginPageExists();
  152 |             expect(isLoginPage).toBeTruthy();
  153 | 
  154 |             await loginPage.login(loginData.email, newPassword);
  155 |             const isSuccess = await loginPage.isLoginSuccessful();
  156 |             expect(isSuccess).toBeTruthy();
  157 |         });
  158 | 
  159 |         console.log('✅ ACCOUNT_E2E_004 Completed successfully!');
  160 |     });
  161 | 
  162 |     test('ACCOUNT_E2E_005 - Open order history from account @master @sanity @regression @web', async ({ homePage, loginPage, myAccountPage }) => {
  163 |         const loginData = Helper.getLoginDetails();
  164 | 
  165 |         await test.step('1) Navigate to the application URL and login', async () => {
  166 |             const isHomePage = await homePage.isHomePageExists();
  167 |             expect(isHomePage).toBeTruthy();
  168 | 
  169 |             await homePage.clickLogin();
  170 |         });
  171 | 
  172 |         await test.step('2) Login with valid credentials', async () => {
  173 |             const isLoginPage = await loginPage.isLoginPageExists();
  174 |             expect(isLoginPage).toBeTruthy();
  175 | 
  176 |             await loginPage.login(loginData.email, loginData.password);
  177 |         });
  178 | 
  179 |         await test.step('3) Open order history', async () => {
  180 |             await loginPage.page.goto(`${process.env.WEB_APP_URL}/customer/orders`);
  181 |             await loginPage.page.waitForLoadState('networkidle');
  182 | 
  183 |             // Verify orders section is displayed
  184 |             const ordersHeading = loginPage.page.locator('h1:has-text("Orders")');
  185 |             await expect(ordersHeading).toBeVisible();
  186 |         });
  187 | 
  188 |         await test.step('4) Verify previous orders are displayed', async () => {
  189 |             // Order history page should have a customer orders grid
  190 |             const ordersGrid = loginPage.page.locator('.customer-orders-grid, .order-list');
  191 |             // Verify the page structure exists (may or may not have orders)
  192 |         });
  193 | 
  194 |         console.log('✅ ACCOUNT_E2E_005 Completed successfully!');
  195 |     });
  196 | 
  197 |     test('ACCOUNT_E2E_006 - Open wishlist from account @master @sanity @regression @web', async ({ homePage, loginPage, wishlistPage }) => {
  198 |         const loginData = Helper.getLoginDetails();
  199 | 
  200 |         await test.step('1) Navigate to the application URL and login', async () => {
  201 |             const isHomePage = await homePage.isHomePageExists();
  202 |             expect(isHomePage).toBeTruthy();
  203 | 
  204 |             await homePage.clickLogin();
  205 |         });
  206 | 
  207 |         await test.step('2) Login with valid credentials', async () => {
  208 |             const isLoginPage = await loginPage.isLoginPageExists();
  209 |             expect(isLoginPage).toBeTruthy();
  210 | 
```