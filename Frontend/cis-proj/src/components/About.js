import React from 'react'

function About() {
    return (
        <div>
            <h1>The US Housing Scene And Ourc Approach To Understanidng it</h1>
            By considering a database of municipalities that encapsulate the full 
            extent of US urban demographic diversity, we explore the 
            housing markets within each metropolitan area in reference to a multitude
            of both local and nationwide factors. Our exploration focuses on market 
            developments during the 21st century only. In order to understand the significance 
            of the housing indicators available for user selection, it is necessary to 
            understand what they mean how they are quantified. All indicators stem from the 
            American Hosuing Survey, a large scale data collection effort that every two years
            conducts extensive interviews with households across the united states. Each indicator 
            pertains to a response field from the interviews conducted. Below is a list of all the ones
            considered and their representation: 
            <ul>
            <li>Dish Washers: Holds the number of dishwashers in a household. (i.e. 0.7 Dishwashers on average means there are roughly 7 dishwarshers for every 10 households)</li>
            <li>Garages: Holds the number of garages in a household. (i.e. 0.05 Garages on average means there is 1 garage for every 20 households)</li>
            <li>Dining Rooms: Holds the number of dining rooms in a household. (i.e. 0.9 Dining Rooms on average means there are roughly 9 dining rooms for every 10 households)</li>
            <li>Washing Machines: Holds the number of washing machines in a household. (i.e. 0.8 Washing Machines on average means there are roughly 8 washing machines for every 10 households)</li>
            <li>Porch: Holds the number of porches in a household. (i.e. 0.2 porches on average means there are roughly 2 porches for every 10 households) </li>
            <li>Kitchen Sink: Holds the number of kitchen sinks in a household. (i.e. 0.95 kitchen sinks on average means there are roughly 95 kitchen sinks for every 100 households)</li>
            <li>Household Rating: Holds the rating given to a household by its owner of our 10 (i.e. 8) </li>
            <li>Neighborhood Rating: Holds the rating given to a neighborhood by the resident (i.e. 6) </li>
            <li>Family Income: Holds the families total income in dollars (i.e $50,000) </li>
            <li>Resident's Income: Holds the residents total income in dollars (i.e. $40,000) </li>
            <li>Resident's Sex: Holds the residents sex (male or female). The value is represented numerically where male is 1 and female is 0. This is done to gain further data insight (i.e. An average gender of 0.4 means that for every 10 people 4 are males) </li> 
            <li>Resident's Marriage Status: Holds the residents marriage status (married or single). The value is represented numerically where married is 1 and single is 0. This is done to gain further data insight (i.e. An average marriage status of 0.5 means that half of people are married) </li>
            <li>Resident's Citizenship Status:  Holds the citizenship status (citizen or alien). The value is represented numerically where citizen is 1 and alien is 0. This is done to gain further data insight (An average citizenship status of 0.9 means that for every 10 people 9 are citizens)</li>
            <li>Resident's Race: A categorical variable. Holds the resident's race. Race can either be white, black, asian, pacific islander, or mixed.</li>
            <li>Resident's Education Level: A categorical variable. Holds the highest level of education achived by the resident. This ranges from no highschool diploma to a graduate certificate.</li>
            <li>Resident's Age: Holds the resident's age in years(i.e. 33).</li>
            <li>Property Value: Holds the propertys estimated market value at the time of the interview (i.e $300,000)</li>
            <li>Monthly Mortgage: Holds the sum aof all mortgages being paid by the resident for the househol if they own it (i.e. $2000)</li>
            <li>Monthly Rent: Holds the total monthly rent paid by the resident for the household if they rent it (i.e. $1000)</li>
            <li>Year Built: Holds the decade in which the household was built (i.e. 1930) </li> 
            <li>Unit Size: A categorical variable given it is based of the interviewees estimate. PLaces the estimates size of the unit in square feet into one of 6 categories (i.e. 2500 - 3000)</li>
            <li>No Access To Water: Holds a boolean value with a value of 1 if the resident has not had consistent access to water in the past 90 days. (0.01 on average means that 1 out of 100 residents have no access to water)</li>
            <li>Monthly Home Expenses: Holds the sum of monthly costs in dollars. These include insurance, maintenance, etc. (i.e. $500)</li>
            <li>Total Rooms: Holds the total number of rooms in the household (i.e 3) </li> 
            <li>Rent Control Present: Holds a boolean value of 1 is properties in the neighborhood are rent controlled. This means there is a legal limit on their monthly rent. (i.e. 0.3 on average means that 30 out of 100 households are in rent controlled neighborhoods)</li>
            <li>Number of Inhabitants: Holds the number of inhabitants in the household. (i.e 4) </li> 
            </ul>

        </div>
    )
}
export default About