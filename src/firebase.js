// Importa las funciones que necesitas de los SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 👈 Agregado para usar Auth
import { getAnalytics } from "firebase/analytics";

// Configuración de tu aplicación Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDd71rBwcbYOl19on33oFingdXhmwlUMRs",
  authDomain: "flores-firebase-17ee5.firebaseapp.com",
  projectId: "flores-firebase-17ee5",
  storageBucket: "flores-firebase-17ee5.firebasestorage.app",
  messagingSenderId: "676499704965",
  appId: "1:676499704965:web:23456ce90099526e042dec",
  measurementId: "G-NZ9X4668GT",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exporta la autenticación para usarla en Login y Registro
export const auth = getAuth(app);
export default app;
