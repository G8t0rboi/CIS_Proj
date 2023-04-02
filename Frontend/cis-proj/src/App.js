import './App.css';
import NavbarComp from './components/NavbarComp';
import React, {useState} from 'react';
import axios from 'axios'

function App() {

  const [name, setName] = useState("");

  async function postName(e) {

      e.preventDefault();

      try {

          await axios.post("http://localhost:8080/post_name", {name});

      }
      catch (error) {
        
          console.log(error);

      }

  }

  return (
    <>
      <NavbarComp></NavbarComp>
      <form onSubmit={{postName}}>
      
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <button type='submit'>Send Name</button>
      </form>
    </>
  );
}

export default App;
