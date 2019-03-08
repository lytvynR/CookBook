import { browser, by, element, ElementFinder, protractor } from 'protractor';

export class AppPage {
  expectedConditions = protractor.ExpectedConditions;

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getElementById(id: string) {
    let elem = element(by.css('#toggle-sidenav-button'));

    browser.wait(this.expectedConditions.elementToBeClickable(elem));

    return elem;
  }

  getToggleSidenavButton() {
    let elem = element(by.css('#toggle-sidenav-button'));

    browser.wait(this.expectedConditions.elementToBeClickable(elem));

    return elem;
  }
}
