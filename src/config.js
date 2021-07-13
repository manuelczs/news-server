require('dotenv').config();

const config = {
  port: process.env.PORT,
  apiKey: process.env.API_KEY
}

module.exports = config;