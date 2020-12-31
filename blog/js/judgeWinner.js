
function haveFivecode(){
	var hcount = 1;		// 横向判断
	var vcount = 1;		// 纵向判断
	var leftcount=1;	// 左丿判断
	var rightcount=1;	// 右\判断
	var currentState = isClicked[x][y];
	for(var i = y-1;i>=0;i--) //当前位置往左
	{
		if(isClicked[x][i]==0 || isClicked[x][i]!=currentState){
			console.log("当前位置颜色"+currentState);
			console.log("当前位置前一位"+isClicked[x][i]);
			break;
		}
		else{
			hcount++;
		}
	}
	for(var i = y+1;i<=13;i++) //当前位置往右
	{
		if(isClicked[x][i]==0 || isClicked[x][i]!=currentState)
			break;
		else
			hcount++;
	}
	console.log("有多少一样颜色："+hcount);
	if(hcount>=5)
		return true;
		
	
	for(var i = x-1;i>=0;i--) //当前位置往上
	{
		if(isClicked[i][y]==0 || isClicked[i][y]!=currentState){
			
			break;
		}
		else{
			vcount++;
		}
	}
	for(var i = x+1;i<=13;i++) //当前位置往下
	{
		if(isClicked[i][y]==0 || isClicked[i][y]!=currentState)
			break;
		else
			vcount++;
	}
	if(vcount>=5)
		return true;
		
	
	for(var i = x+1,j=y-1;i<=13&&j>=0;i++,j--) //当前位置往左下方
	{
		if(isClicked[i][j]==0 || isClicked[i][j]!=currentState){
			
			break;
		}
		else{
			leftcount++;
		}
	}
	for(var i = x-1,j=y+1;i>=0&&j<=13;i--,j++) //当前位置往右上方
	{
		if(isClicked[i][j]==0 || isClicked[i][j]!=currentState)
			break;
		else
			leftcount++;
	}
	if(leftcount>=5)
		return true;
		
	
	for(var i = x-1,j=y-1;i>=0&&y>=0;i--,j--) //当前位置往左上方
	{
		if(isClicked[i][j]==0 || isClicked[i][j]!=currentState){
			
			break;
		}
		else{
			rightcount++;
		}
	}
	for(var i = x+1,j=y+1;i<=13&&y<=13;i++,j++) //当前位置往右下方
	{
		if(isClicked[i][j]==0 || isClicked[i][j]!=currentState)
			break;
		else
			rightcount++;
	}
	if(rightcount>=5)
		return true;	
}