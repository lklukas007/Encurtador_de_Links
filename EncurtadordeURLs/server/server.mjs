import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/:url(*)', (req, res) => {
  const url = req.params.url;
  const encodedURL = encodeURIComponent(url);
  const apiURL = `https://is.gd/create.php?format=simple&url=${encodedURL}`;

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
