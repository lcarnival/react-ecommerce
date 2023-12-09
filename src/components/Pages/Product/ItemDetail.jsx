import { useContext, useState } from "react";
import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../../contexts/CartContext";
import { Button } from "react-bootstrap";

export const ItemDetail = ({ item }) => {
  const { onAdd } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const add = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    onAdd(item, quantity);
  };

  return (
    <>
      <h1>{item.name}</h1>
      <img src={item.img} style={{ maxHeight: "500px" }} />
      <h2>Stock: {item.stock}</h2>
      <p>{item.description}</p>
      <ItemCounter onAdd={add} stock={item.stock} initial={1} />
      <Button variant="primary" onClick={handleAddToCart}>
        Agregar al Carrito
      </Button>
      <div></div>
    </>
  );
};
