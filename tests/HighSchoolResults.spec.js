const { chromium, test, expect } = require('@playwright/test');

test('Visit high school result site', async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 2000 });
  const page = await browser.newPage();

  // Go to the high school results site
  await page.goto('https://g12.emis.gov.eg/');
  console.log(await page.title());

  // Assert the main heading is visible
  await expect(page.getByRole('heading', { name: /الآن .. نتيجة الثانوية العامة/ })).toBeVisible();

  // Assert "رقم الجلوس" field is present and enabled
  await expect(page.getByLabel('رقم الجلوس')).toBeVisible();
  await expect(page.getByLabel('رقم الجلوس')).toBeEnabled();
 await page.getByLabel('رقم الجلوس').fill('1888063');
 const dropdown = page.locator('#SystemType');

  // ✅ Select option by its value
  await dropdown.selectOption({ value: 'New' }); // or { label: 'نظام قديم' }

  // Optionally, assert the dropdown now has the selected value
  await expect(dropdown).toHaveValue('New');

const resultButton = page.getByRole('button', { name: 'عرض النتيجة' });

await expect(resultButton).toBeVisible();
await expect(resultButton).toBeEnabled();
await resultButton.click(); // Now it’s defined
// ✅ Assert Result Page
  // ✅ Assert Result Page
await expect(page.getByRole('heading', { name: /ناج/ })).toBeVisible(); // Pass/fail result
await expect(page.getByText('1888063')).toBeVisible(); // Seat number

  const subjects = [
    'العربية',
    'اللغة الأجنبية الأولى',
    'الكيمياء',
    'الأحياء',
    'الفيزياء'
  ];
  for (const subject of subjects) {
    await expect(page.getByText(subject)).toBeVisible();
  }
   await expect(page.getByText('المجموع الكلى')).toBeVisible();
  await expect(page.getByText('294')).toBeVisible();
  // Non-counted subjects
  await expect(page.getByText('التربية الدينية')).toBeVisible();
  await expect(page.getByText('20')).toBeVisible();

const homeLink = page.getByRole('link', { name: 'الرئيسية' });

// Assert it's visible and enabled
await expect(homeLink).toBeVisible();
await expect(homeLink).toBeEnabled();

// Click it
await homeLink.click();

  await browser.close();


 
});



