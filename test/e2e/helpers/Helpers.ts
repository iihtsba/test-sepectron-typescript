import { Application } from "spectron";

export class Helpers {

  protected app: Application;
  private readonly WAIT_TIME = 50000;

  constructor(app) {
    this.app = app;
  }

  
  protected async click(element) {
    await this.waitForExist(element);
    await this.app.client.click(element);
  }

  
  protected async setValue(element, text: string) {
    await this.waitForExist(element);
    await this.app.client.clearElement(element);
    await this.app.client.setValue(element, text);
  }

  
  protected async getText(element): Promise<string> {
    await this.waitForExist(element);
    return await this.app.client.getText(element);
  }

  
  protected async getValue(element): Promise<any> {
    await this.waitForExist(element);
    return await this.app.client.getValue(element);
  }

  
  protected async getAttribute(element, attrName): Promise<any> {
    await this.waitForExist(element);
    return await this.app.client.getAttribute(element, attrName).then(attr => {
      return attr;
    });
  }

  
  protected async waitForExist(element) {
    await this.app.client.waitForExist(element, this.WAIT_TIME);
  }

  
  protected async waitForNotExist(element) {
    await this.app.client.waitForExist(element, this.WAIT_TIME, true);
  }

  
  protected async waitForPresence(element) {
    await this.app.client.waitForVisible(element, 5 * 60 * 1000);
  }

  
  protected async waitForText(element) {
    await this.app.client.waitForText(element, this.WAIT_TIME);
  }

  
  protected async waitUntilTextExists(element, text) {
    await this.app.client.waitUntilTextExists(element, text, this.WAIT_TIME);
  }

  
  protected async waitForSelected(element) {
    await this.app.client.waitForSelected(element, this.WAIT_TIME);
  }

  
  protected async waitForVisible(element) {
    await this.app.client.waitForVisible(element, this.WAIT_TIME);
  }

  
  async isDisplayed(element) {
    return await this.app.client.isVisible(element);
  }

  async getWindowCnt() {
    return await this.app.client.getWindowCount();
  }

  protected async isElementPresent(element) {
    return await this.app.client.isExisting(element);
  }

  public async getTextAreaContent(selector: string){
    return await this.app.client.getValue(selector);
  }

  public async setTextAreaContent(selector: string, content: string){
    return await this.app.client.setValue(selector, content);
  }

  public async clickBtn(selector: string){
    this.app.client.click(selector);  
  }
}
