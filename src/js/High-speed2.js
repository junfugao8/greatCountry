
window.onload=function(){
  var btns=document.querySelectorAll(".Maximum .tou ul li");
      var div1 = document.getElementById("div1");
      var div2 = document.getElementById("div2");
      var div3 = document.getElementById("div3");
      var div4 = document.getElementById("div4");
      var divs=new Array();
      divs[0]=div2;
      divs[1]=div3;
      divs[2]=div4;
      var index=0;   
      btns[index].className="active1";
      for(var i=0;i<btns.length;i++){
          divs[i].style.display="none";
          btns[i].onclick=(function(i){
              return function(){   
                  for(var j=0;j<btns.length;j++){
                      if(j!==i){
                          btns[j].className=null;
                          divs[j].style.display="none";
                      }else{
                          btns[j].className="active1";
                          divs[j].style.display="block";
                      }    
                  }
              }
          })(i);
      }   
      divs[index].style.display="block";



    //div4
    var canvas,context;
        var img,
        imgIsLoaded,
        imgX=0,
        imgY=0,
        imgScale=0.165;
     
        (function int(){
            canvas=document.getElementById('canvas');
            context=canvas.getContext('2d');
            loadImg();
        })();
         
        function loadImg(){
             img=new Image();
            img.onload=function(){
                imgIsLoaded=true;
                drawImage();
            }
            img.src="images/ditu.gif";
        }
         
        function drawImage(){
                 context.clearRect(0,0,canvas.width,canvas.height);
           context.drawImage(img,0,0,img.width,img.height,imgX,imgY,img.width*imgScale,img.height*imgScale);
        }
         
        canvas.onmousedown=function(event){
            var pos=windowToCanvas(canvas,event.clientX,event.clientY);
            canvas.onmousemove=function(event){
                canvas.style.cursor="move";
                var pos1=windowToCanvas(canvas,event.clientX,event.clientY);
                var x=pos1.x-pos.x;
                var y=pos1.y-pos.y;
                pos=pos1;
                imgX+=x;
                imgY+=y;
                drawImage();
            }
            canvas.onmouseup=function(){
                canvas.onmousemove=null;
                canvas.onmouseup=null;
                canvas.style.cursor="default";
            }
        }
        canvas.onmousewheel=canvas.onwheel=function(event){
            var pos=windowToCanvas(canvas,event.clientX,event.clientY);
            event.wheelDelta=event.wheelDelta?event.wheelDelta:(event.deltaY*(-40));
            if(event.wheelDelta>0){
                imgScale*=2;
                imgX=imgX*2-pos.x;
                imgY=imgY*2-pos.y;
            }else{
                imgScale/=2;
                imgX=imgX*0.5+pos.x*0.5;
                imgY=imgY*0.5+pos.y*0.5;
            }
            drawImage();
        }
         
        function windowToCanvas(canvas,x,y){
            var bbox = canvas.getBoundingClientRect();
            return {
                x:x - bbox.left - (bbox.width - canvas.width) / 2,
                y:y - bbox.top - (bbox.height - canvas.height) / 2
            };
          }



          //div2

        var num=0;
        var timer=null;
        var timeout=null;
        $("#div2 #shudu ul li a").mouseenter(function(event){
            if(timeout){
                clearTimeout(timeout);
                timeout=null;
            }
            num=$(this).parent().index();
            timeout=setTimeout(changgeMg,100);
            return false;
        })
        $("#div2 #shudu ul li a").mouseenter(function(){
            clearInterval(timer);
        })
        $("#div2 #shudu ul li a").mouseleave(function(){
            timer=setInterval(changeTab,5000);
        })
        timer=setInterval(changeTab,3000);
        function changgeMg(){
            var movePx=num*-1100+"px";
            $(".inner").animate({"marginLeft":movePx},700);
            $("#div2 #shudu ul li").eq(num).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
        } 
        function changeTab(){            
            if (num<3){                
                num++;
            }else{
                num=0;
            }
             changgeMg();
        }
      }