///<reference types="cypress"/>

import SignUpPage from '../support/PageObjects/SignUpPage';
import { faker } from '@faker-js/faker';
import { closePopup } from '../support/helper';

let user = {};
user.email = faker.internet.email();
user.password = faker.internet.password(10, true, /[A-Za-z0-9`!`]/, 'Hello1 ');
user.answer = faker.datatype.string(5);

it('Registration', () => {
    SignUpPage.visit();
    closePopup();
    SignUpPage.submitSignUpForm(user);
})

it('Fields validations check', () => {
    SignUpPage.visit();
    closePopup();
    SignUpPage.getEmailInput().focus().blur();
    SignUpPage.getPasswordInput().focus().blur();
    SignUpPage.getRepeatPassword().focus().blur();
    SignUpPage.getSecurityQuestion().focus().blur();
    SignUpPage.getAnswer().focus().blur();
    cy.log('Check email field validation');
    cy.get('#mat-error-0').should("be.visible");
    cy.log('Check password field validation');
    cy.get('#mat-error-1').should("be.visible");
    cy.log('Check repeat password field validation');
    cy.get('#mat-error-2').should("be.visible");
    cy.log('Check security question field validation');
    cy.get('#mat-error-3').should("be.visible");
    cy.log('Check security answer field validation');
    cy.get('#mat-error-4').should("be.visible");
})


// Хотіла чекнути кожен з едвайсів, але не змогла, залишаю собі на подумати потім:)
// it('Password advices check', () => {
//     SignUpPage.visit()
//     closePopup()
//     SignUpPage.getPasswordAdvices().click()
//     cy.log('Check contains at least one lower character')
//     SignUpPage.getPasswordInput().type('a')
//     //cy.xpath('//*[text()[contains(.,"lower character")]]').should('have.deep.property', 'style="transform: scale3d(0.2, 1, 1);"')
//     cy.xpath('//div[contains(@class, "card")][following::div[contains(., "lower character")]]')
//     cy.log('Check contains at least one upper character validation')
//     SignUpPage.getPasswordInput().type('A')
//     cy.get('').should('')
//     cy.log('Check contains at least one digit validation')
//     SignUpPage.getPasswordInput().type('6')
//     cy.get('').should('')
//     cy.log('Check contains at least one special character validation')
//     SignUpPage.getPasswordInput().type('!')
//     cy.get('').should('')
//     cy.log('Check contains at least 8 characters validation')
//     SignUpPage.getPasswordInput().type('qwer')
//     cy.get('').should('')
// })

// it('Registration', () => {
//     cy.log('Open home page');
//     cy.visit('/');

//     cy.log('Close pop-up')
//     cy.get('.close-dialog').click();

//     cy.log('Click on the Account in header');
//     cy.get('#navbarAccount').click();

//     cy.log('Open log in page');
//     cy.get('#navbarLoginButton').click();

//     cy.log('Open sign up page');
//     cy.get('#newCustomerLink').click();

//     cy.log('Fill in email');
//     cy.get('#emailControl').type(user.email);

//     cy.log('View password requirements');
//     cy.get('#mat-slide-toggle-1').click();
//     cy.log('Fill in password inputs')
//     cy.get('#passwordControl').type(user.password);
//     cy.get('#repeatPasswordControl').type(user.password);

//     cy.log('Security question selection');
//     cy.get('#mat-select-2').click();
//     cy.get('#mat-option-7').click();

//     cy.log('Input Answer');
//     cy.get('#securityAnswerControl').type(user.answer);

//     cy.log('Click on the Register button');
//     cy.get('#registerButton').click();

// })



