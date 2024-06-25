describe('open the connection shop home page',()=>{
    it('loading the website',()=>{
        //opening the website
        cy.visit('https://theconnectedshop.com/')
        cy.url()
            .should('eq','https://theconnectedshop.com/');
        cy.title()
            .should('include','The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office');
        cy.get('.Header__LogoImage--transparent')
            .should("be.visible")
            .and('have.attr','alt','The Connected Shop Logo White')
    })
})