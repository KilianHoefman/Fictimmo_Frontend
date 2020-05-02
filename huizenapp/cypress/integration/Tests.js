describe('Tests', function () {
  it('App runs correctly on startup', function () {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy=filterInput]').type('gr');
    cy.get('[data-cy=huisCard]').should('have.length', 1);
  });

  it('Huis get works', function () {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:4200/api/huizen'
    });
  });

  it('Mock huis get works', function () {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/huizen',
      status: 200,
      response: 'fixture:huizen.json'
    });

    cy.visit('/');
    cy.get('[data-cy=huisCard]').should('have.length', 2)
  });

  it('On error should show message', function(){
    cy.server();
    cy.route({
      method: 'GET',
      url: 'api/huizen',
      status: 500,
      response: 'ERROR'
    });
    cy.visit('/');
    cy.get('[data-cy=appError]').should('be.visible');
  });
});