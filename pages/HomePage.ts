import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    // Locators
    private readonly lnkRegister: Locator;
    private readonly lnkLogin: Locator;
    private readonly lnkCart: Locator;
    private readonly lnkWishlist: Locator;
    private readonly txtSearch: Locator;
    private readonly btnSearch: Locator;
    private readonly lnkBooks: Locator;
    private readonly lnkComputers: Locator;
    private readonly lnkElectronics: Locator;
    private readonly lnkApparelShoes: Locator;
    private readonly lnkDigitalDownloads: Locator;
    private readonly lnkJewelry: Locator;
    private readonly lnkGiftCards: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize locators
        this.lnkRegister = page.getByRole('link', { name: 'Register' });
        this.lnkLogin = page.getByRole('link', { name: 'Log in' });
        this.lnkCart = page.getByRole('link', { name: 'Shopping cart' });
        this.lnkWishlist = page.getByRole('link', { name: 'Wishlist' });
        this.txtSearch = page.getByPlaceholder('Search store');
        this.btnSearch = page.getByRole('button', { name: 'Search' });
        this.lnkBooks = page.getByRole('link', { name: 'Books' });
        this.lnkComputers = page.getByRole('link', { name: 'Computers' });
        this.lnkElectronics = page.getByRole('link', { name: 'Electronics' });
        this.lnkApparelShoes = page.getByRole('link', { name: 'Apparel & Shoes' });
        this.lnkDigitalDownloads = page.getByRole('link', { name: 'Digital downloads' });
        this.lnkJewelry = page.getByRole('link', { name: 'Jewelry' });
        this.lnkGiftCards = page.getByRole('link', { name: 'Gift Cards' });
    }

    /**
     * Clicks the Register link
     * @returns Promise<void>
     */
    async clickRegister(): Promise<void> {
        await this.lnkRegister.click();
    }

    /**
     * Clicks the Login link
     * @returns Promise<void>
     */
    async clickLogin(): Promise<void> {
        await this.lnkLogin.click();
    }

    /**
     * Clicks the Shopping Cart link
     * @returns Promise<void>
     */
    async clickCart(): Promise<void> {
        await this.lnkCart.click();
    }

    /**
     * Clicks the Wishlist link
     * @returns Promise<void>
     */
    async clickWishlist(): Promise<void> {
        await this.lnkWishlist.click();
    }

    /**
     * Searches for a product
     * @param productName - Product name to search
     * @returns Promise<void>
     */
    async searchProduct(productName: string): Promise<void> {
        await this.txtSearch.fill(productName);
        await this.btnSearch.click();
    }

    /**
     * Clicks on Books category
     * @returns Promise<void>
     */
    async clickBooks(): Promise<void> {
        await this.lnkBooks.click();
    }

    /**
     * Clicks on Computers category
     * @returns Promise<void>
     */
    async clickComputers(): Promise<void> {
        await this.lnkComputers.click();
    }

    /**
     * Clicks on Electronics category
     * @returns Promise<void>
     */
    async clickElectronics(): Promise<void> {
        await this.lnkElectronics.click();
    }

    /**
     * Clicks on Apparel & Shoes category
     * @returns Promise<void>
     */
    async clickApparelShoes(): Promise<void> {
        await this.lnkApparelShoes.click();
    }

    /**
     * Clicks on Digital downloads category
     * @returns Promise<void>
     */
    async clickDigitalDownloads(): Promise<void> {
        await this.lnkDigitalDownloads.click();
    }

    /**
     * Clicks on Jewelry category
     * @returns Promise<void>
     */
    async clickJewelry(): Promise<void> {
        await this.lnkJewelry.click();
    }

    /**
     * Clicks on Gift Cards category
     * @returns Promise<void>
     */
    async clickGiftCards(): Promise<void> {
        await this.lnkGiftCards.click();
    }

    /**
     * Verifies the home page exists
     * @returns Promise<boolean> - true if the page is displayed
     */
    async isHomePageExists(): Promise<boolean> {
        try {
            return await this.lnkRegister.isVisible();
        } catch (error) {
            console.log(`Error checking home page: ${error}`);
            return false;
        }
    }

    /**
     * Gets the cart count from the header
     * @returns Promise<number> - cart count
     */
    async getCartCount(): Promise<number> {
        try {
            const cartText = await this.lnkCart.textContent();
            const match = cartText?.match(/\((\d+)\)/);
            return match ? parseInt(match[1]) : 0;
        } catch (error) {
            console.log(`Error getting cart count: ${error}`);
            return 0;
        }
    }

    /**
     * Gets the wishlist count from the header
     * @returns Promise<number> - wishlist count
     */
    async getWishlistCount(): Promise<number> {
        try {
            const wishlistText = await this.lnkWishlist.textContent();
            const match = wishlistText?.match(/\((\d+)\)/);
            return match ? parseInt(match[1]) : 0;
        } catch (error) {
            console.log(`Error getting wishlist count: ${error}`);
            return 0;
        }
    }
}