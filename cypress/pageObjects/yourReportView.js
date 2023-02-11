class ReportView {

    txtCurrentTotalReport = "#current-total .totalEmissions"
    txtPlannedActionsReport = "#new-total .newEmissionTotal"
    txtUsAverageReport = "#us-avg .uS_avg"

    currentTotalReport() {
        return cy.get(this.txtCurrentTotalReport)
    }

    plannedActionsReport() {
        return cy.get(this.txtPlannedActionsReport)
    }

    usAverageReport() {
        return cy.get(this.txtUsAverageReport)
    }

}

export default ReportView
