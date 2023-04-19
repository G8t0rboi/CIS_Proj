import React from 'react'

// function LocalFactors() {
//     return (
//         <div>
//             <h1>Comparing Local Factors</h1>
//         </div>
//     )
// }
// export default LocalFactors

import { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { LineChartComp } from './LineChartComp';

var dataAHS = [];
var dataMarket = [];

const labels = ['2001', '2003', '2005', '2007', '2009', '2011', '2013', '2015', '2017', '2019', '2021'];
    const emptyGraph = {
        labels,
        datasets: []
    };


function LocalFactors() {

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

    const market_attributes = [
        { label: "Family Income", value: "FINCP" },
        { label: "Resident's Income", value: "HINCP" },
        { label: "Property Value", value: "MARKETVAL" },
        { label: "Monthly Mortgage", value: "MORTAMT" },
        { label: "Monthly Rent", value: "RENT" },
        { label: "Year Built", value: "YRBUILT" },
        { label: "Unit Size", value: "UNITSIZE" },
        { label: "Monthly Home Expenses ", value: "TOTHCAMT" },
        { label: "Total Rooms", value: "TOTROOMS" },
        { label: "Rent Control Present", value: "RENTCNTRL" },
        { label: "Number of Inhabitants", value: "NUMPEOPLE" },
    ]


    const local_attributes = [
        { label: "Dish Washers", value: "DISHWASH" },
        { label: "Garages", value: "GARAGE" },
        { label: "Dining Rooms", value: "DINING" },
        { label: "Washing Machines", value: "WASHER" },
        { label: "Porch", value: "PORCH" },
        { label: "Kitchen Sink", value: "KITCHSINK" },
        { label: "Household Rating", value: "RATINGHS" },
        { label: "Neighborhood Rating", value: "RATINGNH" },
        { label: "Resident's Marriage Status", value: "HHMAR" },
        { label: "Resident's Citizenship Status", value: "HHCITSHP" },
        { label: "Resident's Age", value: "HHAGE" },
    ]




    const [metro1, setMetro1] = useState();
    const [ahsSelection1, setAHSSelection1] = useState();
    const [ahsSelection2, setAHSSelection2] = useState();
    const [chartData, setChartData] = useState(emptyGraph);
    const [data, setData] = useState([])

    const getData = () => {
        const options = {
            method: 'GET',
            url: 'http://localhost:8080/LocalFactors',
            params: {
                X: ahsSelection1,
                Y: ahsSelection2,
                Z: metro1
                
            },
        }
        console.log(options)
        axios.request(options).then((response) => {

            console.log(response)

            var length = response.data.rows.length

            for (var a = 0; a < length; a++) {

                dataAHS.push(response.data.rows[a].V1);

            }

            for (var a = 0; a < length; a++) {

                dataMarket.push(response.data.rows[a].V2);

            }

            console.log(dataAHS)
            console.log(dataMarket)

            const labels = ['2001', '2003', '2005', '2007', '2009', '2011', '2013', '2015', '2017', '2019', '2021'];

            const bruh = {
                labels,
                datasets: [
                    {
                        label: 'Market Attribute',
                        data: dataAHS,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        yAxisID: 'y',
                    },
                    {
                        label: 'Local Attribute',
                        data: dataMarket,
                        borderColor: 'rgb(100, 162, 100)',
                        backgroundColor: 'rgba(53, 162, 100, 0.5)',
                        yAxisID: 'y1',
                    },
                ],
            };


            setChartData(bruh);
            dataAHS = [];
            dataMarket = [];

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
                Please Select a Market Attribute:
                <select value={ahsSelection1} onChange={e => setAHSSelection1(e.target.value)}>
                    <option>--Select Household Attribute--</option>
                    {market_attributes.map(attribute =>
                        <option value={attribute.value}>{attribute.label}</option>
                    )};
                </select>
            </div>
            <div style={{
                top: "100%",
                left: "15%",
                fontWeight: "bold"
            }}>
            Please Select a Local Attribute:
                <select value={ahsSelection2} onChange={e => setAHSSelection2(e.target.value)}>
                    <option>--Select Household Attribute--</option>
                    {local_attributes.map(attribute =>
                        <option value={attribute.value}>{attribute.label}</option>
                    )};
                </select>
            </div>
            
            <Button variant="secondary" onClick={getData}>Search</Button>
            <p>{data}</p>

            
        
            <div style={{
                width: '800px',
            }}>
                <LineChartComp data={chartData === undefined ? emptyGraph : chartData}></LineChartComp>
            </div>
        </>
    )
}



export default LocalFactors