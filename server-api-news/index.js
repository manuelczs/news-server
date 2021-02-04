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
  const news = { news1: '', news2: '' };
  axios
    .get(`http://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}`)
    .then((response) => (news.news1 = response.data))
    .catch((err) => console.log(err))
    .then(
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`
        )
        .then((response) => {
          news.news2 = response.data;
          res.json(news);
        })
        .catch((err) => console.log(err))
    );
});

server.listen(3002, () => {
  console.log('Port 3002');
});
