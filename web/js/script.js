function chat(){
//マージするときはこの下の行はコメントアウト
  var msg = prompt( "" , "流すメッセージを入力" );

//  var socket = io();
  var messages = document.getElementById('messages');

  /* --- Get Comment ---- */
//  socket.on('chat', function (msg) {

    createMarquee(msg);

//  });
}

function createMarquee(msg){
  //タグ作る
  var comment = document.createElement('marquee');
  var max = 60;
  var ccode = ["r","y","g","b"];
  var color = ["#ff3300","#ffff22","#33ff22","#1166ff"];

  //スペース減らし byたかねこ
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
    var param = msg.length < max ? msg.length : max ;
    comment.textContent = msg;
    comment.scrollAmount = (12+param);
    comment.loop = 1;
    comment.style.top = (Math.floor( Math.random() * 85 )).toString() + "%";
    comment.style.fontSize = (400-param*2).toString() + "%";
    messages.appendChild(comment);
  }
}
