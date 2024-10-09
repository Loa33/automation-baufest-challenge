import { After, AfterAll, Before, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { BrowserFactory } from '../browser/factory/browserFactory';
import { pageFixture } from './pageFixture';
const dotenv = require('dotenv');

dotenv.config();

let page: Page;
let browser: Browser;
let context: BrowserContext;

setDefaultTimeout(60000);

Before(async () => {
  try {
    browser = await BrowserFactory.getBrowser(process.env.BROWSER, process.env.HEADLESS);
    context = await browser.newContext({ viewport: null });
    page = await context.newPage();
    pageFixture.page = page;
  } catch (error) {
    console.error('Error during Before hook:', error);
  }
});

After(async function ({ pickle, result }) {
  let img: Buffer | undefined;
  if (result?.status == Status.PASSED) {
    img = await pageFixture.page.screenshot(
      { path: `./test-results/screenshots/${pickle.name}.png`, type: "png" })
  }
  await pageFixture.page.close();
  await context.close();

  if (result?.status == Status.PASSED && img) {
    this.attach(
      img, "image/png"
    );
  }
});

AfterAll(async function () {
  if (pageFixture.page && !pageFixture.page.isClosed()) {
    await pageFixture.page.close();
  }
  if (browser) {
    await browser.close();
  }
});


export { browser, page, pageFixture };

