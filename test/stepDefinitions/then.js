import myAccount from '../pageobjects/ta-myaccount.page';
import loginPage from '../pageobjects/ta-login.page';
import { Then } from 'cucumber';

Then(/^I should see the message "([^"]*)" on my account page$/,  (message) => {
  myAccount.getUserInfo().should.equal(message);
});

Then(/^I should see the message "([^"]*)" on my login page$/,  (message) => {
  loginPage.getErrorMessage().should.equal(message);
});