import { test, expect } from '@playwright/test';
import {HomePage} from "@/pageobjects/pages/home-page";

test('Test Login flow with invalid credentials', async ({ page }) => {
  const username = 'username@testcodere.com'
  const password = 'Test123!'
  const homePage = new HomePage(page)

  await test.step('Open Home page', async () => {
    await homePage.goto();
    await homePage.closeCookieModalIfVisible();
  });

  await test.step(`Login with username: ${username} & password ${password}`, async () => {
    await homePage.login(username, password);
  });

  await test.step('Assert alert popup is displayed when credentials are invalid', async () => {
    await expect(homePage.alertPopup).toBeVisible();
  });




});
