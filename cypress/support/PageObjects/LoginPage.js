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
        return cy.get('#rememberMe')
    }

    getForgotPassword(){
        return cy.get('.primary-link.forgot-pw')
    }

    checkUserUnauthorized(){
        cy.log('Verify user is unauthorized')
        expect(localStorage.getItem('token')).to.be.null
        cy.log('User is unauthorized ✅')
    }

    checkUserAuthorized(user){
        cy.log('Verify user is authorized')
        cy.visit('/#/search')
        cy.get('#navbarAccount').click()
        cy.get('#mat-menu-panel-0').should('contain', user.email)
        cy.log('User is authorized ✅')
    }

    submitLoginForm(user){
        cy.log('Trying to login')

        this.getEmailInput().type(user.email)
        this.getPasswordInput().type(user.password)
        this.getRememberMe().click()
        this.getLoginButton().click()
    }

}

export default new LoginPage();