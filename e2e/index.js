const { Builder, By, Key, until } = require('selenium-webdriver');

require('chromedriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://www.baidu.com/');
        await driver.findElement(By.name('wd')).sendKeys('npm', Key.RETURN);
        await driver.wait(until.titleIs('npm_百度搜索'), 5000);
    } finally {
        await driver.quit();
    }
})();