﻿$(function() {
	$("#add").bind("click", function() {
		var in_value = $("#num").val();
		var lis = $("#container").children().length;
		var str = "";
		if (isNaN(in_value) || in_value <= 0) {
			alert('请输入正整数')
		} else {
			if (in_value > 200) {
				alert("太特么大了！！！");
			} else {
				var checkNum = /^[0-9]*[1-9][0-9]*$/;
				if (checkNum.test(in_value)) {
					for (var i = 0; i < in_value; i++) {
						str += (lis + 1);
					}
					$("#container").last().append("<li>" + (lis + 1) + "." + str + "</li>");
				} else {
					alert("兄弟，是正整数啊!");
				}
			}
		}
	});

	$("#delete").click(function() {
		var lis = $("#container").children().length;
		if (lis > 0) {
			$("#container").children().last().remove();
		} else {
			alert("啥都没有，删个毛啊！");
		}
	});
})