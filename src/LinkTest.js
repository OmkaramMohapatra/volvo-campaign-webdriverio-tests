describe('Check if all the links in the page are working', () => {
    it('should find all the links in the page and check if they are working', () => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        browser.waitUntil(() => {
                return browser.execute(() => {
                    return document.readyState === 'complete';
                });
            },
            {
                timeout: 50000,
                timeoutMsg: 'Expected page to be loaded after 5s',
                interval: 500
            });
                const links = $$('a');

                links.forEach(link => {
                    expect(link.isExisting()).toBe(true);
                    expect(link.getAttribute('href')).not.toBe(null);
                    expect(link.isDisplayed()).toBe(true);
                    const linkUrl = link.getAttribute('href');
                    const response = browser.call(() => fetch(linkUrl));
                    expect(response.status).toBeLessThan(400);
                });
            });
});