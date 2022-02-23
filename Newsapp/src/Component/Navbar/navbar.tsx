import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import image from '../Assets/applogo.png'
import styles from './navbar.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { ThemeButton } from "../modebutton/toggleThemeBtn";


export default function NavBar() {
  return (
 
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <img src={image} className={styles.logostyle} alt="/home"/>
      <Navbar.Brand href="#home">
      </Navbar.Brand>
     
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className={styles.menu} id="responsive-navbar-nav">
        <Nav className={styles['mr-auto']}>
        
          <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
          <Nav.Link as={Link} to={"/details"}>Details</Nav.Link>
          <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
          <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <ThemeButton/>
    </Navbar>
    
  );
}