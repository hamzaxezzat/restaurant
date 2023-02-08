import React from "react";
import './Navs.css'
import {Container,Nav,Navbar} from 'react-bootstrap';
import logo from "./../../assets/logo.png"
const Navs = ()=>{
    return(
            <Navbar  expand="lg">
              <Container>
                <Navbar.Brand href="#home"><img src={logo} title="logo" alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#home">Shop</Nav.Link>
                    <Nav.Link href="#link">Blogs</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                  </Nav>
                  <Nav >
                    {/* <Nav.Link  id="nav-call-button" href="#">177 351 111</Nav.Link> */}
                    <Nav.Link className="icons-svg" id="" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#34bf49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></Nav.Link>
                    <Nav.Link className="icons-svg" id="" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#34bf49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></Nav.Link>
                    <Nav.Link className="icons-svg" id="" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#34bf49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg></Nav.Link>
                </Nav>
                
                  
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }

export default Navs