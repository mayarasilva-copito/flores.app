import { Link } from "react-router-dom";
import { geAuth, signOut } from "firebase/auth";

import "./header.css";

function NavbarUsuario() {
  const auth = geAuth();

  const cerrarsesion = async () => {
    await signOut(auth);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">🌸 Mundo Floral</div>
          <ul className="nav-links">
            <li>
              <a href="/intro">Inicio</a>
            </li>
            <li>
              <a href="/caracteristicas">Caracteristicas</a>
            </li>
            <li>
              <a href="/tipos">Galería</a>
            </li>
            <li>
              <a href="/Iniciar-sesion">Inicio sesion</a>
            </li>
            <li>
              <a href="/Resgistrarse">Resgistrarse</a>
            </li>
            <button>Cerrar Sesion</button>
          </ul>
        </nav>
        <br />
      </header>
    </>
  );
}
export default NavbarUsuario;
