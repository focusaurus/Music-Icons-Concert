var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('answers', { hello: 'world' });
  socket.on('gum', function (data) {
    console.log(data);
  });
});

angular.module('NoteWrangler', ['ngRoute', 'ngResource']);
