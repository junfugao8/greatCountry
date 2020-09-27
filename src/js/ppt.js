$(function(){
	$(window).resize(function(){
		var cheight = document.body.clientHeight;
		var li = $("#maxul").children("li");
		li.css("height",cheight+"px");
	});
	var num = 0;
	$("#pagenav a").click(function(){
		$("#pagenav a").children("li").attr("class","");
		$(this).children("li").attr("class","showborder");
		num = parseInt($(this).attr("num"));
		var value = -num*100;
		$("#maxul").css("top",value+"%");
	});
	

	document.body.onmousewheel = function (event) {
	    event = event || window.event;
	    if(event.wheelDelta<0)
	    {
	    	$("a[num='"+num+"']").children("li").attr("class","");
	    	num = num >= 5 ? 5 : num+1;
	    	$("#maxul").css("top",-num*100+"%");
	    	$("a[num='"+num+"']").children("li").attr("class","showborder");
	    }
	    else
	    {
	    	$("a[num='"+num+"']").children("li").attr("class","");
	    	num = num <= 0 ? 0 : num-1;
	    	$("#maxul").css("top",-num*100+"%");
	    	$("a[num='"+num+"']").children("li").attr("class","showborder");
	    }
	};
});



function size()
{
	var cheight = document.body.clientHeight;
	var li = $("#maxul").children("li");
	li.css("height",cheight+"px");
}