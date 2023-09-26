import {By} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class CookieClicker extends BasePage {
    engBtn: By = By.css("#langSelect-EN")
    cookieBtn: By = By.css("#bigCookie")
    cursorU: By = By.xpath('(//div[@class="product unlocked enabled"])[1]');
    grandmaU: By = By.xpath('(//div[@class="product unlocked enabled"])[2]')
    legacyBtn: By = By.css("#legacyButton")
    ascendBtn: By = By.xpath('//a[text()="Ascend"]')
    upgrade1: By = By.css('#upgrade0')
    achievmentX: By = By.xpath('//div[@class="framed close sidenote"]')
    statsBtn: By = By.css('#statsButton')
    gotIt: By = By.xpath('//a[text()="Got it!"]')
    

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
}