
import puppeteer from "puppeteer-core";
import chromePaths from "chrome-paths";

async function getChaturbate() {

  try {
    const url = `https://chaturbate.com/`;
    let browser = await puppeteer.launch({
      // headless: false,
      // userDataDir: dir,
      executablePath: chromePaths.chrome,
      args: [
        '--incognito',
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

    await page.goto(url, { timeout: 0, waitUntil: "networkidle2" })

    if (await page.$('#close_entrance_terms') !== null) {
      await page.$eval('#close_entrance_terms', elem => elem.click());

    } else {
      console.log('no se pudo 1');
    }

    let title = await page.$$eval('div.details div.title a', e => e.map(a => a.textContent.trim()))

    // title.trim()

    let description = await page.$$eval('ul.subject li', e => e.map(a => a.textContent));
    let cams = await page.$$eval('li.cams', e => e.map(a => a.textContent));


    let img = await page.$$eval('a.no_select img', e => e.map(a => a.src));
    let age = await page.$$eval('span.age', e => e.map(a => a.textContent));
    let link = await page.$$eval('a.no_select', e => e.map(a => a.href));


    let items = title.map((title, index) => {
      return {
        id: title,
        name: title,
        cams: cams[index],
        // description: description[index],
        img: img[index],
        genre: age[index],
        // link: link[index],
        server: '61897eba-d69b-49a3-b33d-568b880a1c66'
      }
    });

    await browser.close()

    const list = JSON.stringify(items)
    const final = JSON.parse(list)


    return final;
  } catch (error) {
    console.log(error)
  }

}

export {
    getChaturbate
}