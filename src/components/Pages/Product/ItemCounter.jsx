import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export const ItemCounter = ({ onAdd, stock, initial }) => {
  const [count, setCount] = useState(initial);

  const IncreaseCount = () => {
    if (stock > count) {
      setCount((prev) => {
        onAdd(prev + 1)
        return prev + 1
    });
    }
  };

  const DecreaseCount = () => {
    if (count > 1) {
      setCount((prev) => {
        onAdd(prev - 1)
        return prev - 1
    });
    }
  };


  return (
    <>
      <br />
      <InputGroup className="mb-3" style={{ maxWidth: "110px" }}>
        <Button variant="primary" id="button-addon1" onClick={DecreaseCount}>
          -
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          value={count}
          readOnly
        />
        <Button variant="primary" id="button-addon2" onClick={IncreaseCount}>
          +
        </Button>
      </InputGroup>
    </>
  );
};
