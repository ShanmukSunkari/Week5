
import { chromium, expect, test } from "@playwright/test";
test(`Automate interactions with alert dialogs.`, async ({ page }) => {

    //launching the W3 school page
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    // handling the popup , and accepting the pop up
    page.on("dialog", async (alert) => {

        console.log(alert.type)
        console.log(alert.message())
        alert.accept();

    })

    const frameurl = page.frame({ name: "iframeResult" })
    await frameurl?.locator(`//button[@onclick='myFunction()']`).click();
    // priting the pop us message 
    const text = await frameurl?.locator(`//p[text()='You pressed OK!']`).textContent();
    console.log(text);
    // Assertig the message
    expect(text).toMatch("You pressed OK!")




})

