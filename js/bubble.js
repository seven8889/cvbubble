$(function(){
	//new Bubble Canvas
	function Canvas(param)
	{
		this.obj = param.obj,
		this.context = this.obj[0].getContext('2d');

		// canvas.fillStyle = '#FF0000';
		// canvas.fillRect(40,40,100,100);	

		// canvas.fillStyle = '#FFF000';
		// canvas.strokeRect(0,0,50,50);
	}


	Canvas.prototype = {
		//绘制矩形
		fillRect : function(x,y,w,h)
		{
			this.context.fillRect(x,y,w,h);
			return this;
		},

		//填充颜色
		fillStyle : function(style)
		{
			this.context.fillStyle = style;
			return this;  
		}
	}


	var canvas = new Canvas({
		obj : $('#bubble')
	})

	canvas.fillStyle('#FFF000').fillRect(50,50,100,100);
})