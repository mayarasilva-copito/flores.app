
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDd71rBwcbYOl19on33oFingdXhmwlUMRs",
  authDomain: "flores-firebase-17ee5.firebaseapp.com",
  projectId: "flores-firebase-17ee5",
  storageBucket: "flores-firebase-17ee5.firebasestorage.app",
  messagingSenderId: "676499704965",
  appId: "1:676499704965:web:28ec46e60d24dea0042dec",
  measurementId: "G-3DTREFJRLF",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, app };  
export default app;        