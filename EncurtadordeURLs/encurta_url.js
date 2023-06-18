var entradaurl = "https://www.youtube.com/watch?v=8BAl6z0lXdw"; // Defina o valor da entradaurl

fetch(`http://localhost:3000/api/${entradaurl}`)
  .then(response => response.text()) // Alteração aqui para obter o corpo da resposta como texto
  .then(data => {
    console.log('Resposta do servidor Node:', data); // Exibir o corpo da resposta no console
    try {
      const json = JSON.parse(data); // Tentar fazer o parsing do JSON
      console.log('Resposta do servidor Node (JSON):', json);
    } catch (error) {
      console.error('Erro na análise do JSON:', error);
    }
  })
  .catch(error => {
    console.error('Erro na chamada do servidor:', error);
  });
