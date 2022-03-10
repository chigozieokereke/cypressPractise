import login_po from "../login/login_po";
import testConst from "../constants";

export function loginWithEmail(email,password) {
  cy.get(login_po.headerSigninButton).click();
  cy.get(login_po.emailLoginField).type(email);
  cy.get(login_po.passwordLoginField).type(password);
  cy.get(login_po.signinButton).click({ force: true });
}

 