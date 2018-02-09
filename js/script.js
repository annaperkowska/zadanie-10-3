$(function() {
	var carouselList = $("#carousel ul"); 
});

var image = $("#carousel ul li");

function changeImage() {
	carouselList.animate({marginLeft: -400}, 500, function moveFirstSlide () {
		var firstItem = carouselList.find("li:first");
		var lastItem =carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
});
}

setInterval(changeImage, 2500);
