var socket = io.connect();
socket.on('answers', function (data) {
  console.log(data);
  socket.emit('gum', { my: 'data' });
});
