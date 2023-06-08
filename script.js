const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const breed = document.querySelector('.breed');
const p = document.querySelector('p');
const button = document.querySelector('button');
const puppy = document.querySelector('.puppy');
const URL = 'https://dog.ceo/api/breeds/image/random';

const start = () => {
	puppy.classList.add('hide');

	const loadDog = async () => {
		const result = await fetch(URL).then((res) => res.json());
		const dogUrl = result.message;
		const breed = dogUrl.split('/');
		const myBreed = breed[4];
		const letters = () => {
			if (myBreed.includes('-')) {
				let newName = myBreed.replace('-', ' ');
				p.textContent = p.textContent = `breed:  ${newName}`;
			} else {
				console.log(myBreed);
				p.textContent = `breed:  ${myBreed}`;
			}
		};

		letters();
		one.classList.remove('before');
		one.classList.add('one');
		one.classList.add('src');
		one.setAttribute('src', result.message);
	};

	loadDog();
};

button.addEventListener('click', start);
