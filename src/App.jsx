import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/Pages/ProductSelection/ProductSelectionPage";
import { ItemDetailContainer } from "./components/Pages/Product/ItemDetailPage";
import { CartProvider } from "./components/contexts/CartContext";
import { Cart } from "./components/Pages/Cart/CartPage";
import { CheckoutPage } from "./components/Pages/Checkout/CheckoutPage";
import { MyShopping } from "./components/Pages/Orders/MyShopping";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Productos" />}
            />
            <Route
              path="/category/:id"
              element={<ItemListContainer greeting="Productos" />}
            />
            <Route path="/items/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout/:id" element={<CheckoutPage />} />
            <Route path="/MyShopping" element={<MyShopping />} />
          </Routes>
        </>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
