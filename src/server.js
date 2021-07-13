const express = require('express');
const config = require('./config');
const server = express();
const axios = require('axios');
const cors = require('cors');
const API_KEY = config.apiKey;

server.use(cors());

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

module.exports = server;

