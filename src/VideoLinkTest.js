describe('Check if all the videos in the page are loading', () => {
    it('should find all the videos in the page and check if they are loading', () => {
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
        const videos = $$('video');


        videos.forEach(video => {
            expect(video.isExisting()).toBe(true);
            expect(video.getAttribute('src')).not.toBe(null);
            expect(video.isDisplayed()).toBe(true);
        });
    });
});