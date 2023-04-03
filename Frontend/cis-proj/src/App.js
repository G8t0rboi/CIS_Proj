import './App.css';
import NavbarComp from './components/NavbarComp';
import React, {useEffect, useState} from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  
  useEffect(() => {

    axios.get("http://localhost:8080/message").then((response) => {

      console.log(response.data);

    })

  }, [])
  
  return (
    <>
      <NavbarComp></NavbarComp>

    </>
  );
}

export default App;
