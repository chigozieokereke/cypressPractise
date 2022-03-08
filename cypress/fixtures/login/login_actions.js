import login_po from "../login/login_po";
import testConst from "../constants";

export function loginWithEmail() {
  cy.get(login_po.emailLoginField).type(testConst.loginEmail);
  cy.get(login_po.passwordLoginField).type(testConst.loginPassword);
  cy.get(login_po.signinButton).click({ force: true });
}

 