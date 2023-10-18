const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Cross-Browser Feedback Message Test Suite', function() {
  
  const browsers = ['chrome', 'firefox'];

  browsers.forEach(browser => {
    
    it(`should display feedback messages correctly and timely on ${browser}`, async function() {
      
      const driver = await new Builder().forBrowser(browser).build();

      try {
        
        await driver.get('http://localhost:3000');
        await driver.findElement(By.id('submit-button')).click();
        const feedbackMessage = await driver.wait(until.elementLocated(By.id('feedback-message')), 5000);
        const messageText = await feedbackMessage.getText();
        assert.strictEqual(messageText, 'Thank you for your submission!');
        
      } finally {
        await driver.quit();
      }
    });
  });
});
