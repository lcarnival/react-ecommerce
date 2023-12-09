import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ItemList } from "./ItemList";
import { Container } from "react-bootstrap";
import { productsService } from "../../../firebase";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    productsService.getProducts().then((response) => {
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
