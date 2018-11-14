
import { Helpers } from "./../helpers/Helpers";

export class InitialPage extends Helpers {

  // locators
  private headerTextLocator = "h1";

  // methods

  public async getHeader() {
    return await this.getText(this.headerTextLocator);
  }

}

