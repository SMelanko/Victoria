'use strict';

const fs = require('fs');

function readConfig(filename = 'config.json') {
    let config = JSON.parse(fs.readFileSync(filename));
    console.log(JSON.stringify(config, undefined, 2));

    return config;
}

module.exports = {
    readConfig: readConfig
};
