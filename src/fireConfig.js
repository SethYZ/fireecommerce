// Import firebase package functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGhnNu5sgurjthqvMOMz4TyfyOsqiv0io",
  authDomain: "fireecommerce-be7cb.firebaseapp.com",
  projectId: "fireecommerce-be7cb",
  storageBucket: "fireecommerce-be7cb.appspot.com",
  messagingSenderId: "541886222427",
  appId: "1:541886222427:web:f09f3ed1fbcaa5db46ef7e",
  measurementId: "G-JR23CSH2PV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export default fireDB