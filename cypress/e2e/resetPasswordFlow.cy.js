///<reference types="cypress"/>
import LogInPage from '../support/PageObjects/LogInPage';
import SignUpPage from '../support/PageObjects/SignUpPage';
import ForgotPasswordPage from '../support/PageObjects/ForgotPasswordPage';
import { closePopup } from '../support/helper';
import { faker } from '@faker-js/faker';

let user = {};
user.email = faker.internet.email();
user.password = faker.internet.password(10, true, /[A-Za-z0-9`!`]/, 'Hello1 ');
user.answer = faker.datatype.string(5);
user.newPassword = "NewPassword!";

it('Precondition. User registration', () => {
    SignUpPage.visit();
    closePopup();
    SignUpPage.submitSignUpForm(user);
})

it('User authorization with old password', () => {
    LogInPage.checkUserUnauthorized();
    LogInPage.visit();
    closePopup();
    LogInPage.submitLoginForm(user);
    LogInPage.checkUserAuthorized(user);
    cy.get('#navbarLogoutButton').click();

})

it('Trying to reset password', () => {
    ForgotPasswordPage.visit();
    closePopup();
    ForgotPasswordPage.submitChangeForm(user);
})

it('Authorization with new password', () => {
    LogInPage.checkUserUnauthorized();
    LogInPage.visit();
    closePopup();
    LogInPage.getEmailInput().type(user.email);
    LogInPage.getPasswordInput().type(user.newPassword);
    LogInPage.getLoginButton().click();
    LogInPage.checkUserAuthorized(user);
})