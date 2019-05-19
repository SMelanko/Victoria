const fs = require('fs');

function readConfig(filename = 'config.json') {
  const config = JSON.parse(fs.readFileSync(filename));

  return config;
}

module.exports = {
  readConfig,
};
