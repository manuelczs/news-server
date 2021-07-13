const server = require('./server');
const config = require('./config');

const init = () => {
  server.listen(config.port, () => {
    console.log(`Running on port: ${config.port}`);
  })
}

init();