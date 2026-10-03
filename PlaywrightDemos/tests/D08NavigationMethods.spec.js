import {expect, test} from "@playwright/test"

test("Navigation methods in playwright", async({page})=>{
    await page.goto("https://www.google.com");
    console.log("Title: " + await page.title());

    await page.waitForTimeout(1000);
    
    //Navigate to facebook
    await page.goto("https://www.facebook.com");
    console.log("Title: " + await page.title());

    await page.goBack();
    await expect(page).toHaveTitle("Google");

    await page.waitForTimeout(1000);

    await page.goForward();
    await expect(page).toHaveTitle("Facebook");

    await page.reload();

    await page.waitForTimeout(2000);
})