$(function(){
	var flag = 0;
	var a = $("frame").children("a");
	var box = $("#photos");
	var white = $(".white");
	var boxwidth = -800;
	var whitewidth = 133.3333;
	function play(){
		flag = (flag>=5)?0:flag+1;
		var boxleft = boxwidth*flag;
		var whiteleft = whitewidth*flag;
		box.css("margin-left",boxleft+"px");
		white.css("left",whiteleft+"px");
	}
	var timer = setInterval(play,3000);
	$("#frame a").hover(function(){
		clearInterval(timer);
		var index = $(this).attr("flag");
		box.css("margin-left",boxwidth*index+"px");
		white.css("left",whitewidth*index+"px");
	},function(){
		flag = parseInt($(this).attr("flag"));
		timer = setInterval(play,3000);
	});


	$(".hlist").hover(function(){
		$(this).css("bottom","15px");
	},function(){
		$(this).css("bottom","0px");
	});
})






function select1 ()
{
	var ul=$("#hotnav").children("ul");
	var li=ul.children("li");
	var a =li.children("a");
	var a1 = $('+str+');
	a.removeClass("selected");
	$("#a1").toggleClass("selected");
	$("#hotbox").css("margin-left","0px");
} 

function select2 ()
{
	var ul=$("#hotnav").children("ul");
	var li=ul.children("li");
	var a =li.children("a");
	a.removeClass("selected");
	var width = $("#hot").width();
	$("#a2").toggleClass("selected");
	$("#hotbox").css("margin-left",-width+"px");
}

function select3 ()
{
	var ul=$("#hotnav").children("ul");
	var li=ul.children("li");
	var a =li.children("a");
	a.removeClass("selected");
	var width = $("#hot").width();
	$("#a3").toggleClass("selected");
	$("#hotbox").css("margin-left",-width*2+"px");
}


