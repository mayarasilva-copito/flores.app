import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "./header.css";

function NavbarUsuario() {
  const navigate = useNavigate();
  const [menuActivo, setMenuActivo] = useState(false);

  const toggleMenu = () => setMenuActivo(!menuActivo);

  const cerrarsesion = async () => {
    try {
      await signOut(auth);
      navigate("/portada");
    } catch (error) {
      console.error("Error cerrando sesión:", error);
    }
  };

  return (
    <>
      <header className="usr-nav-header">
        <div className="usr-nav-inner">

          <Link to="/portada" className="usr-logito">
            <div className="usr-logo"></div>
            <span className="usr-titulo">Happy Tails</span>
          </Link>

          <div
            className={`usr-menu-icon ${menuActivo ? "usr-activo" : ""}`}
            onClick={toggleMenu}
          >
            <span className="usr-barra"></span>
            <span className="usr-barra"></span>
            <span className="usr-barra"></span>
          </div>

          <ul className={`usr-nav-links ${menuActivo ? "usr-activo" : ""}`}>
            <br />

            <li><Link to="/Quienessomos">Acerca de</Link></li>
            <li><Link to="/Mascotas">Mascotas</Link></li>
            <li><Link to="/Cuidados">Cuidados</Link></li>
            <li><Link to="/Contactos">Contacto</Link></li>
            <li><Link to="/comunidad">Comunidad</Link></li>
            <li><Link to="/Formulario">Formulario</Link></li>
            <li><button onClick={cerrarsesion}>Cerrar sesión</button></li>
          </ul>

        </div>
      </header>
    </>
  );
}

export default NavbarUsuario;
