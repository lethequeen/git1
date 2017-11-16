




//图片轮番;
window.onload= function(){
    imagechange();
    section();
}

function imagechange(){
	var list=document.getElementById('list');
	function move(num){
        var location=parseInt(list.style.left)+num;
        list.style.left=location+"px";
        if(location<-1600){
        	list.style.left="-400px";
        }
        if(location>-400){
        	list.style.left="-1600px";
        }
	}
    var buttonl=document.getElementById('button-l');
	var buttonr=document.getElementById('button-r');

    
   //左右按钮 小点轮番;
    var buttons=document.getElementById("button").getElementsByTagName('span');
    var index=1;
    function clearclassname(){
        for(var i=0;i<buttons.length;i++){
            if(buttons[i].className=="on"){
                buttons[i].className="";
            }
        }
        buttons[index-1].className="on";
    }
    buttonl.onclick=function(){
        index-=1;
        if(index<1){
            index=4;
        }
        clearclassname();
        move(400);
    }
    buttonr.onclick=function(){
        index+=1;
        if(index>4){
            index=1;
        }
        clearclassname();
        move(-400);
    }


    var timer;
    function play(){
        timer=setInterval(function(){
            buttonr.onclick();
        },1000);
    }
    play();
    
    function stop(){
        clearInterval(timer);
    }
    list.onmouseover=stop;
    list.onmouseout=play;
    

    //小点定位;
    for(var i=0;i<buttons.length;i++){
        (function(i){
            buttons[i].onclick=function(){
                console.log(i);
                var clickindex=parseInt(this.getAttribute('index'));
                var offset=600*(index-clickindex);
                move(offset);
                clearclassname();
            }
        })(i)
    }
}






//头部日期
var date=new Date();
var topdate=document.getElementById('topdate');
var year=date.getFullYear();
var month=date.getMonth()+1;
var day=date.getDate();
console.log(date);
console.log(year);
console.log(month);
console.log(day);
topdate.innerHTML=year+'年'+month+'月'+day+'日';



//section的效果
function section(){
    var buttons=document.querySelectorAll("#sections li");
    var content=document.querySelectorAll(".sectiondiv");
    buttons.forEach(function(val, index){
        buttons[index].onclick=function(){
            for(var i=0;i<buttons.length;i++){
                buttons[i].className="";
                content[i].classList.remove("nohiddendiv");
            }
            buttons[index].className="nowon";
            content[index].classList.add("nohiddendiv");
        }
    })
}




