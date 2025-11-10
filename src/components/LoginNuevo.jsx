import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const iniciarSesion = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Se inicio sesion");
        // onLogin(user);
        navigate("/intro");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error al iniciar sesion");
      });
  };

  const iniciarSesionGoogle = () => {
    // Documentacion de Firebase
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("Iniciaste sesion con Google");
        // onLogin(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("Error al iniciar con Google");
        console.log(error);
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
        <p>o</p>
        <button className="btn-google" onClick={iniciarSesionGoogle}>
          🔵 Iniciar Sesión con Google
        </button>
      </div>
    </div>
  );
}

export default Login;
