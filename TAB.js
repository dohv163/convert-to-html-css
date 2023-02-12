$(function(){
	$('._4nut li').click(function(){
		$('._4nut li').removeClass('active')
		$(this).addClass('active')
		 x= $(this).index();
		 x+=1;
		 console.log(" vi tri cua phan tu duoc click la "+x);
		 $('._4noidung li').removeClass('show');
		 $('._4noidung li:nth-child('+x+')').addClass('show');
	})
	

})