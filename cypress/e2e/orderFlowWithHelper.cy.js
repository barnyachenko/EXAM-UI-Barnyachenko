///<reference types="cypress"/>
import LogInPage from '../support/PageObjects/LogInPage';
import SignUpPage from '../support/PageObjects/SignUpPage';
import AddNewAddressPage from '../support/PageObjects/AddNewAddressPage';
import AddPaymentOptionsPage from '../support/PageObjects/AddPaymentOptionsPage';
import { faker } from '@faker-js/faker';
import { closePopup } from '../support/helper';
import { search } from '../support/helper';

let searchData = "apple juice"

let user = {};
user.email = faker.internet.email();
user.password = faker.internet.password(10, true, /[A-Za-z0-9`!`]/, 'Hello1 ');
user.answer = faker.datatype.string(5);

let addressData = {};
addressData.country = faker.address.country();
addressData.name = faker.name.fullName();
addressData.mobile = faker.datatype.number({ min: 10000000, max: 9999999999});
addressData.zipCode = faker.address.zipCode('####');
addressData.address = faker.address.streetAddress();
addressData.city = faker.address.city();

let paymentData = {};
paymentData.name = faker.name.fullName();
paymentData.cardNumber = 1234567890123456; //faker.finance.creditCardNumber();

it('Profile setup', () => {
    cy.log('Sign up user');
    SignUpPage.visit();
    closePopup();
    SignUpPage.submitSignUpForm(user);

    cy.intercept('GET', '/rest/user/whoami').as('Login')

    cy.log('Login user');
    LogInPage.visit();
    LogInPage.submitLoginForm(user);
    cy.wait('@Login');

    cy.log('Add a new address');
    AddNewAddressPage.visit();
    AddNewAddressPage.submitAddNewAddressForm(addressData);

    cy.log('Add a payment option');
    AddPaymentOptionsPage.visit();
    AddPaymentOptionsPage.submitAddNewPaymentOptionForm(paymentData);

})

it('Making order', () => {

    cy.log('Login user');
    LogInPage.visit();
    closePopup();
    LogInPage.submitLoginForm(user);

    cy.log('Open home page');
    cy.visit('/#/search');

    search(searchData);

    cy.log('Adding item to the bascket');
    cy.get('.mat-focus-indicator.btn-basket').click();

    cy.log('Checking the item was added');
    cy.get('#cdk-overlay-2').should('exist');
    cy.get('.fa-layers-counter.fa-layers-top-right').contains(1);

    cy.log('Open basket');
    cy.get('.buttons.mat-button.mat-button-base.ng-star-inserted').click();

    cy.log('Click on the Checkout button');
    cy.get('#checkoutButton').click();

    cy.log('Select an address');
    cy.get('#mat-radio-40').click();

    cy.log('Click on the Continue button');
    cy.get('.btn.btn-next').click();

    cy.log('Choose a delivery speed / first radio button');
    cy.get('#mat-radio-41').click();

    cy.log('Click on the Continue button');
    cy.get('.btn.nextButton').click();

    cy.log('Select payment option (card added before)');
    cy.get('#mat-radio-44').click();

    cy.log('Click on the Continue button');
    cy.get('.btn.nextButton').click();

    cy.log('Click on the Place your order and pay button');
    cy.get('#checkoutButton').click();

})