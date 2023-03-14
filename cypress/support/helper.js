export function closePopup(){
    
    cy.log('Close pop-up');
    cy.get('.close-dialog').click();

    cy.log('Check popup is closed');
    cy.getCookie('welcomebanner_status').should('have.property', 'value', 'dismiss')

}

export function search(searchData){

    cy.log('Click to seach');
    cy.get('#searchQuery').click();
    cy.get('#mat-input-0').type(searchData).type('{enter}');

    cy.log('Check search value is correct');
    cy.get('#searchValue').contains(searchData);

}