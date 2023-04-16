import './App.css';
import NavbarComp from './components/NavbarComp';
import React, {useEffect, useState} from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LineChartComp } from './components/LineChartComp';
import Button from 'react-bootstrap/Button'

function App() {

  const [data, setData] = useState([])

  const getData = () => {

    axios.get("http://localhost:8080/students").then((response) => {

      console.log(response)

    })

  }

  useEffect(() => {

    axios.get("http://localhost:8080/message").then((response) => {

      console.log(response.data);

    })

  }, [])
  
  return (
    <>
      <NavbarComp></NavbarComp>
      <Button onClick={getData}>Get Data</Button>
      <p>{data}</p>

    </>
  );
}

export default App;
