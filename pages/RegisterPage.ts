import { Page, Locator, expect } from '@playwright/test';

export class RegisterPage {
    private readonly page: Page;

    // Locators
    private readonly rdGenderMale: Locator;
    private readonly rdGenderFemale: Locator;
    private readonly txtFirstName: Locator;
    private readonly txtLastName: Locator;
    private readonly txtEmail: Locator;
    private readonly txtPassword: Locator;
    private readonly txtConfirmPassword: Locator;
    private readonly btnRegister: Locator;
    private readonly lblResult: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.rdGenderMale = page.getByRole('radio', { name: 'Male' });
        this.rdGenderFemale = page.getByRole('radio', { name: 'Female' });
        this.txtFirstName = page.getByLabel('First name:');
        this.txtLastName = page.getByLabel('Last name:');
        this.txtEmail = page.getByLabel('Email:');
        this.txtPassword = page.getByLabel('Password:');
        this.txtConfirmPassword = page.getByLabel('Confirm password:');
        this.btnRegister = page.getByRole('button', { name: 'Register' });
        this.lblResult = page.locator('.result');
    }

    /**
     * Selects gender
     * @param gender - 'male' or 'female'
     * @returns Promise<void>
     */
    async selectGender(gender: string): Promise<void> {
        if (gender.toLowerCase() === 'male') {
            await this.rdGenderMale.check();
        } else {
            await this.rdGenderFemale.check();
        }
    }

    /**
     * Sets first name
     * @param firstName - First name
     * @returns Promise<void>
     */
    async setFirstName(firstName: string): Promise<void> {
        await this.txtFirstName.fill(firstName);
    }

    /**
     * Sets last name
     * @param lastName - Last name
     * @returns Promise<void>
     */
    async setLastName(lastName: string): Promise<void> {
        await this.txtLastName.fill(lastName);
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
     * Sets confirm password
     * @param confirmPassword - Confirm password
     * @returns Promise<void>
     */
    async setConfirmPassword(confirmPassword: string): Promise<void> {
        await this.txtConfirmPassword.fill(confirmPassword);
    }

    /**
     * Clicks the Register button
     * @returns Promise<void>
     */
    async clickRegister(): Promise<void> {
        await this.btnRegister.click();
    }

    /**
     * Completes registration with all fields
     * @param userData - Registration data
     * @returns Promise<void>
     */
    async register(userData: {
        gender: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        confirmPassword: string;
    }): Promise<void> {
        await this.selectGender(userData.gender);
        await this.setFirstName(userData.firstName);
        await this.setLastName(userData.lastName);
        await this.setEmail(userData.email);
        await this.setPassword(userData.password);
        await this.setConfirmPassword(userData.confirmPassword);
        await this.clickRegister();
    }

    /**
     * Gets the result message after registration
     * @returns Promise<string> - Result message
     */
    async getResultMessage(): Promise<string> {
        try {
            return await this.lblResult.textContent() || '';
        } catch (error) {
            console.log(`Error getting result message: ${error}`);
            return '';
        }
    }

    /**
     * Verifies registration success
     * @returns Promise<boolean> - true if registration was successful
     */
    async isRegistrationSuccessful(): Promise<boolean> {
        try {
            const message = await this.getResultMessage();
            return message.toLowerCase().includes('your registration completed');
        } catch (error) {
            console.log(`Error checking registration success: ${error}`);
            return false;
        }
    }

    /**
     * Verifies the register page exists
     * @returns Promise<boolean> - true if the page is displayed
     */
    async isRegisterPageExists(): Promise<boolean> {
        try {
            return await this.btnRegister.isVisible();
        } catch (error) {
            console.log(`Error checking register page: ${error}`);
            return false;
        }
    }
}