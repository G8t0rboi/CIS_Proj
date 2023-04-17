import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

function Distributions() {
    return (
        <div>
            <h1>Distribution Page</h1>
            <Dropdown>
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
        </div>
    )
}
export default Distributions