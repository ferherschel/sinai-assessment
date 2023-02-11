import InputFirstPage from "../pageObjects/inputNumberZipPeople.js"

Cypress.Commands.add('numberInputs', (householdNumber, zipCodeNumber) => {

    const inputComponents = new InputFirstPage()

    cy.visit('https://www3.epa.gov/carbon-footprint-calculator/')
    inputComponents.fillHouseholdInput(householdNumber)
    inputComponents.fillZipCodeInput(zipCodeNumber)
    inputComponents.getStartedBtn().click()
})
