/* index.js
This application run server */


/* --- require --- */
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

/* --- get request(open web) --- */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/web/index.html');
});

/* --- get request(get comment) --- */
io.on('connection', (socket) => {
  socket.on('chat', (msg) => {
    io.emit('chat', msg);

      fs.appendFile('comments.list', msg + "\n")
  });
});

/* --- run server --- */
server.on('listening', () => {
  console.log('listening on 8000');
});
server.listen(8000);

app.use('/js', express.static(__dirname + '/web/js'));
