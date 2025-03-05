const { expect } = require('chai');

describe('Saucedemo Login Tests', () => {
  beforeEach(async () => {
    await browser.url('https://www.saucedemo.com');
  });

  it('UC-1: Should show an error when username and password are empty', async () => {
    const loginButton = await $('#login-button');
    await loginButton.click();

    const errorMsg = await $('.error-message-container h3').getText();
    expect(errorMsg).to.include('Username is required');
  });

  it('UC-1.2: Should show an error when only username is entered (missing password)', async () => {
    const usernameField = await $('#user-name');
    await usernameField.setValue('standard_user');

    const loginButton = await $('#login-button');
    await loginButton.click();

    const errorMsg = await $('.error-message-container h3').getText();
    expect(errorMsg).to.include('Password is required');
  });

  it('UC-3: Should login successfully with valid credentials', async () => {
    const usernameField = await $('#user-name');
    await usernameField.setValue('standard_user');

    const passwordField = await $('#password');
    await passwordField.setValue('secret_sauce');

    const loginButton = await $('#login-button');
    await loginButton.click();

    const title = await browser.getTitle();
    expect(title).to.equal('Swag Labs');

 
  });
});
