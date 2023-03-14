class AddNewAddressPage {
    
    visit(){
        cy.log('Open Add New Address page');
        cy.visit('/#/address/create');
    }

    getCountryInput(){
        return cy.get('#mat-input-7');
    }

    getNameInput(){
        return cy.get('#mat-input-8');
    }

    getMobileNumberInput(){
        return cy.get('#mat-input-9');
    }

    getZIPCodeInput(){
        return cy.get('#mat-input-10');
    }

    getAddressInput(){
        return cy.get('#address');
    }

    getCityInput(){
        return cy.get('#mat-input-12');
    }
    
    getSubmitButton(){
        return cy.get('#submitButton');
    }

    submitAddNewAddressForm(addressData){
        cy.log('Trying to add new address');

        this.getCountryInput().type(addressData.country);
        this.getNameInput().type(addressData.name);
        this.getMobileNumberInput().type(addressData.mobile);
        this.getZIPCodeInput().type(addressData.zipCode);
        this.getAddressInput().type(addressData.address);
        this.getCityInput().type(addressData.city);
        this.getSubmitButton().click();
        this.checkNewAddressAdded();

    }

    checkNewAddressAdded(){
        cy.log('Check address added');
        cy.get('#cdk-overlay-4').should('exist');
    }

}

export default new AddNewAddressPage();