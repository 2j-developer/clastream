function chat(){
  var msg = prompt( "メッセージ" , "入力欄のデフォルト値" );
//  var socket = io();
  var messages = document.getElementById('messages');


  //スペース減らし byたかねこ
  while(msg.indexOf("  ") != -1){
    msg = msg.replace("  "," ");
  }

  /* --- Get Comment ---- */
//  socket.on('chat', function (msg) {
    var randnum = Math.floor( Math.random() * 80 );
    var comment = document.createElement('marquee');
    var max = 60
    var param = msg.length < max ? msg.length : max ;
    var size = 400-param*2;
    var speed = 12+param;

    //alert(""+size);

    if(msg.charAt(0)=="."){
      comment.textContent = msg.substring(1,msg.length);
      comment.style.color ="#cccc33";
    }else{
      comment.textContent = msg;
    }

    comment.scrollAmount = speed;
//    comment.loop = 1;
    comment.style.top = randnum.toString() + "%";
    comment.style.fontSize = size.toString() + "%";
    messages.appendChild(comment);
//  });
}
