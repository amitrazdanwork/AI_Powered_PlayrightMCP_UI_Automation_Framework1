import { Page, Locator, expect } from '@playwright/test';

export class WishlistPage {
    private readonly page: Page;

    // Locators
    private readonly lblProductNames: Locator;
    private readonly btnAddToCart: Locator;
    private readonly btnRemoveItems: Locator;
    private readonly lblEmptyWishlist: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.lblProductNames = page.locator('.product-name a');
        this.btnAddToCart = page.getByRole('button', { name: 'Add to cart' });
        this.btnRemoveItems = page.locator('input[name="removefromcart"]');
        this.lblEmptyWishlist = page.locator(':has-text("The wishlist is empty")');
    }

    /**
     * Gets all product names in wishlist
     * @returns Promise<string[]> - Array of product names
     */
    async getProductNames(): Promise<string[]> {
        try {
            return await this.lblProductNames.allTextContents();
        } catch (error) {
            console.log(`Error getting product names: ${error}`);
            return [];
        }
    }

    /**
     * Adds a product from wishlist to cart
     * @param index - Product index
     * @returns Promise<void>
     */
    async addToCart(index: number): Promise<void> {
        const addToCartButtons = await this.btnAddToCart.all();
        if (addToCartButtons[index]) {
            await addToCartButtons[index].click();
            await this.page.waitForLoadState('networkidle');
        }
    }

    /**
     * Removes a product from wishlist
     * @param index - Product index
     * @returns Promise<void>
     */
    async removeProduct(index: number): Promise<void> {
        const removeButtons = await this.btnRemoveItems.all();
        if (removeButtons[index]) {
            await removeButtons[index].check();
            // There might be an update button
            const updateBtn = this.page.getByRole('button', { name: 'Update wishlist' });
            if (await updateBtn.isVisible()) {
                await updateBtn.click();
            }
            await this.page.waitForLoadState('networkidle');
        }
    }

    /**
     * Verifies wishlist is empty
     * @returns Promise<boolean> - true if wishlist is empty
     */
    async isWishlistEmpty(): Promise<boolean> {
        try {
            return await this.lblEmptyWishlist.isVisible();
        } catch (error) {
            console.log(`Error checking empty wishlist: ${error}`);
            return true;
        }
    }

    /**
     * Verifies wishlist page exists
     * @returns Promise<boolean> - true if the page is displayed
     */
    async isWishlistPageExists(): Promise<boolean> {
        try {
            return await this.page.locator('h1:has-text("Wishlist")').isVisible();
        } catch (error) {
            console.log(`Error checking wishlist page: ${error}`);
            return false;
        }
    }
}