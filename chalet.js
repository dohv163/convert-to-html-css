document.addEventListener("DOMContentLoaded",function(){
// khai bao 
	var nutNext=document.querySelector('.nut .next'),
		nutPre=document.querySelector('.nut .pre'),
		slides=document.querySelectorAll('.slide ul li'),
		slideHienTai=0,
		soLuongSlide=slides.length;
		
// xu ly 
	var nextSlide= function(){
		var phanTuHienTai=slides[slideHienTai];
				console.log(phanTuHienTai)
				var ketThucHienTai=function(){
					console.log('slides hien tai da ket thuc lafm gi lam di')
					this.classList.remove('show')
			}
			phanTuHienTai.addEventListener("webkitAnimationEnd", ketThucHienTai);
			if(slideHienTai<soLuongSlide-1){
				slideHienTai +=1;
			}
			else{
				slideHienTai=0;
			}
			
		var phanTuTiep=slides[slideHienTai];
		
		phanTuTiep.classList.add('show');
	}
	nutNext.addEventListener('click',nextSlide);


},false);