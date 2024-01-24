import  { auth } from './firebase.js'

document.addEventListener('DOMContentLoaded', function() {
    var cerrarSesionButton = document.getElementById('cerrarSesionButton');
    cerrarSesionButton.addEventListener('click', cerrarSesion);
  });

function cerrarSesion() {
    auth.signOut().then(function() {
      // Cierre de sesión exitoso
      window.alert("Cierre de sesión exitoso");
      window.location.replace("index.html");
    }).catch(function(error) {
      // Manejo de errores
      console.error("Error al cerrar sesión: ", error);
    });
}