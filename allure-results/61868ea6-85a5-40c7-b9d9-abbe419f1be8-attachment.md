# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\my-account.spec.ts >> My Account Tests >> ACCOUNT_E2E_002 - Verify registered user information @master @sanity @regression @web
- Location: tests\web\my-account.spec.ts:49:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: undefined
Received: "Umesh"
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
          - link "umeshkumar22@gmail.com" [ref=f3e12] [cursor=pointer]:
            - /url: /customer/info
        - listitem [ref=f3e13]:
          - link "Log out" [ref=f3e14] [cursor=pointer]:
            - /url: /logout
        - listitem [ref=f3e15]:
          - link "Shopping cart (0)" [ref=f3e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f3e17]: Shopping cart
            - generic [ref=f3e18]: (0)
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
      - generic [ref=f3e65]:
        - heading "My account - Customer info" [level=1] [ref=f3e67]
        - generic [ref=f3e69]:
          - generic [ref=f3e70]:
            - strong [ref=f3e72]: Your Personal Details
            - generic [ref=f3e73]:
              - generic [ref=f3e74]:
                - generic [ref=f3e75]: "Gender:"
                - generic [ref=f3e76]:
                  - radio "Male" [checked] [ref=f3e77]
                  - text: Male
                - generic [ref=f3e78]:
                  - radio "Female" [ref=f3e79]
                  - text: Female
              - generic [ref=f3e80]:
                - generic [ref=f3e81]: "First name:"
                - textbox "First name:" [ref=f3e82]: Umesh
                - text: "*"
              - generic [ref=f3e83]:
                - generic [ref=f3e84]: "Last name:"
                - textbox "Last name:" [ref=f3e85]: Kumar
                - text: "*"
              - generic [ref=f3e86]:
                - generic [ref=f3e87]: "Email:"
                - textbox "Email:" [ref=f3e88]: umeshkumar22@gmail.com
                - text: "*"
          - button "Save" [ref=f3e90] [cursor=pointer]
  - generic [ref=f3e91]:
    - generic [ref=f3e92]:
      - generic [ref=f3e93]:
        - heading "Information" [level=3] [ref=f3e94]
        - list [ref=f3e95]:
          - listitem [ref=f3e96]:
            - link "Sitemap" [ref=f3e97] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f3e98]:
            - link "Shipping & Returns" [ref=f3e99] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f3e100]:
            - link "Privacy Notice" [ref=f3e101] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f3e102]:
            - link "Conditions of Use" [ref=f3e103] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f3e104]:
            - link "About us" [ref=f3e105] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f3e106]:
            - link "Contact us" [ref=f3e107] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f3e108]:
        - heading "Customer service" [level=3] [ref=f3e109]
        - list [ref=f3e110]:
          - listitem [ref=f3e111]:
            - link "Search" [ref=f3e112] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f3e113]:
            - link "News" [ref=f3e114] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f3e115]:
            - link "Blog" [ref=f3e116] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f3e117]:
            - link "Recently viewed products" [ref=f3e118] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f3e119]:
            - link "Compare products list" [ref=f3e120] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f3e121]:
            - link "New products" [ref=f3e122] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f3e123]:
        - heading "My account" [level=3] [ref=f3e124]
        - list [ref=f3e125]:
          - listitem [ref=f3e126]:
            - link "My account" [ref=f3e127] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f3e128]:
            - link "Orders" [ref=f3e129] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f3e130]:
            - link "Addresses" [ref=f3e131] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f3e132]:
            - link "Shopping cart" [ref=f3e133] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f3e134]:
            - link "Wishlist" [ref=f3e135] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f3e136]:
        - heading "Follow us" [level=3] [ref=f3e137]
        - list [ref=f3e138]:
          - listitem [ref=f3e139]:
            - link "Facebook" [ref=f3e140] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f3e141]:
            - link "Twitter" [ref=f3e142] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f3e143]:
            - link "RSS" [ref=f3e144] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f3e145]:
            - link "YouTube" [ref=f3e146] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f3e147]:
            - link "Google+" [ref=f3e148] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f3e149]:
      - text: Powered by
      - link "nopCommerce" [ref=f3e150] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f3e151]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1   | /**
  2   |  * Test Case: My Account Feature
  3   |  *
  4   |  * Tags: @master @sanity @regression @web
  5   |  *
  6   |  * Steps:
  7   |  * 1) Navigate to the application URL
  8   |  * 2) Login and perform account operations
  9   |  * 3) Verify expected results
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
  50  |        
  51  |         const testData = Helper.getMyAccountData('ACCOUNT_E2E_002');
  52  | 
  53  |         await test.step('1) Navigate to the application URL and login', async () => {
  54  |             const isHomePage = await homePage.isHomePageExists();
  55  |             expect(isHomePage).toBeTruthy();
  56  | 
  57  |             await homePage.clickLogin();
  58  |         });
  59  | 
  60  |         await test.step('2) Login with valid credentials', async () => {
  61  |             const isLoginPage = await loginPage.isLoginPageExists();
  62  |             expect(isLoginPage).toBeTruthy();
  63  | 
  64  |             await loginPage.login(testData.Email, testData.Password);
  65  |         });
  66  | 
  67  |         await test.step('3) Verify account information is displayed', async () => {
  68  |             await loginPage.page.goto(`${process.env.WEB_APP_URL}/customer/info`);
  69  |             await loginPage.page.waitForLoadState('networkidle');
  70  | 
  71  |             const isAccountPage = await myAccountPage.isMyAccountPageExists();
  72  |             expect(isAccountPage).toBeTruthy();
  73  | 
  74  |             const selectedGender = await myAccountPage.getAccountSelectedGender();
  75  |             const firstName = await myAccountPage.getAccountInfoFirstName();
  76  |             const lastName = await myAccountPage.getAccountInfoLastName();
  77  |             const email = await myAccountPage.getAccountInfoEmail();
  78  | 
  79  |             //Assertions
> 80  |             expect(firstName).toBe(testData.firstName);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  81  |             expect(lastName).toBe(testData.lastName);
  82  |             expect(email).toBe(testData.email);
  83  |             expect(selectedGender).toBe(testData.gender);
  84  |         });
  85  | 
  86  |         console.log('✅ ACCOUNT_E2E_002 Completed successfully!');
  87  |     });
  88  | 
  89  |     test('ACCOUNT_E2E_003 - Update account information @master @sanity @regression @web', async ({ homePage, loginPage, myAccountPage }) => {
  90  |         const loginData = Helper.getLoginDetails();
  91  | 
  92  |         await test.step('1) Navigate to the application URL and login', async () => {
  93  |             const isHomePage = await homePage.isHomePageExists();
  94  |             expect(isHomePage).toBeTruthy();
  95  | 
  96  |             await homePage.clickLogin();
  97  |         });
  98  | 
  99  |         await test.step('2) Login with valid credentials', async () => {
  100 |             const isLoginPage = await loginPage.isLoginPageExists();
  101 |             expect(isLoginPage).toBeTruthy();
  102 | 
  103 |             await loginPage.login(loginData.email, loginData.password);
  104 |         });
  105 | 
  106 |         await test.step('3) Update account information', async () => {
  107 |             await loginPage.page.goto(`${process.env.WEB_APP_URL}/customer/info`);
  108 |             await loginPage.page.waitForLoadState('networkidle');
  109 | 
  110 |             const isAccountPage = await myAccountPage.isMyAccountPageExists();
  111 |             expect(isAccountPage).toBeTruthy();
  112 | 
  113 |             await myAccountPage.updateAccountInfo('TestFirst', 'TestLast', loginData.email);
  114 |         });
  115 | 
  116 |         await test.step('4) Verify updated information is saved', async () => {
  117 |             const successMessage = homePage.page.locator('.bar-notification.success');
  118 |             const isVisible = await successMessage.isVisible();
  119 |             expect(isVisible).toBeTruthy();
  120 |         });
  121 | 
  122 |         console.log('✅ ACCOUNT_E2E_003 Completed successfully!');
  123 |     });
  124 | 
  125 |     test('ACCOUNT_E2E_004 - Update password and login with new password @master @sanity @regression @web', async ({ homePage, loginPage, myAccountPage }) => {
  126 |         const loginData = Helper.getLoginDetails();
  127 |         const newPassword = 'newpassword456';
  128 | 
  129 |         await test.step('1) Navigate to the application URL and login', async () => {
  130 |             const isHomePage = await homePage.isHomePageExists();
  131 |             expect(isHomePage).toBeTruthy();
  132 | 
  133 |             await homePage.clickLogin();
  134 |         });
  135 | 
  136 |         await test.step('2) Login with valid credentials', async () => {
  137 |             const isLoginPage = await loginPage.isLoginPageExists();
  138 |             expect(isLoginPage).toBeTruthy();
  139 | 
  140 |             await loginPage.login(loginData.email, loginData.password);
  141 |         });
  142 | 
  143 |         await test.step('3) Update password', async () => {
  144 |             await loginPage.page.goto(`${process.env.WEB_APP_URL}/customer/changepassword`);
  145 |             await loginPage.page.waitForLoadState('networkidle');
  146 | 
  147 |             await myAccountPage.changePassword(loginData.password, newPassword, newPassword);
  148 |         });
  149 | 
  150 |         await test.step('4) Verify new password works', async () => {
  151 |             // Logout first
  152 |             const logoutLink = homePage.page.getByRole('link', { name: 'Log out' });
  153 |             if (await logoutLink.isVisible()) {
  154 |                 await logoutLink.click();
  155 |                 await homePage.page.waitForLoadState('networkidle');
  156 |             }
  157 | 
  158 |             // Login again with new password
  159 |             await homePage.clickLogin();
  160 |             const isLoginPage = await loginPage.isLoginPageExists();
  161 |             expect(isLoginPage).toBeTruthy();
  162 | 
  163 |             await loginPage.login(loginData.email, newPassword);
  164 |             const isSuccess = await loginPage.isLoginSuccessful();
  165 |             expect(isSuccess).toBeTruthy();
  166 |         });
  167 | 
  168 |         console.log('✅ ACCOUNT_E2E_004 Completed successfully!');
  169 |     });
  170 | 
  171 |     test('ACCOUNT_E2E_005 - Open order history from account @master @sanity @regression @web', async ({ homePage, loginPage, myAccountPage }) => {
  172 |         const loginData = Helper.getLoginDetails();
  173 | 
  174 |         await test.step('1) Navigate to the application URL and login', async () => {
  175 |             const isHomePage = await homePage.isHomePageExists();
  176 |             expect(isHomePage).toBeTruthy();
  177 | 
  178 |             await homePage.clickLogin();
  179 |         });
  180 | 
```