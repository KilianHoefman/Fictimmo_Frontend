describe('Tests', function () {
  beforeEach(function () {
    cy.login();
  })

  it('Correct startup', function () {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy=filterInput]').type('gr');
    cy.get('[data-cy=huisCard]').should('have.length', 1);
  });

  it('HttpGet for huizen', function () {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/huizen'
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
    cy.get('[data-cy=huisCard]').should('have.length', 4)
  });

  it('Filter for soort works', function() {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'api/huizen',
      status: 200,
      response: 'fixture:huizen.json'
    })
    cy.get('[data-cy=filterInput]').type('hu');
    cy.get('[data-cy=huisCard]').should('have.length', 4)
  });

  it('On httprequest error should show message', function () {
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