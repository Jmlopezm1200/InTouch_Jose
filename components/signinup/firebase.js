// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
  
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABInJAY5vtky3yDWBwXE8OHgK96jeUDFY",
  authDomain: "smart-grow-68bde.firebaseapp.com",
  projectId: "smart-grow-68bde",
  storageBucket: "smart-grow-68bde.appspot.com",
  messagingSenderId: "518557089591",
  appId: "1:518557089591:web:6d7ced6530421808bde4b2",
  measurementId: "G-Z3ND5FCHJZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

// Después de inicializar la aplicación Firebase en firebase.js
console.log("Firebase inicializado correctamente.");
