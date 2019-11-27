import myAccount from '../pageobjects/ta-myaccount.page';
import loginPage from '../pageobjects/ta-login.page';
import products from '../pageobjects/products.page';
import { Then } from 'cucumber';

Then(/^I should see the message "([^"]*)" on my account page$/,  (message) => {
  myAccount.getUserInfo().should.equal(message);
});

Then(/^I should see the message "([^"]*)" on my login page$/,  (message) => {
  loginPage.getErrorMessage().should.equal(message);
});

Then(/^I click on a link "([^"]*)"$/,  (link) => {
  products.clickProduct()
});

Then(/^I click on a button "([^"]*)"$/,  (link) => {
  products.clickOnAddToCart()
});

Then("I click on checkout basket",  () => {
  products.clickShoppingBasket()
});

Then("I checkout",  () => {
  products.clickCheckoutButton()
});

Then(/^I input firstName, lastName and postcode "([^"]*)" "([^"]*)" "([^"]*)" into checkout information$/,  (firstName, lastName, postCode) => {
  products.enterCheckoutInformation(firstName, lastName, postCode)
});

Then("I click finish",  () => {
  products.clickFinishButton()
});

Then("I should see THANK YOU FOR YOUR ORDER",  () => {
  products.getFinalTitle().should.equal('THANK YOU FOR YOUR ORDER');
});
