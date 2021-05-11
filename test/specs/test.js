describe('Login page - Tests', () => {
  it('Go to login page', () => {
      const pageLog = 'https://dariofalzone.github.io/problem10-rr/index.html';

      //Enter Login Page
      browser.url(pageLog);
      //Validation one
      expect(browser).toHaveTitle('Login');
      //Validation Two
      expect(browser).toHaveUrl('https://dariofalzone.github.io/problem10-rr/index.html')

      browser.pause(1000);

      //Validation Three
  });
});

describe('Register page - Tests', () => {
    it('Go to register page', () => {
        const pageRegister = 'https://dariofalzone.github.io/problem10-rr/register.html';

        //Enter Login Page
        browser.url(pageRegister);
        //Validation one
        expect(browser).toHaveTitle('Register');
        //Validation Two
        expect(browser).toHaveUrl('https://dariofalzone.github.io/problem10-rr/register.html')

        browser.pause(1000);

        //Validation Three
    });
  });