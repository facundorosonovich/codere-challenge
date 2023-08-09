import {Locator, Page} from "@playwright/test";
import {Header} from "../components/header";

export class HomePage{
    readonly page: Page;
    readonly cookieBannerCloseButton: Locator
    readonly headerContainer: Locator;
    readonly header: Header;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly accessButton: Locator;
    readonly alertPopup: Locator

    constructor(page: Page) {
        this.page = page;
        this.cookieBannerCloseButton = page.getByRole('button', { name: 'close' })
        this.headerContainer = page.locator('codere-navbar-pc > ion-navbar')
        this.header = new Header(this.headerContainer)
        this.usernameInput = page.getByRole('textbox', { name: 'Usuario / Correo electrónico' })
        this.passwordInput = page.getByLabel('Contraseña')
        this.accessButton = page.locator('#btnaccess')
        this.alertPopup = page.locator('.alert-wrapper')
    }

    async goto() {
        await this.page.goto('/');
    }

    async login(username, password) {
        await this.header.openLogin()
        await this.closeCookieModalIfVisible()
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.accessButton.click()
    }

    async closeCookieModalIfVisible() {
        try {
            await this.cookieBannerCloseButton.waitFor().catch()
        } catch (e) {
            console.log('GDPR Cookie banner not visible')
        }
        if (await this.cookieBannerCloseButton.isEnabled()) {
            await this.cookieBannerCloseButton.click()
        }
    }

}