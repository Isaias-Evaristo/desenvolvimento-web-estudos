# CSS

Página de apresentação estilizada com CSS (cores, fontes, box model, Flexbox, Grid e responsividade).

[Ver a página publicada](https://isaias-evaristo.github.io/desenvolvimento-web-estudos/03-css/)

## O que foi praticado

- Seletores de tag, de grupo (`th, td`) e universal (`*`)
- Cores, fontes e tamanho de texto
- Box model: `padding`, `border`, `margin` e `box-sizing`
- Centralizar o conteúdo com `max-width` e `margin: 0 auto`
- Flexbox no cabeçalho, na imagem com legenda, na lista e no rodapé
- Grid no layout principal (duas colunas)
- Responsividade com media query para telas pequenas

## Flexbox: regras que usei

- `display: flex`: transforma o elemento em container flexível.
- `flex-direction: column`: empilha os itens em coluna.
- `align-items: center`: centraliza os itens no eixo cruzado.
- `justify-content: center`: centraliza os itens no eixo principal.
- `flex-wrap: wrap`: deixa os itens quebrarem de linha quando faltar espaço.
- `gap`: cria o espaço entre os itens.

## Grid: regras que usei

- `display: grid`: transforma o elemento em uma grade.
- `grid-template-columns: 1fr 1fr`: cria duas colunas de tamanhos iguais.
- `gap`: cria o espaço entre as células.
- `grid-column: 1 / -1`: faz o elemento ocupar todas as colunas.

## Responsividade: regras que usei

- `@media (max-width: 600px)`: aplica estilos só em telas de até 600px.
- `max-width: 100%` e `height: auto` na imagem: ela não estoura a tela.
- Troca para uma coluna no celular com `grid-template-columns: 1fr`.

## Arquivos

- `index.html`: a página
- `style.css`: os estilos
- `foto.jpeg`: a imagem usada na página