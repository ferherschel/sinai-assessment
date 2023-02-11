
# Getting Started

This project was development on Javascript language using Cypress framework. Enjoy it!
Follow the steps below to run the validation tests, you can choose to try out using **command line** or running the tests inside of **Cypress interface**.


## Prerequisites

For both ways to run the Cypress test you gonna need to clone the repository and find the sinai-assessment folder in your terminal and install the npm packages.

##  Installation

 1. Clone the repository
    
    > git clone https://github.com/ferherschel/sinai-assessment.git
    
 2. Install NPM packages

	 > 'npm install'


## Command Line

The installation step completed you are able to run the test right on the terminal, you can run all of the tests with a simple command:


			npx cypress run --spec 'cypress/e2e/*

Or you can specify the file test to run one at the time:

			npx cypress run --spec 'cypress/e2e/nameofthetest.cy.js

For using other types of command lines on Cypress it's possible to check on their [documentation](https://docs.cypress.io/guides/guides/command-line).
			
## Cypress interface

After the installation step you are able to open the Cypress interface, with a command line it's possible to open:

			npx cypress open

- A new Cypress window will open like this:
	- Select **E2E Testing**.

![](https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOTabvmWXHMf2Im4Zq3SR7er0D5Cyt4DLf9rtJuOCM5AEJ9tuQpD1lP4qFVy7tkkr8U6eqb-99Y0yCfvw3pSpjTfUAJtlw=w3360-h1608)

- Set Chrome on the **Choose a browser** view and hit the **Start E2E Testing in Chrome**.

![](https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOTIpG3w1NIhW0HwNAlFrS9hTpSsqMwMi89beknjQ29nJ5pI4rwFvSddSHLbfEpI59pCAdaP5B0V1OjAJNRCICdK60ZJOg=w1738-h1608)

 - A new Chrome instance will start with the alert **Chrome is being controlled by automated test software.**

![](https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOTY3_2D_w-rYHGDIXtoH-R8o4oFATFQkKA8FNsCp1IVtOqL1hv9GDzgCqllhcBEE3_1xWhMK1a1ZcXNzTCpdkCpgZF3mg=w1738-h1608)

 - Inside of the 'cypress/e2e' folder on the Specs in Cypress interface it's possible to see the tests available
  
 > carbonCalculator.cy.js
 > 
 > firstPageHouseholdZip.cy.js
 
 - Click at one the time to see the script tests running

![](https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEORO1PRGV7GB5d5mzpld92b32Nlz3dN0b645Op9Pge3LCAQsiMELTJh0UV8gOW_RQHt8ZqIWJqIsjzhKV287bn1gbuWHWQ=w1738-h1608)

# Documentation

## First Page -  Household and Zip code information

**Scenario 1:** Input valid information valid user is on Calculator page
1. On a browser of choice, visit the URL
    {{https://www3.epa.gov/carbon-footprint-calculator/#}}
2. Enter a value "1" on Number of people in your household field
3. Enter a value "12345" american zip-code on zip code field
4. Click on Get Start button
4. **Expected:** View your Report Button is visible on page

**Scenario 2**: Data number of people in your household and zip code are consistence on calculator page and first page
1. On a browser of choice, visit the URL
    {{https://www3.epa.gov/carbon-footprint-calculator/#}}
2. Enter a value "1" on Number of people in your household field
3. Enter a value "12345" american zip-code on zip code field
4. Click on Get Start button
4. View your Report Button is visible on page
5.  **Expected:** Number of people in household data and zip code data is consistence on calculator page

**Scenario 3:** Check and use default zip code checkbox
1.  On a browser of choice, visit the URL {{https://www3.epa.gov/carbon-footprint-calculator/#}}
1.  Enter a value "1" number of people in your household field
2.  Enter a value “00000” on zip code field  
3. **Expected:** Error/Suggestion message “We could not find your ZIP code in our database. Please try again, or you may continue using the calculator with a default value. Using the default will give you average estimates.”  
    - With a clickable checkbox “I will use the default ZIP code.”
4.  Click to check the checkbox
5. Click on Get Started Button
5. **Expected:** Go to the calculator itself
   -  View your Report Button is visible on page

##  Carbon Calculator


**Scenario 1:** Carbon calculation for Heating Electricity Emissions

1. On a browser of choice, visit the URL {{https://www3.epa.gov/carbon-footprint-calculator/#}}
2. Enter a valid on Number of people in your household field
3. Enter a valid american zip-code on zip code field
4. Click on Get Start button
5. Go to the calculator itself
6. On Home Energy section
7. Heating dropdown input "Electricity"
8. Utility **Natural Gas** in Dollars "1"
9. Utility **Electricity** in Dollars "1"
10. Utility **Fuel Oil** in Dollars "1" 
11. Utility **Propane** in Dollars "1"
12.  **Expected values:**
- Your Current Total: 318
- New Total After Your Planned Actions: 318
- U.S Average*: 15,617
13. Reduce Your Emissions - Heating & Cooling
14. Set on Energy AC "2"
15. Set on Energy Heat "2"
16. Set on Lights to replace "1"
17. Set on dropdown Power Management  & Settings "Will Do"
18. Set on Increase green power "1"
19. Set on dropdown  Cold Water on wash machine "Will Do"
20. Set on Loads per Week "1"
21. Set on dropdown  Air dryer "Will Not Do"
22. Set on dropdown  Percentage Air dryer "20% on my Laundry"
23. Set on dropdown  Refrigerator Savings "Already Done"
24. Set on dropdown  Window Savings "Will Not Do"
25.  **Expected values:**
- Your Current Total: 318
- New Total After Your Planned Actions: 1212
- U.S Average*: 15,617
26. Transportation Section Your Emissions
27. Comparing the logic used on spreadsheet and the web application
    -  For each vehicle: Gets the yearly drive miles
    - Gets the medium miles per galon, multiplies by constants EF_passenger_vehicle and nonCO2_vehicle_emissions_ratio
    -  When no regular maintenance, calculates possible efficiency improvements
29.  **Expected values:**
- Your Current Total: 2,384
- New Total After Your Planned Actions: 2,278
- U.S Average*: 26,101
30. Waste Section Your current emission
31. Check the checkbox "Aluminum"
32. Check the checkbox "Plastic"
33. Check the checkbox "Glass"
34. Check the checkbox "Magazines"
35. Waste Section Reduce Your emission
36. Check the checkbox "Newspaper"
37.  **Expected values:**
- Your Current Total: 2,897
- New Total After Your Planned Actions: 2,678
- U.S Average*: 26,793

 > *If you check one of the check-boxes on Waste Your current Emission, the same checkbox will be disable to check on Waste Reduce Your Emissions. And if you check all of them, Waste Your current Emission, will appear the message "You recycle all common household products. Keep up the good work! Visit [Climate Change and Waste](https://www.epa.gov/climatechange/climate-change-waste/life-cycle-diagram.html) for more you can do."



