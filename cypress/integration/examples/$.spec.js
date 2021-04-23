/// <reference types="Cypress" />

describe('Using Cypress.$ function', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com')
    })

    it('Expose jQuery element in the current window', () => {
        const signInButton = Cypress.$('#signin_button'); // Don't do this, it's a really bad practice
        signInButton.trigger('click');
    })
})