// // app.js
// document.addEventListener('DOMContentLoaded', function() {
//     // Obtener el valor de la variable de entorno
//     const myEnvVar = process.env.MY_ENV_VAR;
    
//     // Mostrar el valor en el h1 del HTML
//     const h1Element = document.querySelector('h1');
//     h1Element.textContent = myEnvVar;
// });
// app.js
// app.js
document.addEventListener('DOMContentLoaded', function() {
    // Hacer una solicitud a la función de Netlify
    fetch('/api/env')
        .then(response => response.json())
        .then(data => {
            const myEnvVar = data.message;  // Obtener el valor de la variable de entorno desde la respuesta
            // Mostrar el valor en el h1 del HTML
            const h1Element = document.querySelector('h1');
            h1Element.textContent = myEnvVar;
        })
        .catch(error => {
            console.error('Error al obtener la variable de entorno:', error);
        });
});
