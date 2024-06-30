class detailPage {
    elements ={
        searchButton : () => cy.get('form > .button-1'),
        getSpan : () => cy.get('span')
    }
    clickSimpleComputerProcessorField(){
        cy.get('#product_attribute_75_5_31_96').click()
    }

    inputQuantitySimpleComputer(qty){
        cy.get('#addtocart_75_EnteredQuantity').clear()
        cy.get('#addtocart_75_EnteredQuantity').type(qty)
    }

    clickSimpleComputerAddToCartFromDetailPage(){
        cy.get('#add-to-cart-button-75').click()
    }

    checkNotification(message){
        cy.get('#bar-notification').should('be.visible')
        this.elements.getSpan()
        cy.contains(message)
    }
}

export default new detailPage()