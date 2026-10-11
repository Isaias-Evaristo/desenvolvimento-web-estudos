const http = require("http");

const tarefas = [
    { id: 1, titulo: "Estudar HTML", feito: true },
    { id: 2, titulo: "Estudar CSS", feito: true },
    { id: 3, titulo: "Estudar JavaScript", feito: false }
];

const servidor = http.createServer(function (requisicao, resposta) {
    if (requisicao.url === "/api/tarefas") {
        resposta.setHeader("Content-Type", "application/json; charset=utf-8");
        resposta.end(JSON.stringify(tarefas));
    } else {
        resposta.setHeader("Content-Type", "text/plain; charset=utf-8");
        resposta.statusCode = 404;
        resposta.end("Rota não encontrada");
    }
});

servidor.listen(3000, function () {
    console.log("Servidor rodando em http://localhost:3000");
});