import {test,  chromium } from "@playwright/test"

/*
before executing this code make sure that you have commented the following 
code form playwright.config.js file



    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

*/

test("Launching MS Edge", async({})=>{
    let browser = await chromium.launch({headless:false, channel:'msedge'});
    let page = await browser.newPage();

    await page.goto("https://selectorshub.com/iframe-scenario/");

    await page.waitForTimeout(10000);
})