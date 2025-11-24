import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import NavbarVisitante from "./components/NavbarVisitante";
import NavbarUsuario from "./components/NavbarUsuario";

import Footer from "./components/footer";
import Tipos from "./components/tipos";
import LoginNuevo from "./components/LoginNuevo";
import Comunidad from "./components/comunidad";
import RutaPrivada from "./components/rutaprivada";
import Formulario from "./components/Formulario";
import RegistroNuevo from "./components/RegistroNuevo";
import Portada from "./components/portada";
import Quienessomos from "./components/quienessomos";
import Listademascotas from "./components/mascotas";
import Contactos from "./components/contactos";
import Cuidados from "./components/cuidados";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user); // user es null = visitante
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      
      {/* 🔥 CAMBIO AUTOMÁTICO DE NAVBAR */}
      {usuario ? <NavbarUsuario /> : <NavbarVisitante />}

      <Routes>
        <Route path="/Portada" element={<Portada />} />
        <Route path="/quienessomos" element={<Quienessomos />} />
        <Route path="/mascotas" element={<Listademascotas />} />
        <Route path="/cuidados" element={<Cuidados />} />

        {/* 🔒 FORMULARIO PRIVADO */}
        <Route
          path="/formulario"
          element={
            <RutaPrivada>
              <Formulario />
            </RutaPrivada>
          }
        />

        <Route path="/contactos" element={<Contactos />} />

        {/* 🔑 LOGIN Y REGISTRO */}
        <Route path="/iniciar-sesion" element={<LoginNuevo />} />
        <Route path="/Registrarse" element={<RegistroNuevo />} />

        {/* 🔒 COMUNIDAD PRIVADA */}
        <Route
          path="/comunidad"
          element={
            <RutaPrivada>
              <Comunidad />
            </RutaPrivada>
          }
        />

        {/* RUTA POR DEFECTO */}
        <Route path="*" element={<Portada />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
