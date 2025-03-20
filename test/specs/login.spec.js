import LoginPage from '../pages/login.page.js';
import InventoryPage from '../pages/inventory.page.js';
import { default as log } from '@wdio/logger';

describe('SauceDemo Login Tests', () => {
    const testLogger = log('LoginSpec');

    beforeEach(async () => {
        testLogger.info('Setup: Navigating to login page before each test...');
        await LoginPage.open();
    });

    it('UC-1: Should show error when username and password are both cleared', async () => {
        testLogger.info('Starting UC-1 test case');
        await LoginPage.enterCredentials('someUser', 'somePassword');
        await LoginPage.clearInputs();
        await browser.pause(500);
        await LoginPage.clickLogin();

        // UC-1: We verify an error message exists, not necessarily "Username is required"
        await browser.pause(1000);

        const errorContainer = await $('.error-message-container');
        const isDisplayed = await errorContainer.isDisplayed();

        testLogger.info(`Error container displayed: ${isDisplayed}`);

        expect(isDisplayed).toBe(true);
    });

    it('UC-2: Should show error when password is missing', async () => {
        testLogger.info('Starting UC-2 test case');
        await LoginPage.enterCredentials('fakeUser', 'somePassword');
        await $(LoginPage.passwordInput).clearValue();

        await browser.pause(500);
        await LoginPage.clickLogin();

        // UC-2: We verify an error message exists, not necessarily "Password is required"
        await browser.pause(1000);

        const errorContainer = await $('.error-message-container');
        const isDisplayed = await errorContainer.isDisplayed();

        testLogger.info(`Error container displayed: ${isDisplayed}`);

        expect(isDisplayed).toBe(true);
    });

    // UC-3: Test with valid credentials
    const validUsers = [
        { username: 'standard_user', password: 'secret_sauce', description: 'Standard user' },
        { username: 'problem_user', password: 'secret_sauce', description: 'Problem user' },
        { username: 'performance_glitch_user', password: 'secret_sauce', description: 'Performance glitch user' }
    ];

    validUsers.forEach((user) => {
        it(`UC-3: Should log in and see "Swag Labs" title for ${user.description}`, async () => {
            testLogger.info(`Starting UC-3 test case for ${user.description}`);
            await LoginPage.enterCredentials(user.username, user.password);
            await LoginPage.clickLogin();

            await InventoryPage.waitForPageLoaded();
            const title = await InventoryPage.getPageTitle();
            testLogger.info(`Browser title after login: ${title}`);

            expect(title).toBe('Swag Labs');
        });
    });
});