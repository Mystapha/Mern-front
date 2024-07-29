import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Navbara() {
  return (
    
    <Navbar expand="lg"  style={{backgroundColor:"#373b3e"}}>
    <Container>
      <Navbar.Brand href="#home" style={{color:"white"}}>UserApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{color:"gray"}}>
        <Nav className="me-auto" style={{marginLeft:"150px"}}>
          <Nav.Link href="#home"> <Link to="/" style={{textDecoration:"none",color:"white"}}> Home</Link></Nav.Link>
          <Nav.Link href="#link"><Link to="/conatct" style={{textDecoration:"none",color:"white"}}>Contact</Link></Nav.Link>
          <Nav.Link href="#link"><Link to="/about" style={{textDecoration:"none",color:"white"}}>About</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

 
  );
}

export default Navbara;
