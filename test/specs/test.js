// Codigo de práctica

describe('Go to Google - Enter in search: wikipedia, click and search', () => {
  it('Search, Google to Wikipedia', () => {
      const googleUrl = 'http://google.com';
      const wikipediaUrl = 'https://es.wikipedia.org/wiki/Wikipedia:Portada';
      const inputGoogle = $('.gLFyf');
      const linkWikipedia = $('//h3[@class="LC20lb DKV0Md"]');

      //Enter google
      browser.url(googleUrl);
      expect(browser).toHaveTitle('Google');
      inputGoogle.setValue('Wikipedia');
      browser.keys(['Enter']);
      linkWikipedia.click();

      browser.pause(1000)

      expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada')
      expect(browser).toHaveTitle('Wikipedia, la enciclopedia libre')

      browser.pause(3000)
      //Validation URL
      if (browser.getUrl() === wikipediaUrl) {
          console.log('----------------------SUCCESSFULY-----------------------------');
      } else {
          throw new Error('ERROR');
      }
  });

// Muchas gracias a la ayuda de santiago ottolini y sebastian sileoni por su ayuda en la resolucion de este ejercicio
});