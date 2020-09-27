$(function(){
	var cwidth = document.body.clientWidth;
	var flag = 0;
	$(window).load(function(){
		cwidth = document.body.clientWidth;
		$(".box1div").css("width",cwidth+"px");
		$("#box2").css("width",cwidth*3+"px");
	});
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top>0)
		{
			$("#nav").attr("class","scol");
		}
		else
		{
			$("#nav").attr("class","");
		}
		if(top>150)
		{
			$("#mid1 img").css("width","100%");
		}
		else
		{
			$("#mid1 img").css("width","0%");
		}
		if (top>720)
		{
			$("#mid2 img").css("width","100%");
		}
		else
		{
			$("#mid2 img").css("width","0%");
		}
		if (top>1300)
		{
			$("#mid3 img").css("width","100%");
		}
		else
		{
			$("#mid3 img").css("width","0%");
		}
		console.log(top);
	});
	$(window).resize(function(){
		cwidth = document.body.clientWidth;
		$(".box1div").css("width",cwidth+"px");
		$("#box2").css("width",cwidth*3+"px");
	});
	$("#box1bullet div").click(function(){
		$("#box1bullet div").css("background-color","");
		$(this).css("background-color","#fff");
		var newwidth = -$(this).attr("flag")*cwidth;
		$("#box2").css("margin-left",newwidth+"px");
		flag = parseInt($(this).attr("flag"));
	});
	$(".box1div").hover(function(){
		$(".bullet").css("display","block");
	},function(){
		$(".bullet").css("display","none");
	});
	$("#box1bullet").hover(function(){
		$(".bullet").css("display","block");
	});
	$(".bullet").hover(function(){
		$(".bullet").css("display","block");
		clearInterval(timer);
	},function(){
		timer = setInterval(play,4000);
	});



	var timer = setInterval(play,4000);
	function play ()
	{
		flag = (flag>=2)?0:flag+1;
		$("#box1bullet div").css("background-color","");
		$("div [flag="+flag+"]").css("background-color","#fff");
		var awth = -flag*cwidth;
		$("#box2").css("margin-left",awth+"px");
		console.log(awth);
	}
});






function scrollto (num)
{
	$('body,html').animate({scrollTop: num}, 300);
}