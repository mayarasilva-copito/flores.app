import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import datos from "../data/mascotas.json";
import Loader from "./Loader";
import "./mascotas.css";

function Listademascotas() {
  const [cargando, setCargando] = useState(true);
  const [mascotas, setMascotas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setCargando(false), 300);

    // Añadimos adoptado: false a cada mascota
    const inicial = datos.Listademascotas.map(m => ({ ...m, adoptado: false }));
    setMascotas(inicial);

    return () => clearTimeout(timer);
  }, []);

  if (cargando) return <Loader />;

  const perritos = mascotas.filter((m) => m.mascota.toLowerCase().includes("perro"));
  const gatitos = mascotas.filter((m) => m.mascota.toLowerCase().includes("gato"));

  // Enviar al formulario con la mascota seleccionada
  function adoptar(m) {
    // Marcamos la mascota como adoptada
    setMascotas(mascotas.map(masc => masc.id === m.id ? { ...masc, adoptado: true } : masc));
    navigate("/formulario", { state: { mascota: m } });
  }

  function renderCard(m) {
    return (
      <div className="ms-card" key={m.id}>
        {m.imagen ? <img className="ms-img" src={m.imagen} alt={m.nombre} /> : <div className="ms-img ms-noimg">Sin foto</div>}

        <div className="ms-band">{m.nombre}</div>
        <div className="ms-info"><strong>Edad:</strong> {m.edad}</div>
        <div className="ms-info"><strong>Género:</strong> {m.genero}</div>
        <div className="ms-info"><strong>Tipo:</strong> {m.mascota}</div>
        <div className="ms-detail">{m.descripcion ?? "Sin descripción."}</div>

        {m.adoptado ? (
          <button className="boton-adoptado" disabled>Adoptado ✓</button>
        ) : (
          <button className="boton-adoptar" onClick={() => adoptar(m)}>🐾 Adoptar</button>
        )}
      </div>
    );
  }

  return (
    <div className="ms-page">
      <h1 className="ms-title">🐾 Mascotas 🐾</h1>

      <h2 className="ms-subtitle">🐶 Perritos</h2>
      <div className="ms-grid4">{perritos.map(renderCard)}</div>

      <h2 className="ms-subtitle">🐱 Gatitos</h2>
      <div className="ms-grid4">{gatitos.map(renderCard)}</div>
    </div>
  );
}

export default Listademascotas;