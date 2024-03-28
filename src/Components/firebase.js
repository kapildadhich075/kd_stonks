// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEiAFOmPEltf7EpOtBMAyi2fKfu1iG5lE",
  authDomain: "kdstonks.firebaseapp.com",
  projectId: "kdstonks",
  storageBucket: "kdstonks.appspot.com",
  messagingSenderId: "778968193136",
  appId: "1:778968193136:web:28749090ecd5cae7e2bcb5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const DataBase = getFirestore(firebaseApp);

export { DataBase };
