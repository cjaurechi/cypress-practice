/// <reference types="Cypress" />
class BasePage {
    static loadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number) {
        cy.wait(number)
    }
}

class HomePage extends BasePage {
    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView();
    }

    static scrollToTop() {
        cy.get('header').scrollIntoView();
    }
}

describe('Abstraction with classes', () => {
    before(() => {
        // runs before all tests inside describe
        // setup test data or test context
        // seed or reset the database
        BasePage.loadHomePage();
    })

    after(() => {
        // runs after all test inside describe block are done
        // test cleanup
        // clean cookies or localStorage
    })

    beforeEach(() => {
        // runs before each it block in the describe
    })

    afterEach(() => {
        // runs after each it block in the describe
    })

    it('First IT', () => {
        BasePage.wait(5000);
        HomePage.scrollToBottom();
        HomePage.wait(3000);
        HomePage.scrollToTop();
    })

    it('Second IT', () => {
        BasePage.wait(5000);
        HomePage.scrollToBottom();
        HomePage.wait(3000);
        HomePage.scrollToTop();
    })
})