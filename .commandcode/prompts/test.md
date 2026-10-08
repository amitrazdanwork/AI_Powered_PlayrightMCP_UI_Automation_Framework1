# Combined Test Prompt Specifications

This file contains all test cases from the Test Scenarios.xlsx file, structured as independent AI prompt specs.

---

## Feature: Registration

### Test Case: REG_E2E_001

**Priority**: P0

**Scenario**: Register a new user with valid details

**Expected Result**: User account is created successfully and confirmation is displayed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Register a new user with valid details

**Expected Behavior**: User account is created successfully and confirmation is displayed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Register a new user with valid details
3. Verify the expected result: User account is created successfully and confirmation is displayed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: REG_E2E_002

**Priority**: P0

**Scenario**: Register with valid details and then navigate to Login

**Expected Result**: User can navigate to Login after registration

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Register with valid details and then navigate to Login

**Expected Behavior**: User can navigate to Login after registration

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Register with valid details and then navigate to Login
3. Verify the expected result: User can navigate to Login after registration

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: REG_E2E_003

**Priority**: P0

**Scenario**: Register and verify user is logged in after registration

**Expected Result**: User account/session is available as expected

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Register and verify user is logged in after registration

**Expected Behavior**: User account/session is available as expected

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Register and verify user is logged in after registration
3. Verify the expected result: User account/session is available as expected

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: REG_E2E_004

**Priority**: P1

**Scenario**: Register using an already registered email

**Expected Result**: Registration is rejected with appropriate message

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Register using an already registered email

**Expected Behavior**: Registration is rejected with appropriate message

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Register using an already registered email
3. Verify the expected result: Registration is rejected with appropriate message

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: REG_E2E_005

**Priority**: P1

**Scenario**: Register with mismatched passwords

**Expected Result**: Registration is prevented

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Register with mismatched passwords

**Expected Behavior**: Registration is prevented

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Register with mismatched passwords
3. Verify the expected result: Registration is prevented

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: REG_E2E_006

**Priority**: P1

**Scenario**: Register with invalid email

**Expected Result**: Registration is prevented with validation message

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Register with invalid email

**Expected Behavior**: Registration is prevented with validation message

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Register with invalid email
3. Verify the expected result: Registration is prevented with validation message

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: REG_E2E_007

**Priority**: P1

**Scenario**: Register with missing mandatory fields

**Expected Result**: Appropriate validation messages are displayed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Register with missing mandatory fields

**Expected Behavior**: Appropriate validation messages are displayed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Register with missing mandatory fields
3. Verify the expected result: Appropriate validation messages are displayed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: REG_E2E_008

**Priority**: P1

**Scenario**: Register successfully and verify account information

**Expected Result**: Registered user information is available under account section

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Register successfully and verify account information

**Expected Behavior**: Registered user information is available under account section

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Register successfully and verify account information
3. Verify the expected result: Registered user information is available under account section

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

## Feature: Login

### Test Case: LOGIN_E2E_001

**Priority**: P0

**Scenario**: Login using valid registered credentials

**Expected Result**: User successfully logs in

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Login using valid registered credentials

**Expected Behavior**: User successfully logs in

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Login using valid registered credentials
3. Verify the expected result: User successfully logs in

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: LOGIN_E2E_002

**Priority**: P0

**Scenario**: Login with incorrect password

**Expected Result**: Login fails with appropriate error

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Login with incorrect password

**Expected Behavior**: Login fails with appropriate error

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Login with incorrect password
3. Verify the expected result: Login fails with appropriate error

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: LOGIN_E2E_003

**Priority**: P1

**Scenario**: Login with unregistered email

**Expected Result**: Login fails with appropriate error

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Login with unregistered email

**Expected Behavior**: Login fails with appropriate error

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Login with unregistered email
3. Verify the expected result: Login fails with appropriate error

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: LOGIN_E2E_004

**Priority**: P1

**Scenario**: Login with blank credentials

**Expected Result**: Required-field validation is displayed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Login with blank credentials

**Expected Behavior**: Required-field validation is displayed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Login with blank credentials
3. Verify the expected result: Required-field validation is displayed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: LOGIN_E2E_005

**Priority**: P0

**Scenario**: Login and navigate to account page

**Expected Result**: Account page opens for logged-in user

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Login and navigate to account page

**Expected Behavior**: Account page opens for logged-in user

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Login and navigate to account page
3. Verify the expected result: Account page opens for logged-in user

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: LOGIN_E2E_006

**Priority**: P0

**Scenario**: Login and logout

**Expected Result**: User is logged out successfully

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Login and logout

**Expected Behavior**: User is logged out successfully

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Login and logout
3. Verify the expected result: User is logged out successfully

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: LOGIN_E2E_007

**Priority**: P1

**Scenario**: Login with Remember Me enabled

**Expected Result**: User session behaves according to Remember Me functionality

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Login with Remember Me enabled

**Expected Behavior**: User session behaves according to Remember Me functionality

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Login with Remember Me enabled
3. Verify the expected result: User session behaves according to Remember Me functionality

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: LOGIN_E2E_008

**Priority**: P2

**Scenario**: Login, close/reopen browser, and revisit site

**Expected Result**: Session behavior matches application expectations

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Login, close/reopen browser, and revisit site

**Expected Behavior**: Session behavior matches application expectations

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Login, close/reopen browser, and revisit site
3. Verify the expected result: Session behavior matches application expectations

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

## Feature: Product Search

### Test Case: SEARCH_E2E_001

**Priority**: P0

**Scenario**: Search for an existing product

**Expected Result**: Matching product is displayed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Search for an existing product

**Expected Behavior**: Matching product is displayed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Search for an existing product
3. Verify the expected result: Matching product is displayed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: SEARCH_E2E_002

**Priority**: P1

**Scenario**: Search using partial product name

**Expected Result**: Relevant products are displayed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Search using partial product name

**Expected Behavior**: Relevant products are displayed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Search using partial product name
3. Verify the expected result: Relevant products are displayed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: SEARCH_E2E_003

**Priority**: P1

**Scenario**: Search using non-existing product

**Expected Result**: No-result state/message is displayed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Search using non-existing product

**Expected Behavior**: No-result state/message is displayed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Search using non-existing product
3. Verify the expected result: No-result state/message is displayed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: SEARCH_E2E_004

**Priority**: P0

**Scenario**: Search and open product from results

**Expected Result**: Correct product details page opens

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Search and open product from results

**Expected Behavior**: Correct product details page opens

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Search and open product from results
3. Verify the expected result: Correct product details page opens

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: SEARCH_E2E_005

**Priority**: P0

**Scenario**: Search product and add it to cart from results

**Expected Result**: Correct product is added to cart

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Search product and add it to cart from results

**Expected Behavior**: Correct product is added to cart

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Search product and add it to cart from results
3. Verify the expected result: Correct product is added to cart

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: SEARCH_E2E_006

**Priority**: P2

**Scenario**: Search using special characters

**Expected Result**: Application handles input without UI/application failure

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Search using special characters

**Expected Behavior**: Application handles input without UI/application failure

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Search using special characters
3. Verify the expected result: Application handles input without UI/application failure

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

## Feature: Product Details

### Test Case: PRODUCT_E2E_001

**Priority**: P0

**Scenario**: Open product from homepage

**Expected Result**: Correct product details are displayed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Open product from homepage

**Expected Behavior**: Correct product details are displayed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Open product from homepage
3. Verify the expected result: Correct product details are displayed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: PRODUCT_E2E_002

**Priority**: P0

**Scenario**: Open product from search results

**Expected Result**: Correct product details are displayed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Open product from search results

**Expected Behavior**: Correct product details are displayed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Open product from search results
3. Verify the expected result: Correct product details are displayed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: PRODUCT_E2E_003

**Priority**: P0

**Scenario**: Select product quantity and add to cart

**Expected Result**: Selected quantity is added

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Select product quantity and add to cart

**Expected Behavior**: Selected quantity is added

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Select product quantity and add to cart
3. Verify the expected result: Selected quantity is added

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: PRODUCT_E2E_004

**Priority**: P1

**Scenario**: Add product to wishlist from product page

**Expected Result**: Product appears in wishlist

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Add product to wishlist from product page

**Expected Behavior**: Product appears in wishlist

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Add product to wishlist from product page
3. Verify the expected result: Product appears in wishlist

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: PRODUCT_E2E_005

**Priority**: P0

**Scenario**: Add product to cart and navigate to cart

**Expected Result**: Correct product and quantity are displayed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Add product to cart and navigate to cart

**Expected Behavior**: Correct product and quantity are displayed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Add product to cart and navigate to cart
3. Verify the expected result: Correct product and quantity are displayed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: PRODUCT_E2E_006

**Priority**: P1

**Scenario**: Product with configurable options

**Expected Result**: Required options can be selected and product added successfully

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Product with configurable options

**Expected Behavior**: Required options can be selected and product added successfully

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Product with configurable options
3. Verify the expected result: Required options can be selected and product added successfully

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

## Feature: Add To Cart

### Test Case: CART_E2E_001

**Priority**: P0

**Scenario**: Add one product to cart

**Expected Result**: Product appears in cart

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Add one product to cart

**Expected Behavior**: Product appears in cart

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Add one product to cart
3. Verify the expected result: Product appears in cart

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: CART_E2E_002

**Priority**: P0

**Scenario**: Add multiple different products

**Expected Result**: All selected products appear in cart

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Add multiple different products

**Expected Behavior**: All selected products appear in cart

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Add multiple different products
3. Verify the expected result: All selected products appear in cart

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: CART_E2E_003

**Priority**: P0

**Scenario**: Add same product multiple times

**Expected Result**: Quantity/line items behave correctly

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Add same product multiple times

**Expected Behavior**: Quantity/line items behave correctly

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Add same product multiple times
3. Verify the expected result: Quantity/line items behave correctly

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: CART_E2E_004

**Priority**: P0

**Scenario**: Add product and verify cart count

**Expected Result**: Cart count is updated correctly

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Add product and verify cart count

**Expected Behavior**: Cart count is updated correctly

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Add product and verify cart count
3. Verify the expected result: Cart count is updated correctly

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: CART_E2E_005

**Priority**: P1

**Scenario**: Add product, navigate away, return to cart

**Expected Result**: Cart retains product appropriately

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Add product, navigate away, return to cart

**Expected Behavior**: Cart retains product appropriately

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Add product, navigate away, return to cart
3. Verify the expected result: Cart retains product appropriately

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: CART_E2E_006

**Priority**: P0

**Scenario**: Update product quantity

**Expected Result**: Cart quantity and totals are recalculated

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Update product quantity

**Expected Behavior**: Cart quantity and totals are recalculated

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Update product quantity
3. Verify the expected result: Cart quantity and totals are recalculated

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: CART_E2E_007

**Priority**: P0

**Scenario**: Remove product from cart

**Expected Result**: Product is removed and totals are updated

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Remove product from cart

**Expected Behavior**: Product is removed and totals are updated

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Remove product from cart
3. Verify the expected result: Product is removed and totals are updated

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: CART_E2E_008

**Priority**: P1

**Scenario**: Remove all products

**Expected Result**: Empty-cart state is displayed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Remove all products

**Expected Behavior**: Empty-cart state is displayed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Remove all products
3. Verify the expected result: Empty-cart state is displayed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: CART_E2E_009

**Priority**: P1

**Scenario**: Add product while logged out and then login

**Expected Result**: Cart behavior matches expected guest-to-user flow

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Add product while logged out and then login

**Expected Behavior**: Cart behavior matches expected guest-to-user flow

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Add product while logged out and then login
3. Verify the expected result: Cart behavior matches expected guest-to-user flow

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

## Feature: Wishlist

### Test Case: WISH_E2E_001

**Priority**: P0

**Scenario**: Login and add product to wishlist

**Expected Result**: Product is added to wishlist

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Login and add product to wishlist

**Expected Behavior**: Product is added to wishlist

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Login and add product to wishlist
3. Verify the expected result: Product is added to wishlist

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: WISH_E2E_002

**Priority**: P0

**Scenario**: Open wishlist

**Expected Result**: Added product is displayed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Open wishlist

**Expected Behavior**: Added product is displayed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Open wishlist
3. Verify the expected result: Added product is displayed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: WISH_E2E_003

**Priority**: P1

**Scenario**: Add multiple products to wishlist

**Expected Result**: All products are displayed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Add multiple products to wishlist

**Expected Behavior**: All products are displayed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Add multiple products to wishlist
3. Verify the expected result: All products are displayed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: WISH_E2E_004

**Priority**: P1

**Scenario**: Remove product from wishlist

**Expected Result**: Product is removed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Remove product from wishlist

**Expected Behavior**: Product is removed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Remove product from wishlist
3. Verify the expected result: Product is removed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: WISH_E2E_005

**Priority**: P0

**Scenario**: Move/add wishlist product to cart

**Expected Result**: Product appears in cart

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Move/add wishlist product to cart

**Expected Behavior**: Product appears in cart

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Move/add wishlist product to cart
3. Verify the expected result: Product appears in cart

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: WISH_E2E_006

**Priority**: P1

**Scenario**: Logout and login again

**Expected Result**: Wishlist persists according to account behavior

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Logout and login again

**Expected Behavior**: Wishlist persists according to account behavior

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Logout and login again
3. Verify the expected result: Wishlist persists according to account behavior

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

## Feature: Checkout

### Test Case: CHECKOUT_E2E_001

**Priority**: P0

**Scenario**: Login → Add product → Checkout

**Expected Result**: User reaches checkout successfully

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Login → Add product → Checkout

**Expected Behavior**: User reaches checkout successfully

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Login → Add product → Checkout
3. Verify the expected result: User reaches checkout successfully

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: CHECKOUT_E2E_002

**Priority**: P0

**Scenario**: Checkout using valid billing information

**Expected Result**: Billing step completes successfully

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Checkout using valid billing information

**Expected Behavior**: Billing step completes successfully

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Checkout using valid billing information
3. Verify the expected result: Billing step completes successfully

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: CHECKOUT_E2E_003

**Priority**: P0

**Scenario**: Checkout using valid shipping information

**Expected Result**: Shipping step completes successfully

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Checkout using valid shipping information

**Expected Behavior**: Shipping step completes successfully

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Checkout using valid shipping information
3. Verify the expected result: Shipping step completes successfully

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: CHECKOUT_E2E_004

**Priority**: P0

**Scenario**: Select available shipping method

**Expected Result**: Shipping method is accepted

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Select available shipping method

**Expected Behavior**: Shipping method is accepted

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Select available shipping method
3. Verify the expected result: Shipping method is accepted

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: CHECKOUT_E2E_005

**Priority**: P0

**Scenario**: Select available payment method

**Expected Result**: Payment step completes successfully

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Select available payment method

**Expected Behavior**: Payment step completes successfully

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Select available payment method
3. Verify the expected result: Payment step completes successfully

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: CHECKOUT_E2E_006

**Priority**: P0

**Scenario**: Review order before submission

**Expected Result**: Correct products, quantities, prices and totals are displayed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Review order before submission

**Expected Behavior**: Correct products, quantities, prices and totals are displayed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Review order before submission
3. Verify the expected result: Correct products, quantities, prices and totals are displayed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: CHECKOUT_E2E_007

**Priority**: P0

**Scenario**: Complete checkout

**Expected Result**: Order is successfully placed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Complete checkout

**Expected Behavior**: Order is successfully placed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Complete checkout
3. Verify the expected result: Order is successfully placed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: CHECKOUT_E2E_008

**Priority**: P1

**Scenario**: Checkout with missing mandatory information

**Expected Result**: User cannot proceed and validation is displayed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Checkout with missing mandatory information

**Expected Behavior**: User cannot proceed and validation is displayed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Checkout with missing mandatory information
3. Verify the expected result: User cannot proceed and validation is displayed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: CHECKOUT_E2E_009

**Priority**: P0

**Scenario**: Checkout with multiple products

**Expected Result**: All products and calculated totals are correct

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Checkout with multiple products

**Expected Behavior**: All products and calculated totals are correct

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Checkout with multiple products
3. Verify the expected result: All products and calculated totals are correct

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: CHECKOUT_E2E_010

**Priority**: P1

**Scenario**: Cancel/return from checkout

**Expected Result**: User returns to appropriate previous page without unexpected data loss

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Cancel/return from checkout

**Expected Behavior**: User returns to appropriate previous page without unexpected data loss

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Cancel/return from checkout
3. Verify the expected result: User returns to appropriate previous page without unexpected data loss

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

## Feature: Order Placement

### Test Case: ORDER_E2E_001

**Priority**: P0

**Scenario**: Login → Add product → Checkout → Place order

**Expected Result**: Order is created successfully

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Login → Add product → Checkout → Place order

**Expected Behavior**: Order is created successfully

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Login → Add product → Checkout → Place order
3. Verify the expected result: Order is created successfully

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: ORDER_E2E_002

**Priority**: P0

**Scenario**: Place order and capture order number

**Expected Result**: Unique order number is displayed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Place order and capture order number

**Expected Behavior**: Unique order number is displayed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Place order and capture order number
3. Verify the expected result: Unique order number is displayed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: ORDER_E2E_003

**Priority**: P0

**Scenario**: Place order and open order history

**Expected Result**: Newly created order appears in history

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Place order and open order history

**Expected Behavior**: Newly created order appears in history

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Place order and open order history
3. Verify the expected result: Newly created order appears in history

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: ORDER_E2E_004

**Priority**: P0

**Scenario**: Open order details

**Expected Result**: Product, quantity, price and order information are correct

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Open order details

**Expected Behavior**: Product, quantity, price and order information are correct

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Open order details
3. Verify the expected result: Product, quantity, price and order information are correct

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: ORDER_E2E_005

**Priority**: P0

**Scenario**: Place order with multiple products

**Expected Result**: All products are associated with the order

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Place order with multiple products

**Expected Behavior**: All products are associated with the order

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Place order with multiple products
3. Verify the expected result: All products are associated with the order

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: ORDER_E2E_006

**Priority**: P1

**Scenario**: Verify cart after successful order

**Expected Result**: Cart is empty or reflects expected post-order behavior

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Verify cart after successful order

**Expected Behavior**: Cart is empty or reflects expected post-order behavior

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Verify cart after successful order
3. Verify the expected result: Cart is empty or reflects expected post-order behavior

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

## Feature: My Account

### Test Case: ACCOUNT_E2E_001

**Priority**: P0

**Scenario**: Login → Open My Account

**Expected Result**: Account page opens successfully

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Login → Open My Account

**Expected Behavior**: Account page opens successfully

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Login → Open My Account
3. Verify the expected result: Account page opens successfully

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: ACCOUNT_E2E_002

**Priority**: P1

**Scenario**: Verify registered user information

**Expected Result**: Correct account information is displayed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Verify registered user information

**Expected Behavior**: Correct account information is displayed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Verify registered user information
3. Verify the expected result: Correct account information is displayed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: ACCOUNT_E2E_003

**Priority**: P1

**Scenario**: Update account information

**Expected Result**: Updated information is saved successfully

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Update account information

**Expected Behavior**: Updated information is saved successfully

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Update account information
3. Verify the expected result: Updated information is saved successfully

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: ACCOUNT_E2E_004

**Priority**: P0

**Scenario**: Update password and login with new password

**Expected Result**: New password works successfully

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Update password and login with new password

**Expected Behavior**: New password works successfully

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Update password and login with new password
3. Verify the expected result: New password works successfully

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: ACCOUNT_E2E_005

**Priority**: P0

**Scenario**: Open order history from account

**Expected Result**: Previous orders are displayed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Open order history from account

**Expected Behavior**: Previous orders are displayed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Open order history from account
3. Verify the expected result: Previous orders are displayed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: ACCOUNT_E2E_006

**Priority**: P1

**Scenario**: Open wishlist from account

**Expected Result**: User wishlist is displayed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Open wishlist from account

**Expected Behavior**: User wishlist is displayed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Open wishlist from account
3. Verify the expected result: User wishlist is displayed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

## Feature: Logout

### Test Case: LOGOUT_E2E_001

**Priority**: P0

**Scenario**: Login → Logout

**Expected Result**: User is successfully logged out

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Login → Logout

**Expected Behavior**: User is successfully logged out

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Login → Logout
3. Verify the expected result: User is successfully logged out

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: LOGOUT_E2E_002

**Priority**: P0

**Scenario**: Logout → Open My Account

**Expected Result**: User is redirected/denied access according to application behavior

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Logout → Open My Account

**Expected Behavior**: User is redirected/denied access according to application behavior

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Logout → Open My Account
3. Verify the expected result: User is redirected/denied access according to application behavior

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: LOGOUT_E2E_003

**Priority**: P0

**Scenario**: Logout → Attempt checkout

**Expected Result**: User is required to authenticate or follow expected guest flow

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Logout → Attempt checkout

**Expected Behavior**: User is required to authenticate or follow expected guest flow

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Logout → Attempt checkout
3. Verify the expected result: User is required to authenticate or follow expected guest flow

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: LOGOUT_E2E_004

**Priority**: P0

**Scenario**: Logout → Login again

**Expected Result**: User can authenticate successfully

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Logout → Login again

**Expected Behavior**: User can authenticate successfully

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Logout → Login again
3. Verify the expected result: User can authenticate successfully

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

### Test Case: LOGOUT_E2E_005

**Priority**: P0

**Scenario**: Logout and use browser Back

**Expected Result**: Protected user information is not improperly exposed

#### AI Prompt Spec

You are an AI test automation agent for the Tricentis Demo Web Shop (https://demowebshop.tricentis.com/).

**Test Objective**: Logout and use browser Back

**Expected Behavior**: Protected user information is not improperly exposed

**Test Steps (High-Level)**:
1. Navigate to the application base URL
2. Execute the scenario: Logout and use browser Back
3. Verify the expected result: Protected user information is not improperly exposed

**Validation Criteria**:
- The test should pass if the expected result is achieved
- The test should fail with clear error messages if the expected result is not achieved
- Screenshots should be captured on failure

**Test Data Requirements**:
- Use valid test data for the scenario
- Generate unique emails for registration tests
- Use existing test accounts where appropriate

---

