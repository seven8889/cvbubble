$(function(){
	//Canvas ProToType
	function Canvas(param)
	{
		this.obj = param.obj,
		this.context = this.obj[0].getContext('2d');
	}


	Canvas.prototype = {
		//笔触颜色
		strokeStyle : function(style)
		{
			this.context.strokeStyle = style;
			return this;
		},

		//笔触宽度
		lineWidth : function(number)
		{
			this.context.lineWidth = number;
			return this;
		},

		//设置颜色
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

		//位移图形
		translate : function(x,y)
		{
			this.context.translate(x,y);
			return this;
		},

		//缩放图形
		scale : function(x,y)
		{
			this.context.scale(x,y);
			return this;
		},

		//旋转图形
		rotate : function(number)
		{
			this.context.rotate(number)
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
		},




		//文本设置
		font : function(style)
		{
			this.context.font = style;
			return this;
		},

		//绘制文本并填充
		fillText : function(text,x,y)
		{
			this.context.fillText(text,x,y);
			return this;
		},

		//绘制只有边框的文本
		strokeText : function(text,x,y)
		{
			this.context.strokeText(text,x,y);
			return this;
		},




		//保存画布
		save : function()
		{
			this.context.save();
			return this;
		},

		//恢复画布
		restore : function()
		{
			this.context.restore();
			return this;
		},




		//重置画布
		resetCanvas : function()
		{
			this.obj.attr('width',this.obj.width());
			this.obj.attr('height',this.obj.height());
		}
	}


	var canvas = new Canvas({
		obj : $('#bubble')
	})

	canvas.fillStyle('#FFF000').fillRect(50,50,100,100);
	canvas.strokeStyle('#FF0000').lineWidth(1).strokeRect(0,0,50,50);
	canvas.beginPath().lineWidth(10).moveTo(40,40).lineTo(340,40).closePath().stroke();
	canvas.beginPath().arc(200,200,100,0,Math.PI/2,false).lineTo(200,200).closePath().fill();
	canvas.strokeStyle('').lineWidth(1).font('italic 50px serif').strokeText('HELLO',30,30);
	canvas.resetCanvas();
	canvas.fillStyle('#FFF000').save().fillRect(50,50,100,100);

	canvas.restore().fillRect(100,100,100,100);

	canvas.fillStyle('#FF0000').translate(50,50).fillRect(300,300,100,100);

	canvas.fillStyle('#FF0000').fillRect(0,0,100,100);
	canvas.resetCanvas();

	canvas.save()
		  .translate(100,100).scale(2,2).fillRect(0,0,100,100)
		  .restore().rotate(Math.PI/4).fillRect(0,0,100,100);
})