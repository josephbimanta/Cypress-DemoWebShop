import loginPage from "../pageObjects/loginPage"
import homePage from "../pageObjects/homePage"

describe('template spec', () => {
  it('<TC014>Verify Logout successfully', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    loginPage.loginWithValidCredentials()
    homePage.clickLogout()
    homePage.verifyLogoutSuccessfully()
  })
})