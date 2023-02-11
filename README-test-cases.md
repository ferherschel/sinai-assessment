# Test Cases Documentation

## Input First Page -  Epas Household Carbon

**Scenario 1:** Insert a valid 1-digit on number of people in your household
 1. On a browser of choice, visit the URL
    {{https://www3.epa.gov/carbon-footprint-calculator/#}}
 2. Enter a value "0" on Number of people in your household field
 3. Enter a valid american zip-code on zip code field
 4. **Expected:** go to the calculator itself

> *It's possible to try 0 to 9 on the value of 1-digit on number of people in your household field

**Scenario 2**: Insert a valid 2-digit on number of people in your household
1.  On a browser of choice, visit the URL {{https://www3.epa.gov/carbon-footprint-calculator/#}}
2.  Enter a value "00" on Number of people in your household field
3.  Enter a valid american zip-code on zip code field
4.  Click on Get Start button
5.  **Expected:** go to the calculator itself
    
>*It's possible to try 00 to 99 on the value of 2-digit on number of people in your household field

**Scenario 3:** Check and use default zip code checkbox
1.  On a browser of choice, visit the URL {{https://www3.epa.gov/carbon-footprint-calculator/#}}
1.  Enter a valid number of people in your household field
2.  Enter a value “00000” on zip code field  
3. **Expected:** Error/Suggestion message “We could not find your ZIP code in our database. Please try again, or you may continue using the calculator with a default value. Using the default will give you average estimates.”  
    - With a clickable checkbox “I will use the default ZIP code.”
4.  Click to check the checkbox
5. **Expected:** Go to the calculator itself
6.  Value of zip code is “00000”

**Scenario 4:** Calculator on single-paged
1.  On a browser of choice, visit the URL {{https://www3.epa.gov/carbon-footprint-calculator/#}}
1.  Enter a value "00" on Number of people in your household field
2.  Enter a valid american zip-code on zip code field
3.  Click on Get Start button
4.  **Expected:** the calculator in the same URL
5.  Go to the calculator without opening a new tab on browser

##  Carbon Calculator

**Scenario 1:** Carbon calculation for Heating Electricity Emissions
1.  On a browser of choice, visit the URL {{https://www3.epa.gov/carbon-footprint-calculator/#}}
1. Enter a valid on Number of people in your household field
2. Enter a valid american zip-code on zip code field
3. Click on Get Start button
4. Go to the calculator itself
5. On Home Energy section
6.  Heating dropdown input "Electricity"
7. Utility **Natural Gas** in Dollars "1"= 134lbs.
8. **Expected values:**
   - Your Current Total: 134
   - New Total After Your Planned Actions: 134
   - U.S Average*: 3,071
9. Utility **Electricity** in Dollars "1"= 55lbs.
10. **Expected values:**
      - Your Current Total: 190
     - New Total After Your Planned Actions: 190
     - U.S Average*: 8,526
11. Utility **Fuel Oil** in Dollars "1"= 67lbs.
12. **Expected values:**
     - Your Current Total: 257
     - New Total After Your Planned Actions: 257
     - U.S Average*: 13,374
13. Utility **Propane** in Dollars "1"= 60lbs.
14. **Expected values:**
     - Your Current Total: 318
     - New Total After Your Planned Actions: 318
     - U.S Average*: 15,617

**Scenario 2:** Transportation reduce Maintenance rule
1.  On a browser of choice, visit the URL {{https://www3.epa.gov/carbon-footprint-calculator/#}}
1. Enter a valid on Number of people in your household field
2. Enter a valid american zip-code on zip code field
3. Click on Get Start button
4. Go to the calculator itself
5. Click on Transportation button
6. Your current emissions
7. Set Current Maintenance with “Do Not Do”
8.  **Expected:** Reduce Maintenance is enable
9. Set Current Maintenance with “Already Done”
10. **Expected:** Reduce Maintenance is disable

**Scenario 3:** Start over the calculation route
1.  On a browser of choice, visit the URL {{https://www3.epa.gov/carbon-footprint-calculator/#}}
1. Enter a valid Number of people in your household field
2. Enter a valid american zip-code on zip code field
3. Click on Get Start button
4. Go to the calculator **Home Energy Section**
5. Click on hyperlink Start Over
6. **Expected:** Permit the Reload page on browser native pop up
     - Got back to input information page
8. Enter a valid Number of people in your household field
9. Enter a valid american zip-code on zip code field
10. Click on Get Start button
11. Go to the calculator **Transportation Section**
12. Click on hyperlink Start Over
13. **Expected:** Permit the Reload page on browser native pop up
     - Got back to input information page
15. Enter a valid Number of people in your household field
16. Enter a valid american zip-code on zip code field
17. Click on Get Start button
18. Go to the calculator **Waste Section**
19. Click on hyperlink Start Over
20. **Expected:** Permit the Reload page on browser native pop up
     - Got back to input information page


## Bugs on Input First Page and Carbon Calculator 

**Scenario 1:** Spinner adding more than 2-digit on number of people in your household
1.  On a browser of choice, visit the URL {{https://www3.epa.gov/carbon-footprint-calculator/#}}
1.  Click on set up spinner on number of people in your household field
2.  **Expected:** Add number “99” on the number of people in your household field
3. Every 1 click gonna add +1 value in the field
4. Click on set up spinner until “101” value on number of people in your household field
5. **Bug:** It’s possible to insert more than 2-digit on number of people in your household field
      - On code have a max length of 2-digit
6. **Expected:** Limit the up spinner until “99” value
    
**Scenario 2:** Spinner adding more than 5-digit on zip code
1.  On a browser of choice, visit the URL {{https://www3.epa.gov/carbon-footprint-calculator/#}}
1.  Click on set up spinner on zip code field
2. **Expected:** Add number “99999” on zip code field
3. Every 1 click gonna add +1 value in the field
4. Click on set up spinner until “100002” value on number of people in your household field
5. **Bug:** It’s possible to insert more than 5-digit on number of people in your household field
   - On code have a max length of 5-digit
6. **Expected:** Limit the up spinner until “99” value
    
**Scenario 3:** Browser possible input more than 2-digits on number of people in your household
1.  On a browser of choice, visit the URL {{https://www3.epa.gov/carbon-footprint-calculator/#}}
1. Put on inspect mode the Calculator page
2. Focus on input with #ppl-in-household-input
3. The input contains maxlength="2" on code
4. Insert input with value "123456" on number of people in your household
5. Enter a valid american zip-code on zip code field
6. Click on Get Start button
7. **Bug:** Go to the calculator itself
8. Inform the value respective of "123456" on Your Carbon Footprint table
9. **Expected:** Household input will be erased and the error message will appear "Please enter a two-digit number of people"

 **Scenario 4:** Browser possible input more than 5-digits on number of people in your household
1.  On a browser of choice, visit the URL {{https://www3.epa.gov/carbon-footprint-calculator/#}}
1. Put on inspect mode the Calculator page  
2. Enter a valid number of people in your household field
3. Focus on input id #zip-code-input code
4. The input contains maxlength="5" on code
5. Insert input with value "12345678" on zip code field  
6. Click on Get Start button
7. Error message will appear "Please enter a valid five-digit ZIP Code."
8. **Bug:** Zip Code input **NOT** will be erased and the error message will appear
9. **Expected:** Zip Code input **will be** erased and the error message will appear “Please enter a valid five-digit ZIP Code.” 


**Scenario 5**: Error message pop up Primary Heating source
1.  On a browser of choice, visit the URL {{https://www3.epa.gov/carbon-footprint-calculator/#}}
1. Enter a valid Number of people in your household field
2. Enter a valid american zip-code on zip code field
3. Click on Get Start button
4. Go to the calculator itself
5. Home Energy section
6. Heating drop-down input leave it empty
7. Enter in Utility Natural Gas in Dollars "1"
8. Expected: Error message is displayed "Error Messages n/ Please select your Primary Heating Source first"
9. Enter Utility Electricity in Dollars "1"
10. **Expected:** Error message is displayed "Error Messages n/ Please select your Primary Heating Source first"
11. Enter Utility Fuel Oil in Dollars "1"
12. **Bug:** Filed contains the 1 but doesn't calculate or change the Carbon Footprint
13.  - Error message is displayed "Error Messages n/ Please select your Primary Heating Source first"
14. **Expected: NOT** be possible to write on field without the Heating information
     - Error message is displayed "Error Messages n/ Please select your Primary Heating Source first"
16. Enter Utility Propane in Dollars "1"
17. **Bug:** Filed contains the 1 but doesn't calculate or change the Carbon Footprint
18. **Expected:** **NOT** be possible to write on field without the Heating information
      - Error message is displayed "Error Messages n/ Please select your Primary Heating Source first"



# Questions/Bug

**Question 1:** Browser possible input more than 2-digits on number of people in your household and 5-digit on Zip Code; and spinner scenarios. About the number of people in your household and zip code, it’s not clear what the “right” behavior is, because of that it was a little difficult for me to simulate the test limit of digits. In that case, I assume the right rule was 2-digit/5-digit because of the maxlength code, but is it the right rule?

**Question 2:** Chrome and Firefox diversions I don’t understand why in these specific browsers the behavior of letting the user insert string, special characters it’s possible and the other isn’t. Are there exceptions to this?

**Question 3:** Heating & Cooling input #energyAC disable if has no information on Your current Emissions from Home Energy

- Enter a valid Number of people in your household field

- Enter a valid american zip-code on zip code field

- Click on Get Start button

- Go to the calculator itself

- Home Energy section

- Heating drop down input empty

- Utility inputs empty

- Reduce Your Emissions

- Heating & Cooling

- Bug(?): The input field on id #energyAC is disabled (only)

- The input on id #energyAC is able if the user put the if information on Heating and Utility on Home Energy fields

- Expected: Should be disabled in all Reduce Your Emissions fields if the user doesn't put the information about Heating and Utility on Home Energy?

  

**Question 4:** Zip code information. What is the specific reason to be mandatory (even with the default option) american zip code? Is it just to collect location information, or it’s a demographic calculation about the consume?


**Question 5:** Firefox browser possible input letters and special characters on number of people in your household

- Put on inspect mode the Calculator page on Firefox browser

- Focus on input with #ppl-in-household-input

- The input contains type="number""

- Insert input with value "asdfgh"

- Enter a valid american zip-code on zip code field

- Household input will be erased and the error message will appear

- "Please enter a valid number of people"

- Bug: It’s possible to input string value on type number filed on number of people in your household and display error message "Please enter a valid number of people"

- Expected: NOT be possible to write string on number field number of people in your household and display error message "Please enter a valid number of people"

**Question 6:** Firefox browser possible input letters and special characters on Zip Code

- Put on inspect mode the Calculator page on Firefox browser

- Enter a valid value on Number of people in your household field

- Focus on input with #zip-code-input code

- The input contains type="number""

- Insert input with value "asdawa@#wda!"

- Enter a valid american zip-code on zip code field

- Household input will be erased and the error message will appear

- "Please enter a valid five-digit ZIP Code."

- Bug: It’s possible to input string value on type number filed on Zip Code and display error message "Please enter a valid five-digit ZIP Code."

- Expected: NOT be possible to write string on number field Zip Code and display error message "Please enter a valid number of ZIP Code."


>*Firefox it's possible to input letters and special characters, he didn't search anything, put it's possible to write
  

**Question 7:** Chrome browser possible input letters and special characters on number of people in your household

- Put to inspect the Calculator page on Chrome browser

- Focus on input with #ppl-in-household-input

- The input contains type="number""

- Insert input with value "e-123112"

- Enter a valid american zip-code on zip code field

- Household input will be erased and the error message will appear

- "Please enter a valid number of people"

- Bug: It’s possible to input string value on type number filed on number of people in your household and display error message "Please enter a valid number of people"

- Expected: NOT be possible to write string on number field number of people in your household and display error message "Please enter a valid number of people"

>*Chrome it's possible to input the letter "e", he didn't search anything, put it's possible to write