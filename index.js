/* index.js
This application run server */


function clastream_slackbot(){
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
  app.use('/icons', express.static(__dirname + '/web/icons'));
}

function electron_view(){
  var electron = require('electron');
  var app = electron.app;
  var BrowserWindow = electron.BrowserWindow;

  var mainWindow = null;

  app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
      app.quit();
  });

  app.on('ready', function() {

    // ブラウザ(Chromium)の起動, 初期画面のロード
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('https::/localhost:8000/');

    mainWindow.on('closed', function() {
      mainWindow = null;
    });
  });
}

setTimeout(clastream_slackbot, 0);
electron_view();
