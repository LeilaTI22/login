import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import  { auth } from './firebase.js'

const formularioLogin = 
    document.querySelector("#formularioLogin");

    formularioLogin.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = formularioLogin["email"].value;
    const password = formularioLogin["password"].value;

    try{
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
      window.alert("Bienvenido " + userCredentials.user.email)
      window.location.replace("iniciado.html")
    }
    catch(error){
      if(error.code === 'auth/invalid-login-credentials'){
        console.log("Datos incorrectos")
      }
    }
})


