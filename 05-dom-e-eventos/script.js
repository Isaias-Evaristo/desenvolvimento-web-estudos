let mensagem = document.getElementById("mensagem");
let botao = document.getElementById("botao");

botao.addEventListener("click", function () {
    if (mensagem.textContent === "Texto original") {
        mensagem.textContent = "O texto foi trocado!";
    mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Texto original";
        mensagem.style.color = "black";
    }
});