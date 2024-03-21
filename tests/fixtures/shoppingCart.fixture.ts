import { test as base } from "@playwright/test";
import ShoppingCartPage from "../pages/shoppingCart.page";

/** Extend the base page with the shopping cart page object. */
export const test = base.extend<{ shoppingCartPage: ShoppingCartPage; }>({
    shoppingCartPage: async ({ page }, use) => {
        // Use the shopping cart page object
        await use(new ShoppingCartPage(page));
    }
});
