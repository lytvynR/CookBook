import { browser, by, element, protractor } from 'protractor';

export class UiTester {
  expectedConditions = protractor.ExpectedConditions;

  navigateTo(route: string = 'http://localhost:4200/') {
    browser.get(route);
    browser.wait(this.expectedConditions.urlContains(route));
  }

  getElementByCss(cssSelector: string) {
    let elem = element(by.css(cssSelector));
    browser.wait(this.expectedConditions.presenceOf(elem));

    return elem;
  }

  getElementText(cssSelector: string) {
    return this.getElementByCss(cssSelector).getText();
  }
}
