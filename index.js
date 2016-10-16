var io = require('socket.io-client');
var config = require("./config.json");
var socket = io(config.server);

socket.on('chat message', function(message) {
    console.log(message);
});

socket.emit('chat message', "Jai Shri Ram!");