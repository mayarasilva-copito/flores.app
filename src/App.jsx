import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import app from "./firebase";
import { getAuth, signOut } from "firebase/auth";

import Header from "./components/header";
import Intro from "./components/intro";
import Caracteristicas from "./components/caracteristicas";
import Footer from "./components/footer";
import Tipos from "./components/tipos";
import LoginNuevo from "./components/LoginNuevo";
import RegistroNuevo from "./components/ResgistroNuevo";

function App() {
  const handleLogin = (user) => {
    console.log("Usuario logueado:", user);
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/caracteristicas" element={<Caracteristicas />} />
        <Route path="/tipos" element={<Tipos />} />
        <Route path="/Iniciar-sesion" element={<LoginNuevo />} />
        <Route path="/Resgistrarse" element={<RegistroNuevo />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
