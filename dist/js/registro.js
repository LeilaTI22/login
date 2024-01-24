import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import  { auth } from './firebase.js'


const formularioRegistro = 
    document.querySelector("#formularioRegistro");

    formularioRegistro.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = formularioRegistro["email-registro"].value;
        const password = formularioRegistro["password-registro"].value;

        try{
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
            console.log(userCredentials)
            window.alert("Registro Exitoso");
            window.location.replace("index.html")
        }
        catch(error){
            console.log(error.code)
        }
})