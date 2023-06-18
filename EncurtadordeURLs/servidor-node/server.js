const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

// Configuração do CORS
app.use(cors());

// Rota para fazer a requisição à API
app.get('/api', (req, res) => {
  const url = 'https://is.gd/create.php?format=simple&url=';
  
  axios.get(url)
    .then(response => res.json(response.data))
    .catch(error => res.status(500).json({ error: 'Erro na requisição à API' }));
});

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
