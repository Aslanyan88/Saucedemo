Launch URL: https://www.saucedemo.com/ UC-1 Test Login form with empty credentials: Type any credentials into "Username" and "Password" fields. Clear the inputs. Hit the "Login" button. Check the error messages: "Username is required". UC-2 Test Login form with credentials by passing Username: Type any credentials in username. Enter password. Clear the "Password" input. Hit the "Login" button. Check the error messages: "Password is required". UC-3 Test Login form with credentials by passing Username & Password: Type credentials in username which are under Accepted username are sections. Enter password as secret sauce. Click on Login and validate the title “Swag Labs” in the dashboard. Provide parallel execution, add logging for tests and use Data Provider to parametrize tests. Make sure that all tasks are supported by these 3 conditions: UC-1; UC-2; UC-3. Please, add task description as README.md into your solution! To perform the task use the various of additional options: Test Automation tool: WebDriverIO; Browsers: 1) Firefox; 2) Chrome; Locators: XPath; Patterns: Page Object; Assertions: Use from the selected framework; [Optional] Loggers: Use from the selected framework.
# SauceDemo Test Automation

This project contains automated tests for the SauceDemo web application using WebDriverIO with support for both Chrome and Firefox browsers.

## Task Description

The tests cover the following use cases:

### UC-1: Test Login form with empty credentials
- Type any credentials into "Username" and "Password" fields
- Clear the inputs
- Hit the "Login" button
- Check that an error message is displayed

### UC-2: Test Login form with credentials by passing Username
- Type any credentials in username
- Enter password
- Clear the "Password" input
- Hit the "Login" button
- Check that an error message is displayed

### UC-3: Test Login form with credentials by passing Username & Password
- Type credentials from accepted usernames list
- Enter password as "secret_sauce"
- Click on Login
- Validate the title "Swag Labs" in the dashboard

## Technology Stack

- **Test Automation Tool**: WebDriverIO
- **Browsers**: Firefox and Chrome
- **Locators**: XPath
- **Patterns**: Page Object
- **Assertions**: WebDriverIO built-in expect
- **Loggers**: WebDriverIO Logger

## Project Structure

```
saucedemo/
├── node_modules/          # Dependencies installed by npm
├── test/                  # Main test directory
│   ├── pages/             # Page Objects directory
│   │   ├── login.page.js  # Login page object
│   │   └── inventory.page.js # Inventory page object
│   ├── specs/             # Test specification files
│   │   └── login.spec.js  # Login test specification
│   └── data/              # Test data files (if needed)
├── screenshots/           # Screenshots from failed tests
├── wdio.conf.js           # Main WebDriverIO configuration for both browsers
├── chrome.conf.js         # Chrome-specific configuration
├── firefox.conf.js        # Firefox-specific configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

## Setup Instructions

1. Install dependencies:
```
npm install
```

2. Run tests on both Chrome and Firefox:
```
npm test
```

3. Run tests on Chrome only:
```
npm run test:chrome
```

4. Run tests on Firefox only:
```
npm run test:firefox
```

5. Run tests in parallel (both browsers in parallel):
```
npm run test:parallel
```

6. Run a specific test file:
```
npm run test:single ./test/specs/login.spec.js
```

## Parallel Execution

The tests are configured to run in parallel with a maximum of 5 instances per browser, providing efficient test execution across both Chrome and Firefox browsers simultaneously.

## Logging

Comprehensive logging is implemented throughout the tests:
- Page interaction logging
- Test case steps logging
- Error logging with screenshots on failure

## Browser Support

- Chrome: Using Chromedriver
- Firefox: Using Geckodriver

Both browser drivers are installed and configured automatically.

## Troubleshooting

If you encounter issues with browser selection, make sure:
1. You have both Chrome and Firefox installed on your system
2. The browser driver versions match your installed browser versions
3. The separate config files (chrome.conf.js and firefox.conf.js) are correctly set up

For any issues with specific browsers, check the error screenshots in the screenshots directory.