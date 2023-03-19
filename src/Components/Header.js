import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import NavDropdown from 'react-bootstrap/NavDropdown';


export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>

     <i class="fa-light fa-bags-shopping"></i>

      <Navbar.Brand href="#home">Bemofy </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      
      <div className='d-flex justify-content-around  header-frm '>

      <Nav className='me-6'>
          <Form className='search-form '>
            <Form.Control 
              type="search"
              placeholder="Search"
              className=" me-4 "
              aria-label="Search"
            />
          </Form>
          </Nav>

        <Nav className='menu d-flex'>
        <Link to="/" className="nav-link">Dashboard</Link>
        <Link to="/about" className="nav-link">About</Link>

        <NavDropdown title="Setting" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
              <NavDropdown.Divider /> 

              <NavDropdown.Item as={Link} to="/signin">Signin </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup">Signup </NavDropdown.Item>
              <NavDropdown.Item >Logout </NavDropdown.Item>

        </NavDropdown>
        </Nav>
      </div>





      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
