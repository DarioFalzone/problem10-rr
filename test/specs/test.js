// Codigo de práctica

describe('Login page - Tests', () => {
  it('Go to login page', () => {
      const pageWeek = 'https://dariofalzone.github.io/problem10-rr/index.html';

      //Enter Login Page
      browser.url(pageWeek);
      //Validation one
      expect(browser).toHaveTitle('Login');
      //Validation Two
      expect(browser).toHaveUrl('https://dariofalzone.github.io/problem10-rr/index.html')
      //Validation Three

  });
});