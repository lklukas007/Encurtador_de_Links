var entradaurl = "https://www.youtube.com/watch?v=8BAl6z0lXdw";
const url = 'https://is.gd/create.php?format=simple&url=';

fetch(url + encodeURIComponent(entradaurl))
  .then(response => response.text())
  .then(data => {
    console.log('Resultado da requisição:', data);
  })
  .catch(error => {
    console.error('Erro na requisição:', error);
  });
