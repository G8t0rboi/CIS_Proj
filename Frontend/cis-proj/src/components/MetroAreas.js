import React from 'react'
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { LineChartComp } from './LineChartComp';
var dataMetro1 = [];
var dataMetro2 = [];
var dataNI = [];

function MetropolitanAreas() {

    const labels = ['2001', '2003', '2005', '2007', '2009', '2011', '2013', '2015', '2017', '2019', '2021'];
    const emptyGraph = {
        labels,
        datasets: []
    };

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
    const [chartData, setChartData] = useState(emptyGraph);
    const [firstRender, setFirstRender] = useState(false);

    const [data, setData] = useState([])

    const getData = () => {
        const options = {
            method: 'GET',
            url: 'http://localhost:8080/MetroAreas',
            params: {
                X: ahsSelection,
                Y: natSelection,
                Z: metro1,
                H: metro2,
                statistic: statSelection
            },
        }
        console.log(options)
        axios.request(options).then((response) => {

            console.log(response)

            var length = response.data.rows.length

            for (var a = 0; a < length; a++) {

                dataMetro1.push(response.data.rows[a].V1);

            }

            for (var a = 0; a < length; a++) {

                dataMetro2.push(response.data.rows[a].V2);

            }

            for (var a = 0; a < length; a++) {

                dataNI.push(response.data.rows[a].INDICATOR);

            }

            console.log(dataMetro1)
            console.log(dataMetro2)
            console.log(dataNI)

            const labels = ['2001', '2003', '2005', '2007', '2009', '2011', '2013', '2015', '2017', '2019', '2021'];

            const bruh = {
                labels,
                datasets: [
                    {
                        label: 'Metropolitan Area 1',
                        data: dataMetro1,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        yAxisID: 'y',
                    },
                    {
                        label: 'Metropolitan Area 2',
                        data: dataMetro2,
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        yAxisID: 'y',
                    },
                    {
                        label: 'National Indicator',
                        data: dataNI,
                        borderColor: 'rgb(100, 162, 100)',
                        backgroundColor: 'rgba(53, 162, 100, 0.5)',
                        yAxisID: 'y1',
                    },
                ],
            };


            setChartData(bruh);
            dataMetro1 = [];
            dataMetro2 = [];
            dataNI = [];
        })
    }

    useEffect(() => {

        setChartData(emptyGraph)

    }, [])


    return (

        <>
            <div style={{
                top: "100%",
                left: "15%",
                fontWeight: "bold"
            }}>
                {'Please Select Metropolitan Area 1: '}
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
                {'Please Select Metropolitan Area 2: '}
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
                {'Please Select a Household Attribute: '}
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
                {'Please Select a National Indicator: '}
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
                {'Select a Statistical Measure: '}
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

            <div style={{
                width: '1200',
            }}>
                <LineChartComp data={chartData === undefined ? emptyGraph : chartData}></LineChartComp>
            </div>


        </>
    )
}
export default MetropolitanAreas