var x,y;
var r = 15; 	//棋子半径大小
var state = 0; //0 1 2 空白 白棋 黑棋
var isClicked = new Array(); //棋子横坐标入
for(var i = 0; i<14 ; i++)		//把棋盘上每个位置赋予初始状态state=0
{
	isClicked[i] = new Array();
	for(var j = 0;j<14; j++){
		isClicked[i][j]= state; 
	}
}
function getPos(event)
{
	y=event.offsetX-40;
	x=event.offsetY-40; //与数组一致
	if(x%40 > r){
		x = parseInt(x/40) * 40 + 40;
	}else{
		x = parseInt(x/40) * 40;
	}
	if(y%40 > r){
		y = parseInt(y/40) * 40 + 40;
	}else{
		y = parseInt(y/40) * 40;
	}
	x = x/40;
	y = y/40;
	draw();
	if(haveFivecode()){
		var str = state==1?"黑棋胜":"白棋胜";console.log(str)
		document.getElementById("showInfo").innerHTML=str;
		document.getElementById("info").visibility="visible";
	}
}
state=1; //白棋先手
function draw()
{	
	if(isClicked[x][y]==0){
		if(state==1){
			ctx.fillStyle="white";
			state=2;
			isClicked[x][y]=1;
		}else if(state==2){
			ctx.fillStyle="black";
			state=1;
			isClicked[x][y]=2;
		}else{
			return ;
		}
	}else {
		return;
	}
	ctx.beginPath();
	ctx.arc(y*40+40,x*40+40,r,0,Math.PI*2);
	ctx.fill();
	ctx.closePath();
}

		