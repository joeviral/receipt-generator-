// firebase.js - user's provided config integrated
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6ainJ3vQrVTpVA_zjHX797VcAucaMX_g",
  authDomain: "receipt-generator-73178.firebaseapp.com",
  projectId: "receipt-generator-73178",
  storageBucket: "receipt-generator-73178.firebasestorage.app",
  messagingSenderId: "472797553558",
  appId: "1:472797553558:web:756ffac3f10ed5375ff3b7",
  measurementId: "G-GREMPLX12P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app
