import { Base } from './page-objects/base.po';

describe('Login Component', () => {

    const mainPage: Base = new Base();

    beforeEach(() => {
        mainPage.navigateToHome();
    });

    it(`should enter the name and password and click on login button
        and then navigate to dashboard`, () => {

        mainPage.enterName();
        mainPage.enterPassword();
        mainPage.clickLoginButton();
        mainPage.verifyBrowserUrl('dashboard-component');
    });

});
