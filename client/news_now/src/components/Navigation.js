import React from 'react'
import { Navbar ,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
       <Navbar bg="primary" variant="dark">
   
          <Navbar.Brand className="mx-3" href="#home">
          <div className="d-grid">
                  <Link className="d-grid Link" to='/'>
                  
            <h1 style={{color:'Black'}}>NewsNow</h1>
                  </Link>
                </div>
          </Navbar.Brand>
          <Nav className="me-auto">
          
            <Nav.Link href="#features">Latest News</Nav.Link>
            <Nav.Link href="#pricing">Subcription</Nav.Link>
          </Nav>
            
       
      </Navbar>
    </div>
  )
}
