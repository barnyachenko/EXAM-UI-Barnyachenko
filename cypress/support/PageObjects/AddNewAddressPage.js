class AddNewAddressPage {
    
    visit(){
        cy.log('Open Add New Address page');
        cy.visit('/#/address/create');
    }

    getCountryInput(){
        return cy.get('#mat-input-1'); //42
    }

    getNameInput(){
        return cy.get('#mat-input-2');
    }

    getMobileNumberInput(){
        return cy.get('#mat-input-3');
    }

    getZIPCodeInput(){
        return cy.get('#mat-input-4');
    }

    getAddressInput(){
        return cy.get('#mat-form-field-label-107');
    }

    getCityInput(){
        return cy.get('#mat-input-47');
    }
    
    getSubmitButton(){
        return cy.get('#submitButton');
    }

    submitAddNewAddressForm(myAddress){
        cy.log('Trying to add new address');

        this.getCountryInput().type(myAddress.country);
        this.getNameInput().type(myAddress.name);
        this.getMobileNumberInput().type(myAddress.mobile);
        this.getZIPCodeInput().type(myAddress.zipCode);
        this.getAddressInput().type(myAddress.address);
        this.getCityInput().type(myAddress.city);
        this.getSubmitButton().click();
//        this.checkNewAddressAdded();

    }

    // checkNewAddressAdded(){
    //     cy.log('Check address added')
    //     cy.get('#cdk-overlay-7').should('exist')
    // }

}

export default new AddNewAddressPage();