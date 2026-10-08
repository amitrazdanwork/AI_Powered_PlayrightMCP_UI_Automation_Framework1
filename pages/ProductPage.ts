import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
    private readonly page: Page;

    // Locators
    private readonly lblProductName: Locator;
    private readonly lblPrice: Locator;
    private readonly txtQuantity: Locator;
    private readonly btnAddToCart: Locator;
    private readonly btnAddToWishlist: Locator;
    private readonly lblAvailability: Locator;
    private readonly lblProductDetails: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.lblProductName = page.locator('h1').first();
        this.lblPrice = page.locator('.price.actual-price, .price-value').first();
        this.txtQuantity = page.getByLabel('Qty:');
        this.btnAddToCart = page.getByRole('button', { name: 'Add to cart' });
        this.btnAddToWishlist = page.getByRole('button', { name: 'Add to wishlist' });
        this.lblAvailability = page.locator('[class*="availability"]');
        this.lblProductDetails = page.locator('.short-description');
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
     * Gets the product price
     * @returns Promise<string> - Product price
     */
    async getPrice(): Promise<string> {
        try {
            return await this.lblPrice.textContent() || '';
        } catch (error) {
            console.log(`Error getting price: ${error}`);
            return '';
        }
    }

    /**
     * Sets quantity
     * @param quantity - Quantity to set
     * @returns Promise<void>
     */
    async setQuantity(quantity: string): Promise<void> {
        await this.txtQuantity.fill(quantity);
    }

    /**
     * Clicks Add to Cart button
     * @returns Promise<void>
     */
    async clickAddToCart(): Promise<void> {
        await this.btnAddToCart.click();
    }

    /**
     * Clicks Add to Wishlist button
     * @returns Promise<void>
     */
    async clickAddToWishlist(): Promise<void> {
        await this.btnAddToWishlist.click();
    }

    /**
     * Gets availability status
     * @returns Promise<string> - Availability text
     */
    async getAvailability(): Promise<string> {
        try {
            return await this.lblAvailability.textContent() || '';
        } catch (error) {
            console.log(`Error getting availability: ${error}`);
            return '';
        }
    }

    /**
     * Verifies product details page exists
     * @returns Promise<boolean> - true if the page is displayed
     */
    async isProductPageExists(): Promise<boolean> {
        try {
            return await this.lblProductName.isVisible();
        } catch (error) {
            console.log(`Error checking product page: ${error}`);
            return false;
        }
    }

    /**
     * Waits for add to cart notification to disappear
     * @returns Promise<void>
     */
    async waitForCartNotification(): Promise<void> {
        try {
            await this.page.waitForSelector('.bar-notification.success', { state: 'visible', timeout: 5000 });
            await this.page.waitForSelector('.bar-notification.success', { state: 'hidden', timeout: 5000 });
        } catch (error) {
            console.log(`Notification handling: ${error}`);
        }
    }
}