const loginForm = require('../pageobjects/login.page');

describe('Login page - ¡go to find error!', () => {
	function pauseTime() {
		browser.pause(1500);
	}

	const pageLog = 'https://dariofalzone.github.io/problem10-rr/index.html';

	describe('Test email input', () => {
		it('Go to login page, write correct inf, click button login', () => {
      browser.url(pageLog);
      loginForm.testLogin('dario95@gmail.com', 'dario789');
      expect(loginForm.errorText).toHaveText('Every validation has passed')
      pauseTime();
		});
	});
});
