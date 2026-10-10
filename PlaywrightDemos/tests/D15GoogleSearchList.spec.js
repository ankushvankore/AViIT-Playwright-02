import test from "@playwright/test"

test("Google search options list", async({page})=>{
    await page.goto("https://www.google.com");

    await page.locator("#ti6dpd").fill("Shricharni");

    //await page.waitForTimeout(1000);
    await page.waitForSelector("ul.G43f7e>li");
    //Will wait till the control will get loaded

    /*let allOptions = await page.locator("ul.G43f7e>li").all();
    console.log("Total options are: " + allOptions.length);
    
    for(let option of allOptions)
        console.log(await option.innerText());
    */
   
    let allOptions = await page.locator("ul.G43f7e>li").allInnerTexts();
    console.log("Total options are: " + allOptions.length);

    for(let option of allOptions)
        console.log(option);        

    await page.waitForTimeout(2000);
})