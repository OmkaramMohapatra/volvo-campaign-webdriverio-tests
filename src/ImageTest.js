describe('Check if all the images in the page are loading', () => {
    it('should find all the images in the page and check if they are loading', () => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        browser.waitUntil(() => {
            return browser.execute(() => {
                return document.readyState === 'complete';
            });
        }, {
            timeout: 50000,
            timeoutMsg: 'Expected page to be loaded after 5s',
            interval: 500,
        });
        const images = $$('img');

        images.forEach(image => {
            expect(image.isExisting()).toBe(true);
            expect(image.getAttribute('src')).not.toBe(null);
            expect(image.isDisplayed()).toBe(true);
            expect(image.getSize().height).toBeGreaterThan(0);
            expect(image.getSize().width).toBeGreaterThan(0);
        });
    });
});