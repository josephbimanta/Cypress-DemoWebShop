class loginPage {
    elements ={
        inputEmail : () => cy.get('#Email'),
        inputPassword : () => cy.get('#Password')
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
}

export default new loginPage()