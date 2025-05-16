import { test, expect} from '@playwright/test';

import ClassAttributePage from '../pages/ClassAttributePage';

test('Press Blue Button and Dismiss PopUp', async ({ page }) => {
    const classAttribute = new ClassAttributePage(page);
    await classAttribute.navigateToPage();
    
    //prepare for the situation when a js alert appears
    let alertMessage = '';
    page.on('dialog', async dialog => {
    alertMessage = dialog.message(); // Get the alert message
    await dialog.accept(); // accept the alert
  });

    //press the blue button (which triggers the alert)
    await classAttribute.pressBlueButton();

    const expectedText = 'Primary button pressed'; 
    //check whether the alert message that was received is the expected one
    await expect(alertMessage).toBe('Primary button pressed');
    console.log('received alert message: '+alertMessage);
});

