# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\registration.spec.ts >> Registration Tests >> REG_E2E_007 - Register with missing mandatory fields @master @regression @web
- Location: tests\web\registration.spec.ts:237:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
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
                - textbox "First name:" [active] [ref=f1e98]
                - text: "*"
                - generic [ref=f1e99]: First name is required.
              - generic [ref=f1e100]:
                - generic [ref=f1e101]: "Last name:"
                - textbox "Last name:" [ref=f1e102]
                - text: "*"
                - generic [ref=f1e103]: Last name is required.
              - generic [ref=f1e104]:
                - generic [ref=f1e105]: "Email:"
                - textbox "Email:" [ref=f1e106]
                - text: "*"
                - generic [ref=f1e107]: Email is required.
          - generic [ref=f1e108]:
            - strong [ref=f1e110]: Your Password
            - generic [ref=f1e111]:
              - generic [ref=f1e112]:
                - generic [ref=f1e113]: "Password:"
                - textbox "Password:" [ref=f1e114]
                - text: "*"
                - generic [ref=f1e115]: Password is required.
              - generic [ref=f1e116]:
                - generic [ref=f1e117]: "Confirm password:"
                - textbox "Confirm password:" [ref=f1e118]
                - text: "*"
                - generic [ref=f1e119]: Password is required.
          - button "Register" [ref=f1e121] [cursor=pointer]
  - generic [ref=f1e122]:
    - generic [ref=f1e123]:
      - generic [ref=f1e124]:
        - heading "Information" [level=3] [ref=f1e125]
        - list [ref=f1e126]:
          - listitem [ref=f1e127]:
            - link "Sitemap" [ref=f1e128] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f1e129]:
            - link "Shipping & Returns" [ref=f1e130] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f1e131]:
            - link "Privacy Notice" [ref=f1e132] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f1e133]:
            - link "Conditions of Use" [ref=f1e134] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f1e135]:
            - link "About us" [ref=f1e136] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f1e137]:
            - link "Contact us" [ref=f1e138] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f1e139]:
        - heading "Customer service" [level=3] [ref=f1e140]
        - list [ref=f1e141]:
          - listitem [ref=f1e142]:
            - link "Search" [ref=f1e143] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f1e144]:
            - link "News" [ref=f1e145] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f1e146]:
            - link "Blog" [ref=f1e147] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f1e148]:
            - link "Recently viewed products" [ref=f1e149] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f1e150]:
            - link "Compare products list" [ref=f1e151] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f1e152]:
            - link "New products" [ref=f1e153] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f1e154]:
        - heading "My account" [level=3] [ref=f1e155]
        - list [ref=f1e156]:
          - listitem [ref=f1e157]:
            - link "My account" [ref=f1e158] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f1e159]:
            - link "Orders" [ref=f1e160] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f1e161]:
            - link "Addresses" [ref=f1e162] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f1e163]:
            - link "Shopping cart" [ref=f1e164] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f1e165]:
            - link "Wishlist" [ref=f1e166] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f1e167]:
        - heading "Follow us" [level=3] [ref=f1e168]
        - list [ref=f1e169]:
          - listitem [ref=f1e170]:
            - link "Facebook" [ref=f1e171] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f1e172]:
            - link "Twitter" [ref=f1e173] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f1e174]:
            - link "RSS" [ref=f1e175] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f1e176]:
            - link "YouTube" [ref=f1e177] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f1e178]:
            - link "Google+" [ref=f1e179] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f1e180]:
      - text: Powered by
      - link "nopCommerce" [ref=f1e181] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f1e182]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  156 | 
  157 |             await registerPage.register(userData);
  158 |         });
  159 | 
  160 |         await test.step('3) Verify registration is rejected with appropriate message', async () => {
  161 |             const message = await registerPage.getResultMessage();
  162 |             // Should contain error about email already registered
  163 |             expect(message.toLowerCase()).toContain('already registered');
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
> 256 |             expect(message.length).toBeGreaterThan(0);
      |                                    ^ Error: expect(received).toBeGreaterThan(expected)
  257 |         });
  258 | 
  259 |         console.log('✅ REG_E2E_007 Completed successfully!');
  260 |     });
  261 | 
  262 |     test('REG_E2E_008 - Register successfully and verify account information @master @regression @web', async ({ homePage, registerPage, myAccountPage }) => {
  263 |         const uniqueEmail = Helper.generateUniqueEmail();
  264 |         const userData = {
  265 |             gender: 'male',
  266 |             firstName: RandomDataUtil.getFirstName(),
  267 |             lastName: RandomDataUtil.getLastName(),
  268 |             email: uniqueEmail,
  269 |             password: 'password123',
  270 |             confirmPassword: 'password123'
  271 |         };
  272 | 
  273 |         await test.step('1) Navigate to the application URL and click Register', async () => {
  274 |             const isHomePage = await homePage.isHomePageExists();
  275 |             expect(isHomePage).toBeTruthy();
  276 | 
  277 |             await homePage.clickRegister();
  278 |         });
  279 | 
  280 |         await test.step('2) Register with valid details', async () => {
  281 |             const isRegisterPage = await registerPage.isRegisterPageExists();
  282 |             expect(isRegisterPage).toBeTruthy();
  283 | 
  284 |             await registerPage.register(userData);
  285 | 
  286 |             const isSuccess = await registerPage.isRegistrationSuccessful();
  287 |             expect(isSuccess).toBeTruthy();
  288 |         });
  289 | 
  290 |         await test.step('3) Verify account information is available', async () => {
  291 |             // After registration, user should be logged in
  292 |             // Navigate to My Account
  293 |             await homePage.clickLogin();
  294 | 
  295 |             // If logged in, should see account info
  296 |             const isAccountPage = await myAccountPage.isMyAccountPageExists();
  297 |             // This may need adjustment based on actual app behavior
  298 |         });
  299 | 
  300 |         console.log('✅ REG_E2E_008 Completed successfully!');
  301 |     });
  302 | });
```