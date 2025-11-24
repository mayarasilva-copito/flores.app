import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import "./formulario.css";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

function Formulario() {
  const location = useLocation();
  const mascotaSeleccionada = location.state?.mascota;

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    tipo_mascota: "",
    experiencia: "",
    tiempo_libre: "",
    compromiso: "",
  });

  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [modoEditar, setModoEditar] = useState(false);
  const [idEditando, setIdEditando] = useState(null);
  const [modoEditarTabla, setModoEditarTabla] = useState(null);
  const [listaFormularios, setListaFormularios] = useState([]);

  const cargarRegistros = async () => {
    const querySnapshot = await getDocs(
      collection(db, "formularios_adopcion")
    );
    const datos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setListaFormularios(datos);
  };

  useEffect(() => {
    cargarRegistros();
  }, []);


 useEffect(() => {
  if (mascotaSeleccionada) {
    setFormData((prev) => ({
      ...prev,
      tipo_mascota: mascotaSeleccionada.mascota,
    }));
  }
}, [mascotaSeleccionada]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (modoEditar && idEditando) {
        await updateDoc(doc(db, "formularios_adopcion", idEditando), formData);
        setModoEditar(false);
        setIdEditando(null);
      } else {
        await addDoc(collection(db, "formularios_adopcion"), formData);
      }

      setMostrarPopup(true);
      setTimeout(() => setMostrarPopup(false), 4000);

      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        direccion: "",
        tipo_mascota: "",
        experiencia: "",
        tiempo_libre: "",
        compromiso: "",
      });

      cargarRegistros();
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error ❌");
    }
  };

  const eliminarRegistro = async (id) => {
    await deleteDoc(doc(db, "formularios_adopcion", id));
    cargarRegistros();
  };

  const editarRegistro = (item) => {
    setModoEditar(true);       
    setModoEditarTabla(item);  
    setIdEditando(item.id);
    setFormData(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="formulario-contenedor">
        <h1>🐾 Formulario de Adopción</h1>
        <p>Completa este formulario para brindarle un hogar a un peludito 🐶🐱</p>

        <form className="formulario-adopcion" onSubmit={handleSubmit}>
          <div className="columna">
            <div className="campo">
              <label>Nombre completo</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="campo">
              <label>Correo electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="campo">
              <label>Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>

            <div className="campo">
              <label>Dirección</label>
              <textarea
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          <div className="columna">
            <div className="campo">
              <label>¿Qué deseas adoptar?</label>
              <select
                name="tipo_mascota"
                value={formData.tipo_mascota}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="perro">🐶 Perrito</option>
                <option value="gato">🐱 Gatito</option>
              </select>
            </div>

            <div className="campo">
              <label>¿Tienes experiencia cuidando mascotas?</label>
              <textarea
                name="experiencia"
                value={formData.experiencia}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="campo">
              <label>¿Cuántas horas al día estás en casa?</label>
              <input
                type="number"
                name="tiempo_libre"
                value={formData.tiempo_libre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="campo">
              <label>¿Te comprometes a cuidar a la mascota?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="compromiso"
                    value="si"
                    checked={formData.compromiso === "si"}
                    onChange={handleChange}
                    required
                  />
                  Sí
                </label>
                <label>
                  <input
                    type="radio"
                    name="compromiso"
                    value="no"
                    checked={formData.compromiso === "no"}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>

            <div className="campo">
              <button type="submit">
                {modoEditar ? "Guardar Cambios ✨" : "Enviar Solicitud ❤️"}
              </button>
            </div>
          </div>
        </form>
      </div>

      {mostrarPopup && (
        <div className="popup-fondo">
          <div className="popup-exito">
            <img
              src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
              alt="Éxito"
              className="icono-exito"
            />
            <h3>¡Formulario enviado exitosamente! 🎉</h3>
            <p>Gracias por tu compromiso con la adopción 💖</p>
          </div>
        </div>
      )}

      <div className="lista-registros">
        <h2>📋 Lista de Formularios Enviados</h2>
        <button onClick={cargarRegistros} className="btn-actualizar">
          🔄 Actualizar
        </button>

        {listaFormularios.length === 0 ? (
          <p>No hay registros aún.</p>
        ) : (
          <table className="tabla-registros">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Tipo</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {listaFormularios.map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>{item.email}</td>
                  <td>{item.telefono}</td>
                  <td>{item.tipo_mascota}</td>

                  <td>
                    <button
                      className="btn-editar-tabla"
                      onClick={() => editarRegistro(item)}
                    >
                      ✏️ Editar
                    </button>

                    <button
                      className="btn-eliminar-tabla"
                      onClick={() => eliminarRegistro(item.id)}
                    >
                      🗑️ Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Formulario;
