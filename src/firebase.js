// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh9vvuY5OlDDpwa4BMshncLDDhyFIwER4",
  authDomain: "otp-3a2f1.firebaseapp.com",
  projectId: "otp-3a2f1",
  storageBucket: "otp-3a2f1.appspot.com",
  messagingSenderId: "303198294986",
  appId: "1:303198294986:web:399c514a9185b18e1c7533",
  measurementId: "G-CS054RSL64"
};




const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;