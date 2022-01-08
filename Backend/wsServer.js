const WebSocket = require('ws');

var wsServer = new WebSocket.Server({port : 8082});
wsServer.on('connection', () => {
  console.log("server")
}) 
