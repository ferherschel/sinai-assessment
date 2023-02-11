import InputFirstPage from "../pageObjects/inputNumberZipPeople.js"
import HomeEnergyInputs from "../pageObjects/homeEnergyCalculator.js"

describe('Input valid number of people and zip code', () => {

    const inputComponents = new InputFirstPage()
    const inputHomeEnergy = new HomeEnergyInputs()

    it('Input passed', () => {

        cy.numberInputs('1', '12345')
        inputHomeEnergy.viewYourReportBtn().should('be.visible') 

    })

    it('Input consistency on Calculator', () => {
        cy.numberInputs('1','12345')
        inputHomeEnergy.viewYourReportBtn().should('be.visible') 
        inputComponents.numberOfPeopleHousehold().should('contain', '1')
        inputComponents.usersZipCodeData().should('contain', '12345')
    })

    it('Default zip code alert and checkbox', () => {
        cy.numberInputs('1','00000')
        inputComponents.getStartedBtn().click()
        inputComponents.invalidZipCodeMessage()
            .should('contain', 'We could not find your ZIP code in our database. Please try again, or you may continue using the calculator with a default value. Using the default will give you average estimates.')
            .should('contain', 'I will use the default ZIP code.')
        inputComponents.checkboxZipCodeDefault().check({force: true})
        inputComponents.getStartedBtn().click()
        inputHomeEnergy.viewYourReportBtn().should('be.visible') 

    })
})
