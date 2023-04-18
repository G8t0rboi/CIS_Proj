import { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
//import { queryA } from './queryBuilder'
//import { queryB } from './queryBuilder'
import { queryC } from './queryBuilder'
import { queryD } from './queryBuilder'


function MetropolitanAreas() {
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
        { label: "Resident's Age", value: "HHAGE" },
        { label: 'Property Value', value: "MARKETVAL" },
        { label: "Monthly Mortgage", value: "MORTAMT" },
        { label: "Monthly Rent", value: "RENT" },
        { label: "Year Built", value: "YRBUILT" },
        { label: "Unit Size", value: "UNITSIZE" },
        { label: "No Access To Water", value: "NOWAT" },
        { label: "Monthly Home Expenses", value: "TOTHCAMT" },
        { label: "Total Rooms", value: "TOTROOMS" },
        { label: "Rent Control Present", value: "RENTCNTRL" },
        { label: "Number of Inhabitants", value: "NUMPEOPLE" },
    ]

    const nat_indicators = [
        { label: "Inflation Rate", value: "INFLATION" },
        { label: "CCI", value: "CCI" },
        { label: 'Federal Interest Rate', value: "INTRATE" },
        { label: "GDP", value: "GDP" },
        { label: "Employment Rate", value: "EMPRATE" },
        { label: "Bond Yield", value: "BONDYIELD" },
    ]

    const [metro1, setMetro1] = useState();
    const [metro2, setMetro2] = useState();
    const [ahsSelection, setAHSSelection] = useState();
    const [natSelection, setNatSelection] = useState();
    const [statSelection, setStatSelection] = useState();

    const [data, setData] = useState([])

    const getData = () => {
        const options = {
            X: 'DISHWASH',
            Y: natSelection,
            Z: metro1,
            H: metro2,
            statistic: statSelection,
            url: 'http://localhost:8080/testPage'
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
                Please Select Metropolitan Area 1:
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
                Please Select Metropolitan Area 2:
                <select value={metro2} onChange={e => setMetro2(e.target.value)}>
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
                Please Select a National Indicator:
                <select value={natSelection} onChange={e => setNatSelection(e.target.value)}>
                    <option>--Select National Indicator--</option>
                    {nat_indicators.map(indicator =>
                        <option value={indicator.value}>{indicator.label}</option>
                    )};
                </select>
            </div>
            <div style={{
                top: "100%",
                left: "15%",
                fontWeight: "bold"
            }}>
                Select a Statistical Measure:
                <select value={statSelection} onChange={e => setStatSelection(e.target.value)}>
                    <option>--Statistical Measure--</option>
                    <option value="Average">Mean</option>
                    <option value="Median">Median</option>
                    <option value='Lower Quartile'>Lower Quartile</option>
                    <option value="Upper Quartile">Upper Quartile</option>
                </select>
            </div>
            <Button variant="secondary" onClick={getData}>Search</Button>
            <p>{data}</p>

        </>
    )
}
export default MetropolitanAreas