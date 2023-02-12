$(window).scroll(function(){
	
	vitri=$('body').scrollTop();
	console.log(vitri);
	if(vitri>200){
		$('.navbar-fixed-top').addClass('thunho');

	}
	else{
		$('.navbar-fixed-top').removeClass('thunho');
	}
})