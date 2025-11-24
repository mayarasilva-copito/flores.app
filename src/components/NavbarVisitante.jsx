import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function NavbarVisitante() {
  const [menuActivo, setMenuActivo] = useState(false);

  const toggleMenu = () => setMenuActivo(!menuActivo);

  return (
    <>
      <header className="vis-nav-header">
        <div className="vis-nav-inner">

          <Link to="/portada" className="vis-logito">
            <div className="vis-logo"></div>
            <span className="vis-titulo">Happy Tails</span>
          </Link>

          <div
            className={`vis-menu-icon ${menuActivo ? "vis-activo" : ""}`}
            onClick={toggleMenu}
          >
            <span className="vis-barra"></span>
            <span className="vis-barra"></span>
            <span className="vis-barra"></span>
          </div>

          <ul className={`vis-nav-links ${menuActivo ? "vis-activo" : ""}`}>
            <br />
            <li><Link to="/Quienessomos">Acerca de</Link></li>
            <li><Link to="/Mascotas">Mascotas</Link></li>
            <li><Link to="/Formulario">Formulario</Link></li>
            <li><Link to="/iniciar-sesion">Inicio Sesion</Link></li>
            <li><Link to="/Registrarse">Registrarse</Link></li>
          </ul>

        </div>
      </header>
    </>
  );
}

export default NavbarVisitante;
