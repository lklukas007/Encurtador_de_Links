function capturarEntrada() {
  var entradaurl = document.getElementById("entradaurl").value;

  const url = 'http://localhost:3000/api/';

  fetch(url + encodeURIComponent(entradaurl))
    .then(response => response.text())
    .then(data => {
      exibirModal(data);
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
    });
}

function exibirModal(resultado) {
  var modalContent = document.getElementById("modal-content");

  modalContent.textContent = resultado;
  $('#modal').modal('show');
}

document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    capturarEntrada();
  });
});
