import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

function TestPage() {
    const [data, setData] = useState([])
    const getData = () => {
        const options = {
            method: 'GET',
            url: 'http://localhost:8080/testPage'
        }

        axios.request(options).then((response) => {

            console.log(response)

        })
    }
   
    return (
      <>
        <Button onClick={getData}>Get Data</Button>
        <p>{data}</p>
      </>
    )
}
export default TestPage