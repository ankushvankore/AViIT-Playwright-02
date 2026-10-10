import test from "@playwright/test"

test("Test for Multiple Controls using CssSelector", async({page})=>{
    await page.goto("https://www.flipkart.com/");

    let allLinks = await page.locator("a[href]").all();
    console.log("Total Links: " + allLinks.length);  
    
    for(let link of allLinks){
        console.log(await link.innerText() + "==>" + await link.getAttribute('href'));        
    }

    //Get total no of images
    let totalImages = (await page.locator("img[alt]").all()).length;
    console.log("Total Images: " + totalImages);    

    await page.waitForTimeout(2000);    
})