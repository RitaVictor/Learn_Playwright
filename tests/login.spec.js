 const { chromium, expect, test } = require('@playwright/test');

 test('Login to OrangeHRM Demo (ultra slow motion)', async () => {
 // Launch the browser in visible mode with 2s slow motion
 const browser = await chromium.launch({
    headless: false,
   slowMo: 2000  // ⏱️ 2000ms = 2 seconds per action
   });

    const context = await browser.newContext();
    const page = await context.newPage();

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();

await page.locator('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click();
await page.getByRole('menuitem', { name: 'Logout' }).click();
//await page.getByRole('menuitem', { name: 'Logout' }).click();
await page.waitForURL('**/auth/login'); // wait to confirm redirect


await page.getByText('Forgot your password?').click();

await page.getByPlaceholder('Username').fill('Admin');
await page.getByRole('button', { name: 'Reset Password' }).click();

//await page.pause();
//await browser.close();
});
