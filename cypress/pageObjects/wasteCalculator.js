class WasteInputs {

    btnBackToTransportation = "#back-to-transportation"
    btnContinueToReport = "#to-report"
    chxAluminum = "#aluminumCheckbox"
    chxAluminumReduce = "#aluminumCheckboxR"
    chxGlass = "#glassCheckbox"
    chxGlassReduce = "#glassCheckboxR"
    chxMagazines = "#magazinesCheckbox"
    chxMagazinesReduce = "#magazinesCheckboxR"
    chxNewspaper = "#newspaperCheckbox"
    chxNewspaperReduce = "#newspaperCheckboxR"
    chxPlacticReduce = "#plasticCheckboxR"
    chxPlastic = "#plasticCheckbox"

    aluminumCheckbox() {
        return cy.get(this.chxAluminum)
    }

    aluminumReduceCheckbox() {
        return cy.get(this.chxAluminumReduce)
    }

    backToTransportationBtn() {
        return cy.get(this.btnBackToTransportation)
    }

    continueToReportBtn() {
        return cy.get(this.btnContinueToReport)
    }

    glassCheckbox() {
        return cy.get(this.chxGlass)
    }

    glassReduceCheckbox() {
        return cy.get(this.chxGlassReduce)
    }

    magazinesCheckbox() {
        return cy.get(this.chxMagazines)
    }

    magazinesReduceCheckbox() {
        return cy.get(this.chxMagazinesReduce)
    }

    newspaperCheckbox() {
        return cy.get(this.chxNewspaper)
    }

    newspaperReduceCheckbox() {
        return cy.get(this.chxNewspaperReduce)
    }

    plasticCheckbox() {
        return cy.get(this.chxPlastic)
    }

    plasticReduceCheckbox() {
        return cy.get(this.chxPlacticReduce)
    }
}

export default WasteInputs
