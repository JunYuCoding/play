function init_log(){
    Id$("res").innerHTML = "欢迎来到欢乐炸金花😎😎😎";
}
function log(){
    return Id$("res").innerHTML;
}
function showAllBtn(){  //点击开始后执行的函数
    Id$("start").style.visibility = "hidden";       //开始按钮隐藏
    Id$("b1").style.visibility = "visible";         //玩家一显示 看牌按钮
    Id$("battle1").style.visibility="hidden";       //玩家一battle按钮不显示 ,玩家二第一次操作完可用
    Id$("giveup1").style.visibility = "visible";    //玩家一弃牌按钮
    //看牌显示
    Id$("b1").innerHTML = "看牌";
    Id$("b2").innerHTML = "看牌";
}
function hiddenAllBtn(){
    Id$("buttonArea1").style.visibility = "hidden";
    Id$("buttonArea2").style.visibility = "hidden";
}
function showPlayerBtn(player){ // 玩家一操作. 值为2时候玩家二操作.
    if(player==1){
        Id$("buttonArea1").style.visibility = "visible"; //初始玩家一按钮面板可见
        Id$("buttonArea2").style.visibility = "hidden"; //玩家二隐藏。
    }
    else{
        Id$("buttonArea2").style.visibility = "visible"; 
        Id$("buttonArea1").style.visibility = "hidden"; 
    }
    return;
}
function start(){       //开始发牌,每人3张背面牌
    init_log();
    init_stake();
    loading_puke();
    player_init();
    showAllBtn();
    showPlayerBtn(1);

    Id$("res").innerHTML = log()+"<br>"+getTime()+":对局已经开始..."; 
    Id$("res").innerHTML = log()+"<br>"+getTime()+":现在是玩家一回合"; 
}

function getnNoRepeatElem(str){//获得含三个元素的数组中没重复（单独）的元素
    if(str[0]==str[1])
    return str[2];
    else
    return str[0];
}
function combat(obj){
    battle(obj.id.charAt(6)); //判断是谁选择battle
    //判断特殊情形，235>TYPE 6
    if(judgeType(1)==6&&digitalArr[2][0]==5&&digitalArr[2][1]==3&&digitalArr[2][2]==2){
        Id$("res").innerHTML = log()+"<br>"+getTime()+":玩家二胜利！游戏结束"; 
        winner(2);
        return;
    }
    else if(judgeType(2)==6&&digitalArr[1][0]==5&&digitalArr[1][1]==3&&digitalArr[1][2]==2){
        Id$("res").innerHTML = log()+"<br>"+getTime()+":玩家一胜利！游戏结束"; 
        winner(1);
        return;
    }
    //接下来正常情况
    if(judgeType(1) > judgeType(2)){
        Id$("res").innerHTML = log()+"<br>"+getTime()+":玩家一胜利！游戏结束"; 
        winner(1);
    }
    else if (judgeType(1) < judgeType(2)){
        Id$("res").innerHTML = log()+"<br>"+getTime()+":玩家二胜利！游戏结束"; 
        winner(2);
    }
    else
    {   
        if(judgeType(1)==2 &&judgeType(2)==2){  //都是对子的时候
            if(digitalArr[1][1]>digitalArr[2][1]){
                Id$("res").innerHTML = log()+"<br>"+getTime()+":玩家一胜利！游戏结束"; 
                winner(1);
            }
            else if(digitalArr[1][1]<digitalArr[2][1]){
                Id$("res").innerHTML = log()+"<br>"+getTime()+":玩家二胜利！游戏结束"; 
                winner(2);
            }
            else{   //中间牌相等的情况
                if(getnNoRepeatElem(digitalArr[1])>getnNoRepeatElem(digitalArr[2])){
                    Id$("res").innerHTML = log()+"<br>"+getTime()+":玩家一胜利！游戏结束"; 
                    winner(1);
                }
                else if (getnNoRepeatElem(digitalArr[1])<getnNoRepeatElem(digitalArr[2])){
                    Id$("res").innerHTML = log()+"<br>"+getTime()+":玩家二胜利！游戏结束"; 
                    winner(2);
                }
                else {
                    Id$("res").innerHTML = log()+"<br>"+getTime()+":双方一样，玩家一胜利！游戏结束"; 
                    winner(1);
                }
            }
        }
        else//散牌比较  A23特殊顺情况已在judgetype函数检验。
        {
            for(var i = 0;i<3;i++){
                if(digitalArr[1][i]>digitalArr[2][i]){
                    Id$("res").innerHTML = log()+"<br>"+getTime()+":玩家一胜利！游戏结束"; 
                    winner(1);
                    break;
                }
                else if(digitalArr[1][i]==digitalArr[2][i]){
                    continue;
                }
                else{
                    Id$("res").innerHTML = log()+"<br>"+getTime()+":玩家二胜利！游戏结束"; 
                    winner(2);
                    break;
                }
            }
        }
    }

    Id$("battle1").style.visibility="hidden";
    Id$("battle2").style.visibility="hidden";
    
}
function player_init(){    
    for(var i=1;i<=6;i++){      //玩家卡牌初始化为背面牌,并且发三张牌存入puke数组
        Id$("pic"+i).src="./imges/pukeImage/bg.png";
    }
    for(i=0;i<=2;i++){          
        puke[i]=new Array();        //将玩家手中的扑克牌置为空
        typeArr[i]=new Array();     //将玩家手中的扑克牌的 类型数组置为空
        digitalArr[i]=new Array();  //将玩家手中的扑克牌的 数字数组置为空
    }
    
    //玩家一扑克牌
    indexs = threeNumber(52);   //获得三个随机数。//给玩家一发牌
    for(var i=0;i<3;i++){
        puke[1][i] = pukeName[indexs[i]]; 
        splitName =puke[1][i].split("_");    //将玩家1 手牌拆分 前缀 牌的类型和后缀数字
        typeArr[1][i] = splitName[0];          
        digitalArr[1][i]   = parseInt( splitName[1].slice(0,2) );  
    } 
    delete_puke();  //执行 牌库删除三张已使用扑克牌

    //玩家二扑克牌
    indexs = threeNumber(49);   //获得三个随机数。//给玩家二发牌
    for(var i=0;i<3;i++){
        puke[2][i] = pukeName[indexs[i]];
        splitName =puke[2][i].split("_");    //将玩家2 手牌拆分 前缀 牌的类型和后缀数字
        console.log(indexs);
        typeArr[2][i] = splitName[0];          
        digitalArr[2][i]   = parseInt( splitName[1].slice(0,2) );
    }
    console.log("玩家二扑克牌已分配完成！");
    digitalArr[1]=sortArr(digitalArr[1]);
    digitalArr[2]=sortArr(digitalArr[2]);
    // console.log(typeArr[1]);
    // console.log(typeArr[2]);
    // console.log(digitalArr[1]);
    // console.log(digitalArr[2]);
}
function sortArr(arr){
    for(var i = 0,temp;i<3;i++){     //将其转换为    从大到小排好序
        for(j= 0;j<3;j++){
            if(arr[j] <= arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }    
        }
    }
    return arr;
}
function judgeType(player){   //判断player这副牌是什么类型
    var type = 1;
    var flag3 = 0;  //顺子
    var flag4 = 0;  //金花
    if (digitalArr[player][0]==digitalArr[player][1]&&digitalArr[player][1]==digitalArr[player][2]){
        type = 6;   //豹子
    }
    if(typeArr[player][0]==typeArr[player][1]&&typeArr[player][1]==typeArr[player][2]){
        type = 4;   //金花
        flag4 = 1;
    }
    if((digitalArr[player][0]-digitalArr[player][1])==1&&(digitalArr[player][1]-digitalArr[player][2]==1)){
        type = 3;   //顺子
        flag3 = 1;
    }
     //补充特殊顺子A23
    if(typeArr[player][0]==14&&typeArr[player][1]==2&&typeArr[player][2]==3){
        type = 3;   //顺子
        flag3 = 1;
    }
    if(flag3==1&&flag4==1){
        type = 5;   //同花顺
    }
    if(digitalArr[player][0]==digitalArr[player][1]||digitalArr[player][1]==digitalArr[player][2]){
        type = 2;   //对子
    }
    return type;
}
