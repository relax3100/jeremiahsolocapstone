import { CookieClicker } from "./cookiePage";
const cookie = new CookieClicker

test('Can click the cookie, and upgrade', async () => {
    await cookie.navigate();
    await cookie.driver.manage().window().maximize();
    await cookie.click(cookie.engBtn);
    await cookie.driver.sleep(3000)
    await cookie.click(cookie.gotIt);
    await cookie.repeatClick(20, cookie.cookieBtn)
    await cookie.click(cookie.cursorU)
    await cookie.repeatClick(100, cookie.cookieBtn)
    await cookie.click(cookie.upgrade1)
    await cookie.repeatClick(106, cookie.cookieBtn)
    await cookie.repeatClick(2, cookie.grandmaU)
    await cookie.repeatClick(50, cookie.cookieBtn)
    await cookie.repeatClick(5, cookie.cursorU)
    await cookie.repeatClick(35, cookie.cookieBtn)
    await cookie.repeatClick(2, cookie.cursorU)
    await cookie.repeatClick(240, cookie.cookieBtn)
    await cookie.click(cookie.upgrade1)
    await cookie.repeatClick(35, cookie.cookieBtn)
    await cookie.click(cookie.grandmaU)
    await cookie.repeatClick(35, cookie.cookieBtn)
    await cookie.click(cookie.grandmaU)
    await cookie.repeatClick(35, cookie.cookieBtn)
    await cookie.click(cookie.grandmaU)
    await cookie.repeatClick(200, cookie.cookieBtn)
    await cookie.repeatClick(5, cookie.cursorU)
    await cookie.repeatClick(155, cookie.cookieBtn)
    await cookie.click(cookie.upgrade1)
    await cookie.repeatClick(155, cookie.cookieBtn)
    await cookie.repeatClick(5, cookie.grandmaU)
    await cookie.repeatClick(55, cookie.cookieBtn)
    await cookie.repeatClick(5, cookie.grandmaU)
    await cookie.repeatClick(55, cookie.cookieBtn)
    await cookie.click(cookie.grandmaU)
    

});
