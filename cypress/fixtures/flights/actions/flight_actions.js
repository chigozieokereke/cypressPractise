import flight_search_po from "../flights/flight_search_po";

//click direct flights only raido button
export function clickDirectFlights() {
  cy.get(flight_search_po.direct_flights_only_po)
    .click({ force: true })
}

//click show all airlines link
export function clickShowAllAirlinesLink() {
    cy.get(flight_search_po.airline_show_all_po)
      .click
  }

  //click show all airlines link
export function selectAirlines() {
    cy.get(flight_search_po.airline_show_all_po)
      .click
  }