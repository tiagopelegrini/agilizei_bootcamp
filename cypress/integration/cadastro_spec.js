/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

context('Cadastro', () => {
    it('Cadastro de usuarios no site', () => {
        //Rotas

        //POST (aborted) /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X

        //POST (aborted) /api/1/databases/userdetails/collections/usertable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X

        //GET (aborted) /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
       //Rotas


       cy.server()
       cy.route({
       method: 'POST',
       url: '**/api/1/databases/userdetails/collections/newtable?**',
       status: 200,
       response: {}
       }).as('postNewtable');

       cy.route({
           method: 'POST', 
           url: '**/api/1/databases/userdetails/collections/usertable?**', 
           status: 200, 
           response: {}
       }).as('postUsertable');

       cy.route({
       method: 'GET',
       url: '**/api/1/databases/userdetails/collections/newtable?**',
       status: 200,
       response: {}
       }).as('getNewtable');

        // baseUrl + register.html
        cy.visit('Register.html');

        //type
        // instalar chance(npm install -D chance) para dados aleatorios
        cy.get('input[placeholder="First Name"]').type(chance.first());
        cy.get('input[ng-model^=Last]').type(chance.last());
        cy.get('input[ng-model^=Email]').type(chance.email());
        cy.get('input[ng-model^=Phone]').type(chance.phone({ formatted: false }));


        //check -> radio's e checkboxes

        cy.get('input[value=FeMale]').check();
        cy.get('input[type=checkbox]').check('Cricket')
        cy.get('input[type=checkbox]').check('Hockey')


        //select e select2
        cy.get('select#Skills').select('Javascript');
        cy.get('select#countries').select('Argentina');
        cy.get('select#country').select('Australia', { force: true });
        cy.get('select#yearbox').select('1988');
        cy.get('select[ng-model^=month]').select('February');
        cy.get('select#daybox').select('28');

        cy.get('input#firstpassword').type('Abc001!');
        cy.get('input#secondpassword').type('Abc001!');

        // instalar plugin cypress-file-upload (npm install - D cypress-file-upload) para ter essa ação
        //incluir import 'cypress-file-upload' em support/index.js
        cy.get('input#imagesrc').attachFile('teste-foto.png');
        cy.get('button#submitbtn').click();

        cy.wait('@postNewtable').then((resNewtable) => {
            console.log(resNewtable.status)
            cy.log(resNewtable.status)

            //chai
            expect(resNewtable.status).to.eq(200)
        })

        cy.wait('@postUsertable').then((resUsertable) => {
            //chai
            expect(resUsertable.status).to.eq(200)
        })

        cy.wait('@getNewtable').then((resgetNewtable) => {
            expect(resgetNewtable.status).to.eq(200)
        })

        cy.url().should('contain', 'WebTable');

    });
});

//elementos
//input[placeholder='First Name']
//input[ng-model^=Last]
//input[ng-model^=Email]
//input[ng-model^=Phone]
//input[value=FeMale]
//input[type=checkbox]
//select#Skills
//select#countries
//select#country
//select#yearbox
//select[ng-model^=month]
//select#daybox
//input#firstpassword
//input#secondpassword