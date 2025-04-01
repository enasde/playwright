import { Locator, Page } from "playwright";

export default class TextinputPage {
    page: Page;
    Textbox: Locator;
    button: Locator;
    url: string = 'http://uitestingplayground.com/textinput';
    buttonTextContent: Locator;
    //page.locator('#updatingButton')

    constructor (page: Page){
        this.page= page;
        this.Textbox=this.page.getByRole('textbox', { name: 'Set New Button Name' });
        this.button=this.page.getByRole('button', { name: 'Button That Should Change it\'' });
        this.buttonTextContent=this.page.locator('#updatingButton');
    }
}
