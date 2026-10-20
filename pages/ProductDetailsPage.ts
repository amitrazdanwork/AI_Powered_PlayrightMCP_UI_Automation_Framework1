import { Page, Locator, expect } from '@playwright/test';

export class ProductDetailsPage {
    private readonly page: Page;

    // Locators
    private readonly lblProductName: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.lblProductName = page.locator("div[class='product-name'] h1");
    }

    /**
     * Gets the product name
     * @returns Promise<string> - Product name
     */
    async getProductName(): Promise<string> {
        try {
            return await this.lblProductName.textContent() || '';
        } catch (error) {
            console.log(`Error getting product name: ${error}`);
            return '';
        }
    }

    /**
     * Verifies product details page exists
     * @returns Promise<boolean> - true if the page is displayed
     */
    async isProductDetailsPageExists(): Promise<boolean> {
        try {
            return await this.lblProductName.isVisible();
        } catch (error) {
            console.log(`Error checking product details page: ${error}`);
            return false;
        }
    }

}