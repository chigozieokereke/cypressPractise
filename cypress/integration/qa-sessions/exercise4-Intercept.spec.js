import * as login_actions from "../../fixtures/login/login_actions"
import testConst from "../../fixtures/constants";

describe('Exercise 3 - POM', function () {
    before(() => {
        cy.visit('https://next-staging-ae.almosafer.com/en');
    })

    it('Validate Login Request', function () {
        cy.intercept('POST', 'api/account/v2/auth/local').as('validateRequest');
        login_actions.loginWithEmail(testConst.loginEmail, testConst.loginPassword);
        cy.wait('@validateRequest').then((validateResponse) => {
            expect(validateResponse.request.body.email).to.eq(testConst.loginEmail)
            expect(validateResponse.request.body.password).to.eq(testConst.loginPassword)
            expect(validateResponse.request.body.captchaToken).to.exist
        })
    });

}); 