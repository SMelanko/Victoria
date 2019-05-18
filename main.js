const express = require('express');

const config = require('./config');

let server = express();

let requestLogger = function(request, response, next) {
    console.log(`
        URL: ${request.url}
        Method: ${request.method}
    `);
    next();
};

server.use(requestLogger);

server.get('/', function(request, response) {
    response.send('Hello World!');
});

const conf = config.readConfig();

server.listen(conf.port, conf.host, function () {
    console.log(`Server has been launched on ${conf.host}:${conf.port}...`);
});
