import { Link } from "react-router-dom";
import NavbarUsuario from "./navbarUsuario";
import NavbarVisitante from "./navbarVisitante";

import "./header.css";

function Header() {
  return (
    <>
      <NavbarUsuario />
      <NavbarVisitante />
    </>
  );
}
export default Header;
