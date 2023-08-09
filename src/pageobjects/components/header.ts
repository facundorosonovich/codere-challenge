import {Locator} from "@playwright/test";

export class Header {
    readonly  container: Locator;

    // Locators
    readonly homePageLink: Locator;
    readonly searchBar: Locator;
    readonly loginButton: Locator

    constructor(container: Locator) {
        this.container = container;
        this.homePageLink = container.locator('.bar-buttons > .bar-button').first();
        this.searchBar = container.getByPlaceholder('Buscar ...')
        this.loginButton = container.getByRole('button', { name: 'Acceder' })
    }

    async searchByKeyword(keyword: string) {
        await this.searchBar.type(keyword)
    }

    async openLogin() {
        await this.loginButton.click()
    }

}