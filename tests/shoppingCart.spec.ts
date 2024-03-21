// Feature: Shopping Cart Flow
import { expect } from '@playwright/test';
import { test } from './fixtures/shoppingCart.fixture';

// Scenario: As a user, I can add items to my shopping cart and checkout
test('add items to shopping cart', async ({ shoppingCartPage }) => {

    // [Arrange] Given I am on the shopping cart page
    await shoppingCartPage.open(); 

    // [Act] When I add an item to the cart and select checkout
    await shoppingCartPage.addItemToCart();

    // [Assert] Then I should see a popup matching my selection
    expect(shoppingCartPage.dialogMessage).toBe('Checkout - Subtotal: $ 14.90');
    
});
