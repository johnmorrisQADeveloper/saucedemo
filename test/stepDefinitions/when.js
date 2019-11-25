import loginPage from '../pageobjects/ta-login.page';
import { When } from 'cucumber';

When(/^I login with username and password "([^"]*)" "([^"]*)" into the text box$/,  (arg1, arg2) => {
  loginPage.login(arg1, arg2);    // entering user name, password and and submiting the page
});
