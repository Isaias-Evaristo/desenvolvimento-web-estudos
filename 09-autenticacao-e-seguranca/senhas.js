const crypto = require("crypto");

function criarHash(senha) {
    const sal = crypto.randomBytes(16).toString("hex");
    const hash = crypto.scryptSync(senha, sal, 64).toString("hex");
    return sal + ":" + hash;
}

function conferirSenha(senha, guardado) {
    const partes = guardado.split(":");
    const sal = partes[0];
    const hash = partes[1];
    const novoHash = crypto.scryptSync(senha, sal, 64).toString("hex");
    return hash === novoHash;
}

const guardado = criarHash("minhaSenha123");
console.log("Guardado no banco:", guardado);
console.log("Senha certa:", conferirSenha("minhaSenha123", guardado));
console.log("Senha errada:", conferirSenha("outraSenha", guardado));