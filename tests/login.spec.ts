// Feature: The Internet Guinea Pig Website
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// Scenario Outline: As a user, I can log into the secure area
const scenarios = [
  { username: 'valid', password: 'valid', message: 'You logged into a secure area!' },
  { username: 'foobar', password: 'barfoo', message: 'Your username is invalid!' },
];
scenarios.forEach(({ username, password, message }) => {
  test(`login as ${username}`, async ({ page }) => {

    // Given I am on the login page
    await LoginPage.open(page);

    // When I login with <username> and <password>
    await LoginPage.login(page, username, password);

    // Then I should see a message saying <message>
    const alertText = await page.innerText('#flash');
    expect(alertText).toContain(message);

  });
});
