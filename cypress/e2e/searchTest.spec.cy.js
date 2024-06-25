describe('search with valid keywords',()=>{
    const viewports = [
        { width: 1280, height: 720 }];
    viewports.forEach(viewport => {
        it('enter the valid keywords',()=>{
            cy.viewport(viewport.width, viewport.height);
        cy.visit('https://theconnectedshop.com/');
        //click on search link
        cy.get('a[data-action="toggle-search"]')
            .first()
            .should('be.visible')
            .click();
        //valid of existing search field
        cy.get('input[name="q"]')
            .should('be.visible')
            .type('SMART TEMPERATURE MONITOR{enter}')

    });
});
});