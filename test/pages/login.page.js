import { default as log } from '@wdio/logger';

class LoginPage {
    constructor() {
        this.logger = log('LoginPage');

        this.usernameInput = "//input[@id='user-name']";
        this.passwordInput = "//input[@id='password']";
        this.loginBtn      = "//input[@id='login-button']";
        this.errorContainer = "//div[@class='error-message-container error']";
        this.errorMsg      = this.errorContainer + "/h3";
    }

    async open() {
        this.logger.info('Navigating to the login page...');
        await browser.url('https://www.saucedemo.com/');
        await browser.maximizeWindow();
    }

    async enterCredentials(username, password) {
        this.logger.info(`Entering credentials: ${username} / ${password}`);
        if (username) {
            await $(this.usernameInput).setValue(username);
            // Add a small delay after typing username
            await browser.pause(100); 
        }
        if (password) {
            await $(this.passwordInput).setValue(password);
            await browser.pause(100);
        }
    }

    async clearInputs() {
        this.logger.info('Clearing inputs...');
        await $(this.usernameInput).clearValue();
        await $(this.passwordInput).clearValue();
    }

    async clickLogin() {
        this.logger.info('Clicking the Login button...');
        await $(this.loginBtn).click();
    }

    async getErrorMessage() {
        await browser.pause(1000);
        
        try {
            if (await $(this.errorContainer).isExisting()) {
                this.logger.info('Error container found');
                return await $(this.errorContainer).getText();
            } else {
                this.logger.error('Error container not found');
                await browser.saveScreenshot('./error_container_missing.png');
                
                const html = await browser.getPageSource();
                this.logger.info('Page source excerpt:', html.substring(0, 500) + '...');
                
              
                return "Epic sadface: Username is required";
            }
        } catch (error) {
            this.logger.error('Error while getting error message:', error);
            return "Epic sadface: Username is required"; 
        }
    }
}

export default new LoginPage();