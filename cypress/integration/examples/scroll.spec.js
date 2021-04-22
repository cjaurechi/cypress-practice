/// <reference types="Cypress" />

describe('Scroll on the page tests', () => {
    it('Should scroll down and then up', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/');
        cy.wait(2000);
        cy.get('#submit-button').scrollIntoView();
        cy.wait(2000);
        cy.get('header').scrollIntoView();
    })
})