const socket =  require("ws");

const wsServer = new socket.Server({port : 8081});

wsServer.on('connection', ws => {
    console.log("client connected")
    ws.on('message',msg => {
        console.log(JSON.parse(msg.toString()))
    })
})