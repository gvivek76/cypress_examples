
describe('template spec', () => {
    const url="https://practicetestautomation.com";
    
    beforeEach(() => {
      // Loading data from the 'user.json' fixture file
      cy.fixture('user').as('userData');
      cy.visit(url +"/practice-test-login/");
    });
  
  
    it('passes', () => {
  
      cy.get('@userData').then((user) => {
          cy.login(user.name, user.email).then((loginresult)=>{
          if(loginresult ===true){
            cy.log("login sucessfull")
            cy.get("#menu-item-20").click();
          }else{
            cy.log("not a valid account");
          }
          })
        
    } );
  })
  })