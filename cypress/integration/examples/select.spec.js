/// <reference types="Cypress" />

describe('Select box', () => {
    it('Should load website with select box', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/');
    })

    it('Should select an option for select box', () => {
        cy.get('#preferred-interface').as('SelectBox');
        cy.get('@SelectBox').select('Both');
        cy.get('@SelectBox').should('have.value', 'Both')

        cy.get('@SelectBox').select('JavaScript API');
        cy.get('@SelectBox').should('have.value', 'JavaScript API');
    })
})