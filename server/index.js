const express = require('express');
const server = express();
const appRouter = express.Router();
const axios = require('axios');
const cors = require('cors');

server.use(cors());

server.get('/', (req, res, next) => {
  axios
    .get(
      'https://newsapi.org/v2/everything?q=bitcoin&from=2020-10-23&sortBy=publishedAt&apiKey=4007110774184dce9a8ef9ec2d7c286d'
    )
    .then((response) => res.status(200).send(response.data));
});

server.get('/api', (req, res) => {
  axios
    .get(
      'https://newsapi.org/v2/everything?q=bitcoin&from=2020-10-23&sortBy=publishedAt&apiKey=4007110774184dce9a8ef9ec2d7c286d'
    )
    .then((response) => res.status(200).send(response.data));
});

server.listen(3002, () => {
  console.log('Port 3002');
});
