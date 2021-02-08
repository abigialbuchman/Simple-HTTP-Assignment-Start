const http = require('http');
const htmlHandeler = require('./htmlResponse.js');
const textHandler = require('./textResponse.js');
const jsonHandler = require('./jsonResponse.js');
const imageHandler = require('./imageResponse.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);
  switch (request.url) {
    case '/':
      htmlHandeler.getIndex(request, response);
      break;
    case '/page2':
      htmlHandeler.getPage2(request, response);
      break;
    case '/hello':
      textHandler.getHello(request, response);
      break;
    case '/time':
      textHandler.getTime(request, response);
      break;
    case '/helloJSON':
      jsonHandler.getHelloJSON(request, response);
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(request, response);
      break;
    case '/dankmemes':
      imageHandler.getImage(request, response);
      break;
    default:
      htmlHandeler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1:${port}`);
