import { Page, Locator, expect } from '@playwright/test';

export class MyAccountPage {
    private readonly page: Page;

    // Locators
    private readonly lnkOrders: Locator;
    private readonly lnkAddresses: Locator;
    private readonly lnkWishlist: Locator;
    private readonly lnkChangePassword: Locator;
    private readonly lblAccountInfo: Locator;
    private readonly txtFirstName: Locator;
    private readonly txtLastName: Locator;
    private readonly txtEmail: Locator;
    private readonly btnSave: Locator;
    private readonly txtOldPassword: Locator;
    private readonly txtNewPassword: Locator;
    private readonly txtConfirmNewPassword: Locator;
    private readonly btnChangePassword: Locator;
    private readonly selectedGenderCheckbox: Locator;
    private readonly orderListItems: Locator;
    private readonly noOrdersMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.lnkOrders = page.getByRole('link', { name: 'Orders' });
        this.lnkAddresses = page.getByRole('link', { name: 'Addresses' });
        this.lnkWishlist = page.getByRole('link', { name: 'Wishlist' });
        this.lnkChangePassword = page.getByRole('link', { name: 'Change password' });
        this.lblAccountInfo = page.locator('.account-summary, .customer-info');
        this.txtFirstName = page.getByLabel('First name:');
        this.txtLastName = page.getByLabel('Last name:');
        this.txtEmail = page.getByLabel('Email:');
        this.btnSave = page.getByRole('button', { name: 'Save' });
        this.txtOldPassword = page.getByLabel('Old password:');
        this.txtNewPassword = page.getByLabel('New password:');
        this.txtConfirmNewPassword = page.locator('input#ConfirmNewPassword');
        this.btnChangePassword = page.getByRole('button', { name: 'Change password' });
        this.selectedGenderCheckbox = page.locator('input[type="radio"]:checked');

        // Orders history
        this.orderListItems = page.locator('.customer-orders-grid .order-list-item, .order-list .order-item');
        this.noOrdersMessage = page.locator('.no-orders-message, .customer-orders-grid:has-text("No orders")');
        this.orderNumberElements = page.locator('strong:has-text("Order Number:")');
    }

    /**
     * Clicks Orders link
     * @returns Promise<void>
     */
    async clickOrders(): Promise<void> {
        await this.lnkOrders.click();
    }

    /**
     * Clicks Addresses link
     * @returns Promise<void>
     */
    async clickAddresses(): Promise<void> {
        await this.lnkAddresses.click();
    }

    /**
     * Clicks Wishlist link
     * @returns Promise<void>
     */
    async clickWishlist(): Promise<void> {
        await this.lnkWishlist.click();
    }

    /**
     * Clicks Change Password link
     * @returns Promise<void>
     */
    async clickChangePassword(): Promise<void> {
        await this.lnkChangePassword.click();
    }

    /**
     * Gets account information text
     * @returns Promise<string> - Account info text
     */
    async getAccountInfo(): Promise<string> {
        try {
            return await this.lblAccountInfo.textContent() || '';
        } catch (error) {
            console.log(`Error getting account info: ${error}`);
            return '';
        }
    }

    /**
     * Gets account information text
     * @returns Promise<string> - Account info text
     */
    async getAccountSelectedGender(): Promise<string> {
        try {
            return await this.selectedGenderCheckbox.getAttribute('value') || '';
        } catch (error) {
            console.log(`Error getting selected gender: ${error}`);
            return '';
        }
    }

        /**
     * Gets account information text
     * @returns Promise<string> - Account info text
     */
    async getAccountInfoFirstName(): Promise<string> {
        try {
            return await this.txtFirstName.inputValue() || '';
        } catch (error) {
            console.log(`Error getting first name: ${error}`);
            return '';
        }
    }

    /**
     * Gets account information text
     * @returns Promise<string> - Account info text
     */
    async getAccountInfoLastName(): Promise<string> {
        try {
            return await this.txtLastName.inputValue() || '';
        } catch (error) {
            console.log(`Error getting last name: ${error}`);
            return '';
        }
    }

    
    /**
     * Gets account information text
     * @returns Promise<string> - Account info text
     */
    async getAccountInfoEmail(): Promise<string> {
        try {
            return await this.txtEmail.inputValue() || '';
        } catch (error) {
            console.log(`Error getting email: ${error}`);
            return '';
        }
    }

    /**
     * Updates account information
     * @param firstName - First name
     * @param lastName - Last name
     * @param email - Email
     * @returns Promise<void>
     */
    async updateAccountInfo(firstName: string, lastName: string, email: string): Promise<void> {
        await this.txtFirstName.fill(firstName);
        await this.txtLastName.fill(lastName);
        await this.txtEmail.fill(email);
        await this.btnSave.click();
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Changes password
     * @param oldPassword - Current password
     * @param newPassword - New password
     * @param confirmPassword - Confirm new password
     * @returns Promise<void>
     */
    async changePassword(oldPassword: string, newPassword: string, confirmPassword: string): Promise<void> {
        await this.txtOldPassword.fill(oldPassword);
        await this.txtNewPassword.fill(newPassword);
        await this.txtConfirmNewPassword.fill(confirmPassword);
        await this.btnChangePassword.click();
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Verifies my account page exists
     * @returns Promise<boolean> - true if the page is displayed
     */
    async isMyAccountPageExists(): Promise<boolean> {
        try {
            return await this.page.locator('h1:has-text("My account")').isVisible();
        } catch (error) {
            console.log(`Error checking my account page: ${error}`);
            return false;
        }
    }

    /**
     * Gets all order numbers from the order history
     * @returns Promise<string[]> - Array of order numbers
     */
    async getOrderNumbers(): Promise<string[]> {
        try {
            const orderElements = await this.orderNumberElements.all();
            const orderNumbers: string[] = [];
            for (const element of orderElements) {
                const text = await element.textContent();
                if (text) {
                    const match = text.match(/Order Number:\s*(\d+)/i);
                    if (match) {
                        orderNumbers.push(match[1]);
                    }
                }
            }
            return orderNumbers;
        } catch (error) {
            console.log(`Error getting order numbers: ${error}`);
            return [];
        }
    }

    /**
     * Checks if a specific order number exists in order history
     * @param orderNumber - Order number to find
     * @returns Promise<boolean> - true if order is found
     */
    async orderExists(orderNumber: string): Promise<boolean> {
        try {
            const orderNumbers = await this.getOrderNumbers();
            return orderNumbers.includes(orderNumber);
        } catch (error) {
            console.log(`Error checking order existence: ${error}`);
            return false;
        }
    }

    /**
     * Checks if no orders message is displayed
     * @returns Promise<boolean> - true if no orders message is visible
     */
    async isNoOrdersMessageDisplayed(): Promise<boolean> {
        try {
            return await this.noOrdersMessage.isVisible();
        } catch (error) {
            console.log(`Error checking no orders message: ${error}`);
            return false;
        }
    }
}