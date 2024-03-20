// Feature: The Internet Guinea Pig Website
import { expect } from '@playwright/test';
import { test } from './fixtures/login.fixture';

// Scenario Outline: As a user, I can log into the secure area
const scenarios = [
  { username: 'valid', password: 'valid', message: 'You logged into a secure area!' },
  { username: 'foobar', password: 'barfoo', message: 'Your username is invalid!' },
];
scenarios.forEach(({ username, password, message }) => {
  test(`login as ${username}`, async ({ page, loginPage }) => {

    // Given I am on the login page
    await loginPage.open();

    // When I login with <username> and <password>
    await loginPage.login(username, password);

    // Then I should see a message saying <message>
    let alertText = await page.innerText('#flash');
    expect(alertText).toContain(message);

  });
});
