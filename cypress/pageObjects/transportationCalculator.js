class TransportationInputs {

    btnBackToHomeEnergy = "#back-to-home-energy"
    btnContinueToWaste = "#to-waste"
    optCurrentMaintenance = "#maintCurrentSelect"
    optMaintenanceReduce = "#maintReduceSelect"
    optNumberVehicles = "#numVehiclesInput"
    optReduceMilesYearWeek = "#reduceMilesSelect1"
    optVehicleYearWeek = "#vehicle1Select"
    spanVehicleCo2 = ".vehicle1Co2"
    txtReduceMiles = "#reduceMilesInput1"
    txtReplaceVehicle = "#replaceVehicleInput1"
    txtVehicleGasMileage = "#vehicle1GasMileage"
    txtVehicleMiles = "#vehicle1Miles"

    backToHomeEnergyBtn() {
        return cy.get(this.btnBackToHomeEnergy)
    }

    continueToWasteBtn() {
        return cy.get(this.btnContinueToWaste)
    }

    currentMaintenance() {
        return cy.get(this.optCurrentMaintenance)
    }

    maintenanceReduce() {
        return cy.get(this.optMaintenanceReduce)
    }

    numberVehicles() {
        return cy.get(this.optNumberVehicles)
    }

    fillReduceMiles(reduceMilesInput) {
        return cy.get(this.txtReduceMiles).type(reduceMilesInput)
    }

    vehicleCo2() {
        return cy.get(this.spanVehicleCo2)
    }

    reduceMilesYearWeek() {
        return cy.get(this.optReduceMilesYearWeek)
    }

    fillReplaceVehicle(replaceVehicleInput) {
        return cy.get(this.txtReplaceVehicle).type(replaceVehicleInput)
    }

    fillVehicleGasMileage(vehicleGasMilageInput) {
        return cy.get(this.txtVehicleGasMileage).type(vehicleGasMilageInput)
    }

    fillVehicleMiles(vehicleMilesInput) {
        return cy.get(this.txtVehicleMiles).type(vehicleMilesInput)
    }

    vehicleYearWeek() {
        return cy.get(this.optVehicleYearWeek)
    }

}

export default TransportationInputs
