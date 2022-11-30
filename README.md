# TSCypressCucumberFramework

Basic TypeScript Cypress Framework using Cucumber, for end to end browser tests.

# What's Inside

- TypeScript Cypress setup so you can quickly get started with writing tests.
- Page Object Model structure, with a Base Page object to add in shared elements.
- Cucumber preprocessor integration so you can use BDD-style formatting

# Usage

Designed for use as a template for a new repository of tests, download and use as a template.

# Running the Tests

In order to run these tests, you'll need to have nodejs and npm installed and configured.

From a terminal, in the base directory of this repo, run:

``` npm install ```

Once that's all downloaded and set up, there are two commands configured, but to start, use:

``` npm run cypress:open ```

This should open the Cypress application, and you should be able to select the browser of choice, and the test type will be End-to-End.

# How to Write New Tests

Using this template, you can find an example feature file in the ``` cypress/e2e/features ``` folder, and you should write new features here too. Step files are found 
in ``` cypress/e2e/steps ```, alongside the Page Objects in the neighbouring ```pages``` directory.

