import { test } from '@playwright/test';

test.use({ viewport: { width: 1280, height: 800 } });

test('visual verification of profiles feature', async ({ page }) => {
  // Navigate to the app (running on 5173 or 5174)
  const port = process.env.VITE_PORT || '5173';
  await page.goto(`http://localhost:${port}`);

  // Navigate to Projects (Profiles)
  await page.click('text=Projects');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/profiles_gallery.png' });

  // Open the "Expert Blog Writer" profile
  await page.click('text=Expert Blog Writer');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/profile_editor.png' });

  // Click on "Agents" section in sidebar
  await page.click('text=Agents');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'verification/profile_editor_agents.png' });
});
