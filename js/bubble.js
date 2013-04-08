$(function(){
	//new Bubble Canvas
	function Canvas(param)
	{
		this.obj = param.obj,
		this.context = this.obj[0].getContext('2d');
	}


	Canvas.prototype = {
		//线的颜色
		strokeStyle : function(style)
		{
			this.context.strokeStyle = style;
			return this;
		},

		//线的宽度
		lineWidth : function(number)
		{
			this.context.lineWidth = number;
			return this;
		},

		//设置填充颜色
		fillStyle : function(style)
		{
			this.context.fillStyle = style;
			return this;  
		},

		//填充颜色
		fill : function()
		{
			this.context.fill();
			return this;
		},

		//开始路径
		beginPath : function()
		{
			this.context.beginPath();
			return this;
		},

		//结束路径
		closePath : function()
		{
			this.context.closePath();
			return this;
		},

		//绘制路径
		stroke : function()
		{
			this.context.stroke();
			return this;
		},





		//绘制矩形
		fillRect : function(x,y,w,h)
		{
			this.context.fillRect(x,y,w,h);
			return this;
		},






		//绘制只有边框的矩形
		strokeRect : function(x,y,w,h)
		{
			this.context.strokeRect(x,y,w,h);
			return this;
		},





		//线条起点
		moveTo : function(x,y)
		{
			this.context.moveTo(x,y);
			return this;
		},

		//线条断点
		lineTo : function(x,y)
		{
			this.context.lineTo(x,y);
			return this;
		},





		//绘制一个圆弧
		arc : function(x,y,radius,startAngle,endAngle,anticlockwise)
		{
			this.context.arc(x,y,radius,startAngle,endAngle,anticlockwise)
			return this;
		}
	}


	var canvas = new Canvas({
		obj : $('#bubble')
	})

	canvas.fillStyle('#FFF000').fillRect(50,50,100,100);
	canvas.strokeStyle('#FF0000').lineWidth(1).strokeRect(0,0,50,50);
	canvas.beginPath().lineWidth(10).moveTo(40,40).lineTo(340,40).closePath().stroke();
	canvas.beginPath().arc(200,200,100,0,Math.PI/2,false).lineTo(200,200).closePath().fill();


})