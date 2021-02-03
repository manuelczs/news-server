const express = require('express');
const server = express();
const axios = require('axios');
const cors = require('cors');
const router = express.Router();
const API_KEY = '4007110774184dce9a8ef9ec2d7c286d';

server.use(cors());

router.get('/news1', (req, res, next) => {
  axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`
    )
    .then((response) => res.status(200).send(response.data));
});

router.get('/news2', (req, res, next) => {
  axios
    .get(
      `http://newsapi.org/v2/everything?q=apple&from=2021-02-02&to=2021-02-02&sortBy=popularity&apiKey=${API_KEY}`
    )
    .then((response) => res.status(200).send(response.data));
});

server.use('/', router);

server.get('/', (req, res) => {
  res.send('Welcome to my API');
});

server.listen(3002, () => {
  console.log('Port 3002');
});
