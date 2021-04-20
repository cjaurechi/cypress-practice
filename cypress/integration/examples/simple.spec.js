/// <reference types="Cypress" />

describe('Browser Actions', () => {
    it('Should load Books website', () => {
        cy.visit('http://books.toscrape.com/', { timeout: 10000 });
        cy.url().should('include', 'books.toscrape');
        cy.log('Before Reload');
        cy.reload();
        cy.log('After Reload');
    })

    it('Should click on Travel category', () => {
        cy.get('a').contains('Travel').click();
        cy.get('.page-header').contains('Travel');
    })

    it('Should display correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq', 11);
    })

    it('Should verify price for Olio book', () => {
        cy.get('a').contains('Poetry').click();
        cy.get('a').contains('Olio').click();
        cy.get('.price_color').should('contain','23.88');
    })
})