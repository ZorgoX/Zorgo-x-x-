// File: js/updatemain.js

// Script per effetti dinamici sulla pagina

document.addEventListener("DOMContentLoaded", function() { const message = document.getElementById("dynamic-message");

const phrases = [ "ZorgoX: Il futuro della collaborazione!", "Umani e Alieni uniti per un'economia intergalattica!", "Acquista ora su JUP e RADAR!", "Scopri il nuovo universo crypto!" ];

let index = 0;

setInterval(() => { message.textContent = phrases[index]; index = (index + 1) % phrases.length; }, 4000); });

