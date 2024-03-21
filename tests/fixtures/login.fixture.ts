import { test as base } from "@playwright/test";
import LoginPage from "../pages/login.page";

/** Extend the base page with the login page object. */
export const test = base.extend<{loginPage: LoginPage;}>({
    loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }
});
