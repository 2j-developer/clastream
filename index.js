/* index.js
This application run server */


/* --- require --- */
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');
var SlackBot = require('slackbots');

// create a bot
var bot = new SlackBot({
    token: 'bots_token',
    name: 'clastream'
});


/* --- get request(open web) --- */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/web/index.html');
});

/* --- get request(get comment) --- */
io.on('connection', (socket) => {

  /**
   * @param {object} data
   */
  bot.on('message', function(data) {
      if(typeof data.text !== 'undefined' && data.channel === 'channel_name') {
        io.emit('chat', data.text);
      }
  });
});

/* --- run server --- */
server.on('listening', () => {
  console.log('listening on 8000');
});
server.listen(8000);

app.use('/js', express.static(__dirname + '/web/js'));
