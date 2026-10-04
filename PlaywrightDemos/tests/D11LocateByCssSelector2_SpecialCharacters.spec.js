/*
CssSelectors Special characters
1. ^ - Starts with
    input[name^='name']
2. $ - Ends with
    input[placeholder$='ID']
3. * - Contains
    input[placeholder*='ter p']

*/
import test from "@playwright/test"

test("CssSelector Special Characters", async({page})=>{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");

    await page.locator("input[name^='name']").fill("Supriya");
    await page.locator("input[placeholder$='ID']").fill("supriya");
    await page.locator("input[placeholder*='ter p']").fill("supriya@123");
    
    await page.waitForTimeout(2000);
})