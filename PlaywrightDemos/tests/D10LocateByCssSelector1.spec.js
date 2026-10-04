/*
CssSelector:
1. It is the technique to locate any control using it's single or multiple
attribute(s)
2. Even we can use some special characters like ^, #, *, $, .

Using single attribute
Syntax: 
tagName[attribute='value']

Using multiple attributes
Syntax:
tagName[attribute1='value'][attribute2='value']

Using # (id of the control)
Using . (class of the control)
*/
import test from "@playwright/test"

test("Locate by Css Selector", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    await page.locator("input[id='name']").fill("Supriya Mehar");
    await page.locator("input#email").fill("supriya@gmail.com");
    //# is for id
    await page.locator("#phone").fill("9898989898");
    await page.locator("textarea[class='form-control']").fill("Delhi");
    await page.locator("#female").click();
    await page.locator("#sunday").click();

    await page.waitForTimeout(2000);
})