// TAG NAME FORM EXIST
const form = document.getElementsByTagName('form');

// GET ELEMENTS BY ID
let email = document.getElementById('login-email');
let password = document.getElementById('login-pass');

// MESSAGE ALERT
let success = document.getElementById('message-text');
let wrong = document.getElementById('message-text');

// GET ELEMENTS BY TAG NAME
let label = document.getElementsByTagName('label');
let input = document.getElementsByTagName('input');

// TAGS VALIDATION
if (form.length === 0) {
	wrong.innerHTML = '<p>Please create a form</p>';
	wrong.style.display = 'contents';
}

if (label.length === 0) {
	wrong.innerHTML = '<p>Please create a label</p>';
	wrong.style.display = 'contents';
} else if (label.length < 2 || label.length > 2) {
	wrong.innerHTML =
		'<p>The form must have two labels as a minimum / maximum</p>';
	wrong.style.display = 'contents';
}

if (input.length === 0) {
	wrong.innerHTML = '<p>Please create a input</p>';
	wrong.style.display = 'contents';
} else if (input.length < 3 || input.length > 3) {
	wrong.innerHTML =
		'<p>The form must have three input as a minimum / maximum</p>';
	wrong.style.display = 'contents';
}

//VALIDATION STATE
function validationFunction() {
	// EMAIL INPUT VALIDATION
	if (email.value === '' || email.value === null) {
		wrong.innerHTML = '<p>Please enter your email</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		return;
	} else if (
		email.value.search(
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		) == -1
	) {
		wrong.innerHTML = '<p>The email entered is not valid</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		return;
	}

	// PASSWORD INPUT VALIDATION
	if (password.value === '' || password.value === null) {
		wrong.innerHTML = '<p>Please enter a password</p>';
		wrong.style.display = 'contents';
		wrong.style.color = '#e74c3c';
		return;
	}

	// SUCCESS VALIDATION
	else {
		success.innerHTML = '<p>Every validation has passed</p>';
		success.style.display = 'contents';
		success.style.color = '#27ae60';
	}
}

// BUTTON SEND
var sendButton = document.getElementById('button-send');

// EVENTS STATE
sendButton.addEventListener('click', validationFunction);
