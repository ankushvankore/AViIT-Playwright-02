import test, { expect } from "@playwright/test"

test("Understanding XPath", async({page})=>{
    await page.goto("https://www.saucedemo.com/");

    await page.locator("//input[@id='user-name']").pressSequentially("standard_user", {delay:500});
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.getByRole('button', {name: 'Login'}).click();

    /*
    if(page.url().includes('inventory')){
        console.log("Login successful!!!");
        
        await page.locator("//button[@id='react-burger-menu-btn']").click();
        //await page.locator("//a[@class='bm-item menu-item'][1]").click();
        await page.getByText("Logout").click();
    }*/

    expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    console.log("Login successful!!!");
        
    await page.locator("//button[@id='react-burger-menu-btn']").click();
    //await page.locator("//a[@class='bm-item menu-item'][1]").click();
    await page.getByText("Logout").click();

    await page.waitForTimeout(2000);
})