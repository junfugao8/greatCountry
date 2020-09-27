        var num=0;
        var timer=null;
        var timeout=null;
        $("ul li a").mouseenter(function(event){
            if(timeout){
                clearTimeout(timeout);
                timeout=null;
            }
            num=$(this).parent().index();
            timeout=setTimeout(changgeMg,100);
            return false;
        })
        $(".pic ul li a").mouseenter(function(){
            clearInterval(timer);
        })
        $(".pic ul li a").mouseleave(function(){
            timer=setInterval(changeTab,9000);
        })
        timer=setInterval(changeTab,9000);
        function changgeMg(){
            var a=document.getElementById('a').offsetWidth;
            var movePx=num*-a+"px";
            $(".inner").animate({"marginLeft":movePx},900);
            $("ul li").eq(num).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
        } 
        function changeTab(){            
            if (num<3){                
                num++;
            }else{
                num=0;
            }
             changgeMg();
        }