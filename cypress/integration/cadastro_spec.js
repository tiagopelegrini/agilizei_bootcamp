/// <reference types="cypress" />

context('Cadastro', () => {
    it('Cadastro de usuarios no site', () => {
        // baseUrl + register.html
        cy.visit('Register.html');

        //type
        cy.get('input[placeholder="First Name"]').type('Aluno')
        cy.get('input[ng-model^=Last]').type('Agilizei')
        cy.get('input[ng-model^=Email]').type('teste@tiago.com')
        cy.get('input[ng-model^=Phone]').type('1111111111') 


        //check -> radio's e checkboxes

        cy.get('input[value=FeMale]').check();
        cy.get('input[type=checkbox]').check('Cricket')
        cy.get('input[type=checkbox]').check('Hockey')


        //select e select2
        cy.get('select#Skills').select('Javascript');
        cy.get('select#countries').select('Argentina');
        cy.get('select#country').select('Australia',{force: true});
        cy.get('select#yearbox').select('1988');
        cy.get('select[ng-model^=month]').select('February');
        cy.get('select#daybox').select('28');

        cy.get('input#firstpassword').type('Abc001!');
        cy.get('input#secondpassword').type('Abc001!');       

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