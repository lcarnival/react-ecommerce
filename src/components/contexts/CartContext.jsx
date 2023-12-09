import { createContext } from "react";
import React, { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const clear = () => setItems([]);

  const onAdd = (item, quantity) => {
    const exists = items.some((i) => i.id === item.id);
    if (exists) {
      const newElements = items.map((i) => {
        if (i.id === item.id) {
          return {
            ...i,
            quantity: i.quantity + quantity,
          };
        } else {
          return i;
        }
      });
      setItems(newElements);
    } else {
      setItems((prev) => {
        return [...prev, { ...item, quantity }];
      });
    }
  };

  const onRemove = (id) => {
    setItems(prev => prev.filter(item => item.id != id))
  }

  return <CartContext.Provider value={{items, onAdd, clear, onRemove}}>{children}</CartContext.Provider>;
};
