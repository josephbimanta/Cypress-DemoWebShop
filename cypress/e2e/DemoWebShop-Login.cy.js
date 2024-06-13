import loginPage from "../pageObjects/loginPage"

describe('template spec', () => {
  it('Verify Login Successfully - With Valid Credentials', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-login').click()
    loginPage.enterEmail('joseph.qa4@gmail.com')
    loginPage.enterPassword('testingqa')
    loginPage.clickLoginButton()
    loginPage.verifyLoginSuccessfully()
  })

  it.only('Verify Login Successfully - Didnt fill Email field', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-login').click()
    //loginPage.enterEmail('joseph.qa4@gmail.com')
    loginPage.enterPassword('testingqa')
    loginPage.clickLoginButton()
    loginPage.checkContainsErrorMessage('Login was unsuccessful. Please correct the errors and try again.')
    loginPage.checkMessage('No customer account found')
  })

  it('Verify Login Successfully - Input invalid email', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-login').click()
    loginPage.enterEmail('joseph.qa4gmail.com')
    loginPage.enterPassword('testingqa')
    loginPage.clickLoginButton()
    loginPage.checkContainsErrorMessage('Please enter a valid email address.')
  })

  it('Verify Login Successfully - Didnt fill Password field', () => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-login').click()
    loginPage.enterEmail('joseph.qa4@gmail.com')
    //loginPage.enterPassword('testingqa')
    loginPage.clickLoginButton()
    loginPage.checkContainsErrorMessage('Login was unsuccessful. Please correct the errors and try again.')
    loginPage.checkMessage('The credentials provided are incorrect')
  })

  it('Verify Login Successfully - Input invalid credentials', () => {
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