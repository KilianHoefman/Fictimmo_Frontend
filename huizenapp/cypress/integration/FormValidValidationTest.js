describe('Form validation tests with correct input passes', function () {
    beforeEach(function () {
      cy.login();
    })
    it('Form filled in correctly enables submit button', function() {
      longText = "Dit is een heel lange tekst die als bedoeling heeft een textarea op te vullen en het minimale aantal karakters te overschrijven";
      cy.visit('/huizen/add');
      cy.get('[data-cy=submitButton]').should('be.disabled');
  
      cy.get('[data-cy=gemeenteInput]').type('Gent'),
      cy.get('[data-cy=straatnaamInput]').type('Voskenslaan'),
      cy.get('[data-cy=huisnummerInput]').type(25),
      cy.get('[data-cy=postcodeInput]').type(9000),
  
      cy.get('[data-cy=bewoonbareOppervlakteInput]').type(250),
      cy.get('[data-cy=totaleOppervlakteInput]').type(500),
      cy.get('[data-cy=epcInput]').type(350),
      cy.get('[data-cy=kadastraalInkomenInput]').type(780),
      cy.get('[data-cy=langeBeschrijvingInput]').type(longText),
  
      cy.get('[data-cy=korteBeschrijvingInput]').type("Korte test tekst"),
      cy.get('[data-cy=priceInput]').type(50000),
      cy.get('[data-cy=typeInput]').click(),
      cy.get('.mat-option').contains('Koop').click(),
  
      cy.get('[data-cy=soortInput]').click(),
      cy.get('.mat-option').contains('Huis').click(),
  
      cy.get('[data-cy=immobureauInput]').click(),
      cy.get('.mat-option').contains('Immo Nobels').click(),
  
      cy.get('[data-cy=submitButton]').should('be.enabled');
    })
  });
