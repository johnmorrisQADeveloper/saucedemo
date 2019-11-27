import Page from './page';

class Products extends Page {

    get productLink()   { return $('#item_4_title_link > div'); }

    get cartButton() { return $('#inventory_item_container > div > div > div > button'); }

    get shoppingBasket() { return $('#shopping_cart_container > a'); }

    get checkoutButton() { return $('.checkout_button'); }

    get firstNameTextBox() { return $('#first-name'); }
    get lastNameTextBox() { return $('#last-name'); }
    get postCodeTextBox() { return $('#postal-code'); }
    get continueButton() { return $('div.checkout_buttons > input'); }

    get finishButton() { return $('a.btn_action.cart_button'); }

    get getHeading() { return $('#checkout_complete_container > h2'); }
    

    open () {
        super.open('/')       //this will append `login` to the baseUrl to form
    }

    clickProduct (name) {
      this.productLink.click();
      browser.pause(2000)
    }

    clickOnAddToCart() {
      this.cartButton.click();
      browser.pause(2000)
    }

    clickShoppingBasket() {
      this.shoppingBasket.click();
      browser.pause(2000)
    }

    clickCheckoutButton() {
      this.checkoutButton.click()
      browser.pause(2000)
    }
 
    enterCheckoutInformation(firstName, lastName, postCode){
      this.firstNameTextBox.setValue(firstName)
      this.lastNameTextBox.setValue(lastName)
      this.postCodeTextBox.setValue(postCode)
      this.continueButton.click()
      browser.pause(2000)
    }

    clickFinishButton() {
      this.finishButton.click()
      browser.pause(2000)
    }

    getFinalTitle(){
      return this.getHeading.getText();
    }
}

export default new Products()
