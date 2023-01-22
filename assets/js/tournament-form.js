document.addEventListener('DOMContentLoaded', () => {


	function signInMember(member) {


		const members = [];

		function print(person) {

			let result = document.getElementById('result');

			const template = `
				<div class="firstName">
					<span>${person.firstName}</span>
				</div>

				<div class="lastName">
					<span>${person.lastName}</span>
				</div>

				<div class="email">
					<span>${person.email}</span>
				</div>

				<div class="age">
					<span>${person.age}</span>
				</div>
				
				<div class="game">
					<span>${person.game}</span>
				</div>
			`;


			const div = document.createElement('div');
			div.classList.add('person');
			div.innerHTML = template;

			result.append(div);

		}


		this.member = member;



		this.addMember = function(person) {
			if (typeof person !== 'object' && person.constructor.name !== 'Person') {
				console.error('You are trying to add object that is not Person!');
				return;
			}

			members.push(person);

			print(person);
		}


	}


	function Person(firstName, lastName, age, email, game) {
		
		if (typeof firstName !== 'string' && !firstName) {
			console.error('Object Person: name is not a string or it is empty!');
			return null;
		}

		if (typeof lastName !== 'string' && !lastName) {
			console.error('Object Person: lastName is not a string or it is empty!');
			return null;
		}

		if (typeof age !== 'number' && age < 0 && isNaN(age)) {
			console.error('Object Person: age is not a number or it is empty!');
			return null;
		}


		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.age = age;
		this.game = game;

	};



	var person = new signInMember('member');


	function initForm() {
		const form = document.getElementById('tournament');

		if (!form) {
			throw new Error('Form is missing');
		}

		
		function clearForm(form) {
			for(let element of form) {
				
				if (
					element.getAttribute('name') === 'firstName' ||
					element.getAttribute('name') === 'lastName' || 
					element.getAttribute('name') === 'email' || 
					element.getAttribute('name') === 'age') {
						element.value = '';
					}
					
					if (element.getAttribute('name') === 'game') {
						element.value = '';
					}
					
				}
			}
			
			
		form.addEventListener('submit', function(event) {
			event.preventDefault();
			const data = new FormData(form);
			const parsedData = {};


			for (const pair of data.entries()) {
				parsedData[pair[0]] = pair[1];
			}

			if (typeof firstName !== 'string' && !firstName) {
				console.error('Object Person: name is not a string or it is empty!');
				alert('hello');
				return;
			}
	
			if (typeof lastName !== 'string' && !lastName) {
				console.error('Object Person: lastName is not a string or it is empty!');
				return null;
			}
	
			if (typeof age !== 'number' && age < 0 && isNaN(age)) {
				console.error('Object Person: age is not a number or it is empty!');
				return null;
			}
			
			
			person.addMember(new Person(parsedData.firstName, parsedData.lastName, parsedData.email, parsedData.age, parsedData.game));
			clearForm(form);
		});	
	}	

	initForm();	

});