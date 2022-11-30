import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { examplePage } from "../pages/example.page";

let examplePageImp: examplePage;

Given("the user has navigated to the example page", () => {
  examplePageImp = new examplePage();
  examplePageImp.goTo();
});

When("the user does an action", () => {
  examplePageImp.performAction();
});

Then("the user should see the result", () => {
  examplePageImp.confirmActionPerformed();
});

