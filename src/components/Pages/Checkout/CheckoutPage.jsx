import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { CartContext } from "../../contexts/CartContext";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const CheckoutPage = () => {
  const [userData, setUserData] = useState({});
  const { items, clear } = useContext(CartContext);
  const { id } = useParams();
  const navigate = useNavigate()

  const handleChange = (event) => {
    setUserData((customer) => {
      return {
        ...customer,
        [event.target.name]: event.target.value,
      };
    });
  };

  const total = items.reduce(
    (acumulador, valorActual) =>
      acumulador + valorActual.quantity * valorActual.precio,
    0
  );

  const showGreetings = () => {
    withReactContent(Swal).fire({
        title: "Finalizado!",
        text: "Tu compra se ha realizado con exito!",
        icon: "success",
        timer: 2000
    }).then(() => {
        clear()
        navigate('/')
    })
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group>
            <Form.Group className="mb-3"> </Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="name"
              isValid={userData.name}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Group className="mb-3"> </Form.Group>
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="lastname"
              isValid={userData.lastname}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Group className="mb-3"> </Form.Group>
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="phone"
              isValid={userData.phone}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Group className="mb-3"> </Form.Group>
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control
              type="email"
              onChange={handleChange}
              name="email"
              isValid={userData.email && emailPattern.test(userData.email)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Group className="mb-3"> </Form.Group>
            <Form.Label>Repetir Correo Electronico</Form.Label>
            <Form.Control
              type="email"
              name="repeatEmail"
              onChange={handleChange}
              isValid={userData.email === userData.repeatEmail}
              required
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col xs={3}>
          <Row>
            <Table striped="columns">
              <tbody>
                {items?.map((item) => (
                  <tr key={item.id}>
                    <td>
                      {item.name} x{item.quantity}
                    </td>
                    <td>${item.precio * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td> Total: ${total} </td>
                </tr>
              </tfoot>
            </Table>
          </Row>
          <Row>
            <Button
              variant="primary"
              type="submit"
              onClick={showGreetings}
              disabled={!items.length}
            >
              Realizar Compra
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
