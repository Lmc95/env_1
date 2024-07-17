// app.js
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el valor de la variable de entorno
    const myEnvVar = process.env.MY_ENV_VAR;
    
    // Mostrar el valor en el h1 del HTML
    const h1Element = document.querySelector('h1');
    h1Element.textContent = myEnvVar;
});
