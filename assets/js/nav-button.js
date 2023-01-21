document.addEventListener('DOMContentLoaded', () => {
	
	function iniMobile() {
		var menuFrame = document.querySelector('nav[js-nav]');
		var menuButton = document.querySelector('.nav-button');

		if (!menuFrame || !menuButton) {
			return
		}

		menuButton.addEventListener('click', () => {
			var classOpen = 'open';
			if (
				menuFrame.classList.contains(classOpen)) {
				menuFrame.classList.remove(classOpen);
				// return;
			}				

			if (menuButton.classList.contains(classOpen)) {
				menuButton.classList.remove(classOpen);
				return;

			}

			menuFrame.classList.add(classOpen);
			menuButton.classList.add(classOpen);



		})


	}

	iniMobile();

})

