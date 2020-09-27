		//nav 
  $(function(){
      $(".nav-a[flag='1']").attr('id','a');
      $("#a .btn").attr('id','active');
      $("#a .btn div .block").css({"background-color":"red"});
    	$(".nav-a").click(function(){
    		var flag = $(this).attr("flag");	
  		if(flag==0){
        $("#a .btn").removeAttr("id");
        $("#c .btn").removeAttr("id");
  			$(this).attr('id','b');
        $("#a .btn div .block").css({"background-color":"#c7c7c7"});
        $("#c .btn div .block").css({"background-color":"#c7c7c7"});
        $("#b .btn div .block").css({"background-color":"red"});
        $("#b .btn").attr('id','active');
  			$(".zhong1").css("display","block");
  			$(".zhong").css("display","none");
  			$(".zhong3").css("display","none");
        $(".zhong1 .left").animate({"width":"0%"},1000);
        $(".zhong1 .right").animate({"width":"0%"},1000);
        $(".zhong3 .tupian1").animate({"left":"125%"});
        $(".zhong3 .tupian2").animate({"left":"125%"});
        $(".zhong3 .tupian3").animate({"left":"125%"});
  		}
  		if(flag==1){
        window.history.go(0);
  		}
  		if(flag==2){
        $("#a .btn").removeAttr("id");
         $("#b .btn").removeAttr("id");
        $(this).attr('id','c');
        $("#c .btn").attr('id','active');
        $("#a .btn div .block").css({"background-color":"#c7c7c7"});
        $("#b .btn div .block").css({"background-color":"#c7c7c7"});
        $("#c .btn div .block").css({"background-color":"red"});
  			$(".zhong3").css("display","block");
  			$(".zhong").css("display","none");
  			$(".zhong1").css("display","none");
        $(".zhong3 .tupian1").animate({"left":"5%"},1000);
        $(".zhong3 .tupian2").animate({"left":"36%"},1000);
        $(".zhong3 .tupian3").animate({"left":"67%"},1000);


        $(".zhong1 .left").animate({"width":"50%"});
        $(".zhong1 .right").animate({"width":"50%"});

  		}
  	})
  })
  
  //zhong
	$(function(){	  
    $(".newdir .newdir2").animate({"height":"0%"},500);
		//left
		$(".newzhong .newleft").delay(500).animate({"width":"54%"},900);
		$(".newzhong .dir-newleft").mouseenter(function(){
			$(".newzhong .newleft").animate({"width":"0"},900);
			$(".newzhong .dir-newleft .dir-block").animate({"width":"300px"},700);
		});
		$(".newzhong .dir-newleft").mouseleave(function(){
			$(".newzhong .newleft").animate({"width":"54%"},900);
			$(".newzhong .dir-newleft .dir-block").animate({"width":"143px"},700);
		});


		//rigth
		$(".newzhong .newrigth").delay(500).animate({"width":"53%"},900);
		$(".newzhong .dir-newrigth").mouseenter(function(){
			$(".newzhong .newrigth").animate({"width":"0"},900);
			$(".newzhong .dir-newrigth .dir-block").animate({"width":"300px"},700);
		});
		$(".newzhong .dir-newrigth").mouseleave(function(){
			$(".newzhong .newrigth").animate({"width":"54%"},900);
			$(".newzhong .dir-newrigth .dir-block").animate({"width":"143px"},700);
		});
	});






