export function closePopup(){
    cy.log('Close pop-up')
    cy.get('.close-dialog').click();
}