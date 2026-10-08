import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    private readonly page: Page;

    // Locators
    private readonly txtEmail: Locator;
    private readonly txtPassword: Locator;
    private readonly chkRememberMe: Locator;
    private readonly lnkForgotPassword: Locator;
    private readonly btnLogin: Locator;
    private readonly lblError: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.txtEmail = page.getByLabel('Email:');
        this.txtPassword = page.getByLabel('Password:');
        this.chkRememberMe = page.getByRole('checkbox', { name: 'Remember me?' });
        this.lnkForgotPassword = page.getByRole('link', { name: 'Forgot password?' });
        this.btnLogin = page.getByRole('button', { name: 'Log in' });
        this.lblError = page.locator('.message-error, .validation-summary-errors');
    }

    /**
     * Sets email
     * @param email - Email address
     * @returns Promise<void>
     */
    async setEmail(email: string): Promise<void> {
        await this.txtEmail.fill(email);
    }

    /**
     * Sets password
     * @param password - Password
     * @returns Promise<void>
     */
    async setPassword(password: string): Promise<void> {
        await this.txtPassword.fill(password);
    }

    /**
     * Toggles Remember Me checkbox
     * @param remember - true to check, false to uncheck
     * @returns Promise<void>
     */
    async setRememberMe(remember: boolean): Promise<void> {
        if (remember) {
            await this.chkRememberMe.check();
        } else {
            await this.chkRememberMe.uncheck();
        }
    }

    /**
     * Clicks the Login button
     * @returns Promise<void>
     */
    async clickLogin(): Promise<void> {
        await this.btnLogin.click();
    }

    /**
     * Performs login with credentials
     * @param email - Email address
     * @param password - Password
     * @returns Promise<void>
     */
    async login(email: string, password: string): Promise<void> {
        await this.setEmail(email);
        await this.setPassword(password);
        await this.clickLogin();
    }

    /**
     * Performs login with Remember Me
     * @param email - Email address
     * @param password - Password
     * @returns Promise<void>
     */
    async loginWithRememberMe(email: string, password: string): Promise<void> {
        await this.setEmail(email);
        await this.setPassword(password);
        await this.setRememberMe(true);
        await this.clickLogin();
    }

    /**
     * Clicks Forgot Password link
     * @returns Promise<void>
     */
    async clickForgotPassword(): Promise<void> {
        await this.lnkForgotPassword.click();
    }

    /**
     * Gets the error message after failed login
     * @returns Promise<string> - Error message
     */
    async getErrorMessage(): Promise<string> {
        try {
            const error = await this.lblError.first().textContent();
            return error || await this.page.locator('.validation-summary-errors, .message-error').first().textContent() || '';
        } catch (error) {
            console.log(`Error getting error message: ${error}`);
            return '';
        }
    }

    /**
     * Verifies login was successful (checks if we're redirected away from login page)
     * @returns Promise<boolean> - true if login was successful
     */
    async isLoginSuccessful(): Promise<boolean> {
        try {
            // Check if we're no longer on the login page
            await this.page.waitForURL((url) => !url.toString().includes('/login'), { timeout: 5000 });
            return true;
        } catch (error) {
            console.log(`Login was not successful: ${error}`);
            return false;
        }
    }

    /**
     * Verifies the login page exists
     * @returns Promise<boolean> - true if the page is displayed
     */
    async isLoginPageExists(): Promise<boolean> {
        try {
            return await this.btnLogin.isVisible();
        } catch (error) {
            console.log(`Error checking login page: ${error}`);
            return false;
        }
    }
}