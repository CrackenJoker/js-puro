Projetos de Prática com JavaScript (map, filter, objetos)

Este repositório contém pequenos projetos desenvolvidos para praticar funções do JavaScript (map, filter, manipulação de arrays e objetos), além de reforçar conceitos de HTML e CSS puro.
O foco principal foi entender como transformar dados, gerar listas dinâmicas e aplicar lógica simples no front-end.

📂 Estrutura dos Projetos
map/
│
├── maiúscula/       # Transformar nomes em letras maiúsculas
│   ├── index.html
│   ├── names.js
│   └── style.css
│
├── objecto/         # Separar objetos em listas (nomes e idades)
│   ├── index.html
│   ├── main.js
│   └── style.css
│
├── propriedade/     # Adicionar propriedades (ex: desconto) e mostrar numa tabela
│   ├── index.html
│   ├── main.js
│   └── style.css
│
├── tabuada/         # Gerar tabuada de multiplicação com map()
│   ├── index.html
│   ├── search.js
│   └── style.css
│
filter/
│
├── maioridade/      # Filtrar usuários por idade mínima
│   ├── index.html
│   ├── main.js
│   └── style.css
│
└── api-paises/      # Buscar API de países e filtrar pelo input
    ├── index.html
    ├── main.js
    └── style.css

📝 Descrição dos Projetos
🔹 Com map()

Maiúscula

Recebe uma lista de nomes e retorna todos em MAIÚSCULAS usando map().

Mostra o resultado em forma de lista no HTML.

Objecto

Trabalha com um array de objetos (nome e idade).

Usa map() para separar e exibir as propriedades em listas organizadas.

Propriedade (Lista de Preços com Desconto)

Array de produtos com preços.

Aplica um desconto de 10% em cada item usando map().

Exibe os resultados em uma tabela estilizada com CSS:

Produto

Preço original

Desconto aplicado

Preço final

Tabuada

Gera a tabuada de multiplicação de um número digitado pelo usuário.

Usa map() para percorrer os números e montar a lista dinamicamente.

🔹 Com filter()

Maioridade

Recebe um número como filtro (ex: 18).

Mostra apenas os usuários com idade maior ou igual ao valor digitado.

Exibe os resultados como lista no HTML.

API de Países

Consome uma API de países e gentílicos com fetch().

Usa filter() para buscar países pelo input digitado.

Exibe os resultados dinamicamente no HTML.

🚀 Tecnologias Utilizadas

HTML5 → Estrutura das páginas

CSS3 → Estilização e layout (foco em tabelas, botões e centralização)

JavaScript (ES6+) → Manipulação de arrays, objetos, map, filter e consumo de API

🎯 Objetivo

Praticar as funções mais usadas do JavaScript no dia a dia.

Aprender a manipular listas, objetos e propriedades.

Reforçar conceitos básicos de HTML e CSS puro.

Criar uma base sólida para projetos maiores.
