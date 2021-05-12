const registerForm = require('../pageobjects/register.page');

describe('Register page - ¡go to find error!', () => {
	function pauseTime() {
		browser.pause(1500);
	}

	const pageLog = 'https://dariofalzone.github.io/problem10-rr/register.html';

	describe('Test form register with correct information', () => {
		it('Go to register page, write correct information', () => {
			browser.url(pageLog);
			registerForm.testRegister('dario', 'dario95@gmail.com', 'dario789','dario789');
			expect(registerForm.errorText).toHaveText('Every validation has passed');
			pauseTime();
		});

		// it('Go to login page, write incorrect information', () => {
		// 	browser.url(pageLog);
		// 	registerForm.testLogin('dario95.com', 'dario789');
		// 	expect(registerForm.errorText).toHaveText('The email entered is not valid');
		// 	pauseTime();
		// });
	});

	// describe('Test password input', () => {
	// 	it('Go to login page, write incorrect pass (not number in pass)', () => {
	// 		browser.url(pageLog);
	// 		registerForm.testLogin('dario95@gmail.com', 'dario');
	// 		expect(registerForm.errorText).toHaveText(
	// 			'Please enter a password with one number minimum'
	// 		);
	// 		pauseTime();
	// 	});
	// });
});
