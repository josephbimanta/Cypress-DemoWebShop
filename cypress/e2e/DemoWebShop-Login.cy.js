import loginPage from "../pageObjects/loginPage"

describe('template spec', () => {
  it('Verify Register Successfully', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-login').click()
    loginPage.enterEmail('joseph.qa4@gmail.com')
    loginPage.enterPassword('testingqa')
    loginPage.clickLoginButton()
    loginPage.verifyLoginSuccessfully()
  })
})