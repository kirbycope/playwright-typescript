// Feature: The Internet Guinea Pig Website
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';

// Scenario Outline: As a user, I can log into the secure area
const scenarios = [
  { username: 'valid', password: 'valid', message: 'You logged into a secure area!' },
  { username: 'foobar', password: 'barfoo', message: 'Your username is invalid!' },
];
scenarios.forEach(({ username, password, message }) => {
  test(`login as ${username}`, async ({ page }) => {
    
    // [Setup] The page object
    const loginPage = new LoginPage(page);

    // Given I am on the login page
    await loginPage.open();

    // When I login with <username> and <password>
    await loginPage.login(username, password);

    // Then I should see a message saying <message>
    let alertText = await page.innerText('#flash');
    expect(alertText).toContain(message);

  });
});
