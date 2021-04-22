/// <reference types="Cypress" />

describe('Custom commands', () => {
    it('Should login to app using custom Cypress command', () => {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.login('username', 'password');
    })
})