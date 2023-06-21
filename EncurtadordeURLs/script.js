var entradaurl = 'https://pt.wikipedia.org/wiki/Brasil';
const url = 'http://localhost:3000/api/';

try {
  fetch(url + entradaurl)
    .then(response => response.text())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
    });
} catch (error) {
  console.error('Erro na requisição:', error);
}
