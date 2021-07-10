$(document).ready(function () {

	if ($(window).width() > 640) { //set up breaking point
	//Parallax Animations

	var scene = document.getElementById('parallax-1');
	var parallaxInstance = new Parallax(scene, {
		relativeInput: true
	});
	}
	
});