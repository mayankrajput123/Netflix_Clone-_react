import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCKL4heXVmCXWpRDYzt1O7UhNJe7yvhDzw",
  authDomain: "netflix-clone-d44a1.firebaseapp.com",
  projectId: "netflix-clone-d44a1",
  storageBucket: "netflix-clone-d44a1.firebasestorage.app",
  messagingSenderId: "142085350387",
  appId: "1:142085350387:web:1cd225150f7151fb3b6886",
  measurementId: "G-3XPGP3XXC2"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);