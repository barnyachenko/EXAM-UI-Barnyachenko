///<reference types="cypress"/>
import CustomerFeedbackPage from "../support/PageObjects/CustomerFeedbackPage";
import { faker } from '@faker-js/faker';
import { closePopup } from '../support/helper';

let feedback = {}
feedback.comment = faker.datatype.string(5);
feedback.rating = faker.datatype.number({ min: 1, max: 5});

it('Trying to send a feedback', () => {
    cy.intercept('/rest/captcha/', (req) => {
        req.continue((res) => {
            CustomerFeedbackPage.getResultInput().type(res.body.answer);
        })
    }).as('Captcha');

    CustomerFeedbackPage.visit();
    closePopup();
    cy.wait('@Captcha');
    CustomerFeedbackPage.getCommentInput().type(feedback.comment);
    CustomerFeedbackPage.getRating().click().invoke('val', feedback.rating).trigger('change');
    //.type("{rightarrow}");
    //.invoke('val', 4).trigger('change')
    CustomerFeedbackPage.getSubmitButton().click()

    CustomerFeedbackPage.checkFeedbackWasSent()

})
