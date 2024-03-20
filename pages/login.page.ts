import type { Page } from '@playwright/test';
import { baseUrl, testUser, testPass } from '../test-data';

/** URL looks like: {baseURL}/login */
export default class LoginPage{

    /** The `Page` object to use. */
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    /** The `input` for "Username". */
    inputUsername = () => this.page.locator('input#username');
    /** The `input` for "Password". */
    inputPassword = () => this.page.locator('input#password');
    /** The `button` to submit a form. */
    buttonSubmit = () => this.page.locator('button[type="submit"]');

    /** Opens `this` page.
     * @param page The Fixture to use
     */
    public async open() {
        await this.page.goto(baseUrl + '/login');
    }

    /** Log in using the given username and password.
     * @param username The username to submit
     * @param password The password to submit
     */
    public async login(username: string, password: string) {
        if (username === "valid") {
            username = String(testUser);
        }
        if (password === "valid") {
            password = String(testPass);
        }
        await this.inputUsername().fill(username);
        await this.inputPassword().fill(password);
        await this.buttonSubmit().click();
    }

}
