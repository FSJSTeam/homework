$(function(){
 

	// 给btn1添加点击
$(".btn1").click(function(){
//正整数 
var arr =[];
var reg =/^[1-9]*[1-9][0-9]*$/;  	
var ol = $("#ol").children().length;
var str='';
var wbk = $(".kg").val();

if(reg.test(wbk)){
for (var i = 0; i < wbk; i++) {
		str += (ol + 1);
}
	$("#ol").last().append("<li>" + (ol + 1) + "." + str + "</li>");
	$("li").css({"height":"50px","border-bottom":"1px solid grey"})
	
	
}
else{alert('输个整数吧大兄弟')}


})

// 给btn2添加删除
// $(".btn2").click(function(){

// })

})