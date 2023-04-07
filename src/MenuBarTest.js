describe('Check if the menu button is working properly', () => {
    it('should click the menu button and check if the menu items are displayed', () => {
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
        const menuButton = $('#sitenav-sidenav-toggle');

        expect(menuButton.isDisplayed()).toBe.true;


        menuButton.click();

    });
});