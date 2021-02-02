const express = require('express');
const server = express();
const appRouter = express.Router();
const axios = require('axios');
const cors = require('cors');
const router = express.Router();

server.use(cors());

router.get('/news1', (req, res) => {
  axios
    .get(
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4007110774184dce9a8ef9ec2d7c286d'
    )
    .then((response) => res.status(200).send(response.data));
});

router.get('/news2', (req, res) => {
  axios
    .get(
      'http://newsapi.org/v2/everything?q=tesla&from=2021-01-02&sortBy=publishedAt&apiKey=4007110774184dce9a8ef9ec2d7c286d'
    )
    .then((response) => res.status(200).send(response.data));
});

server.use('/api', router);

server.listen(3002, () => {
  console.log('Port 3002');
});
