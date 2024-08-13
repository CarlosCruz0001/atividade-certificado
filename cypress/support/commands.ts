Cypress.Commands.add("realizaPesquisa", (term: string) => {
  cy.get("#filter").type(term);
});
