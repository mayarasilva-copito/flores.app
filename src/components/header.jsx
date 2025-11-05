import { Link } from "react-router-dom";

import "./header.css";

function Header() {
  return (
    <>
      <header>
        <nav class="navbar">
          <div class="logo">🌸 Mundo Floral</div>
          <ul class="nav-links">
            <li>
              <a to="/intro">Inicio</a>
            </li>
            <li>
              <a href="/caracteristicas">Caracteristicas</a>
            </li>
            <li>
              <a href="/tipos">Galería</a>
            </li>
            <li>
              <a href="/ ">Contacto</a>
            </li>
          </ul>
        </nav>
        <br />
      </header>
    </>
  );
}
export default Header;
