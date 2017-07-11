function chat(){
//マージするときはこの下の行はコメントアウト
  var msg = prompt( "" , "流すメッセージを入力" );

//  var socket = io();
  var messages = document.getElementById('messages');

  /* --- Get Comment ---- */
//  socket.on('chat', function (msg) {

    if(msg == ":fire:"){
      createPop(0);
    }else{
      createMarquee(msg);
    }

//  });
}

function createMarquee(msg){
  //タグ作る
  var comment = document.createElement('marquee');
  var max = 60;
  var ccode = ["r","y","g","b"];
  var color = ["#ff3300","#ffff22","#33ff22","#1166ff"];

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
    var param = msg.length < max ? msg.length : max ;
    comment.textContent = msg;
    comment.scrollAmount = (12+param);
//    comment.loop = 1;
    comment.style.top = (Math.floor( Math.random() * 85 )).toString() + "%";
    comment.style.fontSize = (400-param*2).toString() + "%";
    messages.appendChild(comment);
  }
}

function createPop(num){
  var pop = document.createElement('img');
  var list = ["fire.png"];
  var i = 0;
  while(document.getElementById("pop" + i)){i++;}
  pop.id = "pop" + i;
  pop.src = "./icons/" + list[num];
  if(Math.random()<0.5){
    pop.style.top = (Math.floor( Math.random() * 50 )).toString() + "%";
    pop.style.left = (Math.floor( Math.random() * 50 )).toString() + "%";
  }else{
    pop.style.bottom = (Math.floor( Math.random() * 50 )).toString() + "%";
    pop.style.right = (Math.floor( Math.random() * 50 )).toString() + "%";
  }
  messages.appendChild(pop);
  setTimeout("killPop("+ i +")",5000);
}
function killPop(num){
  var popid = document.getElementById("pop"+num);
  popid.parentNode.removeChild(popid);
}
