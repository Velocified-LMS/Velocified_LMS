const assert = require('assert');

describe('Visual Consistency Tests', () => {
    it('should display navigation bar with correct elements', () => {
        browser.url('/');
        
        const navigationBar = $('nav');
        assert(navigationBar.isDisplayed(), 'Navigation bar is not displayed.');

        const homeLink = $('//a[contains(text(), "Home")]');
        assert(homeLink.isDisplayed(), 'Home link is not displayed in the navigation bar.');

        const aboutLink = $('//a[contains(text(), "About")]');
        assert(aboutLink.isDisplayed(), 'About link is not displayed in the navigation bar.');
    });

    it('should maintain visual consistency between navigation elements', () => {
        const homeLink = $('//a[contains(text(), "Home")]');
        homeLink.click();

        const aboutLink = $('//a[contains(text(), "About")]');
        aboutLink.click();

    });
});
