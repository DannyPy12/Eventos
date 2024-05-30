import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyDRmd2-RK3KKDNQQ2-b8tYAZk9GaVaIuSk",
  authDomain: "fir-api-5a6f8.firebaseapp.com",
  databaseURL: "https://fir-api-5a6f8-default-rtdb.firebaseio.com",
  projectId: "fir-api-5a6f8",
  storageBucket: "fir-api-5a6f8.appspot.com",
  messagingSenderId: "127268536194",
  appId: "1:127268536194:web:ff2d571af93c468f46599b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
