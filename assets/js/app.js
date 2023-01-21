document.addEventListener('DOMContentLoaded', () => {
	var slider = tns({
		container: '[js-slider]',

		items: 1,
		slideBy: 'page',
		
		// autoplay: true,
		// autoplayButtonOutput: 'true',
		controlsPosition: 'bottom',
		autoplayTimeout: '5000',

		navPosition: 'bottom',

		mouseDrag: true,
		touch: true,

		autoplayResetOnVisibility: true,
		controls: false,
		controlsText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>',
					  '<i class="fa fa-chevron-right" aria-hidden="true"></i>']
	})
})