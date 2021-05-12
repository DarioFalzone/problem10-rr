describe('Register page - Tests', () => {
  it('Go to register page, set value on inputs, write wrong inf, click register', () => {
      const pageRegister = 'https://dariofalzone.github.io/problem10-rr/register.html';

      const inputName = $('#register-name');
      const inputEmail = $('#register-email');
      const inputPass = $('#register-password');
      const inputRePass = $('#re-password');
      const registerButton = $('#button-send');
      // const resetButton = $('#button-reset');

      //Enter Register Page
      browser.url(pageRegister);

      //Validation Three
      inputName.setValue('Patrick Roth');
      inputEmail.setValue('patrickrth@nameofthewind.com');
      inputPass.setValue('kvote123');
      inputRePass.setValue('kvote123');

      browser.pause(3000);

      registerButton.click();

      //Validation one
      expect(browser).toHaveTitle('Register');
      //Validation Two
      expect(browser).toHaveUrl('https://dariofalzone.github.io/problem10-rr/register.html')

      browser.pause(3000);

      //Validation Three
  });

  it('Go to register page, set value on inputs, write random inf, click reset', () => {
    const pageRegister = 'https://dariofalzone.github.io/problem10-rr/register.html';

    const inputName = $('#register-name');
    const inputEmail = $('#register-email');
    const inputPass = $('#register-password');
    const inputRePass = $('#re-password');
    const resetButton = $('#button-reset');

    //Enter Register Page
    browser.url(pageRegister);

    //Validation Three
    inputName.setValue('Patrick Roth');
    inputEmail.setValue('patrickrth@nameofthewind.com');
    inputPass.setValue('kvote123');
    inputRePass.setValue('kvote123');

    browser.pause(3000);

    resetButton.click();

    //Validation one
    expect(browser).toHaveTitle('Register');
    //Validation Two
    expect(browser).toHaveUrl('https://dariofalzone.github.io/problem10-rr/register.html')

    browser.pause(3000);

    //Validation Three
});
});