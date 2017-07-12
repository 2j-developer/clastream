function createPop(num){
  var pop = document.createElement('img');
  var i = 0;
  while(document.getElementById("pop" + i)){i++;}
  pop.id = "pop" + i;
  pop.src = "./icons/" + list[num] + ".png";
  if(Math.random()<0.5){
    pop.style.top = (Math.floor( Math.random() * 50 )).toString() + "%";
  }else{
    pop.style.bottom = (Math.floor( Math.random() * 50 )).toString() + "%";
  }
  if(Math.random()<0.5){
    pop.style.left = (Math.floor( Math.random() * 50 )).toString() + "%";
  }else{
    pop.style.right = (Math.floor( Math.random() * 50 )).toString() + "%";
  }
  messages.appendChild(pop);
  setTimeout("killPop("+ i +")",5000);
}
function killPop(num){
  var popid = document.getElementById("pop"+num);
  popid.parentNode.removeChild(popid);
}
