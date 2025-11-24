
import React, { useState, useEffect, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { MdLocationOn, MdPhone, MdEmail, MdLanguage } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import "./contactos.css"; 

function Contactos() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    tipoAyuda: "",
    monto: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);
  const containerRef = useRef(null);
  const [altura, setAltura] = useState("auto");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Datos a enviar:", form); 

    try {

      await addDoc(collection(db, "donaciones"), form);

      setForm({ nombre: "", correo: "", tipoAyuda: "", monto: "", mensaje: "" });
      setEnviado(true);
      setTimeout(() => setEnviado(false), 3000);
    } catch (error) {
      console.error("Error al enviar la donación:", error);
      alert("❌ Hubo un error al enviar tu donación. Intenta nuevamente.");
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      const boxes = containerRef.current.querySelectorAll(
        ".formulario-box, .info-box"
      );
      const maxHeight = Math.max(...Array.from(boxes).map((b) => b.scrollHeight));
      setAltura(`${maxHeight}px`);
    }
  }, []);

  return (
    <div className="contacto-principal" ref={containerRef}>

      <div className="formulario-box" style={{ height: altura }}>
        <h2>💖 Formulario de Donaciones</h2>
        <p>
          ¡Gracias por apoyar a <strong>Happy Tails</strong>! 🐾 Tu donación
          ayuda a darles una segunda oportunidad a nuestros peluditos.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre completo"
            value={form.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Tu correo electrónico"
            value={form.correo}
            onChange={handleChange}
            required
          />
          <select
            name="tipoAyuda"
            value={form.tipoAyuda}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona tipo de ayuda</option>
            <option value="donacion">Donación económica</option>
            <option value="alimentos">Donación de alimentos</option>
            <option value="ropa">Ropa o mantitas</option>
            <option value="otros">Otros</option>
          </select>
          <input
            type="number"
            name="monto"
            placeholder="Monto en soles (opcional)"
            value={form.monto}
            onChange={handleChange}
          />
          <textarea
            name="mensaje"
            placeholder="Escribe un mensaje o dedicatoria..."
            value={form.mensaje}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Enviar Donación</button>
          {enviado && (
            <p className="enviado">¡Gracias por tu apoyo a Happy Tails! 💕</p>
          )}
        </form>
      </div>


      <div className="info-box" style={{ height: altura }}>
        <h2>📍 Contacto Happy Tails</h2>

        <div className="info-item">
          <MdLocationOn className="iconito" />
          <div>
            <strong>Dirección</strong>
            <p>Av. Siempre Viva 123, Lima - Perú</p>
          </div>
        </div>

        <div className="info-item">
          <MdPhone className="iconito" />
          <div>
            <strong>Teléfono</strong>
            <p>+51 987 654 321</p>
          </div>
        </div>

        <div className="info-item">
          <FaInstagram className="iconito" />
          <div>
            <strong>Instagram</strong>
            <a
              href="https://www.instagram.com/happy_tails_dogandcat/"
              target="_blank"
              rel="noreferrer"
            >
              @patitasfelices
            </a>
          </div>
        </div>

        <div className="info-item">
          <MdEmail className="iconito" />
          <div>
            <strong>Correo principal</strong>
            <p>contacto@happytails.com</p>
          </div>
        </div>

        <div className="info-item">
          <MdEmail className="iconito" />
          <div>
            <strong>Correo alternativo</strong>
            <p>ayuda@happytails.com</p>
          </div>
        </div>

        <div className="info-item">
          <MdLanguage className="iconito" />
          <div>
            <strong>Sitio web</strong>
            <a
              href="http://localhost:5173/Portada"
              target="_blank"
              rel="noreferrer"
            >
              www.happytails.com
            </a>
          </div>
        </div>

        <p className="mensaje-final">
          🌸 Gracias por visitar nuestra página. ¡Tu amor y apoyo hacen que más
          colitas se muevan felices! 🐕🐾
        </p>
      </div>
    </div>
  );
}

export default Contactos;
