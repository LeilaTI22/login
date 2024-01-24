import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyDh-zhowo29USRTllk67y7FZIgKlzGVlNo",
    authDomain: "web40-3035c.firebaseapp.com",
    projectId: "web40-3035c",
    storageBucket: "web40-3035c.appspot.com",
    messagingSenderId: "145454916572",
    appId: "1:145454916572:web:3d3e8b83b216ca0722e519",
    measurementId: "G-V675RZQ416"
  };

  // Inicializar Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);