import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;

    // Locators
    private readonly txtQuantities: Locator;
    private readonly btnUpdateCart: Locator;
    private readonly btnRemoveItems: Locator;
    private readonly lblProductNames: Locator;
    private readonly lblProductPrices: Locator;
    private readonly lblSubtotal: Locator;
    private readonly lblTotal: Locator;
    private readonly chkTermsOfService: Locator;
    private readonly btnCheckout: Locator;
    private readonly lblEmptyCart: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.txtQuantities = page.locator('input.qty-input');
        this.btnUpdateCart = page.getByRole('button', { name: 'Update shopping cart' });
        this.btnRemoveItems = page.locator('input[name="removefromcart"]');
        this.lblProductNames = page.locator('.product-name a');
        this.lblProductPrices = page.locator('.product-unit-price');
        this.lblSubtotal = page.locator('.product-subtotal');
        this.lblTotal = page.locator('.order-total .value-summary');
        this.chkTermsOfService = page.getByLabel('I agree with the terms of service');
        this.btnCheckout = page.getByRole('button', { name: 'Checkout' });
        this.lblEmptyCart = page.locator('.order-summary-content:has-text("Your Shopping Cart is empty")');
    }

    /**
     * Gets all product names in cart
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
     * Gets all product prices in cart
     * @returns Promise<string[]> - Array of product prices
     */
    async getProductPrices(): Promise<string[]> {
        try {
            return await this.lblProductPrices.allTextContents();
        } catch (error) {
            console.log(`Error getting product prices: ${error}`);
            return [];
        }
    }

    /**
     * Updates quantity for a specific product
     * @param index - Product index
     * @param quantity - New quantity
     * @returns Promise<void>
     */
    async updateQuantity(index: number, quantity: string): Promise<void> {
        const qtyInputs = await this.txtQuantities.all();
        if (qtyInputs[index]) {
            await qtyInputs[index].fill(quantity);
            await this.btnUpdateCart.click();
            await this.page.waitForLoadState('networkidle');
        }
    }

    /**
     * Removes a specific product from cart
     * @param index - Product index
     * @returns Promise<void>
     */
    async removeProduct(index: number): Promise<void> {
        const removeButtons = await this.btnRemoveItems.all();
        if (removeButtons[index]) {
            await removeButtons[index].check();
            await this.btnUpdateCart.click();
            await this.page.waitForLoadState('networkidle');
        }
    }

    /**
     * Removes all products from cart
     * @returns Promise<void>
     */
    async removeAllProducts(): Promise<void> {
        const removeButtons = await this.btnRemoveItems.all();
        for (const btn of removeButtons) {
            await btn.check();
        }
        if (removeButtons.length > 0) {
            await this.btnUpdateCart.click();
            await this.page.waitForLoadState('networkidle');
        }
    }

    /**
     * Gets subtotal
     * @returns Promise<string> - Subtotal text
     */
    async getSubtotal(): Promise<string> {
        try {
            return await this.lblSubtotal.textContent() || '';
        } catch (error) {
            console.log(`Error getting subtotal: ${error}`);
            return '';
        }
    }

    /**
     * Gets total
     * @returns Promise<string> - Total text
     */
    async getTotal(): Promise<string> {
        try {
            return await this.lblTotal.textContent() || '';
        } catch (error) {
            console.log(`Error getting total: ${error}`);
            return '';
        }
    }

    /**
     * Agrees to terms of service
     * @returns Promise<void>
     */
    async agreeToTerms(): Promise<void> {
        await this.chkTermsOfService.check();
    }

    /**
     * Clicks Checkout button
     * @returns Promise<void>
     */
    async clickCheckout(): Promise<void> {
        await this.btnCheckout.click();
    }

    /**
     * Verifies cart is empty
     * @returns Promise<boolean> - true if cart is empty
     */
    async isCartEmpty(): Promise<boolean> {
        try {
            return await this.lblEmptyCart.isVisible();
        } catch (error) {
            console.log(`Error checking empty cart: ${error}`);
            return true;
        }
    }

    /**
     * Verifies cart page exists
     * @returns Promise<boolean> - true if the page is displayed
     */
    async isCartPageExists(): Promise<boolean> {
        try {
            return await this.page.locator('h1:has-text("Shopping cart")').isVisible();
        } catch (error) {
            console.log(`Error checking cart page: ${error}`);
            return false;
        }
    }

    /**
     * Gets cart item count
     * @returns Promise<number> - Number of items in cart
     */
    async getCartItemCount(): Promise<number> {
        try {
            const quantities = await this.txtQuantities.all();
            let count = 0;
            for (const qty of quantities) {
                const value = await qty.inputValue();
                count += parseInt(value) || 0;
            }
            return count;
        } catch (error) {
            console.log(`Error getting cart item count: ${error}`);
            return 0;
        }
    }
}