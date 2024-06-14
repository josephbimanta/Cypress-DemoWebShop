class homePage {
    elements ={
        logoutButton : () => cy.get('.ico-logout')
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
}

export default new homePage()