import { test, expect} from '@playwright/test';
import ProgressbarPage from '../pages/ProgressbarPage.ts';

test('bring progress bar to 75%', async ({ page }) => {
    const progressbarpage= new ProgressbarPage(page);
    await page.goto(progressbarpage.pageURL);
    await progressbarpage.clickStartButton();
    console.log('starting progress....')
    while (await progressbarpage.getProgressbarValue()<75) {
        console.log("waiting... current value: ", await progressbarpage.getProgressbarValue());
    }
    await progressbarpage.clickStopButton();
    console.log("Pressed stop button. The final value is: ", await progressbarpage.getProgressbarValue());


});