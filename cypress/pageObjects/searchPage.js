class searchPage {
    elements ={
        searchButton : () => cy.get('form > .button-1')
    }
    clickSimpleComputerAddToCartFromSearchPage(){
        cy.get('.button-2').click()
    }
}

export default new searchPage()