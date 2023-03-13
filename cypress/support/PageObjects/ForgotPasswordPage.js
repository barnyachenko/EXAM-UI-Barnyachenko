class ForgotPasswordPage {
    
    visit(){
        cy.log('Open forgot password page');
        cy.visit('/#/forgot-password');
    }

    getEmailInput(){
        return cy.get('#email');
    }

    getSecurityAnswer(){
        return cy.get('#securityAnswer');
    }

    getNewPasswordInput(){
        return cy.get('#newPassword');
    }

    getNewPasswordRepeatInput(){
        return cy.get('#newPasswordRepeat');
    }

    getPasswordAdvices(){
        return cy.get('#mat-slide-toggle-1');
    }

    getResetButton(){
        return cy.get('#resetButton');
    }

    submitChangeForm(user){
        cy.log('Trying to change password via Forgot Password flow');

        this.getEmailInput().type(user.email);
        this.getSecurityAnswer().type(user.answer);
        this.getPasswordAdvices().click();
        this.getNewPasswordInput().type(user.newPassword);
        this.getNewPasswordRepeatInput().type(user.newPassword);
        this.getResetButton().click()
        
    }

}

export default new ForgotPasswordPage();