import loginPage from "../pageObjects/loginPage"
import homePage from "../pageObjects/homePage"
import myAccountPage from "../pageObjects/myAccountPage"

describe('template spec', () => {
  it('<TC> Verify Add To Cart Successfully - Login And Add From Home Page', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    loginPage.loginWithValidCredentials()
    cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .button-2').click()
    cy.get('#bar-notification').should('be.visible')
    cy.get('.content').should('contain.text', 'The product has been added to your shopping cart')
  })

  it.only('<TC> Verify Add To Cart Successfully - Not Login And Add From Home Page', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    //loginPage.loginWithValidCredentials()
    cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .button-2').click()
    cy.get('#bar-notification').should('be.visible')
    cy.get('.content').should('contain.text', 'The product has been added to your shopping cart')
  })
})