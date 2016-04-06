//#menubox > #box.find(".items") > .class.find("class")>class>tag 	
$(function(){
	$(".menubox").find(".menuclick").click(function(){
		$(this).parent().toggleClass("selected").siblings().removeClass("selected");
		$(this).next().slideToggle("fast").end().parent().siblings().find(".submenu")
		.addClass("animated flipInX")	
		.slideUp("fast").end().find("i").text("+");
		var t = $(this).find("i").text();
		$(this).find("i").text((t=="+"?"-":"+"));
	});	
});