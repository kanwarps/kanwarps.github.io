$(document).ready(function () {

	// Contact Lottie Animation
	var animation = bodymovin.loadAnimation({
		container: document.getElementById('bm'), // Required
		path: 'assets/contact.json', // Required
		renderer: 'svg', // Required
		loop: true, // Optional
		autoplay: true, // Optional
	});

	// Contact Lottie Animation
	var animation2 = bodymovin.loadAnimation({
		container: document.getElementById('scanova-lottie'), // Required
		path: 'assets/scanova.json', // Required
		renderer: 'svg', // Required
		loop: true, // Optional
		autoplay: true, // Optional
	});

	// Banner Lottie Animation
	var animation3 = bodymovin.loadAnimation({
		container: document.getElementById('banner-lottie-1'), // Required
		path: 'assets/banner.json', // Required
		renderer: 'svg', // Required
		loop: true, // Optional
		autoplay: true, // Optional
	});
	var animation4 = bodymovin.loadAnimation({
		container: document.getElementById('banner-lottie-2'), // Required
		path: 'assets/bg.json', // Required
		renderer: 'svg', // Required
		loop: true, // Optional
		autoplay: true, // Optional
	});

});

