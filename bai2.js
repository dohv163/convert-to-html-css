/*$(function(){
	console.log('Hello !');
	var chieucao=$(window).height();
	console.log(chieucao);
	$('.top1').css({'height':chieucao})
	$(window).resize(
		function(){

			console.log("ban vừa chỉnh màn hình ");
			$('.top1').css({'height':chieucao})
			var chieucao=$(window).height();
		})
})*/
$(function(){
	console.log($('.top2').offset().top);
	$('.top1 a.btn.btn-default').click(function(){
		$('body').animate({scrollTop:$('.top2').offset().top});
		$('.menuphai').removeClass('ra');
		return false;
	})
	$('.n2').click(function(){
		$('body').animate({scrollTop:$('.foot').offset().top});
		$('.menuphai').removeClass('ra');

		return false;
	})
	$('.n1').click(function(){
		$('body').animate({scrollTop:0});
		$('.menuphai').removeClass('ra');

		return false;
	})
	$('.n3').click(function(){
		$('body').animate({scrollTop:$('.top3').offset().top});
		$('.menuphai').removeClass('ra');

		return false;
	})
	$('.n4').click(function(){
		$('body').animate({scrollTop:$('.map').offset().top});
		$('.menuphai').removeClass('ra');
		return false;
	})
});
	$(function(){
		
		$('.nutmenu').click(function(){
			$('.menuphai').addClass('ra');
			return false;
	});
		$('.menuphai .nut').click(function(){
			$('.menuphai').removeClass('ra');
			return false;
		})	

	});
