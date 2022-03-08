import * as flight_actions from "../../fixtures/flights/flight_actions"

describe('Exercise 3 - POM', function () {
    before(() => {
        cy.visit('https://next-staging-ae.almosafer.com/en/flights/DXB-JED/2022-05-22/2022-05-25/Economy/1Adult');
    })

    it('Select direct flights ', function () {
        flight_actions.clickDirectFlights();
    });
    it('Click show all airlines ', function () {
        flight_actions.clickShowAllAirlinesLink();
    });
    it('Selct saudi airlines', function () {
        flight_actions.selectSaudiAirline();
    });
    it('Select first flight', function () {
        flight_actions.selectFlight();
    });
}); 