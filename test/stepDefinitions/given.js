import loginPage from '../pageobjects/ta-login.page';
import { Given } from 'cucumber';

Given(/^I am on the saucedmo page$/,  () => {
  loginPage.open();     // navigating to login page
});
