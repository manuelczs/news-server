const express = require('express');
const app = express();
const apiRoutes = require('./apiRoutes');

app.get('/', (req, res) => {
  res.send('Express');
});

app.use('/news', apiRoutes);

app.listen(3002, () => {
  console.log('Port 3002');
});
