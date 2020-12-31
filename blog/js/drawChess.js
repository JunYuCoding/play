			var canvas = document.getElementById("myCanvas");
			var ctx = canvas.getContext("2d");
			for(var i = 1;i<=14;i++){
				ctx.moveTo(40,i*40);
				ctx.lineTo(560,i*40);
				ctx.stroke();
				
				ctx.moveTo(i*40,40);
				ctx.lineTo(i*40,560);
				ctx.stroke();
			}