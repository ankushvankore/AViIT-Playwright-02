import test from "@playwright/test"

test("Locate multiple controls using CssSelector", async({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    //let allLinks = await page.locator("aside>div>a").all();
    let allLinks = await page.locator("aside a").all();
    //When the locator points to a list of elements, 
    //this returns an array of locators, pointing to their respective elements.
    console.log("Total links are: " + allLinks.length);

    for(let link of allLinks){
        console.log(await link.innerText() + ' --> ' + await link.getAttribute('href'));        
    }

    console.log("4th link: " + await page.locator("aside>div>a:nth-child(4)").innerText());
    //nth-child(index) - method is used to indexing in cssSelector

    await page.waitForTimeout(2000);
})