import express from 'express';

class Server {
  constructor(config) {
    this.config = config;
    this.server = express();

    this.init();
  }

  init() {
    this.server.set('view engine', 'ejs');

    this.server.use('/api', require('./routes'));
    this.server.use('/public', express.static('../public'));
  }

  run() {
    this.server.listen(this.config.port, this.config.host, () => {
      console.log(`Server has been launched on http://${this.config.host}:${this.config.port}/api`);
    });
  }
}

export {
  Server as default,
};
