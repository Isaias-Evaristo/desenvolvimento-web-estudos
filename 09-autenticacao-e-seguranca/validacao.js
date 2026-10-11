function validarCadastro(nome, email, senha) {
    if (nome === "") {
        return "O nome é obrigatório";
    }
    if (!email.includes("@")) {
        return "O e-mail precisa ter @";
    }
    if (senha.length < 8) {
        return "A senha precisa ter pelo menos 8 caracteres";
    }
    return "Dados válidos";
}

console.log(validarCadastro("", "ana@email.com", "12345678"));
console.log(validarCadastro("Ana", "anaemail.com", "12345678"));
console.log(validarCadastro("Ana", "ana@email.com", "123"));
console.log(validarCadastro("Ana", "ana@email.com", "12345678"));