import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

import "./header.css";

function NavbarUsuario() {
  const auth = getAuth();

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
              <a href="/caracteristicas">Características</a>
            </li>
            <li>
              <a href="/tipos">Galería</a>
            </li>
            <button onClick={cerrarsesion}>Cerrar sesión</button>
          </ul>
        </nav>
        <br />
      </header>
    </>
  );
}

export default NavbarUsuario;
