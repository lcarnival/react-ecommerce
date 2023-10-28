import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (

    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Grillas y Grullas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Nivel Inicial</Nav.Link>
            <Nav.Link href="#features">Nivel Primario</Nav.Link>
            <Nav.Link href="#pricing">Nivel Secundario</Nav.Link>
          </Nav> 
          <CartWidget count={5}/>
        </Container>
      </Navbar>
  );
};
