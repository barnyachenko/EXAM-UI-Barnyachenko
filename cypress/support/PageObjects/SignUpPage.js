class SignUpPage {
    
    visit(){
        cy.log('Open sign up page');
        cy.visit('/#/register');
    }

    getEmailInput(){
        return cy.get('#emailControl');
    }

    getPasswordInput(){
        return cy.get('#passwordControl');
    }

    getRepeatPassword(){
        return cy.get('#repeatPasswordControl');
    }

    getPasswordAdvices(){
        return cy.get('#mat-slide-toggle-1');
    }

    getSecurityQuestion(){
        return cy.get('#mat-select-0');
    }

    selectSecurityQuestion(){
        return cy.get('#mat-option-7');
    }

    getAnswer(){
        return cy.get('#securityAnswerControl');
    }

    getRegisterButton(){
        return cy.get('#registerButton');
    }

    submitSignUpForm(user){

        cy.log('Sign up user');

        this.getEmailInput().type(user.email);
        this.getPasswordAdvices().click();
        this.getPasswordInput().type(user.password);
        this.getRepeatPassword().type(user.password);
        this.getSecurityQuestion().click();
        this.selectSecurityQuestion().click();
        this.getAnswer().type(user.answer);
        this.getRegisterButton().click();

    }

}

export default new SignUpPage();