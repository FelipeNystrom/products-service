const server = require('express')();
const serverConfig = require('./serverConfig');
const mountRoutes = require('./_routes');

const _port = process.env.PORT || 9001;

serverConfig(server);
mountRoutes(server);

server.listen(_port, () => {
  console.log('product service is up and running on ' + _port);
});
