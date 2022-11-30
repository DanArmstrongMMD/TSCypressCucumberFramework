export class basePage {
  sharedElements = {
    exampleSharedElement : () => cy.get("#exampleSharedId"),
  }
}