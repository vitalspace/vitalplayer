'use strict';
import puppeteer from "puppeteer-core";
import chromePaths from "chrome-paths";

const getPlutoTv = async (event, server, id) => {

  try {
    const url = `https://pluto.tv/en/live-tv/${id}`;
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

    page.on('response', async (response) => {
      const isXhr = ['xhr'].includes(response.request().resourceType())
      if (isXhr) {
        const LinksNotSplitted = response.url()
        try {
          if (LinksNotSplitted.includes('m3u8')) {
            const ArrayWithLinks = LinksNotSplitted.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm);
            const link = ArrayWithLinks.filter(link => link.includes('m3u8'));
            if (typeof link[0] === 'string' && link[0].length > 0) {
              console.log('aqui tienes', link[0])

              const data = {
                server,
                url: link[0]
              }
              event.reply('show-video', data)
              await page.close()
            }
          }
        } catch (error) {
          await page.close()
        }
      }
    });
  } catch (error) {
  }
}

export {
  getPlutoTv
}