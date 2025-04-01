import { test, expect} from '@playwright/test';

import DynamicTablePage from '../pages/DynamicTablePage';

test ('Compare Chrome CPU Entry to Given Value', async ({ page }) => {
    const dynamictable = new DynamicTablePage(page);
    await dynamictable.navigateToPage();
    //just as an exercise, not strictly necessary
    await dynamictable.listAllTableEntries();
    const table_entry = await dynamictable.getChromeCPUInTable();
    const givenCPUValue= await dynamictable.getComparisonElement();
    await expect(givenCPUValue).toContain(table_entry);
})