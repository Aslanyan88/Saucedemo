export const config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 5,
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'firefox',
            acceptInsecureCerts: true,
            'moz:firefoxOptions': {
                args: []
            }
        }
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com/',
    waitforTimeout: 10000,
    waitforInterval: 500,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['geckodriver']
    ],
    framework: 'mocha',
    reporters: ['spec'],
    
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.saveScreenshot(`./screenshots/firefox_error_${Date.now()}.png`);
        }
    }
}