import { Locator, Page } from "playwright";

export default class ProgressbarPage {
    page: Page;
    private startButton: Locator;
    private stopButton: Locator;
    private progressBar: Locator;
    pageURL: string;
    currentValue: string;


    constructor (page: Page) {
        this.page=page;
        this.startButton= this.page.getByRole('button', { name: 'Start' });
        this.stopButton= this.page.getByRole('button', { name: 'Stop' });
        this.progressBar= this.page.getByRole("progressbar");
        this.pageURL = 'http://uitestingplayground.com/progressbar';
    }

    async clickStartButton() {
        await this.startButton.click();
    };

    async clickStopButton() {
        await this.stopButton.click();
    };

    async getProgressbarValue() {
        if (this.progressBar.getAttribute('style aria-valuenow') !== null) {
            this.currentValue = await this.progressBar.getAttribute('aria-valuenow') as string;
            }    
        console.log('found current value of progress bar: ', this.currentValue);
        return await parseFloat(this.currentValue);
    };
}