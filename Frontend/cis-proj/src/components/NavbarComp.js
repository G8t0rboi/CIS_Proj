import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './About';
import Home from './Home';

function NavbarComp() {
  return (

    <>
      <Router>
        <Navbar className="navbar navbar-dark bg-primary" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to={"/home"} href="#home">Housing Through Different Lenses</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/home"} href="#home">Home</Nav.Link>
                <Nav.Link as={Link} to={"/about"} href="#About US Housing Market">About US Housing Market</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </Router>



    </>


  )
}

export default NavbarComp