import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase";
import NavbarUsuario from "./NavbarUsuario";
import NavbarVisitante from "./NavbarVisitante";

function Header() {
  const [Usuario, setUsuario] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);

    const unsuscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user || null);
    });

    return () => unsuscribe();
  }, []);

  return Usuario ? <NavbarUsuario /> : <NavbarVisitante />;
}

export default Header;
