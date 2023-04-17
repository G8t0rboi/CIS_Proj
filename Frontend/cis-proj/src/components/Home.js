import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

function Home() {

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
                    left: "10%"
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
                    left: "70%"
                }}>
                <Link to="/localFactors">
                    <Button variant="secondary" size="lg">Compare Local Factors</Button>
                </Link>
            </div>
        </div>
      )
}
export default Home
