import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {NavBar} from "./components/NavBar"
import {title} from "./components/Tittle"
import {ItemListContainer}from "./components/ItemListContainer"

function App() {
  return (
    <> 

    <NavBar/>
    <ItemListContainer greeting = 'Bienvenidos a Grillas y Grullas'/>

    </>
  );
}

export default App;
