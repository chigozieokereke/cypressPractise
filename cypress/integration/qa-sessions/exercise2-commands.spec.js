describe('Exercise Two', function () {
    before(() => {
        cy.visit('https://qa-frontend-cypress.s3.eu-west-1.amazonaws.com/cypress-session2.html');
    })

    it('Fill Form Data', function () {
        cy.get('[name=namec]').type('Adam Smith')
        cy.get('[name=street]').type('112 Washington Street')
        cy.get('[name=zipcode]').type('00112')
        cy.get('select').select("Germany")
        cy.get('[name=email]').type('adamsmith@adams.com')
        cy.get('[type=radio]').check('Yes', {force: true})
        cy.get('[type="checkbox"]').check(['Prpoposal','Narrative'], {force: true})
        cy.get('[type=submit]').click()
    });
}); 