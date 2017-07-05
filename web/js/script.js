function chat(){
  var socket = io();
  var messages = document.getElementById('messages');

  /* --- Get Comment ---- */
  socket.on('chat', function (msg) {
    var randnum = 20 + Math.floor( Math.random() * 61 );
    var comment = document.createElement('Marquee');
    comment.textContent = msg;
    comment.loop = 1;
    comment.style.position = "absolute"
    comment.style.bottom = randnum.toString() + "%"
    messages.appendChild(comment);
  });
}
