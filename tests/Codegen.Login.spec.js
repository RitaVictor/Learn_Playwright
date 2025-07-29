import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('listitem').filter({ hasText: 'Maria silva' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

  await page.getByText('Forgot your password?').click();

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin2');
  await page.getByRole('button', { name: 'Reset Password' }).click();
});