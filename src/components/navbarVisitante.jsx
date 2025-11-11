import { Link } from "react-router-dom";

import "./header.css";

function NavbarVisitante() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">🌸 Mundo Floral</div>
          <ul className="nav-links">
            <li>
              <Link to="/intro">Inicio</Link>
            </li>
            <li>
              <Link to="/Caracteristicas">Caracteristicas</Link>
            </li>
            <li>
              <Link to="/tipos">Tipos</Link>
            </li>
            <li>
              <Link to="/comunidad">Comunidad</Link>
            </li>
            <li>
              <Link to="/iniciar-sesion">Inicio sesion</Link>
            </li>
            <li>
              <Link to="/Resgistrarse">Resgistrase</Link>
            </li>
          </ul>
        </nav>
        <br />
      </header>
    </>
  );
}
export default NavbarVisitante;
