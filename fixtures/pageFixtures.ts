import { test as base, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { WishlistPage } from '../pages/WishlistPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import dotenv from 'dotenv';

dotenv.config();

type PageFixtures = {
    homePage: HomePage;
    registerPage: RegisterPage;
    loginPage: LoginPage;
    productPage: ProductPage;
    cartPage: CartPage;
    wishlistPage: WishlistPage;
    myAccountPage: MyAccountPage;
    checkoutPage: CheckoutPage;
};

const APP_URL = process.env.WEB_APP_URL || 'https://demowebshop.tricentis.com/';

export const test = base.extend<PageFixtures>({
    homePage: async ({ page }, use) => {
        await page.goto(APP_URL);
        await use(new HomePage(page));
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    wishlistPage: async ({ page }, use) => {
        await use(new WishlistPage(page));
    },
    myAccountPage: async ({ page }, use) => {
        await use(new MyAccountPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
});

export { expect } from '@playwright/test';