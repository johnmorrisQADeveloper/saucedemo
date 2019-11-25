import myAccount from '../pageobjects/ta-myaccount.page';
import { Then } from 'cucumber';

Then(/^I should see the message "([^"]*)" on my account page$/,  (message) => {
  myAccount.getUserInfo().should.equal(message);
});
