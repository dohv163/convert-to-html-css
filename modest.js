
// javascript thuan 
/*document.addEventListener("DOMContentLoaded",function(){
	var clickmenu=document.getElementById('togglemenu'),
		menu=document.getElementById('menu');

		clickmenu.onclick=function(){
			menu.classList.toggle('menu-responsive')
		}

},false);
*/
$(function(){

	$('.toggle-menu').click(function(event) {
		console.log("da click");
		$('.menu').toggleClass('menu-responsive');
		
	});
	$('.menu ul li:nth-child(2) a').on('click', function(event) {
		event.preventDefault();
			console.log("click roi")
		$('body').animate({scrollTop: $('.about').offset().top}, 1000)
	});
});
