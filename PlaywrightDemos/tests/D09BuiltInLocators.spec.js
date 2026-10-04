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

test("Built-in Locators - Locate By Placeholder", async({page})=>{
    await page.goto("https://automationplayground.com/crm/");

    await page.getByText("Sign In").click();
    await expect(page).toHaveURL("https://automationplayground.com/crm/login.html");

    await page.getByPlaceholder("Enter email").fill("supriya@gmail.com");
    await page.getByPlaceholder("Password").fill("supriya");


    await page.waitForTimeout(2000);
})

test("Built-in Locators - Locate By Label", async({page})=>{
    await page.goto("https://automationplayground.com/crm/");

    await page.getByText("Sign In").click();
    await expect(page).toHaveURL("https://automationplayground.com/crm/login.html");

    await page.getByPlaceholder("Enter email").fill("supriya@gmail.com");
    await page.getByPlaceholder("Password").fill("supriya");

    let checkbox = page.getByLabel("Remember me");
    //await checkbox.click();
    await checkbox.check();

    await page.getByRole("button", {name: "Submit"}).click();

    await page.waitForTimeout(2000);
})

test("Built-in Locators - Locate By alt Text", async({page})=>{
    await page.goto("https://www.echotrak.com/Login.aspx?ReturnUrl=%2f");

    await page.getByAltText("EchoTrak").highlight();

    await page.waitForTimeout(2000);

    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");

    await page.getByAltText("Rediffmail").highlight();

    await page.waitForTimeout(2000);
})

test("Built-in Locators - Locate By test Id", async({page})=>{
    await page.goto("https://vinothqaacademy.com/demo-site-create-account/");

    await page.getByTestId("input-firstName").fill("Supriya");
        
    await page.waitForTimeout(2000);
})

test("Built-in Locators - Locate By Title", async({page})=>{
    await page.goto("https://www.dofactory.com/html/input/title");

    let textbox = page.getByTitle("City where you were born.");
    await textbox.scrollIntoViewIfNeeded();
    await textbox.fill("Kolhapur");
        
    await page.waitForTimeout(2000);
})

test.only("Built-in Locators - get the text", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    let message = await page.getByRole("link", {name: 'Data Entry Form'}).innerText();    
    console.log("Message: " + message);    

    await page.waitForTimeout(2000);
})