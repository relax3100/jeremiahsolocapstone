import {By} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class CookieClicker extends BasePage {
    engBtn: By = By.css("#langSelect-EN")
    cookieBtn: By = By.css("#bigCookie")
    cursorU: By = By.xpath('(//div[@class="product unlocked enabled"])[1]')
    grandmaU: By = By.xpath('(//div[@class="product unlocked enabled"])[2]')
    farmU: By = By.xpath('(//div[@class="product unlocked enabled"])[3]')
    legacyBtn: By = By.css("#legacyButton")
    ascendBtn: By = By.xpath('//a[text()="Ascend"]')
    upgrade1: By = By.css('#upgrade0')
    achievmentX: By = By.xpath('//div[@class="framed close sidenote"]')
    statsBtn: By = By.css('#statsButton')
    gotIt: By = By.xpath('//a[text()="Got it!"]')
    mute1: By = By.xpath('//div[@id="productMute1"]')
    mute2: By = By.xpath('//div[@id="productMute2"]')
    unmute1: By = By.xpath('//div[@id="mutedProduct1"]')
    unmute2: By = By.xpath('//div[@id="mutedProduct2"]')
    options: By = By.xpath('//div[@id="prefsButton"]')
    infoBtn: By = By.xpath('//div[@id="logButton"]')
    reincarnBtn: By = By.xpath('//a[@id="ascendButton"]')
    reincarnYes: By = By.xpath('//a[@id="promptOption0"]')
    closeMenu: By = By.xpath('//div[@class="close menuClose"]')
    twitterBtn: By = By.css('#topbarTwitter');
    sellBtn: By = By.xpath('//div[@id="storeBulkSell"]')
    sellMax: By = By.xpath('//div[@id="storeBulkMax"]')
    tumblrBtn: By = By.xpath('//a[@id="topbarTumblr"]')


constructor() {
    super({url:"https://orteil.dashnet.org/cookieclicker/"})
};

async repeatClick(number, thingToClick){
    for(let i = 0; i< number; i++){
        await this.click(thingToClick);
    };
};

async tabSwitch() {
    let myTabs = await this.driver.getAllWindowHandles();
    await this.driver.switchTo().window(myTabs[1]);
    await this.driver.sleep(1500);
    await this.driver.close();
    await this.driver.switchTo().window(myTabs[0]);
};

};