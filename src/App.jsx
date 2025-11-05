import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Intro from "./components/intro";
import Caracteristicas from "./components/caracteristicas";
import Footer from "./components/footer";
import Tipos from "./components/tipos";
import Login from "./components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/caracteristicas" element={<Caracteristicas />} />
        <Route
          path="/tipos"
          element={
            <>
              <Tipos />
              <Login />
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
