import './App.css';
import NavbarComp from './components/NavbarComp';
import React, {useEffect, useState} from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

function App() {

  const [data, setData] = useState([])

  const getData = () => {

    axios.get("http://localhost:8080/students").then((response) => {

      console.log(response.data.rows[0].YEAR)

    })

    

  }
  
  return (
    <>
      <NavbarComp></NavbarComp>
      <Button onClick={getData}>Get Data</Button>
      
    </>
  );
}

export default App;
