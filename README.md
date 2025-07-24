# cypress-idurarapp

### Setup instructions

Fistly you need to clone this repository using
`git clone https://github.com/atulzh07/cypress-idurarapp.git`

Navigate to the cloned folder.

Since we already have cypress in the package.json file, use the following command:
`npm install`

After completing the setup,

1. Run Cypress tests in headed mode using the command: `npm run start`
2. Run Cypress tests in headless mode using the command: `npm run test`

### Folder Structure

Page Object Model structure is used.

#### cypress

- This folder contains the tests.

##### downloads

Contains any item downloaded during the test run.

##### e2e

Contains the test spec files.

##### fixtures

Contains test credentials.
Please note that dummy email and passwords have been used during this test.

##### support > pageObjects

Contains page objects used across the spec file.

Note: testRunVideo contains a video of the test run that I made in headed mode.
