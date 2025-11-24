import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Loader from "./Loader";

function RutaPrivada({ children }) {
  const [cargando, setCargando] = useState(true);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
      setCargando(false);
    });

    return () => unsubscribe();
  }, []);

  if (cargando) {
    return <Loader />;
  }

  if (!usuario) {
    return <Navigate to="/iniciar-sesion" />;
  }

  return children;
}

export default RutaPrivada;
