import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp() {
  return (

      <Navbar className="navbar navbar-dark bg-primary" expand="lg">
        <Container>
            <Navbar.Brand>Housing Through Different Lenses</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                    {' '}
                    <Link className="text-decoration-none text-white" to="/">Home</Link>
                </Nav.Link>
                 <Nav.Link>
                    {' '}
                    <Link className = "text-decoration-none text-white" to="/about">About US Housing Market</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>

  )
}

export default NavbarComp;