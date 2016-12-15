'use strict';

const http = require('http');
const url = require('url');

function createServer () {
  const server = http.createServer((request, response) => {
    if (url.parse(request.url).pathname === '/withDelay') {
      response.writeHead(200, {'content-type': 'application-json'});
      response.end('With delay.');
    } else if (url.parse(request.url).pathname === '/withoutDelay') {
      response.writeHead(200, {'content-type': 'application-json'});
      response.end('Without delay.');
    }
  });
  console.log('Endpoints:');
  console.log('http://localhost:3000/withDelay');
  console.log('http://localhost:3000/withoutDelay');
  return server.listen(3000, 'localhost');
}

createServer();
