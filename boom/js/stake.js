
function init_stake(){        //庄家money初始化,游戏开始时start()
    Id$("stake").innerHTML="20";  //庄家
   //玩家对应减少
   var surplse1 = Id$("stake1").innerHTML; //玩家剩余money
   var surplse2 = Id$("stake2").innerHTML; //玩家剩余money
   Id$("stake1").innerHTML = eval(surplse1) -10;
   Id$("stake2").innerHTML = eval(surplse2) -10;
}
function init_playerStake(){ //玩家money 初始化 onload()
    Id$("stake1").innerHTML="1000";  //玩家一 二初始1000  开始之后每人减少10
    Id$("stake2").innerHTML="1000";  //
}

function add_stake(player,money){
    var surplse = Id$("stake"+player).innerHTML; //玩家剩余money
    var initMoney = Id$("stake").innerHTML;     //庄家money

    if(surplse < money){                //如果money不够，不允许加注
         alert("请充值");
        return;
    }
    Id$("stake").innerHTML = eval(initMoney) + eval(money);//parseInt
    //谁加注，对应减少money
    Id$("stake"+player).innerHTML = eval(surplse) - eval(money);
    if(player==1)
        Id$("res").innerHTML = log()+"<br>"+getTime()+":玩家一加注￥"+money; 
    else 
        Id$("res").innerHTML = log()+"<br>"+getTime()+":玩家二加注￥"+money; 
}
function winner(player){
    var surplse = Id$("stake"+player).innerHTML; //玩家剩余money
    var initMoney = Id$("stake").innerHTML;     //庄家money
    Id$("stake"+player).innerHTML = eval(surplse) + eval(initMoney);
    //赢了之后 对局结束
}
function out(player){
    if(player==1){
        Id$("res").innerHTML = log()+"<br>"+getTime()+":玩家一弃牌，玩家二胜利！游戏结束！"; 
        winner(2);
        Id$("start").style.visibility = "visible";        
       
    }   
    else{
        Id$("res").innerHTML = log()+"<br>"+getTime()+":玩家二弃牌，玩家一胜利！游戏结束！"; 
        winner(1);
        Id$("start").style.visibility = "visible";  
    }

}