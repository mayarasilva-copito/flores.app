import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "./header.css";

function NavbarUsuario() {
  const auth = getAuth();
  const navigate = useNavigate();

  const cerrarsesion = async () => {
    await signOut(auth);
    navigate("/intro");
  };

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
              <Link to="/caracteristicas">Caracteristicas</Link>
            </li>
            <li>
              <Link to="/tipos">Tipos</Link>
            </li>

            <li>
              <Link to="/comunidad">Comunidad</Link>
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
