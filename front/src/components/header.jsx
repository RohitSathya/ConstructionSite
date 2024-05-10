import React, { useEffect, useState } from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import { Container, Navbar, Nav } from 'react-bootstrap';
export default function header({scrollToContactForm,scrollToAboutForm }) {
  const nav=useNavigate()
  const [fl,sfl]=useState(0)
 

  useEffect(()=>{
     const ud=localStorage.getItem('userdetail')
     if(!ud||ud==''){
        sfl(1)
     }

  })
  function lg(){
     localStorage.removeItem('userdetail')
     nav('/')
     sfl(0)
  }
  return (
    <>
    <div className='head'>
    <Navbar bg="dark" variant="dark" expand="lg" className="header">
      <Container>
        <Navbar.Brand href="/" className="mr-auto">
          <img src={logo} height="60px" alt="Logo" onClick={() => nav('/')} />
          <h2>Sri Balaji Builders</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link onClick={() => nav('/')} className="nav-link ml-md-4"><b>Home</b></Nav.Link>
            <Nav.Link onClick={scrollToAboutForm} className="nav-link ml-md-4"><b>About Us</b></Nav.Link>
            <Nav.Link onClick={scrollToContactForm} className="nav-link ml-md-4"><b>Contact Us</b></Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </div>
        
    </>
  )
}
