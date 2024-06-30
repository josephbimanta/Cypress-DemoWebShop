import loginPage from "../pageObjects/loginPage"
import homePage from "../pageObjects/homePage"
import myAccountPage from "../pageObjects/myAccountPage"
import searchPage from "../pageObjects/searchPage"
import detailPage from "../pageObjects/detailPage"

describe('template spec', () => {
  it('<TC> Verify Add To Cart Successfully - Login And Add From Home Page', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    loginPage.loginWithValidCredentials()
    cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .button-2').click()
    cy.get('#bar-notification').should('be.visible')
    cy.get('.content').should('contain.text', 'The product has been added to your shopping cart')
  })

  it('<TC> Verify Add To Cart Successfully - Not Login And Add From Home Page', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    //loginPage.loginWithValidCredentials()
    cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .button-2').click()
    cy.get('#bar-notification').should('be.visible')
    cy.get('.content').should('contain.text', 'The product has been added to your shopping cart')
  })

  it.only('<TC> Verify Add To Cart Successfully - Not Login And Add From Search And Fill Must Field', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    //loginPage.loginWithValidCredentials()
    homePage.typeSearchBarField('Simple Computer')
    searchPage.clickSimpleComputerAddToCartFromSearchPage()
    detailPage.clickSimpleComputerProcessorField()
    detailPage.clickSimpleComputerAddToCartFromDetailPage()
    detailPage.checkNotification('The product has been added to your shopping cart')
  })

  it('<TC> Verify Add To Cart Successfully - Not Login And Add From Search And Fill Must Field And Input Quantity More Than 1', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    //loginPage.loginWithValidCredentials()
    homePage.typeSearchBarField('Simple Computer')
    searchPage.clickSimpleComputerAddToCartFromSearchPage()
    detailPage.clickSimpleComputerProcessorField()
    detailPage.inputQuantitySimpleComputer(5)
    detailPage.clickSimpleComputerAddToCartFromDetailPage()
    detailPage.checkNotification('The product has been added to your shopping cart')
  })

  it('<TC> Verify Add To Cart Successfully - Not Login And Add From Search And Fill Must Field And Input Quantity Less Than 1', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    //loginPage.loginWithValidCredentials()
    homePage.typeSearchBarField('Simple Computer')
    searchPage.clickSimpleComputerAddToCartFromSearchPage()
    detailPage.clickSimpleComputerProcessorField()
    detailPage.inputQuantitySimpleComputer(0)
    detailPage.clickSimpleComputerAddToCartFromDetailPage()
    detailPage.checkNotification('Quantity should be positive')
  })

  it('<TC> Verify Add To Cart Failed - Not Login And Add From Search And Not Fill Must Field', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    //loginPage.loginWithValidCredentials()
    homePage.typeSearchBarField('Simple Computer')
    searchPage.clickSimpleComputerAddToCartFromSearchPage()
    detailPage.clickSimpleComputerAddToCartFromDetailPage()
    detailPage.checkNotification('Please select Processor')
  })
})