import { NavLink } from 'react-router-dom';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";
import styled from '@emotion/styled';

export const NavBar = () => {
  return (
    <Navbar bg="light" data-bs-theme="light" >
        <Container >
          <Navbar.Brand href="/">
            Home
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/category/docentes_inicial">Nivel Inicial</Nav.Link>
            <Nav.Link href="/category/docentes_primario">Nivel Primario</Nav.Link>
            <Nav.Link href="/category/docentes_secundario">Nivel Secundario</Nav.Link>
            <Nav.Link href="/MyShopping">Mis Compras</Nav.Link>

          </Nav> 
          <CartWidget/>
        </Container>
      </Navbar>
  );
};
