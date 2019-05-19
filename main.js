const express = require('express');
const os = require('os');

const config = require('./config');

const server = express();

server.set('view engine', 'ejs');

function requestLogger(request, response, next) {
  console.log(`
      URL: ${request.url}
      Method: ${request.method}
    `);
  next();
}

server.use(requestLogger);
server.use('/public', express.static('public'));

server.get('/', (request, response) => {
  response.render('index', {
    username: os.userInfo().username,
    os: {
      hostname: os.hostname(),
      platform: os.platform(),
      release: os.release(),
    },
  });
});

const conf = config.readConfig();

server.listen(conf.port, conf.host, () => {
  console.log(`Server has been launched on http://${conf.host}:${conf.port}`);
});
