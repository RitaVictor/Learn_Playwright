// const { chromium, expect, test } = require('@playwright/test');

// test('Login to Lib Admin', async () => {
//   // Launch the browser in visible mode with 2s slow motion
//   const browser = await chromium.launch({
//     headless: false,
//     slowMo: 3000  // ⏱️ 2000ms = 2 seconds per action
//   });

//   const context = await browser.newContext();
//   const page = await context.newPage();

//   await page.goto('https://lib-admin-69c02.web.app');
//   await page.getByPlaceholder('enter your email').fill('rita.victor@gmail.com');
//   await page.getByPlaceholder('enter your paassword').fill('admin123');
//  // await page.getByText('Log In', { exact: true }).click();
//  // await page.locator('span:has-text("Log In")').click();
//  //await page.locator('button:has(span:text("Log In"))').click();
//  await page.locator('button:has-text("Log In")').click();





//   await browser.close();
// });
