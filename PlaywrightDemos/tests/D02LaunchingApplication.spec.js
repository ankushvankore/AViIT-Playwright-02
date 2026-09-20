import {test} from "@playwright/test"

/*
Fixtures in Playwright - Environment setup
is a prdefiened code that get executed every time

1. browser - Will create instance of original browser (Chromium)
2. browser context - For multiple browsers (like multiple users on multiple tabs / browser)
3. page - For single page / browser / tab. Isolated page instance created for each test
4. requset - For API Testing
*/

/*
Ways of executing the test case in Playwright
1. npx playwright test => Will execute all the tests from the tests folder
2. npx playwright test tests/D02LaunchingApplication.spec.js => 
    Will execute single test case in headless mode
3. npx playwright test tests/D02LaunchingApplication.spec.js --headed =>
    Will execute single test in headed mode
4. npx playwright test tests/D02LaunchingApplication.spec.js --headed --project=chromium =>
    Will execute single test in headed mode only on chromium browser
5. npx playwright test tests/D02LaunchingApplication.spec.js --headed --project=firefox => 
    Will execute single test in headed mode only on firefox browser
*/

test("Launch Google", async({page})=>{
    await page.goto("https://www.google.com");
    let pageTitle = await page.title();
    console.log("Title is: " + pageTitle);
    
    let pageUrl = page.url();
    console.log("Url: " + pageUrl);    

    await page.waitForTimeout(2000);
})