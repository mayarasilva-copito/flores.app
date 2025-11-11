import { initializeApp } from "firebase/app";
//base de datos
import { getFirestore } from "firebase/firestore";
//autenticacion
import { getAuth } from "firebase/auth";

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//exportaciones
export default app;
export { db, getAuth };
