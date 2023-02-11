import HomeEnergyInputs from "../pageObjects/homeEnergyCalculator.js"
import TransportationInputs from "../pageObjects/transportationCalculator.js"
import WasteInputs from "../pageObjects/wasteCalculator.js"
import ReportView from "../pageObjects/yourReportView.js"
import TransportationCalculator from "../helper/transportationCalculator.js"

describe('Carbon Calculator logic', () => {

    const inputHomeEnergy = new HomeEnergyInputs()
    const inputTransportation = new TransportationInputs()
    const inputWaste = new WasteInputs()
    const reportResults = new ReportView()
    const transportationCalculator = new TransportationCalculator()

    // Expected to fail
    it('Calculator fill inputs with logic validation', () => {

        cy.numberInputs('1', '12345')
        inputHomeEnergy.viewYourReportBtn().should('be.visible')

        // Your Current Emission Home Energy
        inputHomeEnergy.primaryHeatingSource().select('Electricity')
        inputHomeEnergy.fillNaturalGas('1')
        inputHomeEnergy.fillElectricity('1')
        inputHomeEnergy.fillFuelOil('1')
        inputHomeEnergy.fillPropane('1')
        // Validation of Your Current Emission Home Energy numbers on report
        inputHomeEnergy.viewYourReportBtn().click()
        reportResults.currentTotalReport().should('have.text', '318')
        reportResults.plannedActionsReport().should('have.text', '318')
        reportResults.usAverageReport().should('have.text', '15,617')
        inputHomeEnergy.homeEnergyBtn().click()
        // Reduce your Emission Home Energy
        inputHomeEnergy.fillEnergyAc('2')
        inputHomeEnergy.fillEnergyHeat('2')
        inputHomeEnergy.fillLightsToReplace('1')
        inputHomeEnergy.pwrMgmtSettings().select('Will Do')
        inputHomeEnergy.fillIncreaseGreenPwr('1')
        inputHomeEnergy.coldWaterWashMachine().select('Will Do')
        inputHomeEnergy.fillLoadsPerWeek('1')
        inputHomeEnergy.airDryer().select('Will Not Do')
        inputHomeEnergy.percentageAirDyer().select('20% of my Laundry')
        inputHomeEnergy.refrigeratorSavings().select('Already Done')
        inputHomeEnergy.windowSavings().select('Will Not Do')
        // Validation of Reduce your Emission Home Energy numbers on report
        inputHomeEnergy.viewYourReportBtn().click()
        reportResults.currentTotalReport().should('have.text', '318')
        reportResults.plannedActionsReport().should('have.text', '212')
        reportResults.usAverageReport().should('have.text', '15,617')
        inputHomeEnergy.transportationBtn().click()
        // Transportation
        let vehicleMock = {
            miles_driven: 20,
            miles_identifier: "Per Week",
            miles_per_gallon: 10,
            regular_maintenance: 'Already Done'
        }
        inputTransportation.numberVehicles().select("1")
        inputTransportation.currentMaintenance().select(vehicleMock.regular_maintenance)
        inputTransportation.fillVehicleMiles(vehicleMock.miles_driven)
        inputTransportation.vehicleYearWeek().select(vehicleMock.miles_identifier)
        inputTransportation.fillVehicleGasMileage(vehicleMock.miles_per_gallon)
        let expectedTransportationValues = transportationCalculator.calculateVehicles([vehicleMock])
        inputTransportation.vehicleCo2().should('have.text', new Intl.NumberFormat('en-US').format(parseInt(expectedTransportationValues.total)))
        inputTransportation.fillReduceMiles('0')
        inputTransportation.reduceMilesYearWeek().select('Per Year')
        inputTransportation.fillReplaceVehicle('0')
        // Validation of Transportation numbers on report
        inputHomeEnergy.viewYourReportBtn().click()
        reportResults.currentTotalReport().should('have.text', '2,384')
        reportResults.plannedActionsReport().should('have.text', '2,278')
        reportResults.usAverageReport().should('have.text', '26,101')
        inputHomeEnergy.wasteBtn().click()
        // Waste
        inputWaste.aluminumCheckbox().check()
        inputWaste.plasticCheckbox().check()
        inputWaste.glassCheckbox().check()
        inputWaste.magazinesCheckbox().check()
        inputWaste.newspaperReduceCheckbox().check()
        // Validation of Waste numbers on report
        inputWaste.continueToReportBtn().click()
        reportResults.currentTotalReport().should('have.text', '2,897')
        reportResults.plannedActionsReport().should('have.text', '2,678')
        reportResults.usAverageReport().should('have.text', '26,793')

    })
})
