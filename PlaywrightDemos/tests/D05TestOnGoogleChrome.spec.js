import {test,  chromium } from "@playwright/test";

/*
Before executing keep the earlier committed part as it is
*/

test("Launching MS Edge", async({})=>{
    let browser = await chromium.launch({headless:false, channel:'chrome'});
    let page = await browser.newPage();

    await page.goto("https://selectorshub.com/iframe-scenario/");

    await page.waitForTimeout(2000);
})