/**
 * Generador de PDF para mejengas Cona
 *
 * Uso: node generar-pdf.js <carpeta-mejenga>
 * Ejemplo: node generar-pdf.js 2026-02-10
 *
 * Requiere: puppeteer (npm install puppeteer)
 * Lee: <carpeta>/mejenga.html
 * Genera: <carpeta>/mejenga.pdf
 */

const puppeteer = require('puppeteer');
const path = require('path');

const folder = process.argv[2];
if (!folder) {
  console.error('Uso: node generar-pdf.js <carpeta-mejenga>');
  console.error('Ejemplo: node generar-pdf.js 2026-02-10');
  process.exit(1);
}

const htmlPath = path.resolve(__dirname, folder, 'mejenga.html');
const pdfPath = path.resolve(__dirname, folder, 'mejenga.pdf');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewport({ width: 480, height: 1600, deviceScaleFactor: 3 });

  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');

  const height = await page.evaluate(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    return document.querySelector('.page').scrollHeight;
  });

  await page.addStyleTag({
    content: `@page { size: 480px ${height}px; margin: 0; } html, body { margin: 0; padding: 0; }`
  });

  await page.pdf({
    path: pdfPath,
    width: '480px',
    height: height + 'px',
    printBackground: true,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
    preferCSSPageSize: true
  });

  console.log(`PDF generado: ${pdfPath}`);
  await browser.close();
})();
