class homePage {
    elements ={
        logoutButton : () => cy.get('.ico-logout'),
        searchButton : () => cy.get('form > .button-1')
    }
    clickAccountInfo(){
        cy.get('.header-links > ul > :nth-child(1) > .account').click()
    }

    clickLogout(){
        this.elements.logoutButton().click()
    }

    verifyLogoutSuccessfully(){
        cy.get('.ico-login').should('contain.text', 'Log in')
    }

    typeSearchBarField(search){
        cy.get('#small-searchterms').clear()
        cy.get('#small-searchterms').type(search)
        cy.get('form > .button-1').click()
        //this.elements.searchButton().click()
    }
}

export default new homePage()