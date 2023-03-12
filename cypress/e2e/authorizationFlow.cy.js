///<reference types="cypress"/>
// import * as user from '../fixtures/user.json';
import LogInPage from '../support/PageObjects/LogInPage';
import SignUpPage from '../support/PageObjects/SignUpPage';
import { closePopup } from '../support/helper';
import { faker } from '@faker-js/faker';

let user = {};
user.email = faker.internet.email();
user.password = faker.internet.password(10, true, /[A-Za-z0-9`!`]/, 'Hello1 ');
user.answer = faker.datatype.string(5)

it('Precondition. User register', () => {
    SignUpPage.visit();
    closePopup();
    SignUpPage.submitSignUpForm(user);
})

it('Authorization without Remember me', () => {

//    LogInPage.checkUserUnauthorized();
    LogInPage.visit();
    closePopup();
    LogInPage.submitLoginForm(user);

})

// it('Authorization with Remember me', () => {

//     LogInPage.checkUserUnauthorized();
//     LogInPage.visit();
//     closePopup();
//     LogInPage.enableRememberMe();
//     LogInPage.submitLoginForm(user);


// })
