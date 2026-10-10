import test from "@playwright/test"

test("XPath Operators and Indexing", async({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

    await page.locator("//input[@id='input-firstname' and @placeholder='First Name']").fill("Tanmay");
    await page.locator("//input[@name='lastname' or @id='input-lastname']").fill("Joshi");

    //Using XPath Indexing
    await page.locator("(//input[@class='form-control'])[3]").fill("tanmayjoshi123@gmail.com");

    await page.locator("(//input[@class='form-control'])[position()=4]").fill("9898989898");
    await page.locator("(//input[@class='form-control'])[position()=5]").fill("tanmay@123");
    await page.locator("(//input[@class='form-control'])[position()=6]").fill("tanmay@123");

    //Radio button
    /*
    first(), last() & nth() method allows to choose a specific element
    where nth() accepts zero based index

    */
    await page.locator("//input[@name='newsletter']").first().scrollIntoViewIfNeeded();
    //await page.locator("//input[@name='newsletter']").first().click();
    //await page.locator("//input[@name='newsletter']").last().click();
    await page.locator("//input[@name='newsletter']").nth(0).click();

    //checkbox
    await page.locator("//input[@name='agree']").check();

    await page.getByText("Continue").click();

    //Assignment
    //Display and validate the success message displayed after Clicking on Continue button
    //Also validate the url

    await page.waitForTimeout(2000);
})