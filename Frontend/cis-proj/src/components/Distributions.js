
import { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'


function Distributions() {
    const metroAreas = [
        { value: "35620", label: "New York, NY" },
        { value: '31080', label: "Los Angeles, CA" },
        { value: "16980", label: "Chicago, IL" },
        { value: "19100", label: "Dallas, TX" },
        { value: "37980", label: "Philadelphia, PA" },
        { value: "26420", label: "Houston, TX" },
        { value: '47900', label: "Washington, DC" },
        { value: "33100", label: "Miami, FL" },
        { value: "12060", label: "Atlanta, GA" },
        { value: "14460", label: "Boston, MA" },
        { value: "41860", label: "San Francisco, CA" },
        { value: "19820", label: "Detroit, MI" },
        { value: "38060", label: "Phoenix, AZ" },
        { value: "42660", label: "Seattle, WA" },
        { value: "40140", label: "Riverside, CA" },
    ];

    const ahs_attributes = [
        { label: "Household Rating", value: "RATINGHS" },
        { label: "Neighborhood Rating", value: "RATINGNH" },
        { label: "Family Income", value: "FINCP" },
        { label: "Resident's Income", value: "HINCP" },
        { label: "Resident's Sex", value: "HHSEX" },
        { label: "Resident's Marriage Status", value: "HHMAR" },
        { label: "Resident's Citizenship Status", value: "HHCITSHP" },
        { label: "Resident's Age", value: "HHAGE" },
        { label: "Property Value", value: "MARKETVAL" },
        { label: "Monthly Mortgage", value: "MORTAMT" },
        { label: "Monthly Rent", value: "RENT" },
        { label: "Unit Size", value: "UNITSIZE" },
        { label: "Monthly Home Expenses ", value: "TOTHCAMT" },
        { label: "Total Rooms", value: "TOTROOMS" },
        { label: "Number of Inhabitants", value: "NUMPEOPLE" },
        { label: "Resident's Race", value: "HHRACE" },
        { label: "Resident's Education Level", value: "HHGRAD" }
    ]

    const years = [
        { label: "2001", value: "2001" },
        { label: "2003", value: "2003" },
        { label: "2005", value: "2005" },
        { label: "2007", value: "2007" },
        { label: "2009", value: "2009" },
        { label: "2011", value: "2011" },
        { label: "2013", value: "2013" },
        { label: "2015", value: "2015" },
        { label: "2017", value: "2017" },
        { label: "2019", value: "2019" },
        { label: "2021", value: "2021" },
    ]


    const [metro1, setMetro1] = useState();
    const [ahsSelection, setAHSSelection] = useState();
    const [yearSelection, setYearSelection] = useState();

    const [data, setData] = useState([])

    const getData = () => {
        const options = {
            method: 'GET',
            url: 'http://localhost:8080/Distributions',
            params: {
                X: ahsSelection,
                Y: yearSelection,
                Z: metro1,
                type: getType(ahsSelection)
                
            },
        }
        console.log(options)
        axios.request(options).then((response) => {

            console.log(response)

        })
    }

        

    return (
        <>


            
            <div style={{
                top: "100%",
                left: "15%",
                fontWeight: "bold"
            }}>
                Please Select Metropolitan Area: 
                <select value={metro1} onChange={e => setMetro1(e.target.value)}>
                    <option>--Select Metropolitan Area--</option>
                    {metroAreas.map(area =>
                      <option value={area.value}>{area.label}</option>
                    )};
                </select>
            </div>
            <div style={{
                top: "100%",
                left: "15%",
                fontWeight: "bold"
            }}>
                Please Select a Household Attribute:
                <select value={ahsSelection} onChange={e => setAHSSelection(e.target.value)}>
                    <option>--Select Household Attribute--</option>
                    {ahs_attributes.map(attribute =>
                        <option value={attribute.value}>{attribute.label}</option>
                    )};
                </select>
            </div>
            <div style={{
                top: "100%",
                left: "15%",
                fontWeight: "bold"
            }}>
                Select a year:
                <select value={yearSelection} onChange={e => setYearSelection(e.target.value)}>
                    <option>--Year--</option>
                    {years.map(attribute =>
                        <option value={attribute.value}>{attribute.label}</option>
                    )};
                </select>
            </div>
            <Button variant="secondary" onClick={getData}>Search</Button>
            <p>{data}</p>

            
        

        </>
    )
}



function getType(X){
    if(X == 'HHRACE' || X == 'HHGRAD'){
        return 'categorical';
    }
    else {return 'numerical'}
}



export default Distributions