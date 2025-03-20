import { default as log } from '@wdio/logger';

class InventoryPage {
    constructor() {
        this.logger = log('InventoryPage');
        this.productsContainer = "//div[@id='inventory_container']";
    }

    async waitForPageLoaded() {
        this.logger.info('Waiting for Inventory page...');
        await $(this.productsContainer).waitForExist({ timeout: 5000 });
    }

    async getPageTitle() {
        return browser.getTitle();
    }
}

export default new InventoryPage();
