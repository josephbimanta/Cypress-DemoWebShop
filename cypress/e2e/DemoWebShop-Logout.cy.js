import loginPage from "../pageObjects/loginPage"
import homePage from "../pageObjects/homePage"

describe('template spec', () => {
  it('Verify Logout successfully', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    loginPage.loginWithValidCredentials()
    homePage.clickLogout()
    homePage.verifyLogoutSuccessfully()
  })
})