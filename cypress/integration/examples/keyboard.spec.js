/// <reference types="Cypress" />

describe('Keyboard press simulation', () => {
    it('Should submit searchbox with pressing enter', () => {
        cy.visit('http://zero.webappsecurity.com/');
        cy.get('#searchTerm').type('Anything {enter}'); // Simulates pressing the Enter key
    })
})