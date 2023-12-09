import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Cart4 } from "react-bootstrap-icons";
import { useContext } from "react";
import { CartContext } from "./contexts/CartContext";
import { useNavigate } from "react-router-dom";

export const CartWidget = ({ count }) => {
  const { items } = useContext(CartContext);
  const navigate = useNavigate()

  const total = items.reduce(
    (acumulador, valorActual) => acumulador + valorActual.quantity,
    0
  );

  return (
    <>
      <Button onClick={() => navigate('/cart')}>
        <Cart4 />
      </Button>
      <span>{total}</span>
    </>
  );
};
