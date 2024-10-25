import { test, expect } from '@playwright/test';
const Microsite = require('../page/micrositepage');



test('this is order process', async ({ page }) => {
    await page.goto("https://www.mypersonalizedjewelry.us/");
    await page.waitForLoadState("networkidle");

    const microsite = new Microsite(page);
    await microsite.clickConfirmButton();

    await page.goto("https://www.mypersonalizedjewelry.us/Jewelry");
    await page.waitForLoadState("networkidle");


    await microsite.scriptcategorybtn();
    await page.waitForLoadState("networkidle");

    // Select '10 KT' option
    await microsite.attributektbtn();

    await microsite.colorele();

    await microsite.dropdownele();

    await microsite.sizeele();
    await microsite.namefieldele("jessica");

    // Wait to observe the result
    await page.waitForTimeout(3000);

    await page.locator("#apj-btn-NameNecklace").click();

    await page.waitForTimeout(8000);

    await page.locator(".apj-btn-orange").click();
    await page.waitForTimeout(5000);
    await page.locator("//a[contains(text(),'View Shopping Bag')]").click();
    await page.waitForLoadState("networkidle");
    const descriptionText = await page.locator("//div[@id='apj-productDescription']/div/div[7]/p").nth(0).innerText();
    console.log(descriptionText);

});
