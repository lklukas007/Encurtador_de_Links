# Encurtador de URLs

## Como funciona?
- É necessário passar uma URL para a o servidor node que vai fazer a requisição e retornar a resposta do que foi obtido(a URL encurtada).
- Também implementei um arquivo script.js que vai fazer o trabalho de passar a URL para o servidor node, caso queira implentar no seu projeto, pode só passar o URl para o arquivo **script.js** que ele já vai chamar o servidor node e retornar o URl encurtado.

----

## Passo a passo de como utilizar ou implementar na sua aplicação:
- 1° Inicie o servidor Node.js(é necessário ter instalado o [Node.js versão 18.16.1 ou superior](https://nodejs.org/dist/v18.16.1/node-v18.16.1-x64.msi))  - Abra a pasta server pelo terminal e digite: **node server.mjs**
- 2° Abra a URL do servidor que fica em: **http://localhost:3000/api/** e passe o URL que deseja encurtar. Exemplo: **http://localhost:3000/api/https://pt.wikipedia.org/wiki/Brasil**
- 3° No exemplo acima ele vai retornar o URL: **https://is.gd/joVClD**
- Para facilitar a implementação em outros aplicativos, também pode utilizar o **script.js** passando a URL para a variavel: **entradaurl**

---

Foi utilizado a API aberta do site: https://is.gd/index.php  <br>
Documentação de como utilizar a API deles: https://is.gd/apishorteningreference.php

##### ▶️ Desenvolvido por Lucas de Oliveira Prado ◀️
