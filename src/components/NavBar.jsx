import { NavLink } from 'react-router-dom';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (

    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>
            <NavLink to = "/" >Home</NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="category/docentes_inicial">Nivel Inicial</NavLink>
            <NavLink to="category/docentes_primario">Nivel Primario</NavLink>
            <NavLink to="category/docentes_secundario">Nivel Secundario</NavLink>
          </Nav> 
          <CartWidget count={5}/>
        </Container>
      </Navbar>
  );
};
