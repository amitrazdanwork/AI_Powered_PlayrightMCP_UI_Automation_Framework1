import { DataProvider } from './DataReader';

export class Helper {
    /**
     * Gets login credentials from test data file
     * @param testId - Test ID to get data for
     * @returns Object with email and password
     */
    static getLoginData(testId: string) {
        const testData = DataProvider.readJson('./testdata/Login_TestData.json');
        const data = testData.find((item: any) => item.TestID === testId);
        return data || {
            email: process.env.APP_EMAIL || 'test@example.com',
            password: process.env.APP_PASSWORD || 'password123',
            rememberMe: false
        };
    }

    /**
     * Gets login credentials from environment/test data
     * @returns Object with email and password
     */
    static getLoginDetails() {
        return {
            email: process.env.APP_EMAIL || 'test@example.com',
            password: process.env.APP_PASSWORD || 'password123'
        };
    }

    /**
     * Gets registration test data
     * @param testId - Test ID to get data for
     * @returns Registration data object
     */
    static getRegistrationData(testId: string) {
        const testData = DataProvider.readJson('./testdata/Register_TestData.json');
        const data = testData.find((item: any) => item.TestID === testId);
        return data || {
            gender: 'male',
            FirstName: 'Test',
            LastName: 'User',
            Email: `test${Date.now()}@example.com`,
            Password: 'password123',
            ConfirmPassword: 'password123'
        };
    }

    /**
     * Gets search test data
     * @param testId - Test ID to get data for
     * @returns Search data object
     */
    static getSearchData(testId: string) {
        const testData = DataProvider.readJson('./testdata/ProductSearch_TestData.json');
        const data = testData.find((item: any) => item.TestID === testId);
        return data || {
            Email: 'test@example.com',
            Password: 'password123',
            ProductName: 'Health Book'
        };
    }

    /**
     * Gets add to cart test data
     * @param testId - Test ID to get data for
     * @returns Cart data object
     */
    static getCartData(testId: string) {
        const testData = DataProvider.readJson('./testdata/AddToCart_TestData.json');
        const data = testData.find((item: any) => item.TestID === testId);
        return data || {
            Email: 'test@example.com',
            Password: 'password123',
            ProductName: 'Health Book'
        };
    }

    /**
     * Generates a unique email for registration tests
     * @returns Unique email string
     */
    static generateUniqueEmail(): string {
        return `testuser${Date.now()}${Math.floor(Math.random() * 1000)}@example.com`;
    }

    /**
     * Gets billing address data
     * @returns Billing address object
     */
    static getBillingAddress() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            company: 'Test Company',
            address1: '123 Test Street',
            address2: 'Suite 100',
            city: 'New York',
            state: 'New York',
            zip: '10001',
            country: 'United States',
            phone: '123-456-7890',
            fax: '123-456-7891'
        };
    }
}