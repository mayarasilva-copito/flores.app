import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./resgistrar.css";

function RegistroUsuario({ onRegister, cambiarVista }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registrar = async () => {
    const auth = getAuth(); // ✅ mantiene tu estructura
    createUserWithEmailAndPassword(auth, email, password) // 👈 solo se agregó "auth,"
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Cuenta creada con éxito");
        onRegister(user);
      })
      .catch((error) => {
        console.log("Error al registrar el usuario");
        console.log(error.code);
        console.log(error.message);
      });
  };

  return (
    <div className="registrar-container">
      <div className="registrar-card">
        <h1>✨ Crear Cuenta</h1>
        <input
          type="email"
          placeholder="📧 Escribe tu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="🔒 Escribe tu Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn-registrar" onClick={registrar}>
          Crear Cuenta ✨
        </button>
      </div>
    </div>
  );
}

export default RegistroUsuario;
