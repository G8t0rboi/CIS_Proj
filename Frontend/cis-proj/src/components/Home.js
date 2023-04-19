import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {
    var tupleCounts = []
    const [tupleCount, setTupleCount] = useState("")
    const getData = () => {
        const options = {
            method: 'GET',
            url: 'http://localhost:8080/tupleCount'
        }

        axios.request(options).then((response) => {

            console.log(response)
            tupleCounts.push(response.data.rows[0].TOTAL)

        })
        if (tupleCounts[0] !== undefined) {
            var tempString = "Total Tuple Count: " + tupleCounts[0]
            setTupleCount(tempString)
        }
        tupleCounts = []
    }

    return (
        <div>
            <p1
                style={{
                    position: "absolute",
                    top: "18%",
                    left: "9%",
                    width: "1100px",
                    lineHeight: 2,
                    alignItems: "center",
                    textAlign: "center",
                    fontFamily: "Segoe UI",
                    fontSize: "14pt",
                    fontWeight: "bold"
                }}>
                The housing scene in the United States encompasses an endless spectrum of markets that differ in many ways.
                Housing Markets are sensitive to both local and nationwide changes. Their development is highly indicative of US consumer attitudes
                and sentiments as housing makes up a fourth of consumer expenses in the United States. Using the features offered below, explore
                the the housing market in the United States throughout the 21st Century with your scope of choice.
            </p1>
            <h1
                style={{
                    position: "absolute",
                    top: "45%",
                    left: "10%",
                    width: "1100px",
                    lineHeight: 2,
                    alignItems: "center",
                    textAlign: "center",
                    fontFamily: "Segoe UI",
                    fontWeight: "bold"
                }}>
                How Would You Like To Explore The Market?
            </h1>
            <div
                style={{
                    position: "absolute",
                    top: "65%",
                    left: "15%"
                }}>
                <Link to="/metropolitanAreas">
                    <Button variant="secondary" size="lg">Compare Two Metropolitan Areas</Button>
                </Link>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "65%",
                    left: "45%"
                }}>
                <Link to="/distributions">
                    <Button variant="secondary" size="lg">View Distributions</Button>
                </Link>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "65%",
                    left: "65%"
                }}>
                <Link to="/localFactors">
                    <Button variant="secondary" size="lg">Compare Local Factors</Button>
                </Link>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "90%",
                    left: "45%"
                }}>
                <Button variant="secondary" size="lg" onClick={getData}>Get Tuple Count</Button>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "80%",
                    left: "35%"
                }}>
                <h1>{tupleCount}</h1>
            </div>
        </div>
    )
}
export default Home