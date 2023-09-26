import { CookieClicker } from "./cookiePage";
const cookie = new CookieClicker

test('Can click the cookie, and upgrade', async () => {
    await cookie.navigate();
    await cookie.driver.manage().window().maximize();
    await cookie.click(cookie.engBtn);
    await cookie.repeatClick(20, cookie.cookieBtn)
    await cookie.click(cookie.cursorU)
    await cookie.repeatClick(100, cookie.cookieBtn)
    await cookie.click(cookie.upgrade1)
    await cookie.repeatClick(100, cookie.cookieBtn)
});
