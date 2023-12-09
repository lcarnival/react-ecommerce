import { useContext, useState } from "react";
import { Container, Table, Button, Form, FormLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { CartContext } from "../../contexts/CartContext";

const startValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [customer, setCustomer] = useState(startValues);

  const { clear, items, onRemove } = useContext(CartContext);

  const navigate = useNavigate();

  const total = items.reduce(
    (acumulador, valorActual) => acumulador + valorActual.quantity * valorActual.precio , 
    0
  );
  
  const finalOrder = (ev) => {
    ev.preventDefault();

    const order = {
      customer,
      items,
      total: 9000,
    };

    const dataBase = getFirestore();
    const purchaseOrder = collection(dataBase, "orders");

    addDoc(purchaseOrder, order).then(({ id }) => {
      if (id) {
        alert("Su Orden: " + id + "ha sido completada!");
        //setCustomer(initialValues);
        clear();
      }
    });
  };

  if (!items.length) {
    return (
      <Container className="mt-4">
        <h2>Tu carrito esta vacio</h2>
        <p>
          Ve al listado y elije un producto para agregar al carrito y vuelve.
        </p>
        <Button variant="primary" onClick={() => navigate("/")}>
          {" "}
          Volver a la Home{" "}
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h1>Mi Carrito </h1>
      <Table striped="columns">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Imagen</th>
            <th>Precio</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <img src={item.img} width={250} />
              </td>
              <td>${item.precio}</td>
              <td>${item.precio * item.quantity}</td>
              <td onClick={() => onRemove(item.id)}>X</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td> Total: ${total} </td>
          </tr>
        </tfoot>
      </Table>
      <Button variant="warning" onClick={clear}>Vaciar Carrito</Button>
      <hr/>

      <Button variant="primary" type="submit" onClick={() => navigate('/checkout/' + crypto.randomUUID())}>
        Realizar Compra
      </Button>
    </Container>
  );
};
