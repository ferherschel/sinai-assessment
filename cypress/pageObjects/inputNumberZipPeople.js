class InputFirstPage {

    btnGetStarted = "#get-started"
    txtHouseHold = "#ppl-in-household-input"
    txtNumberOfPeopleHousehold = ".number-of-people"
    txtInvalidZipCode = "#invalidZip"
    txtUsersZip = ".users-zip"
    txtZipCode = "#zip-code-input"
    chxZipCodeDefault = ".default-zip"

    getStartedBtn() {
        return cy.get(this.btnGetStarted)
    }

    fillHouseholdInput(householdNumber) {
        return cy.get(this.txtHouseHold).type(householdNumber)
    }

    numberOfPeopleHousehold() {
        return cy.get(this.txtNumberOfPeopleHousehold)
    }

    invalidZipCodeMessage(timeout = 20000) {
        return cy.get(this.txtInvalidZipCode, { timeout: timeout })
    }

    usersZipCodeData() {
        return cy.get(this.txtUsersZip)
    }

    fillZipCodeInput(zipCodeNumber) {
        return cy.get(this.txtZipCode).type(zipCodeNumber)
    }

    checkboxZipCodeDefault(timeout = 20000) {
        return cy.get(this.chxZipCodeDefault, { timeout: timeout} )
    }

}

export default InputFirstPage
