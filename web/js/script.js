function chat(){
  var socket = io();
  var messages = document.getElementById('messages');

  /* --- Get Comment ---- */
  socket.on('chat', function (msg) {
    var randnum = Math.floor( Math.random() * 80 );
    var comment = document.createElement('marquee');
    var size = 500;

    if(msg.charAt(0)=="."){
      comment.textContent = msg.substring(1,msg.length);
      comment.style.color ="#cc3333";
    }else{
      comment.textContent = msg;
      comment.style.color ="#000000";
    }

    comment.scrollAmount = 12 + msg.length;
    comment.loop = 1;
    comment.style.position = "absolute";
    comment.style.top = randnum.toString() + "%";
    comment.style.fontSize = size.toString() + "%";
    messages.appendChild(comment);
  });
}
