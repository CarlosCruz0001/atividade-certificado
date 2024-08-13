declare namespace Cypress {
  interface Chainable {
    realizaPesquisa(term: string): Chainable<Element>;
  }
}
