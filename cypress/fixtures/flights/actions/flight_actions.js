import flights_search_po from "../pageObjects/flights_search_po";

export function clickDirectFlights() {
  cy.get(flights_search_po.directFlightsOnlyRadioButton)
    .click({ force: true })
}
export function clickShowAllAirlinesLink() {
    cy.get(flights_search_po.showAllAirlinesLink)
      .first().click()
  }

export function selectSaudiAirline() {
    cy.get(flights_search_po.saudiAirlineCheckBox)
    .click({ force: true })
  }

  export function selectFlight() {
    cy.get(flights_search_po.selectFlightButton)
    .click({ force: true })
  }