Hey there! This is a simple test project for the Saucedemo login page, built with WebdriverIO. It checks how the site handles different login scenarios—like missing credentials or valid credentials.

Getting Started
Install Node.js if you haven’t already.
Clone or download this repository.
In your terminal, go to the project folder and run:

bash
npm install

This installs all the necessary dependencies.
Running the Tests
To kick off the tests, just run:

bash
npx wdio run wdio.conf.js

The tests will launch your browser and try logging in with different username/password combos. Keep an eye on the terminal to see which tests pass or fail.

What’s Being Tested
No username or password -> Expects “Username is required”
Only username -> Expects “Password is required”
Valid username & password -> Should log in successfully and show the “Swag Labs” page