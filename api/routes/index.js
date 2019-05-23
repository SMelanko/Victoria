import express from 'express';
import os from 'os';

const router = express.Router();

router.get('/', (request, response) => {
  response.render('index', {
    username: os.userInfo().username,
    os: {
      hostname: os.hostname(),
      platform: os.platform(),
      release: os.release(),
    },
  });
});

router.all('*', (request, response) => {
  response.status(404).send({ msg: 'Not found' });
});

module.exports = router;
