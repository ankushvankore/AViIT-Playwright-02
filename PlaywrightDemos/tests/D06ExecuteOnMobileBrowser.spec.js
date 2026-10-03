import {test} from "@playwright/test"

test("Test on mobile browser", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    
    let title = await page.title();
    console.log("Title: " + title);
    
    await page.waitForTimeout(2000);
})

/*
uncomment the mobile browser part in playwright.config.js file

/* Test against mobile viewports. 
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
*/