import test from "@playwright/test"

test("Test for understanding Indexing in CssSelector", async({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    let link = page.locator("aside>div>a:nth-child(7)");
    await link.highlight();

    console.log("7th link: " + await link.innerText());

    await page.waitForTimeout(2000);    
})