import {test, expect} from "@playwright/test"

test("Validation of google title", async({page})=>{
    await page.goto("https://www.google.com");

    let title = await page.title();
    console.log("Title: " + title);
    
    expect(title).toContain("Google");
    await expect(page).toHaveTitle("Google");
    expect(page).toHaveURL("https://www.google.com");

    await page.waitForTimeout(2000);
})