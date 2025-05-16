import { test, expect} from '@playwright/test';
import TextinputPage from '../pages/TextinputPage.ts';

test('Check if Button Contains Entered Text', async ({ page }) => {
  const textinputpage= new TextinputPage(page);

  await page.goto(textinputpage.url);
  await textinputpage.Textbox.click();
  await textinputpage.Textbox.fill('TextNeu');
  await textinputpage.button.click();
  await expect(textinputpage.buttonTextContent).toContainText('TextNeu');
});