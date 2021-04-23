/// <reference types="Cypress" />

describe('Write and read data to JSON / Text file', () => {
    it('Should write data into JSON', () => {
        cy.writeFile('log.json', { name: "Charlie", age: 31 });
    });

    it('Should write data into Text file', () => {
        cy.writeFile('log.txt', 'Hello world!');
    });

    it('Should read and verify data from JSON', () => {
        cy.readFile('log.json').its('age').should('eq', 31);
    });

    it('Should read and verify data from Text file', () => {
        cy.readFile('log.txt').should('eql', 'Hello world!');
    });

    it('Should read and verify browser document content', () => {
        cy.visit('http://example.com');
        cy.document().its('contentType').should('eq', 'text/html');
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    })
})