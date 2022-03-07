const puppeteer = require('puppeteer-core');
const chromePaths = require('chrome-paths');

import { ipcMain } from "electron";

const getFembed = async (event, server, id) => {

  try {
    const url = `https://fembed.com/v/${id}`;
    let browser = await puppeteer.launch({
      headless: false,
      // userDataDir: dir,
      executablePath: chromePaths.chrome,
      args: [
        `--app=${url}`,
        '--incognito',
        '--window-size=0,0',
        '--aggressive-cache-discard',
        '--unlimited-storage',
        '--full-memory-crash-report',
        '--disable-dev-shm-usage',
        '--force-gpu-mem-available-mb',
        '--disable-gpu',
        '--no-sandbox',
        "--disable-setuid-sandbox"
      ],
      defaultViewport: null
    });

    const [page] = await browser.pages();

    browser.addListener('targetcreated', async (target) => {
      if (target.type() !== 'page') return;
      const properOrigin = url;
      const pageUrl = target.url();
      if (new URL(pageUrl).origin === properOrigin) return;
      const newPage = await target.page();
      await newPage.close();
    });

    await page.waitForNavigation()

    if (await page.$('html body p') !== null) {
      const dcmaElement = await page.waitForSelector('html body p');
      const dcma = await dcmaElement.evaluate(el => el.textContent);

      if (dcma === "Sorry this video is unavailable: DMCA Takedown" || dcma === "Sorry this video does not exist") {
        event.reply('error-videoe')
        await page.close();
      }

    }

    if (await page.$('body') !== null) {
      await page.click('body')
      await page.click('body')
      await page.click('body')

    }

    await page.waitForSelector('video');

    if (await page.$('video') !== null) {
      const video = await page.$$eval('video', am => am.filter(e => e.src).map(e => e.src));

      const data = {
        server,
        url: video[0]
      }

      event.reply('show-video', data)
    } else {
      await page.close();
    }
    await page.close();
  } catch (error) {
  }
}

export {
  getFembed
}