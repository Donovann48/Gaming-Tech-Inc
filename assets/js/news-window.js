document.addEventListener('DOMContentLoaded', () => {
	const windowFrame = document.querySelectorAll('.window');
	const windowAdd = document.getElementsByClassName('cont-block');
	const exit = document.getElementsByClassName('exit-button')
	var classShow = 'show';

	
	function windowOpener() {

		const items = Array.from(windowAdd);
    	// add click event listener for each content window
    	items.forEach( ( element, index ) => {
        	element.addEventListener("click", () => {
            	windowFrame[index].classList.add(classShow)
        	});
    	});
	}

	windowOpener();

	window.addEventListener('click', event => {
		if (event.target.classList.contains(classShow) || event.target.classList.contains('exit-button')) {
			for (var item of windowFrame) {
				item.classList.remove(classShow)
			}
		}
	})

})

