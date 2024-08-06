// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "storytails-blog.firebaseapp.com",
  projectId: "storytails-blog",
  storageBucket: "storytails-blog.appspot.com",
  messagingSenderId: "53234831193",
  appId: "1:53234831193:web:d610e8e5efb98825cd0648"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);