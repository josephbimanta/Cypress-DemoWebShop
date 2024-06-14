import loginPage from "../pageObjects/loginPage"
import homePage from "../pageObjects/homePage"
import myAccountPage from "../pageObjects/myAccountPage"

describe('template spec', () => {
  it('Verify Edit Customer Info Successfully - Fill First name field', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    loginPage.loginWithValidCredentials()
    homePage.clickAccountInfo()
    myAccountPage.enterFirstname('Bima')
    myAccountPage.clickSaveButton()
    myAccountPage.verifyChangeFirstName('Bima')
  })

  it('Verify Edit Customer Info Successfully - Fill Last name field', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    loginPage.loginWithValidCredentials()
    homePage.clickAccountInfo()
    myAccountPage.enterLastname('Ray')
    myAccountPage.clickSaveButton()
    myAccountPage.verifyChangeLastName('Ray')
  })

  it('Verify Edit Customer Info Successfully - Fill Email field', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    loginPage.loginWithValidCredentials()
    homePage.clickAccountInfo()
    myAccountPage.enterEmail('joseph.qaa4@gmail.com')
    myAccountPage.clickSaveButton()
    myAccountPage.verifyChangeEmail('joseph.qaa4@gmail.com')
  })

  it('Verify Edit Customer Info Failed - Didnt fill First name field', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    loginPage.loginWithValidCredentials()
    homePage.clickAccountInfo()
    myAccountPage.clearFirstname()
    myAccountPage.clickSaveButton()
    myAccountPage.checkContainsErrorMessage('First name is required.')
  })

  it('Verify Edit Customer Info Failed - Didnt fill Last name field', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    loginPage.loginWithValidCredentials()
    homePage.clickAccountInfo()
    myAccountPage.clearLastname()
    myAccountPage.clickSaveButton()
    myAccountPage.checkContainsErrorMessage('Last name is required.')
  })

  it('Verify Edit Customer Info Failed - Didnt fill Email field', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    loginPage.loginWithValidCredentials()
    homePage.clickAccountInfo()
    myAccountPage.clearEmail()
    myAccountPage.clickSaveButton()
    myAccountPage.checkContainsErrorMessage('Email is required.')
  })

  it.only('Verify Edit Customer Info Failed - Fill Email field with invalid email', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    loginPage.loginWithValidCredentials()
    homePage.clickAccountInfo()
    myAccountPage.clearEmail()
    myAccountPage.clickSaveButton()
    myAccountPage.enterEmail('joseph.qa4gmail.com')
    myAccountPage.clickSaveButton()
    myAccountPage.checkContainsErrorMessage('Wrong email')
  })
})