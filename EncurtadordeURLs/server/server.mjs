import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/:url', (req, res) => {
  const url = req.params.url;

  const apiURL = `https://is.gd/create.php?format=simple&url=${encodeURIComponent(url)}`;

  fetch(apiURL)
    .then(response => response.text())
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
      res.status(500).json({ error: 'Erro na requisição à API' });
    });
});

app.listen(port, () => {
  console.log(`Servidor em execução em http://localhost:${port}`);
});
