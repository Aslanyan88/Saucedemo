export const config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/specs/**/*.js'
    ],
    //
    // ============
    // Capabilities
    // ============
    maxInstances: 10,
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                // Add options to make Chrome more stable
                args: ['--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage']
            }
        },
        {
            maxInstances: 5,
            browserName: 'firefox',
            acceptInsecureCerts: true,
            'moz:firefoxOptions': {
                // Add options to make Firefox more stable
                args: []
            }
        }
    ],
    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com/',
    waitforTimeout: 10000,
    // Add pause between actions to make tests more stable
    waitforInterval: 500,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['chromedriver', {
            // Use the latest chromedriver
            chromedriverCustomPath: null // This will make it use the latest installed version
        }],
        ['geckodriver']
    ],
    framework: 'mocha',
    reporters: ['spec'],
    
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // This hook allows overriding capabilities based on browser argument
    beforeSession: function (config, capabilities, specs) {
        // This will filter capabilities based on browser argument
        const browserArg = process.argv.find(arg => arg.startsWith('--browser='));
        if (browserArg) {
            const browserName = browserArg.split('=')[1];
            if (browserName && ['chrome', 'firefox'].includes(browserName)) {
                // Filter capabilities to only include the specified browser
                console.log(`Running tests only in ${browserName}`);
                if (Array.isArray(config.capabilities)) {
                    config.capabilities = config.capabilities.filter(
                        cap => cap.browserName === browserName
                    );
                }
            }
        }
    },
    
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            // Take screenshot on failure
            await browser.saveScreenshot(`./screenshots/error_${Date.now()}.png`);
        }
    }
}