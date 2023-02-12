$(function(){
	console.log("Hello !");
	// sử dụng hàm cuộc chuột để tính toán vị trí và di chuyển 
	$('.n1').click(function(){
		$('body').animate({scrollTop:$('#sanpham').offset().top});
	})
	$('.n2').click(function(){
		$('body').animate({
			scrollTop:$('#gioithieu').offset().top
		});
	})
	$('.n3').click(function(){
		$('body').animate({
			scrollTop:$('#contact').offset.top
		});
	})
	$(window).scroll(function(){
		console.log("You was scroll mouse !");
		vitri=$('body').scrollTop();
		console.log(vitri);
		if(vitri>300){
			$('.navbar-fixed-top').addClass('thunho');
		}
		else{
			$('.navbar-fixed-top').removeClass('thunho');
		}
	});
})