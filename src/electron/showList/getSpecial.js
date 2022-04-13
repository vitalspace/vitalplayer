
import puppeteer from "puppeteer-core";
import chromePaths from "chrome-paths";

async function getSpecial(dataUrl) {

  try {
    const url = dataUrl;
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

    
    await page.content(); 

    let innerText = await page.evaluate(() =>  {
        return JSON.parse(document.querySelector("body").innerText); 
    }); 


    const list = JSON.stringify(innerText)
    const final = JSON.parse(list)
    await browser.close()
    return final;
  } catch (error) {
    console.log(error)
  }

}

export {
  getSpecial
}