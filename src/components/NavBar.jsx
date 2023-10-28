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
            <Nav.Link href="#home">Iniciar Sesion</Nav.Link>
            <Nav.Link href="#features">Carrito</Nav.Link>
            <Nav.Link href="#pricing">Favoritos</Nav.Link>
          </Nav> 
          <CartWidget count={5}/>
        </Container>
      </Navbar>
  );
};
