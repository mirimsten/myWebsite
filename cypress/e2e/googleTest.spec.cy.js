/// <reference types="cypress" />

describe('Search Test', () => {
    it('Searches for header and checks results', () => {
        cy.visit('../../public/index.html');

        cy.get('#header').contains('Today');
    });
});