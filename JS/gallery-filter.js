$(document).ready(function () {
	//Gallery Filters
	$('.gallery ul li a').on('click', function () {
		cat = $(this).attr('id');
		console.log($(this).attr('id'));
		$('.gallery .gallery-filter a.active').removeClass('active');
		$('.gallery .hide').each(function () {
			$(this).removeClass('hide');
		});

		$('.gallery .gallery-filter a#' + cat).addClass('active');
		if (cat != 'all') {
			console.log($('.gallery .gallery-item#' + cat));
			$('.gallery .gallery-item:not(#' + cat + ')').each(function () {
				$(this).addClass('hide');
			});
		}
	});
});