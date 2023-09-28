import { CookieClicker } from "./cookiePage";
const cookie = new CookieClicker
const fs = require("fs")

test('Testing english button, upgrades, buying, selling, twitter, tumblr, legacy upgrading, and all of the other mechanics are working as intended.', async () => {
    await cookie.navigate();
    await cookie.driver.manage().window().maximize();
    await cookie.click(cookie.engBtn);
    await cookie.driver.sleep(3000)
    await cookie.click(cookie.gotIt);
    await cookie.repeatClick(20, cookie.cookieBtn);
    await cookie.click(cookie.cursorU);
    await cookie.repeatClick(100, cookie.cookieBtn);
    await cookie.click(cookie.upgrade1);
    await cookie.repeatClick(106, cookie.cookieBtn);
    await cookie.repeatClick(2, cookie.grandmaU);
    await cookie.repeatClick(50, cookie.cookieBtn);
    await cookie.repeatClick(5, cookie.cursorU);
    await cookie.repeatClick(35, cookie.cookieBtn);
    await cookie.repeatClick(2, cookie.cursorU);
    await cookie.repeatClick(240, cookie.cookieBtn);
    await cookie.click(cookie.upgrade1);
    await cookie.repeatClick(35, cookie.cookieBtn);
    await cookie.click(cookie.grandmaU);
    await cookie.repeatClick(35, cookie.cookieBtn);
    await cookie.click(cookie.grandmaU);
    await cookie.repeatClick(35, cookie.cookieBtn);
    await cookie.click(cookie.grandmaU);
    await cookie.repeatClick(200, cookie.cookieBtn);
    await cookie.repeatClick(5, cookie.cursorU);
    await cookie.repeatClick(155, cookie.cookieBtn);
    await cookie.click(cookie.upgrade1);
    await cookie.repeatClick(250, cookie.cookieBtn);
    await cookie.click(cookie.farmU);
    await cookie.click(cookie.mute1);
    await cookie.click(cookie.mute2);
    await cookie.click(cookie.unmute1);
    await cookie.click(cookie.unmute2);
    await cookie.click(cookie.mute1);
    await cookie.click(cookie.mute2);
    await cookie.click(cookie.unmute1);
    await cookie.click(cookie.unmute2);
    await cookie.click(cookie.mute1);
    await cookie.click(cookie.mute2);
    await cookie.click(cookie.unmute1);
    await cookie.click(cookie.unmute2);
    await cookie.click(cookie.achievmentX);
    await cookie.click(cookie.options);
    await cookie.click(cookie.statsBtn);
    await cookie.click(cookie.infoBtn);
    await cookie.click(cookie.sellBtn);
    await cookie.click(cookie.sellMax);
    await cookie.click(cookie.cursorU);
    await cookie.click(cookie.grandmaU);
    await cookie.click(cookie.legacyBtn);
    await cookie.click(cookie.ascendBtn);
    await cookie.click(cookie.reincarnBtn);
    await cookie.click(cookie.reincarnYes);
    await cookie.click(cookie.closeMenu);
    await cookie.click(cookie.twitterBtn);
    await cookie.tabSwitch();
    await cookie.click(cookie.tumblrBtn);
    await cookie.tabSwitch();
    await cookie.driver.sleep(3000)
    await fs.writeFile(`${__dirname}/cookieClicker.png`,
    await cookie.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Succesful')
    }
    )
    await cookie.driver.quit();


    
});
