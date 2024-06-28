describe('Product Existence and Add to Cart on The Connected Shop', () => {
    const viewports = [
        { width: 1280, height: 720 }];
    viewports.forEach(viewport => {
    it('should find a product and add it to the cart', () => {
        // Step 1: Visit the shop page of The Connected Shop
        cy.viewport(viewport.width, viewport.height);
        cy.visit('https://theconnectedshop.com/shop')

        // Step 2: Ensure the product exists
        cy.get('h2.ProductItem__Title')
            .eq(1)
            .scrollIntoView()
            .should('be.visible')
            .click();
        cy.url()
            .should('eq','https://theconnectedshop.com/products/smart-door-lock');

        cy.get('.ProductMeta__Title')
            .should('be.visible')
            .and('contain', 'Smart Door Lock')

        cy.get('.ProductMeta__Sku')
            .should('be.visible')
            .and('contain','200119')

        // Optional: add to the cart
        cy.get('.ProductForm__AddToCart')
            .scrollIntoView()
            .should('be.visible')
            .click();
    });
});
    viewports.forEach(viewport => {
    it('should find a product and add it to the cart 2 pieces', () => {
       // Step 1: Visit the shop page of The Connected Shop
        cy.viewport(viewport.width, viewport.height);
        cy.visit('https://theconnectedshop.com/shop')

        // Step 2: Ensure the product exists
        cy.get('h2.ProductItem__Title')
            .eq(1)
            .scrollIntoView()
            .should('be.visible')
            .click();
        cy.url()
            .should('eq','https://theconnectedshop.com/products/smart-door-lock');
        cy.get('.ProductMeta__Title')
            .should('be.visible')
            .and('contain', 'Smart Door Lock')
        // Optional: Verify that the product has been added to the cart
    cy.get('button[data-action="increase-quantity"]')
        .should ("be.visible")
        .click();
        //Verify that quantity is 2
        cy.get('.QuantitySelector__CurrentQuantity')
            .should("be.visible")
            .and('have.value', '2');
    });
    });
});

