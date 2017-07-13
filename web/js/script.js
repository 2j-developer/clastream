function chat(){
  var socket = io();
  var messages = document.getElementById('messages');

  /* --- Get Comment ---- */
  socket.on('chat', function (msg) {

    mesxst(msg);

  });
}

function createMarquee(msg){
  //タグ作る
  var comment = document.createElement('marquee');

  //スペース減らし byたかねこ
  //全角全角→半角
  while(msg.indexOf("　　") != -1){
    msg = msg.replace("　　","　");
  }
  //全角半角→半角
  while(msg.indexOf("　 ") != -1){
    msg = msg.replace("　 "," ");
  }
  //半角半角→半角
  while(msg.indexOf("  ") != -1){
    msg = msg.replace("  "," ");
  }

  //色コードチェック
  if(msg.charAt(0)=="."){
    for(i=0 ; i<ccode.length ; i++){
      if(msg.charAt(1)==ccode[i]){
        msg = msg.substring(2,msg.length);
        comment.style.color =color[i];
      }
    }
  }

  //色コードを引いた残りの文字数をチェック
  if(msg.length>0){
    //スクロールスピード
    var speed = 18+Math.sqrt(msg.length)*8;
    //文字サイズ(文字数によってサイズがマイナスにならないように)
    var size = 400 - (msg.length < max ? msg.length : max) * 2;
    comment.textContent = msg;
    comment.scrollAmount = speed;
    comment.loop = 1;
    if(Math.random()<0.5){
      comment.style.top = (Math.floor( Math.random() * 50 )).toString() + "%";
    }else{
      comment.style.bottom = (Math.floor( Math.random() * 50 )).toString() + "%";
    }
    comment.style.fontSize = size.toString() + "%";
    messages.appendChild(comment);
  }
}
function mesxst(msg){
  msg = popcheck(msg);
  createMarquee(msg);
}
