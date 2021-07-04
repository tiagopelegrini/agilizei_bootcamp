/// <reference types="cypress" />

context('Listagem', () => {
    it('Listagem sem registro', () => {
        cy.server()
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: 'fx:webTable-get-empty'
        }).as('getNewtable');
        cy.visit('WebTable.html');

        cy.get('div[role=row]').should('have.length', 1)
    });

    it('Listagem com 1 registro', () => {
        cy.server()
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: 'fx:webTable-get-only-1-record'
        }).as('getNewtable');
        cy.visit('WebTable.html');
        cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone') //eq(4) por que eu quero a quarta posição da lista
        cy.get("@gridCellPhone").should('contain.text', '1111111111');
    });

});



