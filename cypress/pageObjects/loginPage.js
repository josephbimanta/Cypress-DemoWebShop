class loginPage {
    elements ={
        inputEmail : () => cy.get('#Email'),
        inputPassword : () => cy.get('#Password'),
        getSpan : () => cy.get('span'),
        getLi : () => cy.get('li')
    }

    //method for entering Email
    enterEmail(email)
    {
      this.elements.inputEmail().clear();
      this.elements.inputEmail().type(email);
    }

    //method for entering Password
    enterPassword(password)
    {
      this.elements.inputPassword().clear();
      this.elements.inputPassword().type(password);
    }

    clickLoginButton(){
      cy.get('form > .buttons > .button-1').click();
    }

    verifyLoginSuccessfully(){
      cy.get('.ico-logout').should('contain.text', 'Log out');
    }

    checkContainsErrorMessage(message){
      this.elements.getSpan();
      cy.contains(message);
    }

    checkMessage(message){
      this.elements.getLi();
      cy.contains(message);
    }

    loginWithValidCredentials(){
      cy.get('.ico-login').click()
      this.elements.inputEmail().clear();
      this.elements.inputEmail().type('joseph.qa4@gmail.com');
      this.elements.inputPassword().clear();
      this.elements.inputPassword().type('testingqa');
      cy.get('form > .buttons > .button-1').click();
      cy.get('.ico-logout').should('contain.text', 'Log out');
    }
}

export default new loginPage()