import { test, expect, Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://starttech.careers/");
});


test.describe("Home Page", () => {
  test("should have a link to 'About Us'", async ({ page }) => {
    // Click about-us button
    await page.locator('.button-box > a', { hasText: 'About Us' }).click();

    // Make sure page redirects to about us
    await expect(page).toHaveURL("https://starttech.careers/about-us");
    await expect(page.locator(".v-main")).toContainText("Our Mission");
  });
});
