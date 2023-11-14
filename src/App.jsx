import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar } from "./components/NavBar";
import { title } from "./components/Tittle";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting= "Productos" />
            }
          />
          <Route
            path="/category/:id"
            element={
              <ItemListContainer greeting="Productos" />
            }
          />
          <Route path="/items/:id" element={<ItemDetailContainer/>} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
