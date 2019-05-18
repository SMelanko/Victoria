'use strict';

const fs = require('fs');

function readConfig(filename = 'config.json') {
    let config = JSON.parse(fs.readFileSync(filename));
    console.log(config);

    return config;
}

module.exports = {
    readConfig: readConfig
};
