import test, { expect } from "@playwright/test"

test("Built-in Locators - Locate By Role", async({page})=>{
    await page.goto("https://automationplayground.com/crm/");

    //await page.getByRole("link", {name: 'Sign In'}).click();
    
    let signInLink = page.getByRole("link", {name: 'Sign In'});
    console.log("Is visible: " + await signInLink.isVisible());
    await signInLink.click();

    await page.waitForTimeout(2000);
})

test("Built-in Locators - Locate By Text", async({page})=>{
    await page.goto("https://automationplayground.com/crm/");

    //await page.getByText("Sign In").click();
    let signInLink = page.getByText("Sign In");
    console.log("Is visible: " + await signInLink.isVisible());
    await signInLink.click();

    await expect(page).toHaveURL("https://automationplayground.com/crm/login.html");

    await page.waitForTimeout(2000);
})

test.only("Built-in Locators - Locate By Placeholder", async({page})=>{
    await page.goto("https://automationplayground.com/crm/");

    await page.getByText("Sign In").click();
    await expect(page).toHaveURL("https://automationplayground.com/crm/login.html");

    await page.getByPlaceholder("Enter email").fill("supriya@gmail.com");
    await page.getByPlaceholder("Password").fill("supriya");


    await page.waitForTimeout(2000);
})