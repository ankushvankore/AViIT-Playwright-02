import {test} from "@playwright/test"

test("Test for browser fixture", async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://www.google.com");
    console.log("Title: " + await page.title());

    await page.waitForTimeout(2000);

    await page.goto("https://www.iplt20.com/points-table/men/2024");
    console.log("Title: " + await page.title());

    await page.waitForTimeout(2000);
})

//test.only() => this will execute only this test case
test("Browser fixture in another way", async({browser})=>{
    let page = await browser.newPage(); 
    await page.goto("https://www.facebook.com/")
    console.log("Title: " + await page.title());

    await page.waitForTimeout(2000);
})

test("Understand context fixture", async({context})=>{
    let p1 = await context.newPage();

    await p1.goto("https://www.naukri.com/")
    console.log("Title: " + await p1.title());

    await p1.waitForTimeout(2000);
})

test.only("Understand page fixture", async({page})=>{
    await page.goto("https://selectorshub.com/iframe-scenario/");
    console.log("Title: " + await page.title());

    await page.waitForTimeout(2000);
})

