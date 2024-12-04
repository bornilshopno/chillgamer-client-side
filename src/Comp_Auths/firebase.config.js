// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtEKAf1eBmjD9DqL5ia1Wm1ENVqducd9w",
  authDomain: "simple-firebase-8dabd.firebaseapp.com",
  projectId: "simple-firebase-8dabd",
  storageBucket: "simple-firebase-8dabd.firebasestorage.app",
  messagingSenderId: "504083055609",
  appId: "1:504083055609:web:091d06da676e7d59e23328",
  measurementId: "G-BP7YYWV56K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);