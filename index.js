/* index.js
This application run server */


/* --- require --- */
// Server
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
// Slack
var SlackBot = require('slackbots');
// Config
var Config = require('./config');


/* --- create a bot --- */
var bot = new SlackBot({
    token: Config.bots_token,
    name: 'clastream'
});

/* --- get request(open web) --- */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/web/index.html');
});

/* --- get request(get comment) --- */
/* get slack message */
/**
 * @param {object} data
 */
bot.on('message', function(data) {
    console.log(data);
    if(typeof data.text !== 'undefined' && data.channel === Config.channel_id) {
      // send to site
      io.emit('chat', data.text);
    }
});


/* --- run server --- */
server.on('listening', () => {
  console.log('listening on 8000');
});
server.listen(8000);

app.use('/js', express.static(__dirname + '/web/js'));
app.use('/css', express.static(__dirname + '/web/css'));
