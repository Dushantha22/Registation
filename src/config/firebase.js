import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8w0AYk-ucy-ccJGGZ9800xPM3l4onSRQ",
  authDomain: "registration-with-react-99bb9.firebaseapp.com",
  projectId: "registration-with-react-99bb9",
  storageBucket: "registration-with-react-99bb9.firebasestorage.app",
  messagingSenderId: "417350322475",
  appId: "1:417350322475:web:fab8a73d417eadb20cdd6e",
  measurementId: "G-P69FTCZZ61"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;