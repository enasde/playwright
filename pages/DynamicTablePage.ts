import { Locator, Page } from "playwright";

export default class DynamicTablePage {
  //-> Vergleichselement
  //-> den kritischen div
  //xpath dafür: "//span[text()='Chrome']/.."
  //-> array für Textelemente
  //diesen befüllen mit for-Schleife über alle Elemente nach Muster
  // XPATH für div/span[i] mit i von 1 bis 5
  //-> Rückgabefunktion für CPU-Last für Chrome
  //durchlaufe Array-Elemente und finde das Element, welches ein "%" enthält
  // oder kein "M"
  //gib dieses zurück.
  //-> Rückgabefunktion des Vergleichselement-Werts
  // der Vergleich selbst soll hier nicht als Funktion abgebildet werden, sondern
  // im Testfall
  page: Page;
  private comparisonElement: Locator;
  private chromeRow: Locator;
  //initializiation of the following array is done solely so 
  // its length can be accessed
  private textOfRowElements: [string, string, string, string, string] = ["a", "b", "c","d","e"];
  private siteURL: string = "http://uitestingplayground.com/dynamictable";

  constructor(page: Page) {
    this.page = page;
    this.comparisonElement = this.page.locator(".bg-warning");
    this.chromeRow = this.page.locator("xpath=//span[text()='Chrome']/..");
  }

  private async fillTextArray() {
    console.log("Listing all entries of relevant row: ");
    for (let i = 0; i < this.textOfRowElements.length; i++) {
      this.textOfRowElements[i] = await this.chromeRow
        .locator("xpath=/span[" + (i+1) + "]")
        .innerText();
        console.log("entry No "+ (i+1) + ": "+ this.textOfRowElements[i]);
    }
  }

  async getComparisonElement() {
    console.log("comparison value: "+await this.comparisonElement.innerText());
    return await this.comparisonElement.innerText();
  }

  async getChromeCPUInTable() {
    await this.fillTextArray();
    const searchTerm: string = "%";
    const result = this.textOfRowElements.find((str) =>
      str.includes(searchTerm)
    );
    await console.log("found CPU value for chrome: ", result);
    return result;
  }

  async navigateToPage() {
    await this.page.goto(this.siteURL);
  }

  //just as an exercise, not strictly necessary
  async listAllTableEntries() {
    console.log('Listing all the entries: ');
    console.log(await this.page.locator("xpath=//span").
    evaluateAll((elements) => elements.map((el)=> el.textContent)));
  }
}
