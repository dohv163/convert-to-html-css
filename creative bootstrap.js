$(window).scroll(function(){
	$('body').scrollTop();
	if($('body').scrollTop()>100){
		$('.navbar-default').addClass('menu')
	}
	else
		$('.navbar-default').removeClass('menu')
})