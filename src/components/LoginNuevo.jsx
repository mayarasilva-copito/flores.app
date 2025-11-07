import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import "./login.css";

const provider = new GoogleAuthProvider();

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = async () => {
    const auth = getAuth(); // ✅ correcto
    signInWithEmailAndPassword(auth, email, password) // 👈 solo asegúrate de pasar auth aquí
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Se inició sesión");
        onLogin(user);
      })
      .catch((error) => {
        console.log("Error al iniciar sesión");
        console.log(error.code, error.message); // 👈 muestra el motivo exacto del error
      });
  };

  const iniciarSesionGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken; // 👈 agregué el ? por seguridad
        const user = result.user;
        console.log("Iniciaste sesión con Google");
        onLogin(user);
      })
      .catch((error) => {
        console.log("Error al iniciar con Google");
        console.log(error.code, error.message);
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>🧑‍💻 Iniciar Sesión</h1>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn-iniciar" onClick={iniciarSesion}>
          Iniciar Sesión
        </button>
        <button className="btn-google" onClick={iniciarSesionGoogle}>
          🔵 Iniciar Sesión con Google
        </button>
      </div>
    </div>
  );
}

export default Login;
