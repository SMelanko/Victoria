import express from 'express';

import { server as config } from './config';

const server = express();

server.set('view engine', 'ejs');

server.use('/api', require('./api/routes'));

server.use('/public', express.static('public'));

server.listen(config.port, config.host, () => {
  console.log(`Server has been launched on http://${config.host}:${config.port}/api`);
});
