describe('Check if the header text is present in the page or not', () => {
    it('should find the header configured in the page and check if it is as per requirement', () => {
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
        const expectedText = 'Ideas that change the world are often the most controversial.';
        const element = $('h2');

        const actualText = element.getText();

        expect(actualText).toHaveText(expectedText);
    });
});