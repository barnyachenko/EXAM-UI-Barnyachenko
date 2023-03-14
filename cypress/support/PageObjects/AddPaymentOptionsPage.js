class AddPaymentOptionPage {
    
    visit(){
        cy.log('Open Add Payment options page');
        cy.visit('/#/saved-payment-methods');
    }

    getAddNewCard(){
        return cy.get('#mat-expansion-panel-header-0');
    }

    getNameInput(){
        return cy.get('#mat-input-14');
    }

    getCardNumberInput(){
        return cy.get('#mat-input-15');
    }

    getExpiryMonth(){
        return cy.get('#mat-input-16');
    }

    getExpiryYear(){
        return cy.get('#mat-input-17');
    }
    
    getSubmitButton(){
        return cy.get('#submitButton');
    }

    submitAddNewPaymentOptionForm(paymentData){
        cy.log('Trying to add new payment option');

        this.getAddNewCard().click();
        this.getNameInput().type(paymentData.name);
        this.getCardNumberInput().type(paymentData.cardNumber);
        this.getExpiryMonth().select(1);
        this.getExpiryYear().select(5);
        this.getSubmitButton().click();
        this.checkNewPaymentOptionAdded();

    }

    checkNewPaymentOptionAdded(){
        cy.log('Check payment option was added');
        cy.get('#cdk-overlay-4').should('exist');
    }

}

export default new AddPaymentOptionPage();