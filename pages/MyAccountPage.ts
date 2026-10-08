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
        this.txtConfirmNewPassword = page.getByLabel('Confirm new password:');
        this.btnChangePassword = page.getByRole('button', { name: 'Change password' });
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
}