# Autenticação e segurança

Exercícios sobre como proteger um sistema, feitos em JavaScript com Node.js.

## O que foi praticado

- Senhas: nunca guardar a senha digitada, só o hash com sal (`crypto` e `scrypt`)
- Validação de dados: conferir nome, e-mail e senha antes de aceitar
- Controle de acesso: cada usuário tem um papel (`admin` ou `comum`) que define o que ele pode acessar

## HTTPS

O HTTPS protege os dados que viajam entre o navegador e o servidor. Ele foi estudado na pasta `01-fundamentos-internet`.

## Como rodar

No terminal, rode um arquivo por vez, por exemplo:

`node 09-autenticacao-e-seguranca/senhas.js`

## Arquivos

- `senhas.js`: cria e confere o hash de uma senha
- `validacao.js`: valida os dados de um cadastro
- `acesso.js`: verifica o acesso por papel de usuário