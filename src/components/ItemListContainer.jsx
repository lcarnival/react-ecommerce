import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../products";
import { ItemList } from "./ItemList";
import { Container } from "react-bootstrap";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    myPromise.then((response) => {
      if (!id) {
        setItems(response);
      } else {
        const filterByCategory = response.filter(
          (item) => item.categoryId === id
        );
        setItems (filterByCategory);
      }
    });
  }, [id]);

  return (
    <Container className="mt-4">
      <h1>{props.greeting}</h1>
      <ItemList items={items} />
    </Container>
  );
};
