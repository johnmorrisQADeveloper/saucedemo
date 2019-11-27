Feature: Performing a login

    As a user on saucedmo login page
    I want to login
    Because I want buy some items

    Background:

        Given I am on the saucedmo page

    Scenario Outline: Performing login operation with passing test data as data table
        When I login with username and password <user> <password> into the text box
        Then I should see the message "Products" on my account page

        Examples:
            | user                      |  | password       |
            | "standard_user"           |  | "secret_sauce" |
            | "problem_user"            |  | "secret_sauce" |
            | "performance_glitch_user" |  | "secret_sauce" |