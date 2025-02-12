import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCY7bPcfgPeTY7M4p945uKYLf17nNIVBXU",
    authDomain: "projeto-sistema-de-chama-f3813.firebaseapp.com",
    projectId: "projeto-sistema-de-chama-f3813",
    storageBucket: "projeto-sistema-de-chama-f3813.firebasestorage.app",
    messagingSenderId: "1050060781698",
    appId: "1:1050060781698:web:c021d4e8869a9766f75c9b",
    measurementId: "G-V5ELLCSR7R"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp)
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export { auth, db, storage }