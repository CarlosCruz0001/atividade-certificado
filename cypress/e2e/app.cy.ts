import {
  validateBinaryFile,
} from '../support/utils'

describe("Testes e2e no app de certificados da Feciaq 2022", () => {
  beforeEach(() => {
    cy.visit("");
    cy.get("#menu").click(); 

  });

  it("deveria Verificar se é possível avaliador presencial", () => {
    cy.get('[href="/avaliadores-presenciais"] > p').click();
    cy.realizaPesquisa("Carlos Eduardo Henrique da Cruz");
    cy.get("a > .svelte-1o09r98").click();
    cy.log('**confirm downloaded PDF**');
   
    validateBinaryFile("carloscrus0901_AT_gmail.com.pdf", 77824);
    
  });
});

/**https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/testing-dom__download/cypress/e2e/local-download-spec.cy.js */