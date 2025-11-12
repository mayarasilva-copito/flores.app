import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import "./comunidad.css";

function Comunidad() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [foto, setFoto] = useState("");
  const [cargando, setCargando] = useState(true);

  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevaFoto, setNuevoFoto] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
        setNombre(user.displayName || "Usuario sin nombre");
        setFoto(user.photoURL || "user.jpg");

        setNuevoNombre(user.displayName || "");
        setNuevoFoto(user.photoURL || "");
      } else {
        setEmail("");
        setNombre("");
        setFoto("");
      }
      setCargando(false);
    });
    return () => unsubscribe();
  }, []);

  const actualizarPerfil = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) return alert("No hay usuario activo");

    await updateProfile(user, {
      displayName: nuevoNombre || user.displayName,
      photoURL: nuevaFoto || user.photoURL,
    });

    alert("Perfil actualizado ✨");
    setNombre(nuevoNombre);
    setFoto(nuevaFoto);
  };

  if (cargando) {
    return <p className="cargando">Cargando datos...</p>;
  }

  return (
    <div className="comunidad-container">
      <h1>🌟 Bienvenido {nombre} 🌟</h1>

      <div className="foto-container">
        <img src={foto} alt="foto del usuario" className="foto-perfil" />
      </div>

      <p className="bienvenida">
        Hola <strong>{nombre}</strong>, gracias por ser parte de nuestra
        comunidad.
      </p>

      <div className="info">
        <p>
          <strong>Correo:</strong> {email}
        </p>
      </div>

      <div className="formulario">
        <h2>✏️ Editar mis datos</h2>
        <input
          type="text"
          placeholder="Nuevo nombre"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL de nueva foto"
          value={nuevaFoto}
          onChange={(e) => setNuevoFoto(e.target.value)}
        />
        <button className="actualizar" onClick={actualizarPerfil}>
          Actualizar Perfil
        </button>
      </div>

      <p className="mensaje-final">
        💬 Aquí podrás interactuar con otros usuarios y compartir tus ideas.
      </p>
    </div>
  );
}

export default Comunidad;
