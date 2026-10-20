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
Error: locator.check: Test timeout of 90000ms exceeded.
Call log:
  - waiting for getByLabel('I agree with the terms of service')

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
          - link "testuser1792050816292@gmail.com" [ref=f4e12] [cursor=pointer]:
            - /url: /customer/info
        - listitem [ref=f4e13]:
          - link "Log out" [ref=f4e14] [cursor=pointer]:
            - /url: /logout
        - listitem [ref=f4e15]:
          - link "Shopping cart (1)" [ref=f4e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f4e17]: Shopping cart
            - generic [ref=f4e18]: (1)
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
    - generic [ref=f4e45]:
      - heading "Shopping cart" [level=1] [ref=f4e47]
      - generic [ref=f4e50]:
        - table [ref=f4e51]:
          - rowgroup [ref=f4e59]:
            - row [ref=f4e60]:
              - columnheader "Remove" [ref=f4e61]
              - columnheader [ref=f4e62]
              - columnheader "Product(s)" [ref=f4e63]
              - columnheader "Price" [ref=f4e64]
              - columnheader "Qty." [ref=f4e65]
              - columnheader "Total" [ref=f4e66]
          - rowgroup [ref=f4e67]:
            - row [ref=f4e68]:
              - cell [ref=f4e69]:
                - checkbox [ref=f4e70]
              - cell [ref=f4e71]:
                - img "Picture of Health Book" [ref=f4e72]
              - cell [ref=f4e73]:
                - link "Health Book" [ref=f4e74] [cursor=pointer]:
                  - /url: /health
              - cell "10.00" [ref=f4e75]
              - cell [ref=f4e76]:
                - textbox [ref=f4e77]: "1"
              - cell "10.00" [ref=f4e78]
        - generic [ref=f4e80]:
          - button "Update shopping cart" [ref=f4e81] [cursor=pointer]
          - button "Continue shopping" [ref=f4e82] [cursor=pointer]
        - generic [ref=f4e83]:
          - generic [ref=f4e84]:
            - generic [ref=f4e85]:
              - generic [ref=f4e86]:
                - strong [ref=f4e88]: Discount Code
                - generic [ref=f4e89]: Enter your coupon here
                - generic [ref=f4e90]:
                  - textbox [ref=f4e91]
                  - button "Apply coupon" [ref=f4e92] [cursor=pointer]
              - generic [ref=f4e93]:
                - strong [ref=f4e95]: Gift Cards
                - generic [ref=f4e96]: Enter gift card code
                - generic [ref=f4e97]:
                  - textbox [ref=f4e98]
                  - button "Add gift card" [ref=f4e99] [cursor=pointer]
            - generic [ref=f4e101]:
              - strong [ref=f4e103]: Estimate shipping
              - generic [ref=f4e104]: Enter your destination to get a shipping estimate
              - generic [ref=f4e105]:
                - generic [ref=f4e106]:
                  - generic [ref=f4e107]: "Country:"
                  - combobox "Country:" [ref=f4e108]:
                    - option "Select country" [selected]
                    - option "United States"
                    - option "Canada"
                    - option "Afghanistan"
                    - option "Albania"
                    - option "Algeria"
                    - option "American Samoa"
                    - option "Andorra"
                    - option "Angola"
                    - option "Anguilla"
                    - option "Antarctica"
                    - option "Antigua and Barbuda"
                    - option "Argentina"
                    - option "Armenia"
                    - option "Aruba"
                    - option "Australia"
                    - option "Austria"
                    - option "Azerbaijan"
                    - option "Bahamas"
                    - option "Bahrain"
                    - option "Bangladesh"
                    - option "Barbados"
                    - option "Belarus"
                    - option "Belgium"
                    - option "Belize"
                    - option "Benin"
                    - option "Bermuda"
                    - option "Bhutan"
                    - option "Bolivia"
                    - option "Bosnia and Herzegowina"
                    - option "Botswana"
                    - option "Bouvet Island"
                    - option "Brazil"
                    - option "British Indian Ocean Territory"
                    - option "Brunei Darussalam"
                    - option "Bulgaria"
                    - option "Burkina Faso"
                    - option "Burundi"
                    - option "Cambodia"
                    - option "Cameroon"
                    - option "Cape Verde"
                    - option "Cayman Islands"
                    - option "Central African Republic"
                    - option "Chad"
                    - option "Chile"
                    - option "China"
                    - option "Christmas Island"
                    - option "Cocos (Keeling) Islands"
                    - option "Colombia"
                    - option "Comoros"
                    - option "Congo"
                    - option "Cook Islands"
                    - option "Costa Rica"
                    - option "Cote D'Ivoire"
                    - option "Croatia"
                    - option "Cuba"
                    - option "Cyprus"
                    - option "Czech Republic"
                    - option "Denmark"
                    - option "Djibouti"
                    - option "Dominica"
                    - option "Dominican Republic"
                    - option "Ecuador"
                    - option "Egypt"
                    - option "El Salvador"
                    - option "Equatorial Guinea"
                    - option "Eritrea"
                    - option "Estonia"
                    - option "Ethiopia"
                    - option "Falkland Islands (Malvinas)"
                    - option "Faroe Islands"
                    - option "Fiji"
                    - option "Finland"
                    - option "France"
                    - option "French Guiana"
                    - option "French Polynesia"
                    - option "French Southern Territories"
                    - option "Gabon"
                    - option "Gambia"
                    - option "Georgia"
                    - option "Germany"
                    - option "Ghana"
                    - option "Gibraltar"
                    - option "Greece"
                    - option "Greenland"
                    - option "Grenada"
                    - option "Guadeloupe"
                    - option "Guam"
                    - option "Guatemala"
                    - option "Guinea"
                    - option "Guinea-bissau"
                    - option "Guyana"
                    - option "Haiti"
                    - option "Heard and Mc Donald Islands"
                    - option "Honduras"
                    - option "Hong Kong"
                    - option "Hungary"
                    - option "Iceland"
                    - option "India"
                    - option "Indonesia"
                    - option "Iran (Islamic Republic of)"
                    - option "Iraq"
                    - option "Ireland"
                    - option "Israel"
                    - option "Italy"
                    - option "Jamaica"
                    - option "Japan"
                    - option "Jordan"
                    - option "Kazakhstan"
                    - option "Kenya"
                    - option "Kiribati"
                    - option "Korea"
                    - option "Korea, Democratic People's Republic of"
                    - option "Kuwait"
                    - option "Kyrgyzstan"
                    - option "Lao People's Democratic Republic"
                    - option "Latvia"
                    - option "Lebanon"
                    - option "Lesotho"
                    - option "Liberia"
                    - option "Libyan Arab Jamahiriya"
                    - option "Liechtenstein"
                    - option "Lithuania"
                    - option "Luxembourg"
                    - option "Macau"
                    - option "Macedonia"
                    - option "Madagascar"
                    - option "Malawi"
                    - option "Malaysia"
                    - option "Maldives"
                    - option "Mali"
                    - option "Malta"
                    - option "Marshall Islands"
                    - option "Martinique"
                    - option "Mauritania"
                    - option "Mauritius"
                    - option "Mayotte"
                    - option "Mexico"
                    - option "Micronesia"
                    - option "Moldova"
                    - option "Monaco"
                    - option "Mongolia"
                    - option "Montenegro"
                    - option "Montserrat"
                    - option "Morocco"
                    - option "Mozambique"
                    - option "Myanmar"
                    - option "Namibia"
                    - option "Nauru"
                    - option "Nepal"
                    - option "Netherlands"
                    - option "Netherlands Antilles"
                    - option "New Caledonia"
                    - option "New Zealand"
                    - option "Nicaragua"
                    - option "Niger"
                    - option "Nigeria"
                    - option "Niue"
                    - option "Norfolk Island"
                    - option "Northern Mariana Islands"
                    - option "Norway"
                    - option "Oman"
                    - option "Pakistan"
                    - option "Palau"
                    - option "Panama"
                    - option "Papua New Guinea"
                    - option "Paraguay"
                    - option "Peru"
                    - option "Philippines"
                    - option "Pitcairn"
                    - option "Poland"
                    - option "Portugal"
                    - option "Puerto Rico"
                    - option "Qatar"
                    - option "Reunion"
                    - option "Romania"
                    - option "Russia"
                    - option "Rwanda"
                    - option "Saint Kitts and Nevis"
                    - option "Saint Lucia"
                    - option "Saint Vincent and the Grenadines"
                    - option "Samoa"
                    - option "San Marino"
                    - option "Sao Tome and Principe"
                    - option "Saudi Arabia"
                    - option "Senegal"
                    - option "Serbia"
                    - option "Seychelles"
                    - option "Sierra Leone"
                    - option "Singapore"
                    - option "Slovakia (Slovak Republic)"
                    - option "Slovenia"
                    - option "Solomon Islands"
                    - option "Somalia"
                    - option "South Africa"
                    - option "South Georgia & South Sandwich Islands"
                    - option "Spain"
                    - option "Sri Lanka"
                    - option "St. Helena"
                    - option "St. Pierre and Miquelon"
                    - option "Sudan"
                    - option "Suriname"
                    - option "Svalbard and Jan Mayen Islands"
                    - option "Swaziland"
                    - option "Sweden"
                    - option "Switzerland"
                    - option "Syrian Arab Republic"
                    - option "Taiwan"
                    - option "Tajikistan"
                    - option "Tanzania"
                    - option "Thailand"
                    - option "Togo"
                    - option "Tokelau"
                    - option "Tonga"
                    - option "Trinidad and Tobago"
                    - option "Tunisia"
                    - option "Turkey"
                    - option "Turkmenistan"
                    - option "Turks and Caicos Islands"
                    - option "Tuvalu"
                    - option "Uganda"
                    - option "Ukraine"
                    - option "United Arab Emirates"
                    - option "United Kingdom"
                    - option "United States minor outlying islands"
                    - option "Uruguay"
                    - option "Uzbekistan"
                    - option "Vanuatu"
                    - option "Vatican City State (Holy See)"
                    - option "Venezuela"
                    - option "Viet Nam"
                    - option "Virgin Islands (British)"
                    - option "Virgin Islands (U.S.)"
                    - option "Wallis and Futuna Islands"
                    - option "Western Sahara"
                    - option "Yemen"
                    - option "Zambia"
                    - option "Zimbabwe"
                  - text: "*"
                - generic [ref=f4e109]:
                  - generic [ref=f4e110]: "State / province:"
                  - combobox "State / province:" [ref=f4e111]:
                    - option "Other (Non US)" [selected]
                - generic [ref=f4e112]:
                  - generic [ref=f4e113]: "Zip / postal code:"
                  - textbox "Zip / postal code:" [ref=f4e114]
                - button "Estimate shipping" [ref=f4e116] [cursor=pointer]
          - generic [ref=f4e117]:
            - table [ref=f4e119]:
              - rowgroup [ref=f4e120]:
                - row [ref=f4e121]:
                  - cell "Sub-Total:" [ref=f4e122]
                  - cell "10.00" [ref=f4e123]
                - row [ref=f4e125]:
                  - cell "Shipping:" [ref=f4e126]
                  - cell "Calculated during checkout" [ref=f4e127]
                - row [ref=f4e129]:
                  - cell "Tax:" [ref=f4e130]
                  - cell "0.00" [ref=f4e131]
                - row [ref=f4e133]:
                  - cell "Total:" [ref=f4e134]
                  - cell "Calculated during checkout" [ref=f4e135]
            - generic [ref=f4e137]:
              - checkbox [ref=f4e138]
              - text: I agree with the terms of service and I adhere to them unconditionally (read)
            - button "Checkout" [ref=f4e140] [cursor=pointer]
  - generic [ref=f4e142]:
    - generic [ref=f4e143]:
      - generic [ref=f4e144]:
        - heading "Information" [level=3] [ref=f4e145]
        - list [ref=f4e146]:
          - listitem [ref=f4e147]:
            - link "Sitemap" [ref=f4e148] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f4e149]:
            - link "Shipping & Returns" [ref=f4e150] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f4e151]:
            - link "Privacy Notice" [ref=f4e152] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f4e153]:
            - link "Conditions of Use" [ref=f4e154] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f4e155]:
            - link "About us" [ref=f4e156] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f4e157]:
            - link "Contact us" [ref=f4e158] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f4e159]:
        - heading "Customer service" [level=3] [ref=f4e160]
        - list [ref=f4e161]:
          - listitem [ref=f4e162]:
            - link "Search" [ref=f4e163] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f4e164]:
            - link "News" [ref=f4e165] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f4e166]:
            - link "Blog" [ref=f4e167] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f4e168]:
            - link "Recently viewed products" [ref=f4e169] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f4e170]:
            - link "Compare products list" [ref=f4e171] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f4e172]:
            - link "New products" [ref=f4e173] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f4e174]:
        - heading "My account" [level=3] [ref=f4e175]
        - list [ref=f4e176]:
          - listitem [ref=f4e177]:
            - link "My account" [ref=f4e178] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f4e179]:
            - link "Orders" [ref=f4e180] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f4e181]:
            - link "Addresses" [ref=f4e182] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f4e183]:
            - link "Shopping cart" [ref=f4e184] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f4e185]:
            - link "Wishlist" [ref=f4e186] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f4e187]:
        - heading "Follow us" [level=3] [ref=f4e188]
        - list [ref=f4e189]:
          - listitem [ref=f4e190]:
            - link "Facebook" [ref=f4e191] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f4e192]:
            - link "Twitter" [ref=f4e193] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f4e194]:
            - link "RSS" [ref=f4e195] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f4e196]:
            - link "YouTube" [ref=f4e197] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f4e198]:
            - link "Google+" [ref=f4e199] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f4e200]:
      - text: Powered by
      - link "nopCommerce" [ref=f4e201] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f4e202]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  35  |      * Gets all product names in cart
  36  |      * @returns Promise<string[]> - Array of product names
  37  |      */
  38  |     async getProductNames(): Promise<string[]> {
  39  |         try {
  40  |             return await this.lblProductNames.allTextContents();
  41  |         } catch (error) {
  42  |             console.log(`Error getting product names: ${error}`);
  43  |             return [];
  44  |         }
  45  |     }
  46  | 
  47  |     /**
  48  |      * Gets all product prices in cart
  49  |      * @returns Promise<string[]> - Array of product prices
  50  |      */
  51  |     async getProductPrices(): Promise<string[]> {
  52  |         try {
  53  |             return await this.lblProductPrices.allTextContents();
  54  |         } catch (error) {
  55  |             console.log(`Error getting product prices: ${error}`);
  56  |             return [];
  57  |         }
  58  |     }
  59  | 
  60  |     /**
  61  |      * Updates quantity for a specific product
  62  |      * @param index - Product index
  63  |      * @param quantity - New quantity
  64  |      * @returns Promise<void>
  65  |      */
  66  |     async updateQuantity(index: number, quantity: string): Promise<void> {
  67  |         const qtyInputs = await this.txtQuantities.all();
  68  |         if (qtyInputs[index]) {
  69  |             await qtyInputs[index].fill(quantity);
  70  |             await this.btnUpdateCart.click();
  71  |             await this.page.waitForLoadState('networkidle');
  72  |         }
  73  |     }
  74  | 
  75  |     /**
  76  |      * Removes a specific product from cart
  77  |      * @param index - Product index
  78  |      * @returns Promise<void>
  79  |      */
  80  |     async removeProduct(index: number): Promise<void> {
  81  |         const removeButtons = await this.btnRemoveItems.all();
  82  |         if (removeButtons[index]) {
  83  |             await removeButtons[index].check();
  84  |             await this.btnUpdateCart.click();
  85  |             await this.page.waitForLoadState('networkidle');
  86  |         }
  87  |     }
  88  | 
  89  |     /**
  90  |      * Removes all products from cart
  91  |      * @returns Promise<void>
  92  |      */
  93  |     async removeAllProducts(): Promise<void> {
  94  |         const removeButtons = await this.btnRemoveItems.all();
  95  |         for (const btn of removeButtons) {
  96  |             await btn.check();
  97  |         }
  98  |         if (removeButtons.length > 0) {
  99  |             await this.btnUpdateCart.click();
  100 |             await this.page.waitForLoadState('networkidle');
  101 |         }
  102 |     }
  103 | 
  104 |     /**
  105 |      * Gets subtotal
  106 |      * @returns Promise<string> - Subtotal text
  107 |      */
  108 |     async getSubtotal(): Promise<string> {
  109 |         try {
  110 |             return await this.lblSubtotal.textContent() || '';
  111 |         } catch (error) {
  112 |             console.log(`Error getting subtotal: ${error}`);
  113 |             return '';
  114 |         }
  115 |     }
  116 | 
  117 |     /**
  118 |      * Gets total
  119 |      * @returns Promise<string> - Total text
  120 |      */
  121 |     async getTotal(): Promise<string> {
  122 |         try {
  123 |             return await this.lblTotal.textContent() || '';
  124 |         } catch (error) {
  125 |             console.log(`Error getting total: ${error}`);
  126 |             return '';
  127 |         }
  128 |     }
  129 | 
  130 |     /**
  131 |      * Agrees to terms of service
  132 |      * @returns Promise<void>
  133 |      */
  134 |     async agreeToTerms(): Promise<void> {
> 135 |         await this.chkTermsOfService.check();
      |                                      ^ Error: locator.check: Test timeout of 90000ms exceeded.
  136 |     }
  137 | 
  138 |     /**
  139 |      * Clicks Checkout button
  140 |      * @returns Promise<void>
  141 |      */
  142 |     async clickCheckout(): Promise<void> {
  143 |         await this.btnCheckout.click();
  144 |     }
  145 | 
  146 |     /**
  147 |      * Verifies cart is empty
  148 |      * @returns Promise<boolean> - true if cart is empty
  149 |      */
  150 |     async isCartEmpty(): Promise<boolean> {
  151 |         try {
  152 |             return await this.lblEmptyCart.isVisible();
  153 |         } catch (error) {
  154 |             console.log(`Error checking empty cart: ${error}`);
  155 |             return true;
  156 |         }
  157 |     }
  158 | 
  159 |     /**
  160 |      * Verifies cart page exists
  161 |      * @returns Promise<boolean> - true if the page is displayed
  162 |      */
  163 |     async isCartPageExists(): Promise<boolean> {
  164 |         try {
  165 |             return await this.page.locator('h1:has-text("Shopping cart")').isVisible();
  166 |         } catch (error) {
  167 |             console.log(`Error checking cart page: ${error}`);
  168 |             return false;
  169 |         }
  170 |     }
  171 | 
  172 |     /**
  173 |      * Gets cart item count
  174 |      * @returns Promise<number> - Number of items in cart
  175 |      */
  176 |     async getCartItemCount(): Promise<number> {
  177 |         try {
  178 |             const quantities = await this.txtQuantities.all();
  179 |             let count = 0;
  180 |             for (const qty of quantities) {
  181 |                 const value = await qty.inputValue();
  182 |                 count += parseInt(value) || 0;
  183 |             }
  184 |             return count;
  185 |         } catch (error) {
  186 |             console.log(`Error getting cart item count: ${error}`);
  187 |             return 0;
  188 |         }
  189 |     }
  190 | }
```