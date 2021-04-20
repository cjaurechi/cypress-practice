/// <reference types="Cypress" />

describe('Working with inputs', () => {
    it('Should override the current time', () => {
        const date = new Date(2021, 7, 10).getTime(); // returns a timestamp
        cy.clock(date);
        cy.log(`This is the current date: ${date}`);
    })

    it('Should load correct url', () => {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.clearCookies({ log: true });
        cy.clearLocalStorage('your item', { log: true });
        cy.title().should('include','Zero - Log in');
    })

    it('Should fill username', () => {
        cy.get('#user_login').as('username');
        cy.get('@username').clear().type('Some invalid name', { delay: 100 });
    })

    it('Should fill password', () => {
        cy.get('#user_password').as('password');
        cy.get('@password').clear().type('Some invalid password', { delay: 50 });
    })

    it('Should mark checkbox', () => {
        cy.get('input[type="checkbox"').click();
        cy.wait(2000);   
    })

    it('Should submit login form', () => {
        cy.contains('Sign in').click();
    })

    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain', 'wrong');
    })
})