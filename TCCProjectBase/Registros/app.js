const display = document.getElementById("registro");

const data = localStorage.getItem("freqHuman");
const freqHuman = JSON.parse(data);

display.textContent = freqHuman.join(", ");




/*const display = document.getElementById("registro");
const texto = localStorage.getItem("texto");
console.log(texto);
registro.textContent = texto;*/
