import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';

export class Base {

    /* Navigational methods */
    navigateToHome(): promise.Promise<any> {
        return browser.get('/');
    }

    /* Element Locator */
    getInputName(): ElementFinder {
        return element(by.id('employee-name'));
    }

    getInputPassword(): ElementFinder {
        return element(by.id('password'));
    }

    getLoginButton(): ElementFinder {
        return element(by.css('button'));
    }

    /* Functions */
    enterName() {
        this.getInputName().sendKeys('admin');
    }

    enterPassword() {
        this.getInputPassword().sendKeys('admin');
    }

    clickLoginButton() {
        this.getLoginButton().click();
        browser.sleep(3000);
    }

    /* verification methods */
    verifyBrowserUrl(expectedUrl: string) {
        browser.getCurrentUrl().then(url => {
            expect(url.toString().includes(expectedUrl)).toBe(true);
        });
    }
}

