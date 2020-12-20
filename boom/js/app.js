var pukeName = new Array();     //52张扑克名字
var indexs = new Array();       //三个随机索引。
var puke = new Array();         //玩家手中的扑克牌[][]
var splitName = new Array();
var typeArr = new Array();
var digitalArr = new Array();
 
var music_open =1
function muteMusic(){
    if (music_open ==1)
    {
        Id$("music").muted=!Id$("music").muted;
        Id$("muteBtn").innerHTML = "取消静音";
        music_open = 0;
    }
    else{
        Id$("music").muted=!Id$("music").muted;
        Id$("muteBtn").innerHTML = "静音";
        music_open = 1;
    }
}
var music_change =1;
function changeMusic(){
    if(music_change ==1){
        Id$("music").src="./music/music_luoke.mp3";
        music_change=0;
    }
    else{
        Id$("music").src="./music/music_puke.mp3";
        music_change=1;
    }
}
function threeNumber(max){ 
    //需要避免取到重复的整数
    var randomNums=new Array();
    for(var i=0;i<3;i++){           //将三个随机整数放入数组
        randomNums.push( Math.floor(Math.random()*max+0) );   //输出 [0-52)之间的随机整数 floor向下取整。
    }
    if(randomNums[0]!=randomNums[1] && randomNums[1]!=randomNums[2]) //三个数不相等，返回数组
    {
        return randomNums;
    }
    else{                   //否则再执行这个函数
        return threeNumber(max);
    }
} 
var is_look = 0;
function look_puke(player){
    if(is_look==0){ //如果没看牌 点击后 展示牌
        for(var i=1;i<=3;i++){
            Id$("pic"+(i+3*(player-1))).src = "./imges/pukeImage/" + puke[player][i-1];
        }
        Id$("b"+player).innerHTML = "合上";
        is_look = 1;
    }
    else{
        for(var i=1;i<=3;i++){
            Id$("pic"+(i+3*(player-1))).src = "./imges/pukeImage/bg.png";
        }
        Id$("b"+player).innerHTML = "看牌";
        is_look = 0;
    }
   
}


function loading_puke(){
    pukeName = new Array();     //每次将其置空
    for(var i=2,j=0;i<=14;i++){     //扑克名字写入数组 02-14
        // (i >= 10 ? i: ("0"+i));
        j = i;
        if(j<10) j = "0"+i;
        else j = i;
        pukeName.push("heart_"+ (i >= 10 ? i: ("0"+i)) +".jpg");
        pukeName.push("club_"+ (i >= 10 ? i: ("0"+i)) +".jpg");
        pukeName.push("spade_"+ (i >= 10 ? i: ("0"+i)) +".jpg");
        pukeName.push("diamond_"+ (i >= 10 ? i: ("0"+i)) +".jpg");
        } 
    console.log("加载扑克牌完成！");
}

function delete_puke(){
    for(var i = 0;i<3;i++){     //对牌库进行删减3张
        if(indexs[i]==pukeName.length-1){
            pukeName.pop();
        }
        else{
            pukeName[indexs[i]]=pukeName[pukeName.length-1];
            pukeName.length--;
        }
    }
}

function Id$(id){
    return document.getElementById(id);
}
// function changeStyle(){
//     Id$("main").style.background = "grey";
// }
// function changeSeat(){
//     Id$("person1").style.backgroundImage = "url("+"../imges/player2.png"+")";
//     Id$("person2").style.backgroundImage = "url("+"../imges/player1.png"+")";
// }
function getTime(){
    var dNow = new Date();
	var dHours = dNow.getHours();
	var dMinutes = dNow.getMinutes();
    var dSeconds = dNow.getSeconds();
    var strTime = dHours;
    strTime += ((dMinutes<10) ? ":0" : ":") + dMinutes;
    strTime += ((dSeconds<10) ? ":0" : ":") + dSeconds;
    console.log(strTime);
    return strTime;
}
window.onload = function(){
    Id$("main").style.height = document.body.scrollHeight ;
    init_playerStake();
    getTime();
}
