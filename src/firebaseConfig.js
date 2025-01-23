// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCxc9eE6zr9kz6T05vrQun8Isftzii7j8o",
  authDomain: "vitacare-add78.firebaseapp.com",
  projectId: "vitacare-add78",
  storageBucket: "vitacare-add78.firebasestorage.app",
  messagingSenderId: "106758493794",
  appId: "1:106758493794:web:1e767470f8d722225d633b"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

export default app;
