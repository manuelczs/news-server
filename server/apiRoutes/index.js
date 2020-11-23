const express = require('express');
const apiRoutes = express.Router();
const axios = require('axios');

apiRoutes.route('/').get((req, res) => {
  res.send('Api root');
});

apiRoutes.route('/newsfront').get((req, res) => {
  axios
    .get(
      'http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-23&sortBy=publishedAt&apiKey=4007110774184dce9a8ef9ec2d7c286d'
    )
    .then((response) => res.send(response.data.articles));
});

apiRoutes.route('/newsaside').get((req, res) => {
  axios
    .get(
      'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4007110774184dce9a8ef9ec2d7c286d'
    )
    .then((response) => res.send(response.data.articles));
});

module.exports = apiRoutes;
