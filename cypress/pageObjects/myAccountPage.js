class myAccountPage {
    elements ={
        inputFirstName : () => cy.get('#FirstName'),
        inputLastName : () => cy.get('#LastName'),
        inputEmail : () => cy.get('#Email'),
        getSpan : () => cy.get('span'),
        //getLi : () => cy.get('li')
    }

    clearFirstname(){
      this.elements.inputFirstName().clear()
    }

    enterFirstname(firstname){
      this.elements.inputFirstName().clear()
      this.elements.inputFirstName().type(firstname);
    }

    verifyChangeFirstName(newfirstname){
      cy.get('#FirstName').should('have.value', newfirstname)
    }

    enterLastname(lastname){
      this.elements.inputLastName().clear();
      this.elements.inputLastName().type(lastname);
    }

    clearLastname(){
      this.elements.inputLastName().clear()
    }

    verifyChangeLastName(newlastname){
      cy.get('#LastName').should('have.value', newlastname)
    }

    enterEmail(email){
      this.elements.inputEmail().clear();
      this.elements.inputEmail().type(email);
    }

    clearEmail(){
      this.elements.inputEmail().clear()
    }

    verifyChangeEmail(newemail){
      cy.get('#Email').should('have.value', newemail)
    }

    clickSaveButton(){
      cy.get('.buttons > .button-1').click()
    }

    checkContainsErrorMessage(message){
      this.elements.getSpan();
      cy.contains(message);
    }
}

export default new myAccountPage()