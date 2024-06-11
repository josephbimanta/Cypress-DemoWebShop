class loginPage {
    elements ={
        inputUsername : () => cy.get('#FirstName')
    }

    //method for entering username
    enterUsername(username)
    {
      this.elements.inputUsername().clear();
      this.elements.inputUsername().type(username);
    }
}

export default new loginPage()