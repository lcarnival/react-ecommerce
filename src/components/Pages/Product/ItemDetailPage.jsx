import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { ItemDetail } from "./ItemDetail";
import { products } from "../../../products";
import { productsService } from "../../../firebase";


export const ItemDetailContainer = () => {
  const [item, setItems] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    productsService.getProductById(id).then((response) => {
      setItems(response);
    });
  }, [id]);

  return (
    <Container className="mt-4">
    {item ? <ItemDetail item={item} /> : <>Loading...</>}
    </Container>
  );
};
