import { Locator, Page } from "playwright";

export default class ClassAttributePage {
    page: Page;
    private siteURL: string = 'http://uitestingplayground.com/classattr';
    private greenButton : Locator;
    private yellowButton : Locator;
    private blueButton : Locator;

    constructor(page: Page) {
            this.page=page;
            this.greenButton = this.page.locator("xpath=//button[contains(@class,'btn-success')]");
            this.yellowButton = this.page.locator("xpath=//button[contains(@class,'btn-warning')]");
            this.blueButton = this.page.locator("xpath=//button[contains(@class,'btn-primary')]");
    }

    async navigateToPage() {
    await this.page.goto(this.siteURL);
  }

  async pressBlueButton() 
  {
    await this.blueButton.click();
  }

  async pressGreenButton()
    {
        await this.greenButton.click();
    }
  
    async pressYellowButton()
    {
        await this.yellowButton.click();
    }

    async dismissPopUp() {
    this.page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  }

  
    



}