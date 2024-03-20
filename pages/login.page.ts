import type { Page } from '@playwright/test';
import { baseUrl, testUser, testPass } from '../test-data';

/** URL looks like: {baseURL}/login */
export class LoginPage{

    /** The `input` for "Username". */
    static inputUsername: string = 'input#username';
    /** The `input` for "Password". */
    static inputPassword: string = 'input#password';
    /** The `button` to submit a form. */
    static btnSubmit: string = 'button[type="submit"]';

    /** Opens `this` page.
     * @param page The Fixture to use
     */
    static async open(page: Page) {
        await page.goto(baseUrl + '/login');
    }

    /** Log in using the given username and password.
     * @param page The Fixture to use
     * @param username The username to submit
     * @param password The password to submit
     */
    static async login(page: Page, username: string, password: string) {
        if (username === "valid") {
            username = String(testUser);
        }
        if (password === "valid") {
            password = String(testPass);
        }
        if (page) {
            await page.fill(this.inputUsername, username);
            await page.fill(this.inputPassword, password);
            await page.click(this.btnSubmit);
        }
    }

}
