<script src='/assets/vendors/lib/socket.js'></script>
<script>
  var socket = io.connect('http://localhost');
  socket.on('answers', function (data) {
    console.log(data);
    socket.emit('gum', { my: 'data' });
  });
</script>
