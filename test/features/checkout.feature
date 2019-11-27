Feature: Performing a login

    As a user on saucedmo login page
    I want to login
    Because I want buy some items

    Background:

        Given I am on the saucedmo page

    Scenario Outline: Do shopping
        When I login with username and password <user> <password> into the text box
        Then I should see the message "Products" on my account page
        Then I click on a link "Sauce Labs Backpack"
        Then I click on a button "ADD TO CART"
        Then I click on checkout basket
        Then I checkout
        Then I input firstName, lastName and postcode <firstName> <lastName> <postCode> into checkout information
        Then I click finish
        Then I should see THANK YOU FOR YOUR ORDER

        Examples:
            | user            |  | password       |  | firstName |  | lastName |  | postCode |
            | "standard_user" |  | "secret_sauce" |  | "John"    |  | "Morris" |  | "m41"    |
