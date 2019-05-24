import config from './src/config/server';
import Server from './src/server';

class Application {
  constructor() {
    this.server = new Server(config);
  }

  exec() {
    this.server.run();
  }
}

(function main() {
  try {
    const app = new Application();
    app.exec();
  } catch (error) {
    console.error(error);
  }
}());
