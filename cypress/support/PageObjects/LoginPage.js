class LoginPage {
    
    visit(){
        cy.log('Open login page');
        cy.visit('/#/login');
    }

    getEmailInput(){
        return cy.get('#email')
    }

    getPasswordInput(){
        return cy.get('#password')
    }

    getLoginButton(){
        return cy.get('#loginButton')
    }

    getRememberMe(){
        return cy.get('#rememberMe-input')
    }

    checkUserUnauthorized(){
        cy.log('Verify user is unauthorized');
        window.localStorage('token').should('be.null');
        cy.log('User is unauthorized ✅');
    }

    enableRememberMe(){
        this.getRememberMe().click()
    }

    submitLoginForm(user){
        cy.log('Trying to login')

        this.getEmailInput().type(user.email)
        this.getPasswordInput().type(user.password)
        this.getLoginButton().click()
        
    }

}

export default new LoginPage();