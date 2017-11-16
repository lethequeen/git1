var jia=document.querySelectorAll(".jia");
var jian=document.querySelectorAll(".jian");
var varnum=document.querySelectorAll('.varnum');
console.log(varnum[0].value);
console.log(jia);
console.log(parseInt(varnum[0].value)-1);

//数量的处理，酷酷的我哈哈哈哈哈哈哈哈哈
	jia.forEach(function(val, index){
		console.log(index);
		jia[index].onclick=function(){
			var newnum=parseInt(varnum[index].value)+1;
			varnum[index].setAttribute('value',newnum);
			totalnum1.innerHTML=parseInt(totalnum1.innerHTML)+1;
			varprice1();
			totalprice.innerHTML="$"+(parseInt(totalprice.innerHTML.substring(1))+100);
		}
	});
    jian.forEach(function(val, index){
		jian[index].onclick=function(){
			var newnum1=parseInt(varnum[index].value)-1;
			if(parseInt(varnum[index].value)>1){
				varprice1();
				
				totalnum1.innerHTML=parseInt(totalnum1.innerHTML)-1;
				totalprice.innerHTML="$"+(parseInt(totalprice.innerHTML.substring(1))-100);
		    }else{
				tablecontentbox.removeChild(tablecontent[index]);
			}
			varnum[index].setAttribute('value',newnum1);//这里有一个bug，不知道怎么回事儿，第一次减一的时候旁边的价格不变，但是总价是对的，所以减了之后多一百
		}
	});
//总数的处理
var totalnum1=document.getElementById('totalnum1');
var totalnum=0

function totalnumber(){
    for(var i=0;i<varnum.length;i++){
		totalnum+=parseInt(varnum[i].value);
	}
	console.log(totalnum);
	totalnum1.innerHTML=totalnum;
}
totalnumber();
console.log(totalnum);
//每个价格的处理
var varprice=document.querySelectorAll('.value');
function varprice1(){
	varprice.forEach(function(val, index){
		varprice[index].innerHTML="$"+(100*parseInt(varnum[index].value));
	});
}
varprice1();
//总的价格的处理
var totalprice=document.getElementById('totalprice');
var totalprice1=0
function totalprice2(){
	for(var j=0;j<varnum.length;j++){
	   totalprice1+=parseInt(varprice[j].innerHTML.substring(1));
	   console.log(varprice[j].innerHTML);
	   console.log(totalprice1);
	}
	console.log(totalprice1);
	totalprice.innerHTML="$"+(totalprice1);
}
totalprice2();

//删除按钮的处理;
var tablecontentbox=document.getElementById('tablecontent');
var tablecontent=document.querySelectorAll("#tablecontent table");
var delay=document.querySelectorAll(".removething");
console.log(tablecontent);
console.log(tablecontentbox);
console.log(delay);
function delaytable(){
	delay.forEach(function(val, index){
		delay[index].onclick=function(){
			tablecontentbox.removeChild(tablecontent[index]);
		}
	});
}
delaytable();