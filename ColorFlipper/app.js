
const cores = ["red", "blue", "green", "yellow", "pink"];
const cor = document.querySelector("#cor");

document.getElementById("trocar-cor").addEventListener("click", function() {
    var corSelecionada = cores[Math.floor(Math.random()*cores.length)];
    document.body.style.backgroundColor = corSelecionada;
    cor.textContent = `Background Color: ${corSelecionada}`;
})



