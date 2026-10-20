# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\registration.spec.ts >> Registration Tests >> REG_E2E_004 - Register using an already registered email @master @regression @web
- Location: tests\web\registration.spec.ts:133:9

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "already registered"
Received string:    "the specified email already exists"
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
      - generic [ref=f2e82]:
        - heading "Register" [level=1] [ref=f2e84]
        - generic [ref=f2e85]:
          - list [ref=f2e88]:
            - listitem [ref=f2e89]: The specified email already exists
          - generic [ref=f2e90]:
            - strong [ref=f2e92]: Your Personal Details
            - generic [ref=f2e93]:
              - generic [ref=f2e94]:
                - generic [ref=f2e95]: "Gender:"
                - generic [ref=f2e96]:
                  - radio "Male" [checked] [ref=f2e97]
                  - text: Male
                - generic [ref=f2e98]:
                  - radio "Female" [ref=f2e99]
                  - text: Female
              - generic [ref=f2e100]:
                - generic [ref=f2e101]: "First name:"
                - textbox "First name:" [ref=f2e102]: Umesh4
                - text: "*"
              - generic [ref=f2e103]:
                - generic [ref=f2e104]: "Last name:"
                - textbox "Last name:" [ref=f2e105]: Kumar4
                - text: "*"
              - generic [ref=f2e106]:
                - generic [ref=f2e107]: "Email:"
                - textbox "Email:" [ref=f2e108]: umeshkumar1@gmail.com
                - text: "*"
          - generic [ref=f2e109]:
            - strong [ref=f2e111]: Your Password
            - generic [ref=f2e112]:
              - generic [ref=f2e113]:
                - generic [ref=f2e114]: "Password:"
                - textbox "Password:" [ref=f2e115]: password123
                - text: "*"
              - generic [ref=f2e116]:
                - generic [ref=f2e117]: "Confirm password:"
                - textbox "Confirm password:" [ref=f2e118]: password123
                - text: "*"
          - button "Register" [ref=f2e120] [cursor=pointer]
  - generic [ref=f2e121]:
    - generic [ref=f2e122]:
      - generic [ref=f2e123]:
        - heading "Information" [level=3] [ref=f2e124]
        - list [ref=f2e125]:
          - listitem [ref=f2e126]:
            - link "Sitemap" [ref=f2e127] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f2e128]:
            - link "Shipping & Returns" [ref=f2e129] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f2e130]:
            - link "Privacy Notice" [ref=f2e131] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f2e132]:
            - link "Conditions of Use" [ref=f2e133] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f2e134]:
            - link "About us" [ref=f2e135] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f2e136]:
            - link "Contact us" [ref=f2e137] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f2e138]:
        - heading "Customer service" [level=3] [ref=f2e139]
        - list [ref=f2e140]:
          - listitem [ref=f2e141]:
            - link "Search" [ref=f2e142] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f2e143]:
            - link "News" [ref=f2e144] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f2e145]:
            - link "Blog" [ref=f2e146] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f2e147]:
            - link "Recently viewed products" [ref=f2e148] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f2e149]:
            - link "Compare products list" [ref=f2e150] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f2e151]:
            - link "New products" [ref=f2e152] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f2e153]:
        - heading "My account" [level=3] [ref=f2e154]
        - list [ref=f2e155]:
          - listitem [ref=f2e156]:
            - link "My account" [ref=f2e157] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f2e158]:
            - link "Orders" [ref=f2e159] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f2e160]:
            - link "Addresses" [ref=f2e161] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f2e162]:
            - link "Shopping cart" [ref=f2e163] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f2e164]:
            - link "Wishlist" [ref=f2e165] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f2e166]:
        - heading "Follow us" [level=3] [ref=f2e167]
        - list [ref=f2e168]:
          - listitem [ref=f2e169]:
            - link "Facebook" [ref=f2e170] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f2e171]:
            - link "Twitter" [ref=f2e172] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f2e173]:
            - link "RSS" [ref=f2e174] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f2e175]:
            - link "YouTube" [ref=f2e176] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f2e177]:
            - link "Google+" [ref=f2e178] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f2e179]:
      - text: Powered by
      - link "nopCommerce" [ref=f2e180] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f2e181]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  63  |             confirmPassword: 'password123'
  64  |         };
  65  | 
  66  |         await test.step('1) Navigate to the application URL and click Register', async () => {
  67  |             const isHomePage = await homePage.isHomePageExists();
  68  |             expect(isHomePage).toBeTruthy();
  69  | 
  70  |             await homePage.clickRegister();
  71  |         });
  72  | 
  73  |         await test.step('2) Register with valid details', async () => {
  74  |             const isRegisterPage = await registerPage.isRegisterPageExists();
  75  |             expect(isRegisterPage).toBeTruthy();
  76  | 
  77  |             await registerPage.register(userData);
  78  | 
  79  |             const isSuccess = await registerPage.isRegistrationSuccessful();
  80  |             expect(isSuccess).toBeTruthy();
  81  |         });
  82  | 
  83  |         await test.step('3) Navigate to Login page', async () => {
  84  |             await homePage.clickLogin();
  85  | 
  86  |             const isLoginPage = await loginPage.isLoginPageExists();
  87  |             expect(isLoginPage).toBeTruthy();
  88  |         });
  89  | 
  90  |         console.log('✅ REG_E2E_002 Completed successfully!');
  91  |     });
  92  | 
  93  |     test('REG_E2E_003 - Register and verify user is logged in after registration @master @sanity @regression @web', async ({ homePage, registerPage, myAccountPage }) => {
  94  |         const uniqueEmail = Helper.generateUniqueEmail();
  95  |         const userData = {
  96  |             gender: 'male',
  97  |             firstName: RandomDataUtil.getFirstName(),
  98  |             lastName: RandomDataUtil.getLastName(),
  99  |             email: uniqueEmail,
  100 |             password: 'password123',
  101 |             confirmPassword: 'password123'
  102 |         };
  103 | 
  104 |         await test.step('1) Navigate to the application URL and click Register', async () => {
  105 |             const isHomePage = await homePage.isHomePageExists();
  106 |             expect(isHomePage).toBeTruthy();
  107 | 
  108 |             await homePage.clickRegister();
  109 |         });
  110 | 
  111 |         await test.step('2) Register with valid details', async () => {
  112 |             const isRegisterPage = await registerPage.isRegisterPageExists();
  113 |             expect(isRegisterPage).toBeTruthy();
  114 | 
  115 |             await registerPage.register(userData);
  116 | 
  117 |             const isSuccess = await registerPage.isRegistrationSuccessful();
  118 |             expect(isSuccess).toBeTruthy();
  119 |         });
  120 | 
  121 |         await test.step('3) Verify user is logged in (My Account accessible)', async () => {
  122 |             // After successful registration, user should be logged in
  123 |             await homePage.clickCart(); // Navigate to see if logged in
  124 |             await homePage.clickCart(); // Go back to home
  125 | 
  126 |             // Try to access My Account
  127 |             await homePage.clickLogin(); // This should redirect to account if logged in, or we check account link
  128 |         });
  129 | 
  130 |         console.log('✅ REG_E2E_003 Completed successfully!');
  131 |     });
  132 | 
  133 |     test('REG_E2E_004 - Register using an already registered email @master @regression @web', async ({ homePage, registerPage }) => {
  134 |         // Use existing test data
  135 |         const testData = Helper.getRegistrationData('REG_E2E_004');
  136 | 
  137 |         await test.step('1) Navigate to the application URL and click Register', async () => {
  138 |             const isHomePage = await homePage.isHomePageExists();
  139 |             expect(isHomePage).toBeTruthy();
  140 | 
  141 |             await homePage.clickRegister();
  142 |         });
  143 | 
  144 |         await test.step('2) Register with already registered email', async () => {
  145 |             const isRegisterPage = await registerPage.isRegisterPageExists();
  146 |             expect(isRegisterPage).toBeTruthy();
  147 | 
  148 |             const userData = {
  149 |                 gender: testData.gender,
  150 |                 firstName: testData.FirstName,
  151 |                 lastName: testData.LastName,
  152 |                 email: testData.Email,
  153 |                 password: testData.Password,
  154 |                 confirmPassword: testData.ConfirmPassword
  155 |             };
  156 | 
  157 |             await registerPage.register(userData);
  158 |         });
  159 | 
  160 |         await test.step('3) Verify registration is rejected with appropriate message', async () => {
  161 |             const message = await registerPage.getResultMessage();
  162 |             // Should contain error about email already registered
> 163 |             expect(message.toLowerCase()).toContain('already registered');
      |                                           ^ Error: expect(received).toContain(expected) // indexOf
  164 |         });
  165 | 
  166 |         console.log('✅ REG_E2E_004 Completed successfully!');
  167 |     });
  168 | 
  169 |     test('REG_E2E_005 - Register with mismatched passwords @master @regression @web', async ({ homePage, registerPage }) => {
  170 |         const testData = Helper.getRegistrationData('REG_E2E_005');
  171 | 
  172 |         await test.step('1) Navigate to the application URL and click Register', async () => {
  173 |             const isHomePage = await homePage.isHomePageExists();
  174 |             expect(isHomePage).toBeTruthy();
  175 | 
  176 |             await homePage.clickRegister();
  177 |         });
  178 | 
  179 |         await test.step('2) Register with mismatched passwords', async () => {
  180 |             const isRegisterPage = await registerPage.isRegisterPageExists();
  181 |             expect(isRegisterPage).toBeTruthy();
  182 | 
  183 |             const userData = {
  184 |                 gender: testData.gender,
  185 |                 firstName: testData.FirstName,
  186 |                 lastName: testData.LastName,
  187 |                 email: testData.Email,
  188 |                 password: testData.Password,
  189 |                 confirmPassword: testData.ConfirmPassword
  190 |             };
  191 | 
  192 |             await registerPage.register(userData);
  193 |         });
  194 | 
  195 |         await test.step('3) Verify registration is prevented with validation message', async () => {
  196 |             const message = await registerPage.getResultMessage();
  197 |             expect(message.toLowerCase()).toContain('password');
  198 |         });
  199 | 
  200 |         console.log('✅ REG_E2E_005 Completed successfully!');
  201 |     });
  202 | 
  203 |     test('REG_E2E_006 - Register with invalid email @master @regression @web', async ({ homePage, registerPage }) => {
  204 |         const testData = Helper.getRegistrationData('REG_E2E_006');
  205 | 
  206 |         await test.step('1) Navigate to the application URL and click Register', async () => {
  207 |             const isHomePage = await homePage.isHomePageExists();
  208 |             expect(isHomePage).toBeTruthy();
  209 | 
  210 |             await homePage.clickRegister();
  211 |         });
  212 | 
  213 |         await test.step('2) Register with invalid email', async () => {
  214 |             const isRegisterPage = await registerPage.isRegisterPageExists();
  215 |             expect(isRegisterPage).toBeTruthy();
  216 | 
  217 |             const userData = {
  218 |                 gender: testData.gender,
  219 |                 firstName: testData.FirstName,
  220 |                 lastName: testData.LastName,
  221 |                 email: testData.Email,
  222 |                 password: testData.Password,
  223 |                 confirmPassword: testData.ConfirmPassword
  224 |             };
  225 | 
  226 |             await registerPage.register(userData);
  227 |         });
  228 | 
  229 |         await test.step('3) Verify registration is prevented with validation message', async () => {
  230 |             const message = await registerPage.getResultMessage();
  231 |             expect(message.toLowerCase()).toContain('email');
  232 |         });
  233 | 
  234 |         console.log('✅ REG_E2E_006 Completed successfully!');
  235 |     });
  236 | 
  237 |     test('REG_E2E_007 - Register with missing mandatory fields @master @regression @web', async ({ homePage, registerPage }) => {
  238 |         await test.step('1) Navigate to the application URL and click Register', async () => {
  239 |             const isHomePage = await homePage.isHomePageExists();
  240 |             expect(isHomePage).toBeTruthy();
  241 | 
  242 |             await homePage.clickRegister();
  243 |         });
  244 | 
  245 |         await test.step('2) Register with missing mandatory fields', async () => {
  246 |             const isRegisterPage = await registerPage.isRegisterPageExists();
  247 |             expect(isRegisterPage).toBeTruthy();
  248 | 
  249 |             // Submit without filling any fields
  250 |             await registerPage.clickRegister();
  251 |         });
  252 | 
  253 |         await test.step('3) Verify appropriate validation messages are displayed', async () => {
  254 |             const message = await registerPage.getResultMessage();
  255 |             // Should have validation errors for required fields
  256 |             expect(message.length).toBeGreaterThan(0);
  257 |         });
  258 | 
  259 |         console.log('✅ REG_E2E_007 Completed successfully!');
  260 |     });
  261 | 
  262 |     test('REG_E2E_008 - Register successfully and verify account information @master @regression @web', async ({ homePage, registerPage, myAccountPage }) => {
  263 |         const uniqueEmail = Helper.generateUniqueEmail();
```