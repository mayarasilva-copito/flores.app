import { Link } from "react-router-dom";
import NavbarUsuario from "./navbarUsuario";
import NavbarVisitante from "./navbarVisitante";
import { useEffect, usEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase";

import "./header.css";

function Header() {
  const [Usuario, setUsuario] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);

    const unsuscribete = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user);
      } else {
        setUsuario(null);
      }
    });

    return () => unsuscribete();
  }, []);

  if (Usuario) {
    return <NavbarUsuario />;
  } else {
    return <NavbarVisitante />;
  }
}
export default Header;
