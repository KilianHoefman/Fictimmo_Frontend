describe('Form validation with wrong input shows error message', function() {
    beforeEach(function () {
        cy.login();
      })

    it('Touch required fields show error', function(){
        cy.visit('/huizen/add');
        cy.get('[data-cy=submitButton]').should('be.disabled');

        cy.get('[data-cy=gemeenteInput]').click(),
        cy.get('[data-cy=straatnaamInput]').click(),
        cy.get('[data-cy=huisnummerInput]').click(),
        cy.get('[data-cy=postcodeInput]').click(),

        cy.get('[data-cy=bewoonbareOppervlakteInput]').click(),
        cy.get('[data-cy=totaleOppervlakteInput]').click(),
        cy.get('[data-cy=epcInput]').click(),
        cy.get('[data-cy=kadastraalInkomenInput]').click(),
        cy.get('[data-cy=langeBeschrijvingInput]').click(),

        cy.get('[data-cy=korteBeschrijvingInput]').click(),
        cy.get('[data-cy=priceInput]').click(),

        cy.get('[data-cy=typeInput]').click(),

        cy.get('[data-cy=gemeenteError]').should('be.visible'),
        cy.get('[data-cy=straatnaamError]').should('be.visible'),
        cy.get('[data-cy=huisnummerError]').should('be.visible'),
        cy.get('[data-cy=postcodeError]').should('be.visible'),

        cy.get('[data-cy=bewoonbareOppervlakteError]').should('be.visible'),
        cy.get('[data-cy=totaleOppervlakteError]').should('be.visible'),
        cy.get('[data-cy=epcError]').should('be.visible'),
        cy.get('[data-cy=kadastraalInkomenError]').should('be.visible'),
        cy.get('[data-cy=langeBeschrijvingError]').should('be.visible'),

        cy.get('[data-cy=korteBeschrijvingError]').should('be.visible'),
        cy.get('[data-cy=priceError]').should('be.visible'),

        cy.get('[data-cy=submitButton]').should('be.disabled');
    })
});