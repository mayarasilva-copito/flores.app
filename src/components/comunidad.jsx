import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { db } from "../firebase";
import { collection, addDoc, getDocs, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import "./comunidad.css";

function Comunidad() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [foto, setFoto] = useState("");
  const [cargando, setCargando] = useState(true);

  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevaFoto, setNuevoFoto] = useState("");

 
  const [reseñas, setReseñas] = useState([
    { 
      id: "1",
      nombre: "Sofía R.", 
      texto: "Adopté a Luna y fue la mejor experiencia. ¡Gracias!", 
      imagen: "/perritoresc.webp",
      uid: "invitado"
    },
    { 
      id: "2",
      nombre: "Diego M.", 
      texto: "Muy responsables y cariñosos con los animalitos.", 
      imagen: "/perritorescate.avif",
      uid: "invitado"
    },
    { 
      id: "3",
      nombre: "Valeria T.", 
      texto: "Mi gatita Mía ahora es la reina de la casa.", 
      imagen: "/gatitorescate.jpg",
      uid: "invitado"
    },
  ]);
  const [indice, setIndice] = useState(0);

  const [nuevoTexto, setNuevoTexto] = useState("");
  const [usuarioActual, setUsuarioActual] = useState({ uid: "", nombre: "", foto: "" });


  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
        setNombre(user.displayName || "Usuario sin nombre");
        setFoto(user.photoURL || "/images/user.jpg");
        setNuevoNombre(user.displayName || "");
        setNuevoFoto(user.photoURL || "");

        setUsuarioActual({
          uid: user.uid,
          nombre: user.displayName || "Usuario",
          foto: user.photoURL || "/images/user.jpg",
        });
      } else {
        setEmail("");
        setNombre("");
        setFoto("");
        setUsuarioActual({ uid: "", nombre: "", foto: "" });
      }
      setCargando(false);
    });
    return () => unsubscribe();
  }, []);

  
  useEffect(() => {
    const cargarResenas = async () => {
      const q = query(collection(db, "reseñas"), orderBy("fecha", "asc"));
      const snapshot = await getDocs(q);
      const lista = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

      setReseñas(prev => [...prev, ...lista]);
    };
    cargarResenas();
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

    setUsuarioActual({
      uid: user.uid,
      nombre: nuevoNombre || usuarioActual.nombre,
      foto: nuevaFoto || usuarioActual.foto,
    });
  };

  const prevResena = () => {
    setIndice((indice - 1 + reseñas.length) % reseñas.length);
  };

  const nextResena = () => {
    setIndice((indice + 1) % reseñas.length);
  };

  const agregarResena = async (e) => {
    e.preventDefault();
    if (!nuevoTexto) return alert("Escribe algo antes de enviar");

    const nuevaResena = {
      nombre: usuarioActual.nombre,
      texto: nuevoTexto,
      imagen: usuarioActual.foto,
      fecha: new Date(),
      uid: usuarioActual.uid
    };

   
    if (usuarioActual.uid) {
      const docRef = await addDoc(collection(db, "reseñas"), nuevaResena);
      nuevaResena.id = docRef.id;
    } else {
      nuevaResena.id = "local-" + Date.now(); 
    }


    setReseñas([nuevaResena, ...reseñas]);
    setNuevoTexto("");
    setIndice(0);
  };

  const eliminarResena = async (id, uid) => {
    if (uid !== usuarioActual.uid) return alert("Solo puedes borrar tu propia reseña");

    if (window.confirm("¿Estás seguro que quieres borrar tu reseña?")) {
   
      if (!id.startsWith("local-") && id !== "1" && id !== "2" && id !== "3") {
        await deleteDoc(doc(db, "reseñas", id));
      }
      setReseñas(reseñas.filter(r => r.id !== id));
      setIndice(0);
    }
  };

  if (cargando) return <p className="cargando">Cargando datos...</p>;

  return (
    <div className="contenedor-principal">

      <div className="comunidad-container">
        <h1>🌟 Bienvenido {nombre} 🌟</h1>

        <div className="foto-container">
          <img src={foto} alt="foto del usuario" className="foto-perfil" />
        </div>

        <p className="bienvenida">
          Hola <strong>{nombre}</strong>, gracias por ser parte de nuestra comunidad.
        </p>

        <div className="info">
          <p><strong>Correo:</strong> {email}</p>
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
      </div>


      <div className="comunidad">
        <h2 className="titulo-comunidad">🐾 Reseñas de la Comunidad</h2>

        <div className="carrusel-wrapper">
          <div
            className="carrusel-inner"
            style={{ transform: `translateX(-${indice * 100}%)` }}
          >
            {reseñas.map((resena, i) => (
              <div className="reseña-card" key={i}>
                <img src={resena.imagen} alt={resena.nombre} className="imagen-reseña" />
                <h3>⭐ {resena.nombre}</h3>
                <p>“{resena.texto}”</p>
                {resena.uid === usuarioActual.uid && (
                  <button
                    style={{ marginTop: "10px", background: "#d15b4f", color: "#fff" }}
                    onClick={() => eliminarResena(resena.id, resena.uid)}
                  >
                    Borrar mi reseña
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="botones">
          <button onClick={prevResena}>⬅️</button>
          <button onClick={nextResena}>➡️</button>
        </div>

        <div className="indicadores">
          {reseñas.map((_, i) => (
            <span
              key={i}
              className={`indicador ${i === indice ? "activo" : ""}`}
              onClick={() => setIndice(i)}
            ></span>
          ))}
        </div>


        <form className="formulario-resena" onSubmit={agregarResena}>
          <h3>📝 Escribe tu reseña</h3>
          <textarea
            placeholder="Escribe tu reseña aquí..."
            value={nuevoTexto}
            onChange={(e) => setNuevoTexto(e.target.value)}
            rows={3}
          />
          <button type="submit">Enviar reseña</button>
        </form>
      </div>
    </div>
  );
}

export default Comunidad;
