const{test} = require('@playwright/test');
const { constants } = require('buffer');
test('first playwright test',async({browser, page})=>
{
  // const context =await browser.newContext();
//const page  =  await context.newPage ;
await page.goto("https://lib-admin-69c02.web.app");
//playwright code-
//step1
//step2
//step3
});