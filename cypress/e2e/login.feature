Feature: Login function


    This feature will login into the website
    Scenario: Login
        Given User stay at login page
        When pass username in text field
        When pass password in text field
        When click login button
        Then verify successfully login 
 