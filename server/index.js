const express = require('express');
const server = express();
const app = express.Router();
const axios = require('axios');

app.get('/', (req, res) => {
  res.send('api root');
});

app.get('/mainnews', (req, res) => {
  axios
    .get(
      'http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-23&sortBy=publishedAt&apiKey=4007110774184dce9a8ef9ec2d7c286d'
    )
    .then((response) => res.send(response.data.articles));
});

app.get('/sidenews', (req, res) => {
  axios
    .get(
      'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4007110774184dce9a8ef9ec2d7c286d'
    )
    .then((response) => res.send(response.data.articles));
});

server.use('/api', app);

server.listen(3002, () => {
  console.log('Port 3002');
});
