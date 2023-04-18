import './App.css';
import NavbarComp from './components/NavbarComp';
import React, {useEffect, useState} from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TestPage from './components/TestPage'
import About from './components/About';
import MetropolitanAreas from './components/MetroAreas';
import Distributions from './components/Distributions';
import LocalFactors from './components/LocalFactors';
import { LineChartComp } from './components/LineChartComp';


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
    <div>
      <Router>
        <NavbarComp></NavbarComp>
        <Routes>
            <Route exact default path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/metropolitanAreas" element={<MetropolitanAreas />}></Route>
            <Route path="/distributions" element={<Distributions />}></Route>
            <Route path="/localFactors" element={<LocalFactors />}></Route>
            <Route path="/testPage" element={<TestPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
