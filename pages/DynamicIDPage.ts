import { Locator, Page } from "playwright";

export default class DynamicIDPage {
    page: Page;
    private dynamicButton: Locator;

    private siteURL: string = "http://uitestingplayground.com/dynamicid";

     constructor(page: Page) {
            this.page=page;
            this.dynamicButton = this.page.getByRole("button");
    }

    async navigateToPage() {
    await this.page.goto(this.siteURL);
  }

  async pressButton() {
    await this.dynamicButton.click();
  }
}