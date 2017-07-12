function popcheck(msg){
  var spc = [": " , ":"];
  for(l=0;l<list.length;l++){
    for(s=0;s<2;s++){
      while(msg.indexOf(":"+list[l].toLowerCase()+""+spc[s]) != -1){
        createPop(l);
        msg = msg.replace(":"+list[l].toLowerCase()+""+spc[s],"");
        msg = msg.replace(":"+list[l].toLowerCase()+""+spc[s],"");
      }
      while(msg.indexOf(":"+list[l].toUpperCase()+""+spc[s]) != -1){
        createPop(l);
        msg = msg.replace(":"+list[l].toUpperCase()+""+spc[s],"");
      }
    }
  }
  return msg;
}
