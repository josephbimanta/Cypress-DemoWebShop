import loginPage from "../pageObjects/loginPage"

describe('template spec', () => {
  it('<TC009> Verify Login Successfully - With Valid Credentials', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-login').click()
    loginPage.enterEmail('joseph.qa4@gmail.com')
    loginPage.enterPassword('testingqa')
    loginPage.clickLoginButton()
    loginPage.verifyLoginSuccessfully()
  })

  it.only('<TC010> Verify Login Failed - Didnt fill Email field', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-login').click()
    //loginPage.enterEmail('joseph.qa4@gmail.com')
    loginPage.enterPassword('testingqa')
    loginPage.clickLoginButton()
    loginPage.checkContainsErrorMessage('Login was unsuccessful. Please correct the errors and try again.')
    loginPage.checkMessage('No customer account found')
  })

  it('<TC011> Verify Login Failed - Input invalid email', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-login').click()
    loginPage.enterEmail('joseph.qa4gmail.com')
    loginPage.enterPassword('testingqa')
    loginPage.clickLoginButton()
    loginPage.checkContainsErrorMessage('Please enter a valid email address.')
  })

  it('<TC012> Verify Login Failed - Didnt fill Password field', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-login').click()
    loginPage.enterEmail('joseph.qa4@gmail.com')
    //loginPage.enterPassword('testingqa')
    loginPage.clickLoginButton()
    loginPage.checkContainsErrorMessage('Login was unsuccessful. Please correct the errors and try again.')
    loginPage.checkMessage('The credentials provided are incorrect')
  })

  it('<TC013> Verify Login Failed - Input invalid credentials', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-login').click()
    loginPage.enterEmail('joseph.qa4@gmail.com')
    loginPage.enterPassword('testingqa2222')
    loginPage.clickLoginButton()
    loginPage.checkContainsErrorMessage('Login was unsuccessful. Please correct the errors and try again.')
    loginPage.checkMessage('The credentials provided are incorrect')
  })
})