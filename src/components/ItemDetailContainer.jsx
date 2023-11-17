import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { ItemDetail } from "./ItemDetail";
import { products } from "../products";


export const ItemDetailContainer = () => {
  const [item, setItems] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    myPromise.then((response) => {
      const findById = response.find((item) => item.id === id);
      setItems(findById);
    });
  }, [id]);

  return (
    <Container className="mt-4">
    {item ? <ItemDetail item={item} /> : <>Loading...</>}
    </Container>
  );
};
