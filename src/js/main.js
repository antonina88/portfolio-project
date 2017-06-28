$(document).ready(function(){
	$(".navigation").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body').animate({scrollTop: top}, 1500);
	});

	const btnMenu = document.querySelector(".menu");
	const navMenu = document.querySelector("nav");
	const hideMenu = document.querySelector(".hide-menu");
	btnMenu.addEventListener("click", function(ev) {
		btnMenu.style = "display: none";
		navMenu.style = "display: block";
	});
	hideMenu.addEventListener("click", function(ev) {
		btnMenu.style = "display: inline-block";
		navMenu.style = "display: none";
	});
});


