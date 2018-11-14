import { expect } from "chai";
import { Application } from "spectron";

import { PageFactory, Pages } from "../helpers/PageFactory";
import { TestUtils } from "../helpers/TestUtils";
import { BrowserView } from "electron";

describe("Initial test suite", () => {

  let pages: Pages;
  let utils;
  let app: Application;

  before(async () => {
    // set app instance
    utils = new TestUtils();
    app = await utils.setUp();
    if (app && app.isRunning()) {
      // components (page objects) init
      pages = new PageFactory().initPages(app);
      return await app.client.windowByIndex(utils.windowByIndex()); // select window by Id
    } else {
      console.log("Application not runned");
    }
  });

  before(async () => {

   // you can use it for preconditions aka login here if needed

  });

  after(() => {
    // close browser
    utils.tearDown();
  });

  it("h1 should be Hello World!", async () => {

    // act

    // await pages.initialPages.clickSomeButton();
    // await pages.secondPage.doingSome();

    // assert

    const actualHeader = await pages.initialPage.getHeader();

    expect(actualHeader).to.equals("Hello World!");

  });

  it.only('Check Size', async () => {
    
    const str = "abcdefgh";
    //await pages.initialPage.setTextAreaContent("#tid",str);

     console.log('string:'+str);

     await pages.initialPage.clickBtn("#bid");

     const len = await pages.initialPage.getTextAreaContent("#txtid");

     console.log('length:'+len);

     expect(len).to.equals(str.length+'');
  });

  it.only("Display Check", async () => {

    const wCnt = await pages.initialPage.getWindowCnt();

    expect(wCnt).to.equals(2);
    // act

    // await pages.initialPages.clickSomeButton();
    // await pages.secondPage.doingSome();

    // assert

    // const actualHeader = await pages.initialPage.getHeader();

    // expect(actualHeader).to.equals("Hello World!");

  });

});
