import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../img/logo.png";
import "../../styles/Menu.css";

const Menu = () => {
    return (
         <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><img 
            src={logo} 
            alt="Logo de IA" 
            className="navbar-logo"
            height="40" // Altura fija para el logo
            width="auto" // Ancho automático para mantener proporción
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto align-content-end">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/quienes-somos">Quienes somos</Nav.Link>
            <Nav.Link href="/como-funciona">Cómo Funciona</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;