import { expect, Page } from '@playwright/test';

export default class ShoppingCart {

    /** The `Page` object to use. */
    private page: Page;
    public dialogMessage: string = "";
    constructor(page: Page) {
        this.page = page;
    }

    /** The `span` for the large size */
    spanLarge = () => this.page.locator('span.checkmark').getByText('L', { exact: true });
    /** The `div` for the "Grey T-shirt" */
    divGreyTshirt = () => this.page.locator('p').filter({ hasText: 'Grey T-shirt' }).locator('..');
    /** The `p` for the "Grey T-shirt" price */
    pGreyTshirtPrice = () => this.divGreyTshirt().locator('p').filter({ hasText: '$' }).first()
    /** The `button` to add the "Grey T-shirt" to the cart */
    buttonAddToCart = () => this.divGreyTshirt().locator('button');
    /** The `div` that contains the first shopping cart item */
    divCartItem = () => this.page.getByTitle('remove product from cart').locator('..');
    /** The `p` that contains the first shopping cart item's name */
    pCartItemName = () => this.divCartItem().locator('div > p').first();
    /** The `p` that contains the first shopping cart item's price */
    pCartItemPrice = () => this.divCartItem().locator('p').filter({ hasText: '$' }).first();
    /** The `p` that contains the first shopping cart item's price */
    pCartItemQuantity = () => this.divCartItem().locator('p').filter({ hasText: 'Quantity:' }).first();
    /** The `button` to checkout */
    buttonCheckout = () => this.page.locator('button').filter({ hasText: 'Checkout' });
    /** The `div` that contains the subtotal */
    divSubtotal = () => this.buttonCheckout().locator('..');
    /** The `p` for the subtotal price */
    pSubTotalPrice = () => this.divSubtotal().locator('p').filter({ hasText: '$' }).first()

    /** Opens `this` page. */
    public async open() {

        // 1. Typescript React Shopping cart (react-shopping-cart-67954.firebaseapp.com)
        await this.page.goto('https://react-shopping-cart-67954.firebaseapp.com/');

    }

    /** Adds an item to cart. */
    public async addItemToCart() {

        // 2. Select size "L".
        await this.spanLarge().click();

        // 3. Note the price of a "Grey T-shirt" card.
        let price = (await this.pGreyTshirtPrice().innerText()).replace(' ', '');

        // 4. Click "Add to a cart" for "Grey T-shirt".
        await this.buttonAddToCart().click();

        // 5. Check that "Cart" drawer appears.
        let visible = await this.divCartItem().isVisible();
        expect(visible).toBeTruthy();

        // 6. Check that selected item appears, it has correct name, size, description, quantity, and price matches to step 3.
        // NOTE: Only the name, price, and quantity are available here.
        let name = await this.pCartItemName().innerText();
        expect(name).toBe('Grey T-shirt');
        let cost = (await this.pCartItemPrice().innerText()).replace(' ', '');
        expect(cost).toBe('$14.90');
        let quantity = (await this.pCartItemQuantity().innerText()).split(" ").pop();
        expect(quantity).toBe('1');

        // 7. Check that "Subtotal" matches to step 3.
        let subtotal = (await this.pSubTotalPrice().innerText()).replace(' ', '');
        expect(subtotal).toBe(price);

        // 8. Click "Checkout" and check that the popup appears.
        const dialogPromise = new Promise(resolve => {
            this.page.on('dialog', async dialog => {
                this.dialogMessage = dialog.message();
                await dialog.dismiss();
                resolve(this.dialogMessage);
            });
        });
        await this.buttonCheckout().click();
        await dialogPromise;

    }

}
