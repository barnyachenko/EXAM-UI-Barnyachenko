///<reference types="cypress"/>
import LogInPage from '../support/PageObjects/LogInPage';
import SignUpPage from '../support/PageObjects/SignUpPage';
import AddNewAddressPage from '../support/PageObjects/AddNewAddressPage';
import { faker } from '@faker-js/faker';
import { closePopup } from '../support/helper';
import { search } from '../support/helper';

let searchData = "apple juice"

let user = {};
user.email = faker.internet.email();
user.password = faker.internet.password(10, true, /[A-Za-z0-9`!`]/, 'Hello1 ');
user.answer = faker.datatype.string(5);

let myAddress = {};
myAddress.country = faker.address.country();
myAddress.name = faker.name.fullName();
myAddress.mobile = faker.datatype.number({ min: 9, max: 10, precision: 1 });
myAddress.zipCode = faker.address.zipCode();
myAddress.address = faker.address.streetAddress();
myAddress.city = faker.address.city();

it('Making order', () => {
    cy.log('Sign up user');
    SignUpPage.visit();
    closePopup();
    SignUpPage.submitSignUpForm(user);

    cy.log('Login user');
    LogInPage.visit();
    LogInPage.submitLoginForm(user);

    cy.log('Add a new address');
    AddNewAddressPage.visit();
    AddNewAddressPage.submitAddNewAddressForm(myAddress);

    cy.log('Open home page');
    cy.visit('/#/search');

    search(searchData);

    cy.log('Adding item to the bascket');
    cy.get('.mat-focus-indicator.btn-basket').click();

    cy.log('Checking the item was added');
    cy.get('#cdk-overlay-4').should('exist');
    cy.get('.fa-layers-counter.fa-layers-top-right').contains(1);

    cy.log('Open basket');
    cy.get('.buttons.mat-button.mat-button-base.ng-star-inserted').click();

    cy.log('Click on the Checkout button');
    cy.get('#checkoutButton').click();

    // cy.log('Create new address');
    // cy.get('.btn.btn-new-address').click();

})