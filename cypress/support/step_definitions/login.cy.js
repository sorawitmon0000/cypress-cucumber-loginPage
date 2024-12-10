import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { loginPageActions } from '../../../PO/LoginPageAction'

const loginAction = new loginPageActions;

Given('User stay at login page', () => {
  cy.visit('https://practicetestautomation.com/practice-test-login/');
});
When('pass username in text field', () => {
  loginAction.username();
});
When('pass password in text field', () => {
  loginAction.password();
});
When('click login button', () => {
  loginAction.loginButton();
});
Then('verify successfully login', () => {
  cy.get('.post-title').should('have.text', 'Logged In Successfully')
});