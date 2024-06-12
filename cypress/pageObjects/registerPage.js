class registerPage {
    elements ={
        inputFirstname : () => cy.get('#FirstName'),
        inputLastname : () => cy.get('#LastName'),
        inputEmail : () => cy.get('#Email'),
        inputPassword : () => cy.get('#Password'),
        inputConfirmPassword : () => cy.get('#ConfirmPassword'),
        clickRegisterbutton : () => cy.get('#register-button'),
        getSpan : () => cy.get('span')
    }

    //method for entering Firstname
    enterFirstname(firstname)
    {
      this.elements.inputFirstname().clear();
      this.elements.inputFirstname().type(firstname);
    }

    //method for entering Lastname
    enterLastname(lastname)
    {
      this.elements.inputLastname().clear();
      this.elements.inputLastname().type(lastname);
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

    //method for entering Confirm Password
    enterConfirmPassword(confirmpassword)
    {
      this.elements.inputConfirmPassword().clear();
      this.elements.inputConfirmPassword().type(confirmpassword);
    }

    //method for click register button
    clickRegisterButton()
    {
      this.elements.clickRegisterbutton().click();
    }

    //method for check contains error message
    checkContainsErrorMessage(message){
      this.elements.getSpan();
      cy.contains(message);
    }

    //method for check success register
    checkSuccessRegister(){
      cy.get('.result').should('contain.text', 'Your registration completed');
      cy.get('.page-body > .buttons > .button-1').click();
      cy.get('.ico-logout').should('contain.text', 'Log out');
    }
}

export default new registerPage()