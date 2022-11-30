import { basePage } from "./base.page";

export class examplePage extends basePage {
  url: string = "https://www.google.com";
  actionPerformed: boolean = false;

  elements = {
    exampleElement : () => cy.get("#exampleId"),
  }

  goTo()
  {
    cy.visit(this.url);
  }

  performAction()
  {
    this.actionPerformed = true;
  }

  confirmActionPerformed()
  {
    assert(this.actionPerformed);
  }
}