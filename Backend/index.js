const http = require("http")
const WebSocket = require('ws');

const routes = require("./routes")
const router = require("./router");
const { copyFileSync } = require("fs");

const app = http.createServer(async (req,res) => {
    await router(req,res,routes);
})

app.listen(8080 ,() => {
    console.log("server started!!");
})

var clients = [];

var wsServer = new WebSocket.Server({server : app, path : "/socket",  autoAcceptConnections: false});
// socket.on('request', function(request) {
//     var connection = request.accept('any-protocol', request.origin);
//     clients.push(connection);

// wsServer.on('connection', () => {
//     console.log("server")
//   }) 

// wsServer.on('connection', function(request) {
//     var connection = request.accept('any-protocol', request.origin);
//     clients.push(connection);
//     console.log("clients")
//     connection.on('message', function(message) {
//       //broadcast the message to all the clients
//       clients.forEach(function(client) {
//         client.send(message.utf8Data);
//       });
//     });
//   });
wsServer.broadcast = function broadcast(msg){
    wsServer.clients.forEach(function each(client){
      client.send(JSON.stringify(JSON.parse(msg.toString())));
    });
  };

wsServer.on('connection', async function(ws) {
    ws.on('message', function(message) {
        // console.log(JSON.parse(message.toString()));
        wsServer.broadcast(message)
    })
 });  