const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const axios = require('axios');
const cors = require('cors');
const router = express.Router();
const API_KEY = '4007110774184dce9a8ef9ec2d7c286d';

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get('/', (req, res) => {
  res.send('Welcome to my API');
});

server.get('/:request', (req, res) => {
  const request = req.params.request;
  if (request === 'news1') {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`
      )
      .then((response) => res.status(200).json(response.data))
      .catch((err) => console.log(err));
  } else if (request === 'news2') {
    axios
      .get(
        `http://newsapi.org/v2/everything?q=apple&from=2021-02-02&to=2021-02-02&sortBy=popularity&apiKey=${API_KEY}`
      )
      .then((response) => res.status(200).json(response.data))
      .catch((err) => console.log(err));
  }
});

server.listen(3002, () => {
  console.log('Port 3002');
});
