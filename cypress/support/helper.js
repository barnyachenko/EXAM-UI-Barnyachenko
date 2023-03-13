export function closePopup(){
    cy.log('Close pop-up');
    cy.get('.close-dialog').click();
    cy.log('Check popup is closed');
    cy.getCookie('welcomebanner_status').should('have.property', 'value', 'dismiss')
}