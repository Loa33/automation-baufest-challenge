import { expect, Locator } from '@playwright/test';
import { Page } from 'playwright';

const dotenv = require('dotenv');

dotenv.config();

export class LoginPage {
    readonly page: Page;
    readonly loginHeader: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly dashboardHeader: Locator


    constructor(page: Page) {
        this.page = page;
        this.loginHeader = page.locator('h5', { hasText: 'Login'});
        this.usernameInput  = page.locator('input[name="username"]');
        this.passwordInput  = page.locator('input[name="password"]');
        this.loginButton  = page.locator('button[type="submit"]');
        this.dashboardHeader  = page.locator('h6', {hasText:'Dashboard'});

    }

    async visualizeLogin() {
        await this.page.goto(process.env.BASE_URL);
        await expect(this.loginHeader).toBeVisible();
        
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async visualizeDashboard() {
        await expect(this.dashboardHeader).toBeVisible();
    }

    async visualizeErrorMessage(message: string) {
        const messageText = this.page.locator(`//p[text() = "${message}"]`);
        await expect(messageText).toBeVisible();
    }
}