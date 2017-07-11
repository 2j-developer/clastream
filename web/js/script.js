function chat(){
  var socket = io();
  var messages = document.getElementById('messages');

  /* --- Get Comment ---- */
  socket.on('chat', function (msg) {
    var randnum = 20 + Math.floor( Math.random() * 61 );
    var comment = document.createElement('maquee');
    var command = msg.substr(0,2);
    if(command=="@r"){
        comment.textContent = msg.substring(2,msg.length);
        comment.style.color ="#993333";
    }else{
        comment.textContent = msg;
        comment.style.color ="#000000";
    }
    comment.style.position = "absolute";
    comment.style.left = "0%";
    comment.style.top = randnum.toString() + "%";
    comment.style.loop = 1;
    messages.appendChild(comment);
  });
}
