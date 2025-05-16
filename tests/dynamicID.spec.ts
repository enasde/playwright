import { test, expect} from '@playwright/test';

import DynamicIDPage from '../pages/DynamicIDPage';

test ('Press Button', async ({ page }) => {
    const dynamicID = new DynamicIDPage(page);
    await dynamicID.navigateToPage();
    //just as an exercise, not strictly necessary
    await dynamicID.pressButton();
});