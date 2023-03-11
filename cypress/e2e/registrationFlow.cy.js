///<reference types="cypress"/>

import { faker } from '@faker-js/faker';
import * as user from '../fixtures/user.json';

user.email = faker.internet.email();
user.password = faker.internet.password(10, true, /[A-Za-z0-9`!`]/, 'Hello1 ');
user.answer = faker.datatype.string(5)

it('Registration', () => {
    cy.log('Open home page');
    cy.visit('/');

    cy.log('Close pop-up')
    cy.get('.close-dialog').click();

    cy.log('Click on the Account in header');
    cy.get('#navbarAccount').click();

    cy.log('Open log in page');
    cy.get('#navbarLoginButton').click();

    cy.log('Open sign up page');
    cy.get('#newCustomerLink').click();

    cy.log('Fill in email');
    cy.get('#emailControl').type(user.email);

    cy.log('View password requirements');
    cy.get('#mat-slide-toggle-1').click();
    cy.log('Fill in password inputs')
    cy.get('#passwordControl').type(user.password);
    cy.get('#repeatPasswordControl').type(user.password);

    cy.log('Security question selection');
    cy.get('#mat-select-2').click();
    cy.get('#mat-option-7').click();

    cy.log('Input Answer');
    cy.get('#securityAnswerControl').type(user.answer);

    cy.log('Click on the Register button');
    cy.get('#registerButton').click();

})



// function deleteUser (id) {
//     cy.request('DELETE', '/api/Users/')
//   }



