const usuarios = [
    { nome: "Ana", papel: "admin" },
    { nome: "Bruno", papel: "comum" }
];

function verificarAcesso(usuario, area) {
    if (area === "painel-admin" && usuario.papel !== "admin") {
        return "Acesso negado";
    }
    return "Acesso liberado";
}

console.log("Ana no painel:", verificarAcesso(usuarios[0], "painel-admin"));
console.log("Bruno no painel:", verificarAcesso(usuarios[1], "painel-admin"));
console.log("Bruno na página inicial:", verificarAcesso(usuarios[1], "inicio"));