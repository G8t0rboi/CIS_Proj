import React from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis',
        },
    },
    scales: {
        y: {
            type: 'linear',
            display: true,
            position: 'left',
        },
        y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
                drawOnChartArea: false,
            },
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y1',
        },
    ],
};


function MetropolitanAreas() {
    const [metro1,setMetro1] = useState('');
    const metroOne=(e)=> {

        console.log(e)
        setMetro1(e)

    }

    const [metro2,setMetro2] = useState('');
    const metroTwo=(e)=> {

        console.log(e)
        setMetro2(e)
    }

    const [nation,setNation] = useState('');
    const nationChange=(e)=> {

        console.log(e)
        setNation(e)
    }

    const submit = () => {

        axios.post("http://localhost:8080/results",{ 
            
            x: 'Household Rating',
            y: 'GDP',
            z: metro1,
            h: metro2,
            stat: 'mean'
        
        }
        
        )
    
      }

    return (
        <div>
            <h1>Comparing Metropolitan Areas</h1>

            <Dropdown onSelect={metroOne}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Metropolitan Area 1
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="New York, NY">New York, NY</Dropdown.Item>
                    <Dropdown.Item eventKey="Los Angeles, CA">Los Angeles, CA</Dropdown.Item>
                    <Dropdown.Item eventKey="Chicago, IL">Chicago, IL</Dropdown.Item>
                    <Dropdown.Item eventKey="Dallas, TX">Dallas, TX</Dropdown.Item>
                    <Dropdown.Item eventKey="Philadelphia, PA">Philadelphia, PA</Dropdown.Item>
                    <Dropdown.Item eventKey="Houston, TX">Houston, TX</Dropdown.Item>
                    <Dropdown.Item eventKey="Washington, DC">Washington, DC</Dropdown.Item>
                    <Dropdown.Item eventKey="Miami, FL">Miami, FL</Dropdown.Item>
                    <Dropdown.Item eventKey="Atlanta, GA">Atlanta, GA</Dropdown.Item>
                    <Dropdown.Item eventKey="Boston, MA">Boston, MA</Dropdown.Item>
                    <Dropdown.Item eventKey="San Francisco, CA">San Francisco, CA</Dropdown.Item>
                    <Dropdown.Item eventKey="Detroit, MI">Detroit, MI</Dropdown.Item>
                    <Dropdown.Item eventKey="Phoenix, AZ">Phoenix, AZ</Dropdown.Item>
                    <Dropdown.Item eventKey="Seattle, WA">Seattle, WA</Dropdown.Item>
                    <Dropdown.Item eventKey="Riverside, CA">Riverside, CA</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown onSelect={metroTwo}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Metropolitan Area 2
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item eventKey="New York, NY">New York, NY</Dropdown.Item>
                <Dropdown.Item eventKey="Los Angeles, CA">Los Angeles, CA</Dropdown.Item>
                <Dropdown.Item eventKey="Chicago, IL">Chicago, IL</Dropdown.Item>
                <Dropdown.Item eventKey="Dallas, TX">Dallas, TX</Dropdown.Item>
                <Dropdown.Item eventKey="Philadelphia, PA">Philadelphia, PA</Dropdown.Item>
                <Dropdown.Item eventKey="Houston, TX">Houston, TX</Dropdown.Item>
                <Dropdown.Item eventKey="Washington, DC">Washington, DC</Dropdown.Item>
                <Dropdown.Item eventKey="Miami, FL">Miami, FL</Dropdown.Item>
                <Dropdown.Item eventKey="Atlanta, GA">Atlanta, GA</Dropdown.Item>
                <Dropdown.Item eventKey="Boston, MA">Boston, MA</Dropdown.Item>
                <Dropdown.Item eventKey="San Francisco, CA">San Francisco, CA</Dropdown.Item>
                <Dropdown.Item eventKey="Detroit, MI">Detroit, MI</Dropdown.Item>
                <Dropdown.Item eventKey="Phoenix, AZ">Phoenix, AZ</Dropdown.Item>
                <Dropdown.Item eventKey="Seattle, WA">Seattle, WA</Dropdown.Item>
                <Dropdown.Item eventKey="Riverside, CA">Riverside, CA</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown onSelect={nationChange}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Nationwide Trends
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="Household Rating">Household Rating</Dropdown.Item>
                    <Dropdown.Item eventKey="Neighborhood rating">Neighborhood rating</Dropdown.Item>
                    <Dropdown.Item eventKey="Family Income">Family Income</Dropdown.Item>
                    <Dropdown.Item eventKey="Residents Income">Residents Income</Dropdown.Item>
                    <Dropdown.Item eventKey="Resident's Age">Resident's Age</Dropdown.Item>
                    <Dropdown.Item eventKey="Property Value">Property Value</Dropdown.Item>
                    <Dropdown.Item eventKey="Monthly Mortage">Monthly Mortage</Dropdown.Item>
                    <Dropdown.Item eventKey="Monthly Rent">Monthly Rent</Dropdown.Item>
                    <Dropdown.Item eventKey="Year Built">Year Built</Dropdown.Item>
                    <Dropdown.Item eventKey="Unit Size">Unit Size</Dropdown.Item>
                    <Dropdown.Item eventKey="No Access to Water">No Access to Water</Dropdown.Item>
                    <Dropdown.Item eventKey="Monthly Home Expenses">Monthly Home Expenses</Dropdown.Item>
                    <Dropdown.Item eventKey="Total Rooms">Total Rooms</Dropdown.Item>
                    <Dropdown.Item eventKey="Rent Control Present">Rent Control Present</Dropdown.Item>
                    <Dropdown.Item eventKey="Number of Inhabitants">Number of Inhabitants</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Button onClick={submit}></Button>

        </div>
    )
}


export default MetropolitanAreas