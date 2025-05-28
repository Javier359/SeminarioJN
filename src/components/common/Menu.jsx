import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll'; // 👈 Importás el Link especial
import logo from "../img/logo.png";
import "../../styles/Menu.css";

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="/">
          <img 
            src={logo} 
            alt="Logo de IA" 
            className="navbar-logo"
            height="40"
            width="auto"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto align-content-end">
            <Nav.Item>
              <Link
                to="inicio"
                smooth={true}
                duration={500}
                offset={-80}
                className="nav-link" // 👈 obligatorio para respetar estilos de Bootstrap
              >
                Inicio
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="como-funciona"
                smooth={true}
                duration={500}
                offset={-80}
                className="nav-link"
              >
                Cómo Funciona
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="descripcion"
                smooth={true}
                duration={500}
                offset={-80}
                className="nav-link"
              >
                Descripción
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
