describe('Xpath with Cypress', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com')
    })

    it('Should click element using xpath', () => {
        cy.xpath('//button[@id="signin_button"]').should('be.visible').click();
    })

    it('Should display login form', () => {
        cy.xpath('//form').should('have.length', 1);
    })
})