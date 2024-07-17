document.addEventListener('DOMContentLoaded', () => {
    const h1_txt = document.getElementById('text_h1');
    fetch('/.netlify/functions/env')
        .then(res => res.text())
        .then(data => {
            console.log(data)
            h1_txt.textContent = data;
        })

})