$(".gallery1").fancybox({
	"openEffect":"fade",
	"closeEffect ":"fade",
	"nextEffect":"fade",
	"prevEffect":"fade"
});

const linkAbout = document.getElementById("link-about");
linkAbout.addEventListener("click", function(event) {
	event.preventDefault();
	let eventHref  = this.getAttribute('href');
	let id = document.querySelector(eventHref);
	var top = id.offsetTop;
	//console.log(top);
	//window.scrollBy(0, top);
    document.body.animate({scrollTop: top}, 1500);
});

const btnMenu = document.querySelector(".menu");
const navMenu = document.querySelector("nav");
const hideMenu = document.querySelector(".hide-menu");

btnMenu.addEventListener("click", function(ev) {
	btnMenu.style = "display: none";
	navMenu.style = "display: block";
});

hideMenu.addEventListener("click", function(ev) {
	btnMenu.style = "display: block";
	navMenu.style = "display: none";
});
