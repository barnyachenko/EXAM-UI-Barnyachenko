class CustomerFeedbackPage {
    
    visit(){
        cy.log('Open Customer Feedback page');
        cy.visit('/#/contact');
    }

    getCommentInput(){
        return cy.get('#comment');
    }

    getRating(){
        return cy.get('#rating');
    }

    getCaptcha(){
        return cy.get('#captcha');
    }

    getResultInput(){
        return cy.get('#captchaControl');
    }

    getSubmitButton(){
        return cy.get('#submitButton');
    }

    submitCustomerFeedbackForm(feedback){
        cy.log('Trying to send feedback');

        this.getCommentInput().type(feedback.comment);
        this.getRating().click().invoke('val', feedback.rating).trigger('change');
        this.getResultInput().type();
        this.getSubmitButton().click()
    }

    checkFeedbackWasSent(){
        cy.log('Check feedback was sent')
        cy.get('#cdk-overlay-2').should('exist')
    }

}

export default new CustomerFeedbackPage();