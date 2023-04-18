import React from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import { LineChartComp } from './LineChartComp';
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


function LocalFactors() {

    const [metro1,setMetro1] = useState('');
    const metroOne=(e)=> {

        console.log(e)
        setMetro1(e)

    }

    const [house1,setHouse1] = useState('');
    const housingChangeOne=(e)=> {

        console.log(e)
        setHouse1(e)
    }

    const [house2,setHouse2] = useState('');
    const housingChangeTwo=(e)=> {

        console.log(e)
        setHouse2(e)
    }

    // const submit = () => {

    //     axios.post("http://localhost:8080/results",{ 
            
    //         x: 'Household Rating',
    //         y: 'GDP',
    //         z: metro1,
    //         h: metro2,
    //         stat: 'mean'
        
    //     }
        
    //     )
    
    // }

    let chart = new LineChartComp(document.getElementById('line'), {
    type: 'line',
    data: data,
    options: {
        layout: {
            padding: 20
        }
    }
    });

    return (


    <>

    


      <Dropdown className="d-inline mx-2" onSelect={metroOne}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
                     Metropolitan Area
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

    <Dropdown className="d-inline mx-2" autoClose="outside" onSelect={housingChangeOne}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
                     Housing Indicator
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="Family Income">Household Rating</Dropdown.Item>
                    <Dropdown.Item eventKey="Resident's Income">Resident's Income</Dropdown.Item>
                    <Dropdown.Item eventKey="Property Value">Property Value</Dropdown.Item>
                    <Dropdown.Item eventKey="Monthly Mortgage">Monthly Mortgage</Dropdown.Item>
                    <Dropdown.Item eventKey="Monthly Rent">Monthly Rent</Dropdown.Item>
                    <Dropdown.Item eventKey="Year Built">Year Built</Dropdown.Item>
                    <Dropdown.Item eventKey="Unit Size">Unit Size</Dropdown.Item>
                    <Dropdown.Item eventKey="Monthly Home Expenses">Monthly Home Expenses</Dropdown.Item>
                    <Dropdown.Item eventKey="Total Rooms">Total Rooms</Dropdown.Item>
                    <Dropdown.Item eventKey="Rent Control Present">Rent Control Present</Dropdown.Item>
                    <Dropdown.Item eventKey="Number of Inhabitants ">Number of Inhabitants</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="d-inline mx-2" autoClose="outside" onSelect={housingChangeTwo}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
                     Local Indicator
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="Dish Washers">Dish Washers</Dropdown.Item>
                    <Dropdown.Item eventKey="Garages">Garages</Dropdown.Item>
                    <Dropdown.Item eventKey="Dining Rooms">Dining Rooms</Dropdown.Item>
                    <Dropdown.Item eventKey="Washing Machines">Washing Machines</Dropdown.Item>
                    <Dropdown.Item eventKey="Porch">Porch</Dropdown.Item>
                    <Dropdown.Item eventKey="Kitchen Sink">Kitchen Sink</Dropdown.Item>
                    <Dropdown.Item eventKey="Household Rating">Household Rating</Dropdown.Item>
                    <Dropdown.Item eventKey="Neighborhood Rating">Neighborhood Rating</Dropdown.Item>
                    <Dropdown.Item eventKey="Resident's Sex">Resident's Sex</Dropdown.Item>
                    <Dropdown.Item eventKey="Resident's Marriage Status">Resident's Marriage Status</Dropdown.Item>
                    <Dropdown.Item eventKey="Resident's Citizenship Status">Resident's Citizenship Status</Dropdown.Item>
                    <Dropdown.Item eventKey="Resident's Age">Resident's Age</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      

      


        <LineChartComp>LineChart</LineChartComp>
    </>
    );


}


export default LocalFactors