$(function(){
   // 绑定事件
	$("#box").click(function(){
		//$("body").scrollTop(0);
		//$("html").scrollTop(0);
		// 滑上去隐藏 TOP
		var $this = $(this);
		$("body,html").animate({scrollTop:0},400,function(){
			$this.fadeOut("slow");
		});

	});
	$(window).scroll(function(){
		var top = $(this).scrollTop();
		if(top >= 100){
			$("#box").fadeIn("slow");
		}else{
			$("#box").fadeOut("slow");
		};

	});

});