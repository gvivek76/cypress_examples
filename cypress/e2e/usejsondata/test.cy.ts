
describe('template spec', () => {
  const url="https://practicetestautomation.com";
  
  beforeEach(() => {
    // Loading data from the 'user.json' fixture file
    cy.fixture('user').as('userData');
    cy.visit(url +"/practice-test-login/");
  });


  it('passes', () => {

    cy.get('@userData').then((user) => {
      cy.login(user.name, user.email);
    
    cy.get("#username").type(user.name);
    cy.get("#password").type(user.email);
    cy.get("button").contains("Submit").click();

  })
})
})