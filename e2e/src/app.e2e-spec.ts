import { browser, logging } from 'protractor';
import { UiTester } from './shared/ui-tester';

describe('workspace-project App', () => {
  let uiTester: UiTester;

  beforeEach(() => {
    uiTester = new UiTester();
  });

  it('should contain sidenav routes', () => {
    uiTester.navigateTo();
    uiTester.getElementByCss('#toggle-sidenav-button').click();
    expect(uiTester.getElementText('#recipes-router-link')).toEqual('Recipes');
    expect(uiTester.getElementText('#add-recipe-router-link')).toEqual('Add recipe');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
