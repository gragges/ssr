var puppeteer = require('puppeteer');
var url= 'https://www.bankier.pl/gielda/notowania/akcje'; // Replace with your URL
async function ssr(url) {
    console.log('to jest z modulu SSR');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
   try {  
    await page.goto(url,{waitUntil: 'networkidle2'});
    await page.waitForSelector('comments-list')
    await page.setViewport({ width: 1280, height: 800 });
    } catch (error) {
        console.error('Error setting viewport:', error);
    }      
    await page.goto(url);
    const content = await page.content();
    await browser.close();
    return content;
}

module.exports = ssr;