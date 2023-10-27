import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <header>
      <nav>

        <div>

        <ul>
          <li> <a href="">Iniciar Sesion</a>
            </li>

          <li> <a href="">Carrito</a> 
          </li>

          <li> <a href="">Favoritos</a>
          </li>

        </ul>
        </div>
 
      </nav>
        <CartWidget />

    </header>
  );
};
