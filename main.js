const express = require('express');

const config = require('./config');

let server = express();

server.get('/', function(request, response) {
    response.send('Hello World!');
});

const conf = config.readConfig();

server.listen(conf.port, conf.host);

console.log('Server has been launched...');
