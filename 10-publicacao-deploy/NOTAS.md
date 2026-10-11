# Notas: Publicação e deploy

## O que é hospedagem?

hospedagem é o serviço que armazena os arquivos e dados de um site em um servidor conectado à Internet. 

## O que é deploy?

Deploy é o processo de enviar e publicar um site ou aplicação em um servidor para que fique disponível aos usuários.

## Como publiquei as minhas páginas?

. Escrevi as páginas HTML, CSS e JavaScript no VS Code.
. Enviei os arquivos para o repositório no GitHub com `git add .`, `git commit` e `git push`.
. No repositório, em Settings > Pages, escolhi publicar a partir da ramificação `main`, na pasta raiz.
. Esperei o GitHub publicar e abri o endereço `github.io` da página.
. Para atualizar a página online, é só repetir o `git push`.

## O GitHub Pages consegue rodar o meu servidor Node? Por quê?

e backend.Não. O GitHub Pages não executa servidores Node.js, pois hospeda apenas sites estáticos e não aplicações com código d