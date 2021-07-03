/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

context('Cadastro', () => {
    it('Cadastro de usuarios no site', () => {
        //Rotas

        //POST (aborted) /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X

        //POST (aborted) /api/1/databases/userdetails/collections/usertable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X

        //GET (aborted) /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
        cy.server()
        cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**')
            .as('postNewtable');//Apelidos


        cy.route('POST', '**/api/1/databases/userdetails/collections/usertable?**')
            .as('postUsertable');

        cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**')
            .as('getNewtable');

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

        })
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