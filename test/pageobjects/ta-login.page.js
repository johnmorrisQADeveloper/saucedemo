import Page from './page';

class LoginPage extends Page {

    /**
    * define elements
    */

    get usernameInput()   { return $('#user-name'); }
    get passwordInput()   { return $('#password'); }
    get loginButton()     { return $('.btn_action'); }
    get headerImage()     { return $('.product_label'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('/')       //this will append `login` to the baseUrl to form complete URL
        //browser.pause(3000);
    }
    /**
     * your page specific methods
     */

    waitForloginPageToLoad () {
      if(!this.headerImage.isDisplayed()){
        this.headerImage.waitForDisplayed(10000);
      }
    }

    login (username, password) {
      //this.waitForloginPageToLoad();
      this.usernameInput.setValue(username);
      this.passwordInput.setValue(password);
      this.loginButton.click();
    }
}

export default new LoginPage()
