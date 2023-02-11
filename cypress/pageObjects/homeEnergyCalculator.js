class HomeEnergyInputs {

    btnContinueToTransportation = "#to-transportation"
    btnHomeEnergy = "#energy"
    btnTransportation = "#transportation"
    btnViewYourReport = "#view-full-report"
    btnWaste = "#waste"
    optAirDry = "#AirDrySelect"
    optColdWater = "#coldWaterSelect"
    optPercentageAirDry = "#percentageAirDrySelect"
    optPrimaryHeatingSource = "#primaryHeatingSource"
    optPwrMgmtSettings = "#pwrMgmtSelect"
    optRefrigerator = "#fridgeSelect"
    optWindow = "#windowSelect"
    txtElectricity = "#electricityTextInput"
    txtEnergyAc = "#energyAC"
    txtEnergyHeat = "#energyHeat"
    txtFuelOil = "#fuelTextInput"
    txtIncreaseGreenPwr = '#increaseGreenInput'
    txtLightsToReplace = "#lightsToReplace"
    txtLoadsPerWeek = "#loadsPerWeek"
    txtNaturalGas = "#naturalGasTextInput"
    txtPropane = "#propaneTextInput"

    airDryer() {
        return cy.get(this.optAirDry)
    }

    continueToTransportationBtn() {
        return cy.get(this.btnContinueToTransportation)
    }

    coldWaterWashMachine() {
        return cy.get(this.optColdWater)
    }

    fillElectricity(electricityInput) {
        return cy.get(this.txtElectricity).type(electricityInput)
    }

    fillEnergyAc(energyAcInput) {
        return cy.get(this.txtEnergyAc).type(energyAcInput)
    }

    fillEnergyHeat(energyHeatInput) {
        return cy.get(this.txtEnergyHeat).type(energyHeatInput)
    }

    fillFuelOil(fuelOilInput) {
        return cy.get(this.txtFuelOil).type(fuelOilInput)
    }

    homeEnergyBtn() {
        return cy.get(this.btnHomeEnergy)
    }

    fillIncreaseGreenPwr(increaseGreenPwrInput) {
        return cy.get(this.txtIncreaseGreenPwr).type(increaseGreenPwrInput)
    }

    fillLightsToReplace(lightsToReplaceInput) {
        return cy.get(this.txtLightsToReplace).type(lightsToReplaceInput)
    }

    fillLoadsPerWeek(loadsPerWeekInput) {
        return cy.get(this.txtLoadsPerWeek).type(loadsPerWeekInput)
    }

    percentageAirDyer() {
        return cy.get(this.optPercentageAirDry)
    }

    primaryHeatingSource() {
        return cy.get(this.optPrimaryHeatingSource)
    }

    fillPropane(propaneInput) {
        return cy.get(this.txtPropane).type(propaneInput)
    }

    pwrMgmtSettings() {
        return cy.get(this.optPwrMgmtSettings)
    }

    refrigeratorSavings() {
        return cy.get(this.optRefrigerator)
    }

    fillNaturalGas(naturalGasInput) {
        return cy.get(this.txtNaturalGas).type(naturalGasInput)
    }

    transportationBtn() {
        return cy.get(this.btnTransportation)
    }

    viewYourReportBtn(timeout = 10000) {
        return cy.get(this.btnViewYourReport, { timeout: timeout })
    }

    wasteBtn() {
        return cy.get(this.btnWaste)
    }

    windowSavings() {
        return cy.get(this.optWindow)
    }

}

export default HomeEnergyInputs
