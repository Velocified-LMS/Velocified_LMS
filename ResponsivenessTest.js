const assert = require('assert');

describe('Responsiveness Tests', () => {
    it('should be responsive on different screen sizes', () => {
        browser.url('/');
        
        const viewports = [
            { width: 320, height: 480 },
            { width: 768, height: 1024 },
            { width: 1440, height: 900 }
        ];

        viewports.forEach((viewport) => {
            browser.setWindowSize(viewport.width, viewport.height);
            browser.saveScreenshot(`./screenshots/responsive-${viewport.width}x${viewport.height}.png`);
        });
    });
});
