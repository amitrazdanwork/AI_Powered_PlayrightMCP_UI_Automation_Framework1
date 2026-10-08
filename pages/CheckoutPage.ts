import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;

    // Locators - Billing Address
    private readonly txtBillingFirstName: Locator;
    private readonly txtBillingLastName: Locator;
    private readonly txtBillingEmail: Locator;
    private readonly txtBillingCompany: Locator;
    private readonly txtBillingAddress1: Locator;
    private readonly txtBillingAddress2: Locator;
    private readonly txtBillingCity: Locator;
    private readonly txtBillingState: Locator;
    private readonly txtBillingZip: Locator;
    private readonly txtBillingCountry: Locator;
    private readonly txtBillingPhone: Locator;
    private readonly txtBillingFax: Locator;
    private readonly btnBillingContinue: Locator;

    // Locators - Shipping Address
    private readonly btnShippingContinue: Locator;

    // Locators - Shipping Method
    private readonly btnShippingMethodContinue: Locator;

    // Locators - Payment Method
    private readonly btnPaymentMethodContinue: Locator;

    // Locators - Payment Information
    private readonly btnPaymentInfoContinue: Locator;

    // Locators - Confirm Order
    private readonly btnConfirmOrder: Locator;

    // Locators - Order Confirmation
    private readonly lblOrderNumber: Locator;
    private readonly lblOrderConfirmation: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators - Billing
        this.txtBillingFirstName = page.getByLabel('First name:');
        this.txtBillingLastName = page.getByLabel('Last name:');
        this.txtBillingEmail = page.getByLabel('Email:');
        this.txtBillingCompany = page.getByLabel('Company:');
        this.txtBillingAddress1 = page.getByLabel('Address 1:');
        this.txtBillingAddress2 = page.getByLabel('Address 2:');
        this.txtBillingCity = page.getByLabel('City:');
        this.txtBillingState = page.getByLabel('State / province:');
        this.txtBillingZip = page.getByLabel('Zip / postal code:');
        this.txtBillingCountry = page.getByLabel('Country / region:');
        this.txtBillingPhone = page.getByLabel('Phone number:');
        this.txtBillingFax = page.getByLabel('Fax number:');
        this.btnBillingContinue = page.getByRole('button', { name: 'Continue', exact: true }).first();

        // Shipping
        this.btnShippingContinue = page.getByRole('button', { name: 'Continue', exact: true }).nth(1);

        // Shipping Method
        this.btnShippingMethodContinue = page.getByRole('button', { name: 'Continue', exact: true }).nth(2);

        // Payment Method
        this.btnPaymentMethodContinue = page.getByRole('button', { name: 'Continue', exact: true }).nth(3);

        // Payment Info
        this.btnPaymentInfoContinue = page.getByRole('button', { name: 'Continue', exact: true }).nth(4);

        // Confirm Order
        this.btnConfirmOrder = page.getByRole('button', { name: 'Confirm' });

        // Order Confirmation
        this.lblOrderNumber = page.locator('.order-number');
        this.lblOrderConfirmation = page.locator('.order-complete-message, .section.order-completion-content');
    }

    /**
     * Fills billing address
     * @param billingData - Billing address data
     * @returns Promise<void>
     */
    async fillBillingAddress(billingData: {
        firstName: string;
        lastName: string;
        email: string;
        company?: string;
        address1: string;
        address2?: string;
        city: string;
        state: string;
        zip: string;
        country: string;
        phone: string;
        fax?: string;
    }): Promise<void> {
        await this.txtBillingFirstName.fill(billingData.firstName);
        await this.txtBillingLastName.fill(billingData.lastName);
        await this.txtBillingEmail.fill(billingData.email);
        if (billingData.company) await this.txtBillingCompany.fill(billingData.company);
        await this.txtBillingAddress1.fill(billingData.address1);
        if (billingData.address2) await this.txtBillingAddress2.fill(billingData.address2);
        await this.txtBillingCity.fill(billingData.city);
        await this.txtBillingState.fill(billingData.state);
        await this.txtBillingZip.fill(billingData.zip);
        await this.txtBillingCountry.selectOption(billingData.country);
        await this.txtBillingPhone.fill(billingData.phone);
        if (billingData.fax) await this.txtBillingFax.fill(billingData.fax);
    }

    /**
     * Clicks billing continue
     * @returns Promise<void>
     */
    async clickBillingContinue(): Promise<void> {
        await this.btnBillingContinue.click();
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Clicks shipping continue
     * @returns Promise<void>
     */
    async clickShippingContinue(): Promise<void> {
        await this.btnShippingContinue.click();
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Clicks shipping method continue
     * @returns Promise<void>
     */
    async clickShippingMethodContinue(): Promise<void> {
        await this.btnShippingMethodContinue.click();
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Clicks payment method continue
     * @returns Promise<void>
     */
    async clickPaymentMethodContinue(): Promise<void> {
        await this.btnPaymentMethodContinue.click();
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Clicks payment info continue
     * @returns Promise<void>
     */
    async clickPaymentInfoContinue(): Promise<void> {
        await this.btnPaymentInfoContinue.click();
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Clicks confirm order
     * @returns Promise<void>
     */
    async clickConfirmOrder(): Promise<void> {
        await this.btnConfirmOrder.click();
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Gets order number
     * @returns Promise<string> - Order number
     */
    async getOrderNumber(): Promise<string> {
        try {
            const text = await this.lblOrderNumber.textContent() || '';
            const match = text.match(/Order number:?\s*(\d+)/i);
            return match ? match[1] : text;
        } catch (error) {
            console.log(`Error getting order number: ${error}`);
            return '';
        }
    }

    /**
     * Verifies order confirmation
     * @returns Promise<boolean> - true if order was confirmed
     */
    async isOrderConfirmed(): Promise<boolean> {
        try {
            await this.lblOrderConfirmation.isVisible({ timeout: 10000 });
            return true;
        } catch (error) {
            console.log(`Error checking order confirmation: ${error}`);
            return false;
        }
    }

    /**
     * Completes checkout flow
     * @param billingData - Billing data
     * @returns Promise<void>
     */
    async completeCheckout(billingData: {
        firstName: string;
        lastName: string;
        email: string;
        company?: string;
        address1: string;
        address2?: string;
        city: string;
        state: string;
        zip: string;
        country: string;
        phone: string;
        fax?: string;
    }): Promise<void> {
        await this.fillBillingAddress(billingData);
        await this.clickBillingContinue();
        await this.clickShippingContinue();
        await this.clickShippingMethodContinue();
        await this.clickPaymentMethodContinue();
        await this.clickPaymentInfoContinue();
        await this.clickConfirmOrder();
    }
}