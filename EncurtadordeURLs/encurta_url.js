var entradaurl;
var api = "https://is.gd/create.php?format=simple&url="; 
var url = api + entradaurl;


fetch(url)
  .then(function(response) {
    if (response.ok) {
      return response.text();
    }
    throw new Error("Erro na solicitação da URL: " + response.status);
  })
  .then(function(resposta) {
    console.log(resposta); 
  })
  .catch(function(error) {
    console.log("Erro: " + error.message);
  });
