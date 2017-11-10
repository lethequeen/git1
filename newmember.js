window.onload=function(){
	var name=document.getElementById('name_text');
    var warn1=document.getElementById('warn_1');
    var mima=document.getElementById('mima');
    var warn2=document.getElementById('warn_2');
    var color=document.getElementsByClassName('div1');
    var mima2=document.getElementById('mima2');
    var warn3=document.getElementById('warn_3');
    var num=document.getElementById('num');
    var warn4=document.getElementById('warn_4');
    var email=document.getElementById('num');
    var warn5=document.getElementById('warn_5');

   //昵称 
    name.onkeyup=function(){
       warn1.removeAttribute("hidden");
    }
    name.onblur=function(){
       var reg=/\w/i;
       if(reg.test(name.value)){
	       warn1.style.visibility="visible";
	       warn1.innerHTML="不符合要求，请重写！";
       }
    }



    //密码
    function getLength(str){
    return str.replace(/[^\x00-xff]/g,"xx").length;
    }
    mima.onfocus=function(){
       warn2.removeAttribute("hidden");
    }
    mima.onkeyup=function(){
    	mimalength=getLength(this.value);
    	if(mimalength<6){
            color[0].style.backgroundColor="red";
    	}
    	if(mimalength>6&&mimalength<10){
	    	color[0].style.backgroundColor="red";
	        color[1].style.backgroundColor="red";
    	}
    	if(mimalength>10){
	    	color[0].style.backgroundColor="red";
	        color[1].style.backgroundColor="red";
	        color[2].style.backgroundColor="red";
    	}
    }
    mima.onblur=function(){
       var reg=/^\w/i
       if(!reg.test(this.value)){
	       warn2.removeAttribute("hidden");
	       warn2.innerHTML="不符合要求，请重写！";
        }
    }



    //再次输入密码
    mima2.onblur=function(){
    	if(mima2.innerHTML!==mima.innerHTML){
           warn3.removeAttribute("hidden");
    	}
    }


    //电话
    num.onblur=function(){
    	var reg=/^1\d{10}$/;
    	if(!reg.test(this.value)){
          warn4.removeAttribute("hidden");
    	}
    }


    //邮箱
    email.onblur=function(){
    	var re= /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    	if(!re.test(this.value)){
           warn5.removeAttribute("hidden");
    	}
    }
}