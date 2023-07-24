const { chromium } = require('playwright');

(async () => {
  // Launch the browser (default is Chromium)
  const browser = await chromium.launch({ headless: false });

  // Create a new page
  const page = await browser.newPage();

  // Navigate to a website
  await page.goto('https://tallykhata.com/');

  // Perform actions on the page
  // e.g., click buttons, fill forms, etc.

    // Wait for the button to be visible and enabled
    await page.waitForSelector(':text("সুপার QR")', { timeout: 60000 });

    // Click the button
    await page.click(':text("সুপার QR")');
//
//      let isSqrButtonVisible = false;
//
//      while (!isSqrButtonVisible) {
//        isSqrButtonVisible = await page.evaluate(async () => {
//          const okSignElement = page.waitForSelector(':text("সুপার একাউন্ট খুলুন")');
//          if (isSqrButtonVisible) {
//            return true;
//          } else {
//            window.scrollBy(0, 150); // Scroll the page down by 150 pixels
//            return false;
//          }
//        });
//      }


await page.evaluate(() => {
  window.scrollBy(0, 200);
});
// Wait for 10 seconds after clicking the button
  await page.waitForTimeout(10000); // 10 seconds in milliseconds
  // Close the browser
  await browser.close();
})();
