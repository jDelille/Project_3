//Form submit 
function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form has been submitted!")
}

let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);

//Img Event Listener
function imgCompliment() {
	let compliments = ['You are cool', 'You are a savage!', 'Coolest person I know.'];
	const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
	alert(randomCompliment);
}

let garfield = document.querySelector('.garfield');
garfield.addEventListener('mouseover', imgCompliment);