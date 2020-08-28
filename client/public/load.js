$(document).ready(function () {
	$('.slider').slider({ full_width: true, indicators: false, height: '100vh' });
	$('.sidenav').sidenav();
	$('.join-btn').hover(function () {
		$(this).toggleClass('pulse');
	});
	$('#search-icon').click(function (e) {
		$('#search-icon').hide();
		$('#comp-menu').hide();
		$('#search-div').fadeIn();
		$('#search-txt').focus();
	});
	$('#close-icon').click(function (e) {
		$('#search-div').fadeOut();
		$('#comp-menu').fadeIn();
		$('#search-icon').fadeIn();
	});
	$('#search-txt').blur(function (e) {
		$('#search-div').fadeOut();
		$('#search-icon').fadeIn();
		$('#comp-menu').fadeIn();
	});

	$('.editorpick-button').click(function (e) {
		$('.editorpick-button').addClass('editorpickactive');
		$('.latest-button').removeClass('editorpickactive');
		$('.editorpick-content').css('display', 'block');
		$('.latest-content').css('display', 'none');
	});
	$('.latest-button').click(function (e) {
		$('.editorpick-button').removeClass('editorpickactive');
		$('.latest-button').addClass('editorpickactive');
		$('.latest-content').css('display', 'block');
		$('.editorpick-content').css('display', 'none');
	});
	$('.myreviews').carousel({
		numVisible: 5,
		shift: 55,
		padding: 10
	});
});
