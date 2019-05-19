const express = require('express');
const os = require('os');

const config = require('./config').server;

const server = express();

server.set('view engine', 'ejs');

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

server.listen(config.port, config.host, () => {
  console.log(`Server has been launched on http://${config.host}:${config.port}`);
});
